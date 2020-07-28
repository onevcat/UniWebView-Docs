const toml = require("toml");
const fs = require("fs-extra");
const marked = require("marked");
const Prism = require("node-prismjs");
const escapeHtml = require("escape-html");

marked.setOptions({
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.csharp).replace(
      /\n\n/g,
      "\n<span />\n"
    );
  }
});

class Entry {
  constructor(entry, file) {
    this.entry = entry;
    this.file = file;
  }

  exampleText() {
    var example = "";
    if (this.entry.example) {
      example =
        "<div class='example'>\n" +
        "    <p class='example-title'>Example</p>\n" +
        marked(this.entry.example).replace(
          '<pre><code class="lang-csharp">',
          '<div class="language-csharp extra-class">\n<pre class="language-csharp"><code>'
        ) +
        "</div>\n</div>\n";
    }
    return example;
  }

  summaryText() {
    return (
      "<div class='summary'>\n" +
      marked(this.entry.summary).replace(
        '<pre><code class="lang-csharp">',
        '<pre v-pre="" data-lang="csharp"><code class="lang-csharp">'
      ) +
      "</div>\n"
    );
  }

  simpleSummaryText() {
    let summaryText = this.entry.summary.split(".")[0] + ".";
    return (
      "<div class='simple-summary'>\n" +
      marked(summaryText).replace(
        '<pre><code class="lang-csharp">',
        '<pre v-pre="" data-lang="csharp"><code class="lang-csharp">'
      ) +
      "</div>\n"
    );
  }

  noticeText() {
    var notice = "";
    if (this.entry.notice) {
      notice = `<div class='warning custom-block'>
  <p class="custom-block-title">NOTICE</p>
  <p>
        ${marked.inlineLexer(
          this.entry.notice,
          [],
          {}
        )}
  </p>
</div>\n`;
    }
    return notice;
  }

  badgesText() {
    if (!this.entry.badges) {
      return "";
    }
    var result = "";
    this.entry.badges.forEach(badge => {
      result += `<div class='api-badge api-badge-${badge.color}'>${
        badge.name
        }</div>`;
    });
    return result;
  }

  apiHeading() {
    return `<div class="api-anchor" id='${this.entryId()}'></div><div class='api-heading' data-id='${this.entryId()}'>${this.linkText()}</div>`;
  }

  entryLink() {
    return `#${this.entry.name.toLowerCase()}`;
  }

  entryId() {
    return this.entry.name.toLowerCase();
  }
}

class Property extends Entry {
  setterText() {
    if (this.entry.hasSetter) {
      return "set; ";
    }
    return "";
  }

  linkText() {
    return `${this.linkTextWithoutBadge()}${this.badgesText()}`;
  }

  linkTextWithoutBadge() {
    return `<a href='${this.entryLink()}'><span class='return-type'>${escapeHtml(
      this.entry.returnType
    )}</span> ${this.entry.name} { get; ${this.setterText()}}</a>`;
  }

  output() {
    return (
      "<div class='api-box property'>\n" +
      `  ${this.apiHeading()}\n` +
      "  <div class='api-body'>\n" +
      "    <div class='desc'>\n" +
      `      ${this.summaryText()}` +
      `      ${this.noticeText()}` +
      `      ${this.exampleText()}` +
      "    </div>\n" +
      "  </div>\n" +
      "</div>\n"
    );
  }
}

class Method extends Entry {
  parametersText() {
    if (!this.entry.parameters) {
      return "";
    }

    var list =
      "<div class='section-title'>Parameters</div>\n<div class='parameter-item-list'><ul>\n";

    this.entry.parameters.forEach(parameter => {
      list +=
        "  <li>\n" +
        `    <div class='parameter-item'><span class='parameter-item-type'>${escapeHtml(
          parameter.type
        )}</span> <span class='parameter-item-name'>${
        parameter.name
        }</span></div>\n` +
        `    <div class='parameter-item-desc'>${marked(
          parameter.summary
        )}</div>\n` +
        "  </li>\n";
    });

    list += "</ul></div>\n";

    return "<div class='parameters'>\n" + list + "</div>\n";
  }

