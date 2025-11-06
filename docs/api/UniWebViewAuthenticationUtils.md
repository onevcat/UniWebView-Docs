---
sidebarDepth: 0
---

## UniWebViewAuthenticationUtils

### Summary

This class provides some helper utils for performing the authentication flow.

They are used inside the built-in flows, but you can also use them to implement your own flow.

#### Methods Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#generaterandombase64string'><span class='return-type'>string</span> GenerateRandomBase64String()</a></div></td><td><div class='simple-summary'>
<p>Generates a random Base64 encoded string.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#generaterandombase64urlstring'><span class='return-type'>string</span> GenerateRandomBase64URLString()</a></div></td><td><div class='simple-summary'>
<p>Generates a random Base64URL encoded string.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#converttobase64urlstring'><span class='return-type'>string</span> ConvertToBase64URLString(string input)</a></div></td><td><div class='simple-summary'>
<p>Converts a Base64 encoded string to a Base64URL encoded string.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#converttobase64string'><span class='return-type'>string</span> ConvertToBase64String(string input)</a></div></td><td><div class='simple-summary'>
<p>Converts a Base64URL encoded string to a Base64 encoded string.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#generatecodeverifier'><span class='return-type'>string</span> GenerateCodeVerifier(int length)</a></div></td><td><div class='simple-summary'>
<p>Generates a code verifier for PKCE usage.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#calculatecodechallenge'><span class='return-type'>string</span> CalculateCodeChallenge(string codeVerifier, UniWebViewAuthenticationPKCE method)</a></div></td><td><div class='simple-summary'>
<p>Calculates the code challenge for PKCE usage, with a given code verifier and hash method.</p>
</div>
</td></tr></table>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='generaterandombase64string'></div><div class='api-heading' data-id='generaterandombase64string'><a href='#generaterandombase64string'><span class='return-type'>string</span> GenerateRandomBase64String()</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Generates a random Base64 encoded string.</p>
</div>
                  <div class='section-title'>Return Value</div>
<div class='method-return'><p>A random Base64 encoded string.</p>
</div>
          </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='generaterandombase64urlstring'></div><div class='api-heading' data-id='generaterandombase64urlstring'><a href='#generaterandombase64urlstring'><span class='return-type'>string</span> GenerateRandomBase64URLString()</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Generates a random Base64URL encoded string.</p>
</div>
                  <div class='section-title'>Return Value</div>
<div class='method-return'><p>A random Base64URL encoded string.</p>
</div>
          </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='converttobase64urlstring'></div><div class='api-heading' data-id='converttobase64urlstring'><a href='#converttobase64urlstring'><span class='return-type'>string</span> ConvertToBase64URLString(string input)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Converts a Base64 encoded string to a Base64URL encoded string.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>input</span></div>
    <div class='parameter-item-desc'><p>The Base64 encoded string.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>A string with Base64URL encoded for the input.</p>
</div>
          </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='converttobase64string'></div><div class='api-heading' data-id='converttobase64string'><a href='#converttobase64string'><span class='return-type'>string</span> ConvertToBase64String(string input)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Converts a Base64URL encoded string to a Base64 encoded string.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>input</span></div>
    <div class='parameter-item-desc'><p>The Base64URL encoded string.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>A string with Base64 encoded for the input.</p>
</div>
          </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='generatecodeverifier'></div><div class='api-heading' data-id='generatecodeverifier'><a href='#generatecodeverifier'><span class='return-type'>string</span> GenerateCodeVerifier(int length)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Generates a code verifier for PKCE usage.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>length</span></div>
    <div class='parameter-item-desc'><p>The length of the target code verifier. Default is 64.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>A generated code verifier for PKCE usage.</p>
</div>
          </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='calculatecodechallenge'></div><div class='api-heading' data-id='calculatecodechallenge'><a href='#calculatecodechallenge'><span class='return-type'>string</span> CalculateCodeChallenge(string codeVerifier, UniWebViewAuthenticationPKCE method)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Calculates the code challenge for PKCE usage, with a given code verifier and hash method.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>codeVerifier</span></div>
    <div class='parameter-item-desc'><p>The code verifier you generated.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewAuthenticationPKCE</span> <span class='parameter-item-name'>method</span></div>
    <div class='parameter-item-desc'><p>The hash method you want to use.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>The result of the code challenge.</p>
</div>
          </div>
  </div>
</div>

