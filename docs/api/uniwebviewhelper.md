---
sidebarDepth: 0
---

## UniWebViewHelper

### Summary

#### Methods Summary

<table class='api-summary-table api-summary-table--methods'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#streamingasseturlforpath'><span class='return-type'>string</span> <span class='member-name'>StreamingAssetURLForPath</span>(string path)</a></div></td><td><div class='simple-summary'>
<p>Get the local streaming asset path for a given file path related to the StreamingAssets folder.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#persistentdataurlforpath'><span class='return-type'>string</span> <span class='member-name'>PersistentDataURLForPath</span>(string path)</a></div></td><td><div class='simple-summary'>
<p>Get the local persistent data path for a given file path related to the data folder of your host app.</p>
</div>
</td></tr></table>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='streamingasseturlforpath'></div><div class='api-heading' data-id='streamingasseturlforpath'><a href='#streamingasseturlforpath'><span class='return-type'>string</span> <span class='member-name'>StreamingAssetURLForPath</span>(string path)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Get the local streaming asset path for a given file path related to the StreamingAssets folder.</p>
<p>This method will help you to create a URL string for a file under your StreamingAssets folder for different platforms.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>path</span></div>
    <div class='parameter-item-desc'><p>The relative path to the Assets/StreamingAssets of your file. </p>
<p>For example, if you placed an HTML file under <code>Assets/StreamingAssets/www/index.html</code>, you should pass <code>www/index.html</code> as the parameter.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> url <span class="token operator">=</span> UniWebViewHelper<span class="token punctuation">.</span><span class="token function">StreamingAssetURLForPath</span><span class="token punctuation">(</span><span class="token string">"www/localHTML.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='persistentdataurlforpath'></div><div class='api-heading' data-id='persistentdataurlforpath'><a href='#persistentdataurlforpath'><span class='return-type'>string</span> <span class='member-name'>PersistentDataURLForPath</span>(string path)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Get the local persistent data path for a given file path related to the data folder of your host app.</p>
<p>This method will help you to create a URL string for a file under you stored in the <code>persistentDataPath</code>.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>path</span></div>
    <div class='parameter-item-desc'><p>The relative path to the Assets/StreamingAssets of your file.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> url <span class="token operator">=</span> UniWebViewHelper<span class="token punctuation">.</span><span class="token function">PersistentDataURLForPath</span><span class="token punctuation">(</span><span class="token string">"www/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

