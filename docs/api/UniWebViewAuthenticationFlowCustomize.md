---
sidebarDepth: 0
---

## UniWebViewAuthenticationFlowCustomize

### Summary

A customizable authentication flow behavior.

For a guide of using this class, please refer to the [Common Flow](/guide/oauth2.html#common-flow)
section in theOAuth 2.0 Support guide.

Besides of the predefined authentication flows, such as Twitter (`UniWebViewAuthenticationFlowTwitter`) or Google
(`UniWebViewAuthenticationFlowGoogle`), this class allows you to determine the details of the authentication flow,
such as entry points, grant types, scopes and more. But similar to other target-specified flows, it follows the same
OAuth 2.0 code auth pattern.

If you need to support other authentication flows for the platform targets other than the predefined ones, you can
use this class and set all necessary parameters. It conforms to the `IUniWebViewAuthenticationFlow` and runs the 
standard OAuth 2.0 flow and gives out a `UniWebViewAuthenticationStandardToken` as the result.

If you need to support authentication flows other than `code` based OAuth 2.0, try to derive from
`UniWebViewAuthenticationCommonFlow` and implement `IUniWebViewAuthenticationFlow` interface, or even use the underneath
`UniWebViewAuthenticationSession` to get a highly customizable flow.

It inherits from `UniWebViewAuthenticationCommonFlow`, which is in turn a `MonoBehaviour` and can be attached to a Game 
Object. The usual way to use this class is attaching it to an existing Game Object in the scene and setup it in the inspector.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#config'><span class='return-type'>UniWebViewAuthenticationFlowCustomizeConfig</span> <span class='member-name'>config</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The config object which defines the basic information of the authentication flow.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#clientid'><span class='return-type'>string</span> <span class='member-name'>clientId</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The client Id of your OAuth application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#redirecturi'><span class='return-type'>string</span> <span class='member-name'>redirectUri</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The redirect URI of your OAuth application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#scopes'><span class='return-type'>string</span> <span class='member-name'>scopes</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The scope of the authentication request.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional'><span class='return-type'>UniWebViewAuthenticationFlowCustomizeOptional</span> <span class='member-name'>optional</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The optional object which defines some optional parameters of the authentication flow, such as whether supports
<code>state</code> or <code>PKCE</code>.</p>
</div>
</td></tr></table>

#### Events Summary

<table class='api-summary-table api-summary-table--events'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationStandardToken&gt;</span> <span class='member-name'>OnAuthenticationFinished</span></a></div></td><td><div class='simple-summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onauthenticationerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> <span class='member-name'>OnAuthenticationErrored</span></a></div></td><td><div class='simple-summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationStandardToken&gt;</span> <span class='member-name'>OnRefreshTokenFinished</span></a></div></td><td><div class='simple-summary'>
<p>Called when the access token refresh request finishes and a valid refreshed token is generated.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onrefreshtokenerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> <span class='member-name'>OnRefreshTokenErrored</span></a></div></td><td><div class='simple-summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
</td></tr></table>

#### Methods Summary

<table class='api-summary-table api-summary-table--methods'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#startauthenticationflow'><span class='return-type'>void</span> <span class='member-name'>StartAuthenticationFlow</span>()</a></div></td><td><div class='simple-summary'>
<p>Starts the authentication flow with the standard OAuth 2.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#startrefreshtokenflow'><span class='return-type'>void</span> <span class='member-name'>StartRefreshTokenFlow</span>(string refreshToken)</a></div></td><td><div class='simple-summary'>
<p>Starts the refresh flow with the standard OAuth 2.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='config'></div><div class='api-heading' data-id='config'><a href='#config'><span class='return-type'>UniWebViewAuthenticationFlowCustomizeConfig</span> <span class='member-name'>config</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The config object which defines the basic information of the authentication flow.</p>
<p>It contains basic information of an OAuth 2.0 service provider, including the <code>authorizationEndpoint</code>, <code>tokenEndpoint</code>
and <code>responseType</code>, etc.</p>
<p>Although you can set the values for a <code>config</code> instance by code, a more common way is attaching this
script to a Game Object and setup it in the Unity inspector UI.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='clientid'></div><div class='api-heading' data-id='clientid'><a href='#clientid'><span class='return-type'>string</span> <span class='member-name'>clientId</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The client Id of your OAuth application.</p>
<p>Usually, when you create an application on the provider platform, you will get a client Id to identify your application
on the platform. It is used as the &quot;Client Identifier&quot; in OAuth 2.0 specification.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='redirecturi'></div><div class='api-heading' data-id='redirecturi'><a href='#redirecturi'><span class='return-type'>string</span> <span class='member-name'>redirectUri</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The redirect URI of your OAuth application. The service provider is expected to call this URI to pass back the
authorization code. It should be something also set to your OAuth application.</p>
<p>Also remember to add it to the &quot;Auth Callback Urls&quot; field in UniWebView&#39;s preference panel. </p>
<p>It is used as the &quot;Redirection Endpoint&quot;  in OAuth 2.0 specification.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='scopes'></div><div class='api-heading' data-id='scopes'><a href='#scopes'><span class='return-type'>string</span> <span class='member-name'>scopes</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The scope of the authentication request.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional'></div><div class='api-heading' data-id='optional'><a href='#optional'><span class='return-type'>UniWebViewAuthenticationFlowCustomizeOptional</span> <span class='member-name'>optional</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The optional object which defines some optional parameters of the authentication flow, such as whether supports
<code>state</code> or <code>PKCE</code>.</p>
<p>Although you can set values for an <code>optional</code> instance by code, a more common way is attaching this
script to a Game Object and setup it in the Unity inspector UI.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token class-name">UniWebViewAuthenticationFlowCustomize</span> customize<span class="token punctuation">;</span>
<span />
customize<span class="token punctuation">.</span>optional<span class="token punctuation">.</span>enableState <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
customize<span class="token punctuation">.</span>optional<span class="token punctuation">.</span>PKCESupport <span class="token operator">=</span> UniWebViewAuthenticationPKCE<span class="token punctuation">.</span>S256<span class="token punctuation">;</span>
<span />
customize<span class="token punctuation">.</span><span class="token function">StartAuthenticationFlow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

### Events

<div class='api-box method'>
  <div class="api-anchor" id='onauthenticationfinished'></div><div class='api-heading' data-id='onauthenticationfinished'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationStandardToken&gt;</span> <span class='member-name'>OnAuthenticationFinished</span></a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>flow<span class="token punctuation">.</span>OnAuthenticationFinished<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnTokenReceived<span class="token punctuation">)</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnTokenReceived</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewAuthenticationStandardToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Access Token: "</span> <span class="token operator">+</span> token<span class="token punctuation">.</span>AccessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onauthenticationerrored'></div><div class='api-heading' data-id='onauthenticationerrored'><a href='#onauthenticationerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> <span class='member-name'>OnAuthenticationErrored</span></a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>flow<span class="token punctuation">.</span>OnAuthenticationErrored<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnAuthError<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnAuthError</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> error<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Error code: "</span> <span class="token operator">+</span> error <span class="token operator">+</span> <span class="token string">" Message: "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onrefreshtokenfinished'></div><div class='api-heading' data-id='onrefreshtokenfinished'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationStandardToken&gt;</span> <span class='member-name'>OnRefreshTokenFinished</span></a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the access token refresh request finishes and a valid refreshed token is generated.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>flow<span class="token punctuation">.</span>OnRefreshTokenFinished<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnRefreshTokenReceived<span class="token punctuation">)</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnRefreshTokenReceived</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewAuthenticationStandardToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Access Token: "</span> <span class="token operator">+</span> token<span class="token punctuation">.</span>AccessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onrefreshtokenerrored'></div><div class='api-heading' data-id='onrefreshtokenerrored'><a href='#onrefreshtokenerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> <span class='member-name'>OnRefreshTokenErrored</span></a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>flow<span class="token punctuation">.</span>OnRefreshTokenErrored<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnRefreshTokenError<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
  <div class="api-anchor" id='startauthenticationflow'></div><div class='api-heading' data-id='startauthenticationflow'><a href='#startauthenticationflow'><span class='return-type'>void</span> <span class='member-name'>StartAuthenticationFlow</span>()</a></div>
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
  <div class="api-anchor" id='startrefreshtokenflow'></div><div class='api-heading' data-id='startrefreshtokenflow'><a href='#startrefreshtokenflow'><span class='return-type'>void</span> <span class='member-name'>StartRefreshTokenFlow</span>(string refreshToken)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Starts the refresh flow with the standard OAuth 2.0.
This implements the abstract method in <code>UniWebViewAuthenticationCommonFlow</code>.</p>
</div>
                            </div>
  </div>
</div>