  returnText() {
    if (!this.entry.returnValue) {
      return "";
    }
    return `<div class='section-title'>Return Value</div>\n<div class='method-return'>${marked(
      escapeHtml(this.entry.returnValue)
    )}</div>\n`;
  }

  linkText() {
    return `${this.linkTextWithoutBadge()}${this.badgesText()}`;
  }

  linkTextWithoutBadge() {
    return `<a href='${this.entryLink()}'><span class='return-type'>${escapeHtml(
      this.entry.returnType
    )}</span> ${escapeHtml(this.entry.syntax)}</a>`;
  }

  output() {
    return (
      "<div class='api-box method'>\n" +
      `  ${this.apiHeading()}\n` +
      "  <div class='api-body'>\n" +
      "    <div class='desc'>\n" +
      `      ${this.summaryText()}` +
      `      ${this.noticeText()}` +
      `      ${this.parametersText()}` +
      `      ${this.returnText()}` +
      `      ${this.exampleText()}` +
      "    </div>\n" +
      "  </div>\n" +
      "</div>\n"
    );
  }
}

class Event extends Method {}

function outputSummary(api) {
  var result = "### Summary\n\n";
  if (api.summary) {
    result += `${api.summary}\n`;
  }

  let properties = api["Properties"];
  if (properties) {
    result += "#### Properties Summary\n\n";
    result += "<table>\n";
    properties.forEach(p => {
      const property = new Property(p, api.file);
      result += `<tr><td><div class='api-summary-heading'>${property.linkTextWithoutBadge()}</div></td><td>${property.simpleSummaryText()}</td></tr>`;
    });
    result += "</table>\n\n";
  }

  let events = api["Events"];
  if (events) {
    result += "#### Events Summary\n\n";
    result += "<table>\n";
    events.forEach(e => {
      const event = new Event(e, api.file);
      result += `<tr><td><div class='api-summary-heading'>${event.linkTextWithoutBadge()}</div></td><td>${event.simpleSummaryText()}</td></tr>`;
    });
    result += "</table>\n\n";
  }

  let methods = api["Methods"];
  if (methods) {
    result += "#### Methods Summary\n\n";
    result += "<table>\n";
    methods.forEach(m => {
      const method = new Method(m, api.file);
      result += `<tr><td><div class='api-summary-heading'>${method.linkTextWithoutBadge()}</div></td><td>${method.simpleSummaryText()}</td></tr>`;
    });
    result += "</table>\n\n";
  }

  return result;
}

function outputProperties(properties, file) {
  if (!properties) {
    return "";
  }
  var result = "### Properties\n\n";
  properties.forEach(p => {
    const property = new Property(p, file);
    result += property.output();
  });
  return result + "\n";
}

function outputMethods(methods, file) {
  if (!methods) {
    return "";
  }
  var result = "### Methods\n\n";
  methods.forEach(m => {
    const method = new Method(m, file);
    result += method.output();
  });
  return result + "\n";
}

function outputEvent(events, file) {
  if (!events) {
    return "";
  }
  var result = "### Events\n\n";
  events.forEach(e => {
    const event = new Event(e, file);
    result += event.output();
  });
  return result + "\n";
}

function output(api) {
  var result = `## ${api.title}\n\n`;
  result += outputSummary(api);
  result += outputProperties(api["Properties"], api.file);
  result += outputEvent(api["Events"], api.file);
  result += outputMethods(api["Methods"], api.file);
  return result;
}

const apiFolder = "./api-def";
const allFiles = [
  "uniwebview.toml",
  "uniwebviewsafebrowsing.toml",
  "uniwebviewmessage.toml",
  "uniwebviewnativelistener.toml",
  "uniwebviewnativeresultpayload.toml",
  "uniwebviewtransitionedge.toml",
  "uniwebviewtoolbarposition.toml",
  "uniwebviewcontentinsetadjustmentbehavior.toml",
  "uniwebviewlogger.toml",
  "uniwebviewhelper.toml"
];

allFiles.forEach(file => {
  var result = `---
sidebarDepth: 0
---\n\n`;
  const s = fs.readFileSync(`${apiFolder}/${file}`, "utf8");
  let api = toml.parse(s);
  result += output(api);

  fs.writeFileSync(`./docs/api/${api.file}.md`, result);
});