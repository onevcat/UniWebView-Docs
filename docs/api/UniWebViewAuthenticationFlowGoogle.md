---
sidebarDepth: 0
---

## UniWebViewAuthenticationFlowGoogle

### Summary

A predefined authentication flow for Google Identity.

This implementation follows the flow described [here](https://developers.google.com/identity/protocols/oauth2/native-app).

Google authentication flow is a bit different from the other standard authentication flows. Please read the link
above carefully to understand it.

See the [OAuth 2.0 Support](/guide/oauth2.html) for a more detailed guide of authentication in UniWebView.

To allow the Google flow working, at least you need these steps:

1. Setting `Client Id`, `Redirect Uri` in the `UniWebViewAuthenticationFlowGoogle` inspector.
2. Setting `Scope` and at least contains `https://www.googleapis.com/auth/userinfo.profile` in the `UniWebViewAuthenticationFlowGoogle` inspector.
3. Setting the `Auth Callbacks Urls` containing `com.googleusercontent.apps.${first_part_of_client_id}:${redirect_uri_path}` in the `UniWebView` preference panel.

Make sure to get the correct client Id and callback URL values from the Google API Console Credentials page.

#### Properties Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#clientid'><span class='return-type'>string</span> clientId { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The client ID of your Google application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#redirecturi'><span class='return-type'>string</span> redirectUri { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The redirect URI of your Google application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#scope'><span class='return-type'>string</span> scope { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The scope of your Google application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional'><span class='return-type'>UniWebViewAuthenticationFlowGoogleOptional</span> optional { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Optional to control this flow&#39;s behaviour.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.pkcesupport'><span class='return-type'>UniWebViewAuthenticationPKCE</span> optional.PKCESupport { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Whether to enable PKCE when performing authentication.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.enablestate'><span class='return-type'>bool</span> optional.enableState { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Whether to enable the state verification.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.loginhint'><span class='return-type'>string</span> optional.loginHint { get; set; }</a></div></td><td><div class='simple-summary'>
<p>If your application knows which user is trying to authenticate, it can use this parameter to provide a hint to
the Google Authentication Server.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.prompt'><span class='return-type'>string</span> optional.prompt { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The prompt that will be set to the authentication request query.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.additionalauthenticationuriquery'><span class='return-type'>string</span> optional.additionalAuthenticationUriQuery { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The additional query arguments that are used to construct the query string of the authentication request.</p>
</div>
</td></tr></table>

#### Events Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationGoogleToken&gt;</span> OnAuthenticationFinished</a></div></td><td><div class='simple-summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onauthenticationerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> OnAuthenticationErrored</a></div></td><td><div class='simple-summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationGoogleToken&gt;</span> OnRefreshTokenFinished</a></div></td><td><div class='simple-summary'>
<p>Called when the access token refresh request finishes and a valid refreshed token is generated.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onrefreshtokenerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> OnRefreshTokenErrored</a></div></td><td><div class='simple-summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
</td></tr></table>

#### Methods Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#startauthenticationflow'><span class='return-type'>void</span> StartAuthenticationFlow()</a></div></td><td><div class='simple-summary'>
<p>Starts the authentication flow with the standard OAuth 2.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#startrefreshtokenflow'><span class='return-type'>void</span> StartRefreshTokenFlow(string refreshToken)</a></div></td><td><div class='simple-summary'>
<p>Starts the refresh flow with the standard OAuth 2.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='clientid'></div><div class='api-heading' data-id='clientid'><a href='#clientid'><span class='return-type'>string</span> clientId { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The client ID of your Google application.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<p>At the day of writing, the client Id from Google is something like:</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>googleFlow<span class="token punctuation">.</span>clientId <span class="token operator">=</span> <span class="token string">"1234567890-abcdefgh.apps.googleusercontent.com"</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='redirecturi'></div><div class='api-heading' data-id='redirecturi'><a href='#redirecturi'><span class='return-type'>string</span> redirectUri { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The redirect URI of your Google application.</p>
<p>It might be something like &quot;com.googleusercontent.apps.${clientId}:/${redirect_uri_path}&quot;. Be caution that the URI does not
contain regular double slashes <code>//</code>, but should be only one.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>googleFlow<span class="token punctuation">.</span>redirectUri <span class="token operator">=</span> <span class="token string">"com.googleusercontent.apps.1234567890-abcdefgh:/auth"</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='scope'></div><div class='api-heading' data-id='scope'><a href='#scope'><span class='return-type'>string</span> scope { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The scope of your Google application.</p>
<p>It might be some full URL in recent Google services, such as <code>&quot;https://www.googleapis.com/auth/userinfo.profile&quot;</code></p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional'></div><div class='api-heading' data-id='optional'><a href='#optional'><span class='return-type'>UniWebViewAuthenticationFlowGoogleOptional</span> optional { get; set; }</a></div>
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
<div class='api-box property'>
  <div class="api-anchor" id='optional.enablestate'></div><div class='api-heading' data-id='optional.enablestate'><a href='#optional.enablestate'><span class='return-type'>bool</span> optional.enableState { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether to enable the state verification. If enabled, the state will be generated and verified in the
authentication callback. </p>
<p>Default is <code>true</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional.loginhint'></div><div class='api-heading' data-id='optional.loginhint'><a href='#optional.loginhint'><span class='return-type'>string</span> optional.loginHint { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>If your application knows which user is trying to authenticate, it can use this parameter to provide a hint to
the Google Authentication Server. </p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional.prompt'></div><div class='api-heading' data-id='optional.prompt'><a href='#optional.prompt'><span class='return-type'>string</span> optional.prompt { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The prompt that will be set to the authentication request query. For example, the possible values can be <code>login</code>, 
<code>consent</code>, <code>select_account</code> and so on.</p>
<p>See <a href="https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest">https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest</a></p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional.additionalauthenticationuriquery'></div><div class='api-heading' data-id='optional.additionalauthenticationuriquery'><a href='#optional.additionalauthenticationuriquery'><span class='return-type'>string</span> optional.additionalAuthenticationUriQuery { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The additional query arguments that are used to construct the query string of the authentication request.</p>
<p>This is useful when you want to add some custom parameters to the authentication request. This string will be 
appended to the query string that constructed from <code>GetAuthenticationUriArguments</code>. </p>
<p>For example, if you set the value to <code>prompt=consent&amp;ui_locales=en</code>, it will be contained in the final authentication 
query.</p>
</div>
                </div>
  </div>
</div>

### Events

<div class='api-box method'>
  <div class="api-anchor" id='onauthenticationfinished'></div><div class='api-heading' data-id='onauthenticationfinished'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationGoogleToken&gt;</span> OnAuthenticationFinished</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>googleFlow<span class="token punctuation">.</span>OnAuthenticationFinished<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnGoogleTokenReceived<span class="token punctuation">)</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnGoogleTokenReceived</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewAuthenticationGoogleToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Google Access Token: "</span> <span class="token operator">+</span> token<span class="token punctuation">.</span>AccessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<pre class="language-csharp"><code>googleFlow<span class="token punctuation">.</span>OnAuthenticationErrored<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnGoogleAuthError<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnGoogleAuthError</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> error<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Error code: "</span> <span class="token operator">+</span> error <span class="token operator">+</span> <span class="token string">" Message: "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onrefreshtokenfinished'></div><div class='api-heading' data-id='onrefreshtokenfinished'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationGoogleToken&gt;</span> OnRefreshTokenFinished</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the access token refresh request finishes and a valid refreshed token is generated.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>googleFlow<span class="token punctuation">.</span>OnRefreshTokenFinished<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnRefreshTokenReceived<span class="token punctuation">)</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnRefreshTokenReceived</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewAuthenticationGoogleToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
<pre class="language-csharp"><code>googleFlow<span class="token punctuation">.</span>OnRefreshTokenErrored<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnRefreshTokenError<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
  <div class="api-anchor" id='startauthenticationflow'></div><div class='api-heading' data-id='startauthenticationflow'><a href='#startauthenticationflow'><span class='return-type'>void</span> StartAuthenticationFlow()</a></div>
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
  <div class="api-anchor" id='startrefreshtokenflow'></div><div class='api-heading' data-id='startrefreshtokenflow'><a href='#startrefreshtokenflow'><span class='return-type'>void</span> StartRefreshTokenFlow(string refreshToken)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Starts the refresh flow with the standard OAuth 2.0.
This implements the abstract method in <code>UniWebViewAuthenticationCommonFlow</code>.</p>
</div>
                            </div>
  </div>
</div>

