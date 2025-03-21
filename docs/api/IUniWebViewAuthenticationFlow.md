---
sidebarDepth: 0
---

## IUniWebViewAuthenticationFlow

### Summary

`IUniWebViewAuthenticationFlow<TTokenType>` is an interface for implementing a custom authentication flow. 
An authentication flow, in UniWebView, usually a "code" based OAuth 2.0 flow, contains a standard set of steps:

1. User is navigated to a web page that requires authentication;
2. A temporary code is generated by service provider and provided to client by a redirect URL with customized scheme.
3. Client requests an access token using the temporary code by performing an "access token" exchange request.

To use the common flow, any customize authentication flow must implement this interface and becomes a subclass of
`UniWebViewAuthenticationCommonFlow`.

#### Events Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;TTokenType&gt;</span> OnAuthenticationFinished</a></div></td><td><div class='simple-summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onauthenticationerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> OnAuthenticationErrored</a></div></td><td><div class='simple-summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;TTokenType&gt;</span> OnRefreshTokenFinished</a></div></td><td><div class='simple-summary'>
<p>Called when the access token refresh request finishes and a valid refreshed token is generated.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onrefreshtokenerrored'><span class='return-type'>UnityEvent&lt;long, string&gt;</span> OnRefreshTokenErrored</a></div></td><td><div class='simple-summary'>
<p>Called when any error (including user cancellation) happens during the authentication flow.</p>
</div>
</td></tr></table>

#### Methods Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#getcallbackurl'><span class='return-type'>string</span> GetCallbackUrl()</a></div></td><td><div class='simple-summary'>
<p>Returns the redirect URL that is used to redirect the user after authenticated.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#getauthenticationconfiguration'><span class='return-type'>UniWebViewAuthenticationConfiguration</span> GetAuthenticationConfiguration()</a></div></td><td><div class='simple-summary'>
<p>Returns the config of the authentication flow.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#getauthenticationuriarguments'><span class='return-type'>Dictionary&lt;string, string&gt;</span> GetAuthenticationUriArguments()</a></div></td><td><div class='simple-summary'>
<p>Returns a dictionary contains the parameters that are used to perform the authentication request.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#getadditionalauthenticationuriquery'><span class='return-type'>string</span> GetAdditionalAuthenticationUriQuery()</a></div></td><td><div class='simple-summary'>
<p>Returns a string contains the additional query arguments that are used to construct the query string of the authentication request.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#getaccesstokenrequestparameters'><span class='return-type'>Dictionary&lt;string, string&gt;</span> GetAccessTokenRequestParameters(string authResponse)</a></div></td><td><div class='simple-summary'>
<p>Returns a dictionary contains the parameters that are used to perform the access token exchange request.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#getrefreshtokenrequestparameters'><span class='return-type'>Dictionary&lt;string, string&gt;</span> GetRefreshTokenRequestParameters(string refreshToken)</a></div></td><td><div class='simple-summary'>
<p>Returns a dictionary contains the parameters that are used to perform the access token refresh request.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#generatetokenfromexchangeresponse'><span class='return-type'>TTokenType</span> GenerateTokenFromExchangeResponse(string exchangeResponse)</a></div></td><td><div class='simple-summary'>
<p>Returns the strong-typed token for the authentication process.</p>
</div>
</td></tr></table>

### Events

<div class='api-box method'>
  <div class="api-anchor" id='onauthenticationfinished'></div><div class='api-heading' data-id='onauthenticationfinished'><a href='#onauthenticationfinished'><span class='return-type'>UnityEvent&lt;TTokenType&gt;</span> OnAuthenticationFinished</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the authentication flow succeeds and a valid token is generated.</p>
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
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onrefreshtokenfinished'></div><div class='api-heading' data-id='onrefreshtokenfinished'><a href='#onrefreshtokenfinished'><span class='return-type'>UnityEvent&lt;TTokenType&gt;</span> OnRefreshTokenFinished</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Called when the access token refresh request finishes and a valid refreshed token is generated.</p>
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
                            </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='getcallbackurl'></div><div class='api-heading' data-id='getcallbackurl'><a href='#getcallbackurl'><span class='return-type'>string</span> GetCallbackUrl()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Returns the redirect URL that is used to redirect the user after authenticated. This is used as the <code>redirect_uri</code>
parameter when navigating user to the authentication page.</p>
<p>Usually this is a URL with customize scheme that later service provider may call. It takes intermediate code in its
query and can be used to open the current app in client. The native side of UniWebView will catch and handle it,
then send it to Unity side as the result of <code>UniWebViewAuthenticationSession</code>.</p>
</div>
                  <div class='section-title'>Return Value</div>
