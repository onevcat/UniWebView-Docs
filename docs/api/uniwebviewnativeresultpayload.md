---
sidebarDepth: 0
---

## UniWebViewNativeResultPayload

### Summary

#### Properties Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#identifier'><span class='return-type'>string</span> identifier { get; }</a></div></td><td><div class='simple-summary'>
<p>The identifier bound to this payload.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#resultcode'><span class='return-type'>string</span> resultCode { get; }</a></div></td><td><div class='simple-summary'>
<p>The result code contained in this payload.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#data'><span class='return-type'>string</span> data { get; }</a></div></td><td><div class='simple-summary'>
<p>Return value or data from native.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='identifier'></div><div class='api-heading' data-id='identifier'><a href='#identifier'><span class='return-type'>string</span> identifier { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The identifier bound to this payload. It would be used internally to identify the callback.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='resultcode'></div><div class='api-heading' data-id='resultcode'><a href='#resultcode'><span class='return-type'>string</span> resultCode { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The result code contained in this payload. Generally, &quot;0&quot; means the operation finished without problem, while a non-zero value means somethings goes wrong.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='data'></div><div class='api-heading' data-id='data'><a href='#data'><span class='return-type'>string</span> data { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Return value or data from native. You should look at corresponding APIs to know what exactly contained in this.</p>
</div>
                </div>
  </div>
</div>

