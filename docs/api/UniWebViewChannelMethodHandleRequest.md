---
sidebarDepth: 0
---

## UniWebViewChannelMethodHandleRequest

### Summary

Represents the request of a loading used in request handler.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#url'><span class='return-type'>string</span> <span class='member-name'>Url</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The URL of the request.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#ismainframe'><span class='return-type'>bool</span> <span class='member-name'>IsMainFrame</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Whether the request is for the main frame (top-level document) or a sub-frame.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='url'></div><div class='api-heading' data-id='url'><a href='#url'><span class='return-type'>string</span> <span class='member-name'>Url</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The URL of the request.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='ismainframe'></div><div class='api-heading' data-id='ismainframe'><a href='#ismainframe'><span class='return-type'>bool</span> <span class='member-name'>IsMainFrame</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether the request is for the main frame (top-level document) or a sub-frame.</p>
<p>Returns true for main frame requests, false for non-main frame requests (including iframes and other sub-resources).</p>
<p>Note: On older Android versions (API level &lt; 24), this may always return true due to 
platform limitations in distinguishing between main frame and sub-frame requests.</p>
</div>
                </div>
  </div>
</div>

