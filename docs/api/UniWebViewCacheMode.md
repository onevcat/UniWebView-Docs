---
sidebarDepth: 0
---

## UniWebViewCacheMode

### Summary

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#default'><span class='return-type'>UniWebViewCacheMode</span> Default { get; }</a></div></td><td><div class='simple-summary'>
<p>Default mode.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#nocache'><span class='return-type'>UniWebViewCacheMode</span> NoCache { get; }</a></div></td><td><div class='simple-summary'>
<p>No cache is used.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#cacheelseload'><span class='return-type'>UniWebViewCacheMode</span> CacheElseLoad { get; }</a></div></td><td><div class='simple-summary'>
<p>Prioritize the cache.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#cacheonly'><span class='return-type'>UniWebViewCacheMode</span> CacheOnly { get; }</a></div></td><td><div class='simple-summary'>
<p>Only use the cache.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='default'></div><div class='api-heading' data-id='default'><a href='#default'><span class='return-type'>UniWebViewCacheMode</span> Default { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Default mode. The web view will check the validity of the cache copy when there is one. If the copy is invalid, the web 
view will load from the network. This is the default setting.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='nocache'></div><div class='api-heading' data-id='nocache'><a href='#nocache'><span class='return-type'>UniWebViewCacheMode</span> NoCache { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>No cache is used. All pages are loaded directly from the network. This is useful for applications that do not want to 
have a cache.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='cacheelseload'></div><div class='api-heading' data-id='cacheelseload'><a href='#cacheelseload'><span class='return-type'>UniWebViewCacheMode</span> CacheElseLoad { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Prioritize the cache. If there is a copy of the page in the cache, the web view will use it even if the copy has 
expired. The web view will only load from the network when the page does not exist in the cache.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='cacheonly'></div><div class='api-heading' data-id='cacheonly'><a href='#cacheonly'><span class='return-type'>UniWebViewCacheMode</span> CacheOnly { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Only use the cache. In this mode, the web view will not load pages from the network, only use the content in the cache. 
If the requested URL is not in the cache, an error is returned.</p>
</div>
                </div>
  </div>
</div>

