---
sidebarDepth: 0
---

## UniWebViewAuthenticationFlowLine

### Summary

A predefined authentication flow for LINE.

This implementation follows the flow described [here](https://developers.line.biz/en/reference/line-login/).

LINE authentication flow is a bit different from the other standard authentication flows. Please read the link
above carefully to understand it.

See the [OAuth 2.0 Support](/guide/oauth2.html) for a more detailed guide of authentication in UniWebView.

To allow the Google flow working, at least you need these steps:

1. Setting `Client Id` (Channel Id), `iOS Bundle Id` and `Android Package Name` in the `UniWebViewAuthenticationFlowLine` inspector.
2. Setting `Scope` and at least contains `profile` in the `UniWebViewAuthenticationFlowLine` inspector.
3. Check the "Support LINE Login" option in the `UniWebView` preference panel.

#### Properties Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#clientid'><span class='return-type'>string</span> clientId { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The client ID (Channel ID) of your LINE Login application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#iosbundleid'><span class='return-type'>string</span> iOSBundleId { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The iOS bundle Id you set in LINE developer console.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#androidpackagename'><span class='return-type'>string</span> androidPackageName { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The Android package name you set in LINE developer console.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#scope'><span class='return-type'>string</span> scope { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The scope of your LINE application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional'><span class='return-type'>UniWebViewAuthenticationFlowLineOptional</span> optional { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Optional to control this flow&#39;s behaviour.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.pkcesupport'><span class='return-type'>UniWebViewAuthenticationPKCE</span> optional.PKCESupport { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Whether to enable PKCE when performing authentication.</p>
</div>
</td></tr></table>

#### Events Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationLineToken&gt;</span> OnAuthenticationFinished</a></div></td><td><div class='simple-summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onauthenticationerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> OnAuthenticationErrored</a></div></td><td><div class='simple-summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationLineToken&gt;</span> OnRefreshTokenFinished</a></div></td><td><div class='simple-summary'>
<p>Called when the access token refresh request finishes and a valid refreshed token is generated.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onrefreshtokenerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> OnRefreshTokenErrored</a></div></td><td><div class='simple-summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
</td></tr></table>

#### Methods Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#startauthenticationflow'><span class='return-type'>void</span> void StartAuthenticationFlow()</a></div></td><td><div class='simple-summary'>
<p>Starts the authentication flow with the standard OAuth 2.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#startrefreshtokenflow'><span class='return-type'>void</span> void StartRefreshTokenFlow(string refreshToken)</a></div></td><td><div class='simple-summary'>
<p>Starts the refresh flow with the standard OAuth 2.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='clientid'></div><div class='api-heading' data-id='clientid'><a href='#clientid'><span class='return-type'>string</span> clientId { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The client ID (Channel ID) of your LINE Login application.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='iosbundleid'></div><div class='api-heading' data-id='iosbundleid'><a href='#iosbundleid'><span class='return-type'>string</span> iOSBundleId { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The iOS bundle Id you set in LINE developer console.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='androidpackagename'></div><div class='api-heading' data-id='androidpackagename'><a href='#androidpackagename'><span class='return-type'>string</span> androidPackageName { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The Android package name you set in LINE developer console.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='scope'></div><div class='api-heading' data-id='scope'><a href='#scope'><span class='return-type'>string</span> scope { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The scope of your LINE application.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional'></div><div class='api-heading' data-id='optional'><a href='#optional'><span class='return-type'>UniWebViewAuthenticationFlowLineOptional</span> optional { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Optional to control this flow&#39;s behaviour.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional.pkcesupport'></div><div class='api-heading' data-id='optional.pkcesupport'><a href='#optional.pkcesupport'><span class='return-type'>UniWebViewAuthenticationPKCE</span> optional.PKCESupport { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether to enable PKCE when performing authentication. Default is <code>S256</code>.</p>
</div>
                </div>
  </div>
</div>

### Events

<div class='api-box method'>
  <div class="api-anchor" id='onauthenticationfinished'></div><div class='api-heading' data-id='onauthenticationfinished'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationLineToken&gt;</span> OnAuthenticationFinished</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>lineFlow<span class="token punctuation">.</span>OnAuthenticationFinished<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnLineTokenReceived<span class="token punctuation">)</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnLineTokenReceived</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewAuthenticationLineToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Line Access Token: "</span> <span class="token operator">+</span> token<span class="token punctuation">.</span>AccessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onauthenticationerrored'></div><div class='api-heading' data-id='onauthenticationerrored'><a href='#onauthenticationerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> OnAuthenticationErrored</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>lineFlow<span class="token punctuation">.</span>OnAuthenticationErrored<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnLineAuthError<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnLineAuthError</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> error<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Error code: "</span> <span class="token operator">+</span> error <span class="token operator">+</span> <span class="token string">" Message: "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onrefreshtokenfinished'></div><div class='api-heading' data-id='onrefreshtokenfinished'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationLineToken&gt;</span> OnRefreshTokenFinished</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the access token refresh request finishes and a valid refreshed token is generated.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>lineFlow<span class="token punctuation">.</span>OnRefreshTokenFinished<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnRefreshTokenReceived<span class="token punctuation">)</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnRefreshTokenReceived</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewAuthenticationLineToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Access Token: "</span> <span class="token operator">+</span> token<span class="token punctuation">.</span>AccessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onrefreshtokenerrored'></div><div class='api-heading' data-id='onrefreshtokenerrored'><a href='#onrefreshtokenerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> OnRefreshTokenErrored</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>lineFlow<span class="token punctuation">.</span>OnRefreshTokenErrored<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnRefreshTokenError<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnRefreshTokenError</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> error<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Error code: "</span> <span class="token operator">+</span> error <span class="token operator">+</span> <span class="token string">" Message: "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='startauthenticationflow'></div><div class='api-heading' data-id='startauthenticationflow'><a href='#startauthenticationflow'><span class='return-type'>void</span> void StartAuthenticationFlow()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Starts the authentication flow with the standard OAuth 2.0.
This implements the abstract method in <code>UniWebViewAuthenticationCommonFlow</code>.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='startrefreshtokenflow'></div><div class='api-heading' data-id='startrefreshtokenflow'><a href='#startrefreshtokenflow'><span class='return-type'>void</span> void StartRefreshTokenFlow(string refreshToken)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Starts the refresh flow with the standard OAuth 2.0.
This implements the abstract method in <code>UniWebViewAuthenticationCommonFlow</code>.</p>
</div>
                            </div>
  </div>
</div>

