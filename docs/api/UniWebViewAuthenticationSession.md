---
sidebarDepth: 0
---

## UniWebViewAuthenticationSession

### Summary

Represents a session that can be used to authenticate a user through a web service.

Initialize the session with a URL that points to the authentication webpage. A browser or a secure web view loads
and displays the page. On completion, the service sends a callback URL to the session with an authentication token,
and this triggers the `OnAuthenticationFinished` with the received URL. To make your app be invoked by the system,
you need to also add the correct callback URL starting with the value of `CallbackScheme` to UniWebView's preferences.

Usually this session processes an OAuth 2 flow. It will be used along with a following "exchange token" request, to
finally get the user's access token to allow you use the service APIs on behalf of the user. This token exchange can
happen in the client app, or you can pass the code to your server and let your server do the left work.

UniWebView also provides built-in integrated authentication flows for several popular service. The the
`UniWebViewAuthenticationFlow` cluster classes to use them and simplify your work. If the built-in models do not
fit your work, you can use this class as a starting point of your own authentication integration. 

See the [OAuth 2.0 Support](/guide/oauth2.html) for a more detailed guide of authentication in UniWebView.

#### Properties Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#isauthenticationsupported'><span class='return-type'>bool</span> IsAuthenticationSupported { get; }</a></div></td><td><div class='simple-summary'>
<p>Check whether the current device and system supports the authentication session.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#url'><span class='return-type'>string</span> Url { get; }</a></div></td><td><div class='simple-summary'>
<p>The URL of the authentication webpage.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#callbackscheme'><span class='return-type'>string</span> CallbackScheme { get; }</a></div></td><td><div class='simple-summary'>
<p>The callback scheme of the authentication webpage.</p>
</div>
</td></tr></table>

#### Events Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#onauthenticationfinished'><span class='return-type'>void</span> OnAuthenticationFinished(UniWebViewAuthenticationSession session, string url)</a></div></td><td><div class='simple-summary'>
<p>Raised when the session finishes authentication.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onauthenticationerrorreceived'><span class='return-type'>void</span> OnAuthenticationErrorReceived(UniWebViewAuthenticationSession session, int errorCode, string errorMessage)</a></div></td><td><div class='simple-summary'>
<p>Raised when the session encounters an error.</p>
</div>
</td></tr></table>

#### Methods Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#create'><span class='return-type'>UniWebViewAuthenticationSession</span> Create(string url, string callbackScheme)</a></div></td><td><div class='simple-summary'>
<p>Creates a new authentication session with a given authentication page URL and a callback scheme.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#start'><span class='return-type'>void</span> Start()</a></div></td><td><div class='simple-summary'>
<p>Start the authentication session process.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setprivatemode'><span class='return-type'>void</span> SetPrivateMode(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets to use the private mode for the authentication.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='isauthenticationsupported'></div><div class='api-heading' data-id='isauthenticationsupported'><a href='#isauthenticationsupported'><span class='return-type'>bool</span> IsAuthenticationSupported { get; }</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Check whether the current device and system supports the authentication session.</p>
<p>Returns <code>true</code> if the safe browsing mode is supported and the page will be opened in safe browsing 
mode. Otherwise, <code>false</code>.</p>
<p>This property always returns <code>true</code> on iOS 11, macOS 10.15 and later. On Android, it depends on whether there
is an Intent can handle the safe browsing request,  which is use to display the authentication page. Usually
it is provided by Chrome. If there is no Intent can open the URL in safe browsing mode, this property will
return <code>false</code>.</p>
<p>To use this API on Android when you set your Target SDK to Android 11 or later, you need to declare the correct 
intent query explicitly in your AndroidManifest.xml, to follow the <a href="https://developer.android.com/about/versions/11/privacy/package-visibility">Package Visibility</a>:</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token operator">&lt;</span>queries<span class="token operator">></span>
  <span class="token operator">&lt;</span>intent<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token class-name">action</span> android<span class="token punctuation">:</span>name<span class="token operator">=</span><span class="token string">"android.support.customtabs.action.CustomTabsService"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>intent<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>queries<span class="token operator">></span>
<span />
<span class="token comment">// To use it:</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>UniWebViewAuthenticationSession<span class="token punctuation">.</span>IsAuthenticationSupported<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Continue to create and start the authentication session.</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='url'></div><div class='api-heading' data-id='url'><a href='#url'><span class='return-type'>string</span> Url { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The URL of the authentication webpage. This is the value you used to create this session.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='callbackscheme'></div><div class='api-heading' data-id='callbackscheme'><a href='#callbackscheme'><span class='return-type'>string</span> CallbackScheme { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The callback scheme of the authentication webpage. This is the value you used to create this session. The service
is expected to use a URL with this scheme to return to your app.</p>
</div>
                </div>
  </div>
