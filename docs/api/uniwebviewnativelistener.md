---
sidebarDepth: 0
---

## UniWebViewNativeListener

### Summary

#### Properties Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#webview'><span class='return-type'>UniWebView</span> webView { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The web view holder of this listener.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#name'><span class='return-type'>string</span> Name { get; }</a></div></td><td><div class='simple-summary'>
<p>Name of the current listener.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='webview'></div><div class='api-heading' data-id='webview'><a href='#webview'><span class='return-type'>UniWebView</span> webView { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The web view holder of this listener.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        It will be linked to original web view so you should never set it yourself.
  </p>
</div>
          </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='name'></div><div class='api-heading' data-id='name'><a href='#name'><span class='return-type'>string</span> Name { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Name of the current listener. This is a UUID string by which native side could use to find the message destination.</p>
</div>
                </div>
  </div>
</div>

