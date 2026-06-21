---
sidebarDepth: 0
---

## UniWebViewExternalActivityResult

### Summary

Represents the result returned from an external Android activity that was launched from the web view.

When a web page in the web view navigates to a custom URL scheme (such as `upi://` for payment apps),
UniWebView launches the corresponding external app using Android's `startActivityForResult`. When that
app finishes and returns a result, this object carries the result data back to your Unity code.

This is only available on Android. On iOS and macOS, external app communication uses URL schemes and
deep links instead.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#url'><span class='return-type'>string</span> <span class='member-name'>Url</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The original URL that triggered the external app launch (e.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#status'><span class='return-type'>UniWebViewExternalActivityResultStatus</span> <span class='member-name'>Status</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The result status returned by the external activity.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#resultcode'><span class='return-type'>int</span> <span class='member-name'>ResultCode</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The raw integer result code returned by the external activity.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#data'><span class='return-type'>string</span> <span class='member-name'>Data</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The data returned by the external activity, serialized as a JSON string.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='url'></div><div class='api-heading' data-id='url'><a href='#url'><span class='return-type'>string</span> <span class='member-name'>Url</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The original URL that triggered the external app launch (e.g., <code>upi://pay?pa=...</code>).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='status'></div><div class='api-heading' data-id='status'><a href='#status'><span class='return-type'>UniWebViewExternalActivityResultStatus</span> <span class='member-name'>Status</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The result status returned by the external activity.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='resultcode'></div><div class='api-heading' data-id='resultcode'><a href='#resultcode'><span class='return-type'>int</span> <span class='member-name'>ResultCode</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The raw integer result code returned by the external activity. This is the Android <code>resultCode</code> value. In most cases, use the <code>Status</code> property instead for a more readable representation.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='data'></div><div class='api-heading' data-id='data'><a href='#data'><span class='return-type'>string</span> <span class='member-name'>Data</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The data returned by the external activity, serialized as a JSON string.</p>
<p>The JSON object contains all extras from the result Intent. For UPI payment apps, this typically
includes a <code>&quot;response&quot;</code> key with a query-string-formatted value containing fields like <code>txnId</code>,
<code>Status</code>, and <code>responseCode</code>.</p>
<p>If the result Intent also carries a data URI, it is included under the <code>&quot;__dataUri&quot;</code> key.</p>
<p>This value is an empty string if the external activity returned no data.</p>
</div>
                </div>
  </div>
</div>