</div>

### Events

<div class='api-box method'>
  <div class="api-anchor" id='onauthenticationfinished'></div><div class='api-heading' data-id='onauthenticationfinished'><a href='#onauthenticationfinished'><span class='return-type'>void</span> OnAuthenticationFinished(UniWebViewAuthenticationSession session, string url)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the session finishes authentication.</p>
<p>This event will be invoked when the service provider calls the callback URL. regardless of the authentication code
is retrieved or an error is returned in the callback URL.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewAuthenticationSession</span> <span class='parameter-item-name'>session</span></div>
    <div class='parameter-item-desc'><p>The session which raised this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The received URL from service. It might contain a valid <code>code</code> from the service, or an error.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onauthenticationerrorreceived'></div><div class='api-heading' data-id='onauthenticationerrorreceived'><a href='#onauthenticationerrorreceived'><span class='return-type'>void</span> OnAuthenticationErrorReceived(UniWebViewAuthenticationSession session, int errorCode, string errorMessage)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the session encounters an error.</p>
<p>This event will be invoked when the authentication session cannot finishes with a URL callback. This usually
happens when a network error or the user dismisses the authentication page from native UI.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewAuthenticationSession</span> <span class='parameter-item-name'>session</span></div>
    <div class='parameter-item-desc'><p>The session which raised this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>errorCode</span></div>
    <div class='parameter-item-desc'><p>The error code represents the error type.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>errorMessage</span></div>
    <div class='parameter-item-desc'><p>The error message describes the error in detail.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='create'></div><div class='api-heading' data-id='create'><a href='#create'><span class='return-type'>UniWebViewAuthenticationSession</span> Create(string url, string callbackScheme)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Creates a new authentication session with a given authentication page URL and a callback scheme.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The authentication page which is provided by the service. It should be a URL with some information like your app&#39;s
client id and required scopes, etc.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>callbackScheme</span></div>
    <div class='parameter-item-desc'><p>The URL scheme which the service will use to navigate back to your client app.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// For example: </span>
<span class="token comment">// - Auth entrypoint: "example.com/oauth/authorize"</span>
<span class="token comment">// - Callback Url: "authExample://auth"</span>
<span class="token class-name"><span class="token keyword">var</span></span> session <span class="token operator">=</span> UniWebViewAuthenticationSession<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>
  <span class="token string">"https://example.com/oauth/authorize?client_id=12345&amp;&amp;scope=profile"</span><span class="token punctuation">,</span>
  <span class="token string">"authExample"</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Use the `session` to start the authentication flow.</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='start'></div><div class='api-heading' data-id='start'><a href='#start'><span class='return-type'>void</span> Start()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Start the authentication session process. It will show up a secured web page and navigate users to the <code>Url</code>.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>
<span class="token class-name"><span class="token keyword">var</span></span> session <span class="token operator">=</span> UniWebViewAuthenticationSession<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>
  <span class="token string">"https://example.com/oauth/authorize?client_id=12345&amp;&amp;scope=profile"</span><span class="token punctuation">,</span>
  <span class="token string">"authExample"</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
session<span class="token punctuation">.</span>OnAuthenticationFinished <span class="token operator">+=</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> resultUrl<span class="token punctuation">)</span> <span class="token operator">=></span>  <span class="token punctuation">{</span>
  Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Auth flow received callback url: "</span> <span class="token operator">+</span> resultUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// Continue to exchange the code to the access token.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span />
session<span class="token punctuation">.</span>OnAuthenticationErrorReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> errorCode<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// Error handling.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span />
session<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setprivatemode'></div><div class='api-heading' data-id='setprivatemode'><a href='#setprivatemode'><span class='return-type'>void</span> SetPrivateMode(bool flag)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets to use the private mode for the authentication. </p>
<p>If running under private mode, the previous stored authentication information will not be used.</p>
<p>On Apple&#39;s platform, this works from iOS 13 and macOS 10.15. On Android, this depends on the Chrome setting on the
device. The users should enable the &quot;incognito&quot; and &quot;third-party incognito&quot; to allow to use this feature.</p>
<p>Check them in Chrome app:</p>
<ul>
<li>chrome://flags/#cct-incognito</li>
<li>chrome://flags/#cct-incognito-available-to-third-party</li>
</ul>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>Whether the session should run in private mode or not.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>

