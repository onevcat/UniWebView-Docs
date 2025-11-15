---
sidebarDepth: 0
---

## UniWebViewAuthenticationCommonFlow

### Summary

Abstract class and general control for other authentication flows. This class determines the global behaviors of the 
authentication flow, such as whether to start authentication as soon as the script `Start`s, and whether to use private
mode to authenticate the user.

This is a super and abstract class for all concrete auth flow. You are not expected to use this class directly.
Instead, to start a customized auth flow, you can use the `UniWebViewAuthenticationFlowCustomize` class.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#authorizeonstart'><span class='return-type'>bool</span> <span class='member-name'>authorizeOnStart</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Whether to start authentication as soon as the script <code>Start</code>s.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#privatemode'><span class='return-type'>bool</span> <span class='member-name'>privateMode</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Whether to use private mode to authenticate the user.</p>
</div>
</td></tr></table>

#### Methods Summary

<table class='api-summary-table api-summary-table--methods'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#startauthenticationflow'><span class='return-type'>abstract void</span> <span class='member-name'>StartAuthenticationFlow</span>()</a></div></td><td><div class='simple-summary'>
<p>Subclass should override this method to start the authentication flow.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#startrefreshtokenflow'><span class='return-type'>abstract void</span> <span class='member-name'>StartRefreshTokenFlow</span>(string refreshToken)</a></div></td><td><div class='simple-summary'>
<p>Subclass should override this method to start the authentication flow.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#generateandstorestate'><span class='return-type'>string</span> <span class='member-name'>GenerateAndStoreState</span>()</a></div></td><td><div class='simple-summary'>
<p>Child classes are expected to call this method to request a <code>state</code> (and store it for later check) if the 
<code>state</code> verification is enabled.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#generatecodechallengeandstorecodeverify'><span class='return-type'>string</span> <span class='member-name'>GenerateCodeChallengeAndStoreCodeVerify</span>(UniWebViewAuthenticationPKCE method)</a></div></td><td><div class='simple-summary'>
<p>Child classes are expected to call this method to request a <code>code_challenge</code>.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#verifystate'><span class='return-type'>void</span> <span class='member-name'>VerifyState</span>(VerifyState(Dictionary&lt;string, string&gt; parameters, string key)</a></div></td><td><div class='simple-summary'>
<p>Perform verifying for <code>state</code>.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='authorizeonstart'></div><div class='api-heading' data-id='authorizeonstart'><a href='#authorizeonstart'><span class='return-type'>bool</span> <span class='member-name'>authorizeOnStart</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether to start authentication as soon as the script <code>Start</code>s.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='privatemode'></div><div class='api-heading' data-id='privatemode'><a href='#privatemode'><span class='return-type'>bool</span> <span class='member-name'>privateMode</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether to use private mode to authenticate the user. If <code>true</code> and the device supports, the authentication
will begin under the incognito mode.</p>
<p>On iOS, this works on iOS 13 and later.</p>
<p>On Android, it depends on the Chrome version and might require users to enable the incognito mode (and support
for third-party use) in Chrome&#39;s settings. Check settings with <code>chrome://flags/#cct-incognito</code> and
<code>chrome://flags/#cct-incognito-available-to-third-party</code> in Chrome to see the current status.</p>
</div>
                </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='startauthenticationflow'></div><div class='api-heading' data-id='startauthenticationflow'><a href='#startauthenticationflow'><span class='return-type'>abstract void</span> <span class='member-name'>StartAuthenticationFlow</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Subclass should override this method to start the authentication flow. Usually it starts
a <code>UniWebViewAuthenticationFlow</code>. But you can also choose whatever you need to do.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='startrefreshtokenflow'></div><div class='api-heading' data-id='startrefreshtokenflow'><a href='#startrefreshtokenflow'><span class='return-type'>abstract void</span> <span class='member-name'>StartRefreshTokenFlow</span>(string refreshToken)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Subclass should override this method to start the authentication flow. Usually it starts
a Unity Web Request against the authentication flow&#39;s token entry point to refresh the token.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='generateandstorestate'></div><div class='api-heading' data-id='generateandstorestate'><a href='#generateandstorestate'><span class='return-type'>string</span> <span class='member-name'>GenerateAndStoreState</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Child classes are expected to call this method to request a <code>state</code> (and store it for later check) if the 
<code>state</code> verification is enabled.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='generatecodechallengeandstorecodeverify'></div><div class='api-heading' data-id='generatecodechallengeandstorecodeverify'><a href='#generatecodechallengeandstorecodeverify'><span class='return-type'>string</span> <span class='member-name'>GenerateCodeChallengeAndStoreCodeVerify</span>(UniWebViewAuthenticationPKCE method)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Child classes are expected to call this method to request a <code>code_challenge</code>. Later when exchanging the access
token, the <code>code_verifier</code> will be used to verify the <code>code_challenge</code>. Subclass can read it from <code>CodeVerify</code>.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='verifystate'></div><div class='api-heading' data-id='verifystate'><a href='#verifystate'><span class='return-type'>void</span> <span class='member-name'>VerifyState</span>(VerifyState(Dictionary&lt;string, string&gt; parameters, string key)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Perform verifying for <code>state</code>. Child classes are expected to call this method to verify the <code>state</code>.
If the <code>state</code> is invalid, the authentication flow will be stopped and an <code>AuthenticationResponseException.InvalidState</code>
thrown.</p>
</div>
                            </div>
  </div>
</div>

