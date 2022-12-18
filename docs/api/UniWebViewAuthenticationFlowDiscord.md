---
sidebarDepth: 0
---

## UniWebViewAuthenticationFlowDiscord

### Summary

A predefined authentication flow for Discord.

This implementation follows the flow described [here](https://discord.com/developers/docs/topics/oauth2).

See the [OAuth 2.0 Support](/guide/oauth2.html) for a more detailed guide of authentication in UniWebView.

To allow the Discord flow working, at least you need these steps:

1. Setting `Client Id`, `Client Secret` and `Redirect Uri` in the `UniWebViewAuthenticationFlowDiscord` inspector.
2. Setting `scope` and at least contains `identify` in the `UniWebViewAuthenticationFlowDiscord` inspector.
3. Setting the `Auth Callbacks Urls` containing `Redirect Uri` in `UniWebView` preference panel.

#### Properties Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#clientid'><span class='return-type'>string</span> clientId { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The client ID of your Discord application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#clientsecret'><span class='return-type'>string</span> clientSecret { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The client secret of your Discord application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#redirecturi'><span class='return-type'>string</span> redirectUri { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The redirect URI of this Discord application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#scope'><span class='return-type'>string</span> scope { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The scope string of all your required scopes.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional'><span class='return-type'>UniWebViewAuthenticationFlowDiscordOptional</span> optional { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Optional to control this flow&#39;s behaviour.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.pkcesupport'><span class='return-type'>UniWebViewAuthenticationPKCE</span> optional.PKCESupport { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Whether to enable PKCE when performing authentication.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.enablestate'><span class='return-type'>bool</span> optional.enableState { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Whether to enable the state verification.</p>
</div>
</td></tr></table>

#### Events Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationDiscordToken&gt;</span> OnAuthenticationFinished</a></div></td><td><div class='simple-summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onauthenticationerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> OnAuthenticationErrored</a></div></td><td><div class='simple-summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationDiscordToken&gt;</span> OnRefreshTokenFinished</a></div></td><td><div class='simple-summary'>
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
<p>The client ID of your Discord application.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='clientsecret'></div><div class='api-heading' data-id='clientsecret'><a href='#clientsecret'><span class='return-type'>string</span> clientSecret { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The client secret of your Discord application.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='redirecturi'></div><div class='api-heading' data-id='redirecturi'><a href='#redirecturi'><span class='return-type'>string</span> redirectUri { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The redirect URI of this Discord application.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='scope'></div><div class='api-heading' data-id='scope'><a href='#scope'><span class='return-type'>string</span> scope { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The scope string of all your required scopes.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional'></div><div class='api-heading' data-id='optional'><a href='#optional'><span class='return-type'>UniWebViewAuthenticationFlowDiscordOptional</span> optional { get; set; }</a></div>
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
<p>Whether to enable PKCE when performing authentication. On mobile platforms, this has to be enabled as <code>S256</code>,
otherwise, Discord will reject the authentication request.</p>
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
authentication callback. Default is <code>true</code>.</p>
</div>
                </div>
  </div>
</div>

### Events

<div class='api-box method'>
  <div class="api-anchor" id='onauthenticationfinished'></div><div class='api-heading' data-id='onauthenticationfinished'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationDiscordToken&gt;</span> OnAuthenticationFinished</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>discordFlow<span class="token punctuation">.</span>OnAuthenticationFinished<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnDiscordTokenReceived<span class="token punctuation">)</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnDiscordTokenReceived</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewAuthenticationDiscordToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Discord Access Token: "</span> <span class="token operator">+</span> token<span class="token punctuation">.</span>AccessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<pre class="language-csharp"><code>discordFlow<span class="token punctuation">.</span>OnAuthenticationErrored<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnDiscordAuthError<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnDiscordAuthError</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> error<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Error code: "</span> <span class="token operator">+</span> error <span class="token operator">+</span> <span class="token string">" Message: "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onrefreshtokenfinished'></div><div class='api-heading' data-id='onrefreshtokenfinished'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationDiscordToken&gt;</span> OnRefreshTokenFinished</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the access token refresh request finishes and a valid refreshed token is generated.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>discordFlow<span class="token punctuation">.</span>OnRefreshTokenFinished<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnRefreshTokenReceived<span class="token punctuation">)</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnRefreshTokenReceived</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewAuthenticationDiscordToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
<pre class="language-csharp"><code>discordFlow<span class="token punctuation">.</span>OnRefreshTokenErrored<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnRefreshTokenError<span class="token punctuation">)</span><span class="token punctuation">;</span>
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

