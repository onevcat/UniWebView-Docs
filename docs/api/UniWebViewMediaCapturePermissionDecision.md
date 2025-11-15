---
sidebarDepth: 0
---

## UniWebViewMediaCapturePermissionDecision

### Summary

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#prompt'><span class='return-type'>UniWebViewMediaCapturePermissionDecision</span> <span class='member-name'>Prompt</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Display a prompt to ask user for the permission.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#grant'><span class='return-type'>UniWebViewMediaCapturePermissionDecision</span> <span class='member-name'>Grant</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Grant the permission request without asking user.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#deny'><span class='return-type'>UniWebViewMediaCapturePermissionDecision</span> <span class='member-name'>Deny</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Deny the permission request.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='prompt'></div><div class='api-heading' data-id='prompt'><a href='#prompt'><span class='return-type'>UniWebViewMediaCapturePermissionDecision</span> <span class='member-name'>Prompt</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Display a prompt to ask user for the permission.</p>
<p>The prompt alert shows the origin of the request and the resources requested. It asks user to grant or deny the
permission.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='grant'></div><div class='api-heading' data-id='grant'><a href='#grant'><span class='return-type'>UniWebViewMediaCapturePermissionDecision</span> <span class='member-name'>Grant</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Grant the permission request without asking user.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='deny'></div><div class='api-heading' data-id='deny'><a href='#deny'><span class='return-type'>UniWebViewMediaCapturePermissionDecision</span> <span class='member-name'>Deny</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Deny the permission request. The web page will receive an error and it knows the request resources are not allowed to 
use.</p>
</div>
                </div>
  </div>
</div>

