---
sidebarDepth: 0
---

## UniWebViewChannelMethodMediaCapturePermission

### Summary

Represents the request of media capture permission.

This class represents the request of media capture permission. When the web page requests the permission to access
the device's hardware, such as the camera or microphone, UniWebView will ask you to handle the request with a value
of this class. You can use the values in this class to determine the decision for the permission request.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#protocol'><span class='return-type'>string</span> <span class='member-name'>Protocol</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The protocol used by the permission request.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#host'><span class='return-type'>string</span> <span class='member-name'>Host</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The host of the origin of the permission request.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#port'><span class='return-type'>int</span> <span class='member-name'>Port</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The port of the origin of the permission request.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#resources'><span class='return-type'>string[]</span> <span class='member-name'>Resources</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The string representation of the resources of the origin of the permission request.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='protocol'></div><div class='api-heading' data-id='protocol'><a href='#protocol'><span class='return-type'>string</span> <span class='member-name'>Protocol</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The protocol used by the permission request. Such as &quot;https&quot; or &quot;http&quot;.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// A permission request from </span>
<span class="token comment">// "https://webrtc.github.io/samples/src/content/getusermedia/gum/"</span>
<span />
permission<span class="token punctuation">.</span>Protocol <span class="token comment">// "https"</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='host'></div><div class='api-heading' data-id='host'><a href='#host'><span class='return-type'>string</span> <span class='member-name'>Host</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The host of the origin of the permission request.</p>
<p>It is usually the domain of the web page.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// A permission request from </span>
<span class="token comment">// "https://webrtc.github.io/samples/src/content/getusermedia/gum/"</span>
<span />
permission<span class="token punctuation">.</span>Host <span class="token comment">// "webrtc.github.io"</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='port'></div><div class='api-heading' data-id='port'><a href='#port'><span class='return-type'>int</span> <span class='member-name'>Port</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The port of the origin of the permission request.</p>
<p>If not existing in the request URL, it is -1.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// A permission request from </span>
<span class="token comment">// "https://webrtc.github.io/samples/src/content/getusermedia/gum/"</span>
<span />
permission<span class="token punctuation">.</span>Port <span class="token comment">// -1</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='resources'></div><div class='api-heading' data-id='resources'><a href='#resources'><span class='return-type'>string[]</span> <span class='member-name'>Resources</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The string representation of the resources of the origin of the permission request.</p>
<p>An array contains requested resources, the most common values are &quot;VIDEO&quot;, &quot;AUDIO&quot;. On Android, some pages can
also requests for &quot;PROTECTED_MEDIA_ID&quot;, &quot;MIDI_SYSEX&quot;, etc. </p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// A permission request from </span>
<span class="token comment">// "https://webrtc.github.io/samples/src/content/getusermedia/gum/"</span>
<span />
permission<span class="token punctuation">.</span>Resources <span class="token comment">// ["VIDEO"]</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

