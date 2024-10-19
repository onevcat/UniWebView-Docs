---
sidebarDepth: 0
---

## UniWebViewAuthenticationFlowGitHub

### Summary

A predefined authentication flow for GitHub.

This implementation follows the flow described [here](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps).

See the [OAuth 2.0 Support](/guide/oauth2.html) and [OAuth 2.0 with GitHub](/guide/oauth2-github.html) for a more detailed guide of authentication in UniWebView.

To allow the GitHub flow working, at least you need these steps: 

1. Setting `Client Id`, `Client Secret`, `Callback Url` in the `UniWebViewAuthenticationFlowGitHub` inspector.
2. Setting the `Auth Callbacks Urls` containing the `Callback Url` in the `UniWebView` preference panel.

#### Properties Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#clientid'><span class='return-type'>string</span> clientId { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The client ID of your GitHub application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#clientsecret'><span class='return-type'>string</span> clientSecret { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The client secret of your GitHub application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#callbackurl'><span class='return-type'>string</span> callbackUrl { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The callback URL of your GitHub application.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional'><span class='return-type'>UniWebViewAuthenticationFlowGitHubOptional</span> optional { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Optional to control this flow&#39;s behaviour.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.redirecturi'><span class='return-type'>string</span> optional.redirectUri { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The redirect URI should be used in exchange token request.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.login'><span class='return-type'>string</span> optional.login { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Suggests a specific account to use for signing in and authorizing the app.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.scope'><span class='return-type'>string</span> optional.scope { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The scope string of all your required scopes.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.enablestate'><span class='return-type'>bool</span> optional.enableState { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Whether to enable the state verification.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#optional.allowsignup'><span class='return-type'>bool</span> optional.allowSignup { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Whether or not unauthenticated users will be offered an option to sign up for GitHub during the OAuth flow.</p>
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
<tr><td><div class='api-summary-heading'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationGitHubToken&gt;</span> OnAuthenticationFinished</a></div></td><td><div class='simple-summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onauthenticationerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> OnAuthenticationErrored</a></div></td><td><div class='simple-summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationGitHubToken&gt;</span> OnRefreshTokenFinished</a></div></td><td><div class='simple-summary'>
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
<p>The client ID of your GitHub application.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<p>At the day of writing, the client Id from GitHub is something like:</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>githubFlow<span class="token punctuation">.</span>clientId <span class="token operator">=</span> <span class="token string">"lv1.1234567890abcdef1234"</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='clientsecret'></div><div class='api-heading' data-id='clientsecret'><a href='#clientsecret'><span class='return-type'>string</span> clientSecret { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The client secret of your GitHub application.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        Strictly speaking, the client secret <strong>should not be stored</strong> on the client side. In the OAuth flow of a native app, we 
should use <a href="https://oauth.net/2/pkce/">PKCE</a> whenever possible to protect the authorization process (UniWebView 
<a href="/api/UniWebViewAuthenticationFlowCustomize.html#optional">supports PKCE</a>). However, GitHub’s OAuth does not currently 
support PKCE, so we still have to use the client secret when exchanging tokens if we do not have a backend.

A more secure approach would be to set up your own backend server and use server-to-server communication to obtain the 
access token. In UniWebView, you can use the <a href="/guide/oauth2.html#customize-flow">Customize Flow</a> to set the entry point 
for access token exchange to your server, thereby avoiding exposing the client secret in the client-side code.

  </p>
</div>
          </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='callbackurl'></div><div class='api-heading' data-id='callbackurl'><a href='#callbackurl'><span class='return-type'>string</span> callbackUrl { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The callback URL of your GitHub application.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>githubFlow<span class="token punctuation">.</span>callbackUrl <span class="token operator">=</span> <span class="token string">"authhub://auth"</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional'></div><div class='api-heading' data-id='optional'><a href='#optional'><span class='return-type'>UniWebViewAuthenticationFlowGitHubOptional</span> optional { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Optional to control this flow&#39;s behaviour.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional.redirecturi'></div><div class='api-heading' data-id='optional.redirecturi'><a href='#optional.redirecturi'><span class='return-type'>string</span> optional.redirectUri { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The redirect URI should be used in exchange token request.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional.login'></div><div class='api-heading' data-id='optional.login'><a href='#optional.login'><span class='return-type'>string</span> optional.login { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Suggests a specific account to use for signing in and authorizing the app.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional.scope'></div><div class='api-heading' data-id='optional.scope'><a href='#optional.scope'><span class='return-type'>string</span> optional.scope { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The scope string of all your required scopes.</p>
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
authentication callback.</p>
<p>Default is <code>false</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='optional.allowsignup'></div><div class='api-heading' data-id='optional.allowsignup'><a href='#optional.allowsignup'><span class='return-type'>bool</span> optional.allowSignup { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether or not unauthenticated users will be offered an option to sign up for GitHub during the OAuth flow.</p>
<p>Default is <code>true</code>.</p>
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
  <div class="api-anchor" id='onauthenticationfinished'></div><div class='api-heading' data-id='onauthenticationfinished'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationGitHubToken&gt;</span> OnAuthenticationFinished</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>githubFlow<span class="token punctuation">.</span>OnAuthenticationFinished<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnGitHubTokenReceived<span class="token punctuation">)</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnGitHubTokenReceived</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewAuthenticationGitHubToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Github Access Token: "</span> <span class="token operator">+</span> token<span class="token punctuation">.</span>AccessToken<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<pre class="language-csharp"><code>github<span class="token punctuation">.</span>OnAuthenticationErrored<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnGitHubAuthError<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnGitHubAuthError</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">long</span></span> error<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Error code: "</span> <span class="token operator">+</span> error <span class="token operator">+</span> <span class="token string">" Message: "</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onrefreshtokenfinished'></div><div class='api-heading' data-id='onrefreshtokenfinished'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;UniWebViewAuthenticationGitHubToken&gt;</span> OnRefreshTokenFinished</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the access token refresh request finishes and a valid refreshed token is generated.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>githubFlow<span class="token punctuation">.</span>OnRefreshTokenFinished<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnRefreshTokenReceived<span class="token punctuation">)</span>
<span />
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnRefreshTokenReceived</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewAuthenticationGitHubToken</span> token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
<pre class="language-csharp"><code>githubFlow<span class="token punctuation">.</span>OnRefreshTokenErrored<span class="token punctuation">.</span><span class="token function">AddListener</span><span class="token punctuation">(</span>OnRefreshTokenError<span class="token punctuation">)</span><span class="token punctuation">;</span>
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

