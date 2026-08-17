---
sidebarDepth: 0
---

## UniWebViewAndroidDownloadDestination

### Summary

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#appspecific'><span class='return-type'>UniWebViewAndroidDownloadDestination</span> <span class='member-name'>AppSpecific</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Stores files in the app-specific external Downloads directory.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#publicdownloads'><span class='return-type'>UniWebViewAndroidDownloadDestination</span> <span class='member-name'>PublicDownloads</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Stores files in the user&#39;s public Downloads directory.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='appspecific'></div><div class='api-heading' data-id='appspecific'><a href='#appspecific'><span class='return-type'>UniWebViewAndroidDownloadDestination</span> <span class='member-name'>AppSpecific</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Stores files in the app-specific external Downloads directory. This is the default. Files are removed when the app is
uninstalled and may not be browsable from ordinary file manager apps on Android 11 and newer.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='publicdownloads'></div><div class='api-heading' data-id='publicdownloads'><a href='#publicdownloads'><span class='return-type'>UniWebViewAndroidDownloadDestination</span> <span class='member-name'>PublicDownloads</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Stores files in the user&#39;s public Downloads directory. Files remain after app uninstallation and are visible to the user
and other apps.</p>
</div>
                </div>
  </div>
</div>