<div class='method-return'><p>The redirect URL set in the OAuth settings.</p>
</div>
          </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='getauthenticationconfiguration'></div><div class='api-heading' data-id='getauthenticationconfiguration'><a href='#getauthenticationconfiguration'><span class='return-type'>UniWebViewAuthenticationConfiguration</span> GetAuthenticationConfiguration()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Returns the config of the authentication flow. It usually defines the authentication requests entry points.</p>
</div>
                  <div class='section-title'>Return Value</div>
<div class='method-return'><p>The config object of an authentication flow.</p>
</div>
          </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='getauthenticationuriarguments'></div><div class='api-heading' data-id='getauthenticationuriarguments'><a href='#getauthenticationuriarguments'><span class='return-type'>Dictionary&lt;string, string&gt;</span> GetAuthenticationUriArguments()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Returns a dictionary contains the parameters that are used to perform the authentication request.
The key value pairs in the dictionary are used to construct the query string of the authentication request.</p>
<p>This usually contains fields like <code>client_id</code>, <code>redirect_uri</code>, <code>response_type</code>, etc.</p>
</div>
                  <div class='section-title'>Return Value</div>
<div class='method-return'><p>The dictionary indicates parameters that are used to perform the authentication request.</p>
</div>
          </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='getadditionalauthenticationuriquery'></div><div class='api-heading' data-id='getadditionalauthenticationuriquery'><a href='#getadditionalauthenticationuriquery'><span class='return-type'>string</span> GetAdditionalAuthenticationUriQuery()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Returns a string contains the additional query arguments that are used to construct the query string of the authentication request.</p>
<p>If you want to add some extra query arguments to the authentication request, you can override this method and 
return a string that contains the additional query arguments. The returned string will be appended to the query 
string that constructed from <code>GetAuthenticationUriArguments</code>.</p>
</div>
                  <div class='section-title'>Return Value</div>
<div class='method-return'><p>The additional query arguments that are used to construct the query string of the authentication request.</p>
</div>
          </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='getaccesstokenrequestparameters'></div><div class='api-heading' data-id='getaccesstokenrequestparameters'><a href='#getaccesstokenrequestparameters'><span class='return-type'>Dictionary&lt;string, string&gt;</span> GetAccessTokenRequestParameters(string authResponse)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Returns a dictionary contains the parameters that are used to perform the access token exchange request.
The key value pairs in the dictionary are used to construct the HTTP form body of the access token exchange request.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>authResponse</span></div>
    <div class='parameter-item-desc'><p>The response from authentication request. If the authentication succeeds, it is
usually a custom scheme URL with a <code>code</code> query as its parameter. Base on this, you could construct the body of the
access token exchange request.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>The dictionary indicates parameters that are used to perform the access token exchange request.</p>
</div>
          </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='getrefreshtokenrequestparameters'></div><div class='api-heading' data-id='getrefreshtokenrequestparameters'><a href='#getrefreshtokenrequestparameters'><span class='return-type'>Dictionary&lt;string, string&gt;</span> GetRefreshTokenRequestParameters(string refreshToken)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Returns a dictionary contains the parameters that are used to perform the access token refresh request.
    /// The key value pairs in the dictionary are used to construct the HTTP form body of the access token refresh request.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>refreshToken</span></div>
    <div class='parameter-item-desc'><p>The refresh token you received from a previous access token exchange request. If the access token can be refreshed, the
service provider should provide you a refresh token under the <code>refresh_token</code> field of the response body along side with
the access token exchange when you issue the access token.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>he dictionary indicates parameters that are used to perform the access token refresh request.</p>
</div>
          </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='generatetokenfromexchangeresponse'></div><div class='api-heading' data-id='generatetokenfromexchangeresponse'><a href='#generatetokenfromexchangeresponse'><span class='return-type'>TTokenType</span> GenerateTokenFromExchangeResponse(string exchangeResponse)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Returns the strong-typed token for the authentication process.
When the token exchange request finishes without problem, the response body will be passed to this method and
any conforming class should construct the token object from the response body.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>exchangeResponse</span></div>
    <div class='parameter-item-desc'><p>The body response of the access token exchange request. Usually it contains the desired <code>access_token</code> and other
necessary fields to describe the authenticated result.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>A token object with <code>TToken</code> type that represents the authenticated result.</p>
</div>
          </div>
  </div>
</div>

