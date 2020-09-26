---
sidebarDepth: 0
---

## UniWebViewSafeBrowsing

### Summary

UniWebView Safe Browsing provides a way for browsing the web content in a more browser-like way, such as Safari on 
iOS and Chrome on Android.

This class wraps `SFSafariViewController` on iOS and "Custom Tabs" on Android. It shares cookies, auto-fill 
completion and other more data with the browser on device. Most of permissions are also built-in supported. You can
use this class for some tasks that are limited for a normal web view, such as using Apple Pay or Progressive Web 
Apps (PWA).

You create a `UniWebViewSafeBrowsing` instance by calling the static `UniWebViewSafeBrowsing.Create` method with a
destination URL. You cannot change this URL once the instance is created. To show the safe browsing, call `Show` on
the instance. The web content will be displayed in full screen with a toolbar containing the loaded URL, as well
as some basic controls like Go Back, Go Forward and Done. 

Browsing web content in `UniWebViewSafeBrowsing` is only supported on iOS and Android. There is no such component in
Unity Editor. Creating and showing a `UniWebViewSafeBrowsing` on Unity Editor will fall back to open the URL in 
external browser by using Unity's `Application.OpenURL`.

#### Events Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#onsafebrowsingfinished'><span class='return-type'>event</span> OnSafeBrowsingFinished(UniWebViewSafeBrowsing browsing)</a></div></td><td><div class='simple-summary'>
<p>Raised when user dismisses safe browsing by tapping the Done button or Back button.</p>
</div>
</td></tr></table>

#### Methods Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#create'><span class='return-type'>UniWebViewSafeBrowsing</span> Create(string url)</a></div></td><td><div class='simple-summary'>
<p>Creates a new <code>UniWebViewSafeBrowsing</code> instance with a given URL.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#show'><span class='return-type'>void</span> Show()</a></div></td><td><div class='simple-summary'>
<p>Shows the safe browsing content above current screen.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#dismiss'><span class='return-type'>void</span> Dismiss()</a></div></td><td><div class='simple-summary'>
<p>Dismisses the safe browsing component.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settoolbarcolor'><span class='return-type'>void</span> SetToolbarColor(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the color for toolbar background in the safe browsing component.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settoolbaritemcolor'><span class='return-type'>void</span> SetToolbarItemColor(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the color for toolbar controls in the safe browsing component.</p>
</div>
</td></tr></table>

### Events

<div class='api-box method'>
  <div class="api-anchor" id='onsafebrowsingfinished'></div><div class='api-heading' data-id='onsafebrowsingfinished'><a href='#onsafebrowsingfinished'><span class='return-type'>event</span> OnSafeBrowsingFinished(UniWebViewSafeBrowsing browsing)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when user dismisses safe browsing by tapping the Done button or Back button.</p>
<p>The dismissed safe browsing instance will be invalid after this event being raised, and you should not use 
it for another browsing purpose. Instead, create a new one for a new browsing session.</p>
</div>
      <div class='warning custom-block'>
  <p class="custom-block-title">NOTICE</p>
  <p>
        This event will not happen in Unity Editor, because the whole <code>UniWebViewSafeBrowsing</code> will fall back to an 
external browser.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewSafeBrowsing</span> <span class='parameter-item-name'>browsing</span></div>
    <div class='parameter-item-desc'><p>The <code>UniWebViewSafeBrowsing</code> object raised this event.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>safeBrowsing<span class="token punctuation">.</span>OnSafeBrowsingFinished <span class="token operator">+</span><span class="token operator">=</span> <span class="token punctuation">(</span>browsing<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span> 
    Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"UniWebViewSafeBrowsing closed."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='create'></div><div class='api-heading' data-id='create'><a href='#create'><span class='return-type'>UniWebViewSafeBrowsing</span> Create(string url)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Creates a new <code>UniWebViewSafeBrowsing</code> instance with a given URL.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The URL to navigate to. The URL must use the <code>http</code> or <code>https</code> scheme.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token keyword">var</span> safeBrowsing <span class="token operator">=</span> UniWebViewSafeBrowsing<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"https://uniwebview.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='show'></div><div class='api-heading' data-id='show'><a href='#show'><span class='return-type'>void</span> Show()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Shows the safe browsing content above current screen.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token keyword">var</span> safeBrowsing <span class="token operator">=</span> UniWebViewSafeBrowsing<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"https://uniwebview.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
safeBrowsing<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='dismiss'></div><div class='api-heading' data-id='dismiss'><a href='#dismiss'><span class='return-type'>void</span> Dismiss()</a><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Dismisses the safe browsing component.</p>
<p>This method only works on iOS. On Android, there is no way to dismiss the safe browsing component </p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settoolbarcolor'></div><div class='api-heading' data-id='settoolbarcolor'><a href='#settoolbarcolor'><span class='return-type'>void</span> SetToolbarColor(Color color)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the color for toolbar background in the safe browsing component. </p>
<p>The changes are ignored after <code>Show</code> method is called.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>The color to tint the toolbar.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>safeBrowsing<span class="token punctuation">.</span><span class="token function">SetToolbarColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settoolbaritemcolor'></div><div class='api-heading' data-id='settoolbaritemcolor'><a href='#settoolbaritemcolor'><span class='return-type'>void</span> SetToolbarItemColor(Color color)</a><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the color for toolbar controls in the safe browsing component. </p>
<p>The changes are ignored after <code>Show</code> method is called.</p>
<p>This method only works on iOS. On Android, the controls color is determined by system to keep a reasonable 
contrast, based on the toolbar background color you provided in <code>SetToolbarColor</code>.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>The color to tint the controls on toolbar.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>safeBrowsing<span class="token punctuation">.</span><span class="token function">SetToolbarItemColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

