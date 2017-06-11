const toml = require('toml');
const concat = require('concat-stream');
const fs = require('fs-extra');
const marked = require('marked');
const Prism = require('node-prismjs');
const escapeHtml = require('escape-html');

marked.setOptions({
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.csharp);
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
      example = "<div class='example'>\n" +
        "    <p class='example-title'>Example</p>\n" + marked(this.entry.example).replace('<pre><code class="lang-csharp">', '<pre v-pre="" data-lang="csharp"><code class="lang-csharp">') +
        "</div>\n"
    }
    return example;
  }

  summaryText() {
    return "<div class='summary'>\n" +
      marked(this.entry.summary).replace('<pre><code class="lang-csharp">', '<pre v-pre="" data-lang="csharp"><code class="lang-csharp">') +
      "</div>\n";
  }

  noticeText() {
    var notice = "";
    if (this.entry.notice) {
      notice = `<p class='tip'>${marked.inlineLexer(this.entry.notice, [], {})}</p>\n`;
    }
    return notice;
  }

  badgesText() {
    if (!this.entry.badges) {
      return "";
    }
    var result = "";
    this.entry.badges.forEach(badge => {
      result += `<div class='api-badge api-badge-${badge.color}'>${badge.name}</div>`
    });
    return result;
  }
}

class Property extends Entry {

  setterText() {
    if (this.entry.hasSetter) {
      return "set; ";
    }
    return "";
  }

  output() {
    return "<div class='api-box property'>\n" +
      `  <div class='api-heading' id='${this.entry.name.toLowerCase()}' data-id='${this.entry.name.toLowerCase()}'><a href='#/latest/api/${this.file}.html?id=${this.entry.name.toLowerCase()}'><span class='return-type'>${escapeHtml(this.entry.returnType)}</span> ${this.entry.name} { get; ${this.setterText()}}</a>${this.badgesText()}</div>\n` +
      "  <div class='api-body'>\n" +
      "    <div class='desc'>\n" +
      `      ${this.summaryText()}` +
      `      ${this.noticeText()}` +
      `      ${this.exampleText()}` +
      "    </div>\n" +
      "  </div>\n" +
      "</div>\n";
  }
}

class Method extends Entry {

  parametersText() {
    if (!this.entry.parameters) {
      return "";
    }

    var list = "<div class='section-title'>Parameters</div>\n<div class='parameter-item-list'><ul>\n";

    this.entry.parameters.forEach(parameter => {
      list += "  <li>\n" +
        `    <div parameter-item><span class='parameter-item-type'>${escapeHtml(parameter.type)}</span> <span class='parameter-item-name'>${parameter.name}</span></div>\n` +
        `    <div class='parameter-item-desc'>${marked(parameter.summary)}</div>\n` +
        "  </li>\n"
    });

    list += "</ul></div>\n";

    return "<div class='parameters'>\n" +
      list +
      "</div>\n"
  }

  returnText() {
    if (!this.entry.returnValue) {
      return "";
    }
    return `<div class='section-title'>Return Value</div>\n<div class='method-return'>${marked(escapeHtml(this.entry.returnValue))}</div>\n`
  }

  output() {
    return "<div class='api-box method'>\n" +
      `  <div class='api-heading' id='${this.entry.name.toLowerCase()}' data-id='${this.entry.name.toLowerCase()}'><a href='#/latest/api/${this.file}.html?id=${this.entry.name.toLowerCase()}'><span class='return-type'>${escapeHtml(this.entry.returnType)}</span> ${escapeHtml(this.entry.syntax)}</a>${this.badgesText()}</div>\n` +
      "  <div class='api-body'>\n" +
      "    <div class='desc'>\n" +
      `      ${this.summaryText()}` +
      `      ${this.noticeText()}` +
      `      ${this.parametersText()}` +
      `      ${this.returnText()}` +
      `      ${this.exampleText()}` +
      "    </div>\n" +
      "  </div>\n" +
      "</div>\n";
  }
}

class Event extends Method { }

function outputProperties(properties, file) {
  if (!properties) { return ""; }
  var result = "<h4>Properties</h4>\n";
  properties.forEach(p => {
    const property = new Property(p, file);
    result += property.output();
  });
  return result + '\n';
}

function outputMethods(methods, file) {
  if (!methods) { return ""; }
  var result = "<h4>Methods</h4>\n";
  methods.forEach(m => {
    const method = new Method(m, file);
    result += method.output();
  });
  return result + '\n';
}

function outputEvent(events, file) {
  if (!events) { return ""; }
  var result = "<h4>Events</h4>\n";
  events.forEach(e => {
    const event = new Event(e, file);
    result += event.output();
  });
  return result + '\n';
}

function output(api) {
  var result = `<h2>${api.title}</h2>\n`;
  result += outputProperties(api["Properties"], api.file);
  result += outputEvent(api["Events"], api.file);
  result += outputMethods(api["Methods"], api.file);
  return result;
}

const apiFolder = './api-def';
const allFiles = [
  'uniwebview.toml',
  'uniwebviewmessage.toml',
  'uniwebviewnativelistener.toml',
  'uniwebviewnativeresultpayload.toml',
  'uniwebviewtransitionedge.toml',
  'uniwebviewtoolbarposition.toml',
  'uniwebviewlogger.toml',
  'uniwebviewhelper.toml'
]

allFiles.forEach((file) => {
  var result = "<h1>API Documentation</h1>\n";
  const s = fs.readFileSync(`${apiFolder}/${file}`, "utf8");
  let api = toml.parse(s);
  result += output(api);

  fs.writeFileSync(`./docs/latest/api/${api.file}.html`, result);
});