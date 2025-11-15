---
sidebarDepth: 0
---

## UniWebViewBackForwardItem

### Summary

Represents an item in the back-forward navigation list of a UniWebView browser.
This class stores information about a single entry in the browsing history.

You do not create an instance of this class directly. Instead, you get instances of this class from the
`UniWebViewBackForwardList` class.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#url'><span class='return-type'>string</span> <span class='member-name'>Url</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the current URL of the history item.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#title'><span class='return-type'>string</span> <span class='member-name'>Title</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the title of the webpage represented by this history item.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#originalurl'><span class='return-type'>string</span> <span class='member-name'>OriginalUrl</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the original URL before any redirects occurred, if any.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='url'></div><div class='api-heading' data-id='url'><a href='#url'><span class='return-type'>string</span> <span class='member-name'>Url</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the current URL of the history item.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='title'></div><div class='api-heading' data-id='title'><a href='#title'><span class='return-type'>string</span> <span class='member-name'>Title</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the title of the webpage represented by this history item.</p>
<p>Empty if the title is not available or set.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='originalurl'></div><div class='api-heading' data-id='originalurl'><a href='#originalurl'><span class='return-type'>string</span> <span class='member-name'>OriginalUrl</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the original URL before any redirects occurred, if any.</p>
</div>
                </div>
  </div>
</div>

