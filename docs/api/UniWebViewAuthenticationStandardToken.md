---
sidebarDepth: 0
---

## UniWebViewAuthenticationStandardToken

### Summary

Represents the standard token used in the OAuth 2 process.

Most of the built-in authentication flows in UniWebView are using the same model of this standard token.
It contains the information of the access token, the refresh token, the expiration time and the token type.
When received a token from the server, UniWebView tries to parse it into this standard token and then pass it to the 
`OnAuthenticationFinished` event.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#accesstoken'><span class='return-type'>string</span> <span class='member-name'>AccessToken</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The access token retrieved from the service provider.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#scope'><span class='return-type'>string</span> <span class='member-name'>Scope</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The granted scopes of the token.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#tokentype'><span class='return-type'>string</span> <span class='member-name'>TokenType</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The token type.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#refreshtoken'><span class='return-type'>string</span> <span class='member-name'>RefreshToken</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The refresh token retrieved from the service provider.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#expiresin'><span class='return-type'>long</span> <span class='member-name'>ExpiresIn</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>How long does this token remain valid.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#idtoken'><span class='return-type'>string</span> <span class='member-name'>IdToken</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The ID token retrieved from the service provider.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#rawvalue'><span class='return-type'>string</span> <span class='member-name'>RawValue</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The raw value of the response of the exchange token request.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='accesstoken'></div><div class='api-heading' data-id='accesstoken'><a href='#accesstoken'><span class='return-type'>string</span> <span class='member-name'>AccessToken</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The access token retrieved from the service provider.</p>
<p>This usually comes from the <code>access_token</code> field in the response.
Use this token to access the service provider&#39;s API.</p>
<p>If you do not need the token &quot;offline&quot;, just use it and discard. UniWebView will not store this token, if you
need to keep it for other purpose, please make sure you do not violate any policies and put it to a secure
place yourself.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='scope'></div><div class='api-heading' data-id='scope'><a href='#scope'><span class='return-type'>string</span> <span class='member-name'>Scope</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The granted scopes of the token. This is usually comes from the <code>scope</code> field in the response.</p>
<p>If there are optional scopes in the initial auth request, the user can choose to not give you some of the
permissions. Check this field before you use the access token to perform certain actions to avoid failure
before actual attempts.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='tokentype'></div><div class='api-heading' data-id='tokentype'><a href='#tokentype'><span class='return-type'>string</span> <span class='member-name'>TokenType</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The token type. This usually comes from the <code>token_type</code> field in the response.</p>
<p>For most OAuth 2.0 services, it is fixed to <code>Bearer</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='refreshtoken'></div><div class='api-heading' data-id='refreshtoken'><a href='#refreshtoken'><span class='return-type'>string</span> <span class='member-name'>RefreshToken</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The refresh token retrieved from the service provider. This usually comes from the <code>refresh_token</code> field in the
response.</p>
<p>If the access token is refreshable, you can use this
refresh token to perform a refresh operation and get a new access token without the user&#39;s consent again.</p>
<p>The refresh policy can be different from the service providers. Read the documentation of the service provider
to determine the use of refresh token.</p>
<p>If the response does not contain a refresh token, this field will be <code>null</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='expiresin'></div><div class='api-heading' data-id='expiresin'><a href='#expiresin'><span class='return-type'>long</span> <span class='member-name'>ExpiresIn</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>How long does this token remain valid. This usually comes from the <code>expires_in</code> field in the response.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='idtoken'></div><div class='api-heading' data-id='idtoken'><a href='#idtoken'><span class='return-type'>string</span> <span class='member-name'>IdToken</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The ID token retrieved from the service provider. This usually comes from the <code>id_token</code> field in the response.</p>
<p>If the service provider does not support ID token or you did not apply for it, this field will be <code>null</code>.
The ID token is usually a JWT token that contains information about the user.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='rawvalue'></div><div class='api-heading' data-id='rawvalue'><a href='#rawvalue'><span class='return-type'>string</span> <span class='member-name'>RawValue</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The raw value of the response of the exchange token request.</p>
<p>If the predefined fields are not enough, you can parse the raw value to get the extra information.</p>
</div>
                </div>
  </div>
</div>

