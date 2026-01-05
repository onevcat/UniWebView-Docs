---
sidebarDepth: 0
---

## UniWebViewPopup

### Summary

A lightweight handle for controlling a popup window opened by UniWebView.

A popup window is a temporary overlay web view created when `SetSupportMultipleWindows(true, ...)` is enabled and
`target="_blank"` or `window.open()` is triggered. It is not a full `UniWebView` component, but provides limited
control through this handle.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#id'><span class='return-type'>string</span> <span class='member-name'>Id</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The identifier of the popup window.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#isalive'><span class='return-type'>bool</span> <span class='member-name'>IsAlive</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Whether this popup window is still alive.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#owner'><span class='return-type'>UniWebView</span> <span class='member-name'>Owner</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The owner UniWebView that created this popup window.</p>
</div>
</td></tr></table>

#### Events Summary

<table class='api-summary-table api-summary-table--events'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#onpagestarted'><span class='return-type'>void</span> <span class='member-name'>OnPageStarted</span>(UniWebViewPopup popup, string url)</a></div></td><td><div class='simple-summary'>
<p>Raised when the popup starts loading a url.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onpagecommitted'><span class='return-type'>void</span> <span class='member-name'>OnPageCommitted</span>(UniWebViewPopup popup, string url)</a></div></td><td><div class='simple-summary'>
<p>Raised when the popup starts receiving web content.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onpagefinished'><span class='return-type'>void</span> <span class='member-name'>OnPageFinished</span>(UniWebViewPopup popup, UniWebViewNativeResultPayload payload)</a></div></td><td><div class='simple-summary'>
<p>Raised when the popup finishes loading a url.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onpageerrorreceived'><span class='return-type'>void</span> <span class='member-name'>OnPageErrorReceived</span>(UniWebViewPopup popup, UniWebViewNativeResultPayload payload)</a></div></td><td><div class='simple-summary'>
<p>Raised when an error encountered during the popup loading process.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onpageprogresschanged'><span class='return-type'>void</span> <span class='member-name'>OnPageProgressChanged</span>(UniWebViewPopup popup, float progress)</a></div></td><td><div class='simple-summary'>
<p>Raised when the loading progress value changes in current popup page.</p>
</div>
</td></tr></table>

#### Methods Summary

<table class='api-summary-table api-summary-table--methods'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#close'><span class='return-type'>void</span> <span class='member-name'>Close</span>()</a></div></td><td><div class='simple-summary'>
<p>Closes the popup window.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#goback'><span class='return-type'>void</span> <span class='member-name'>GoBack</span>()</a></div></td><td><div class='simple-summary'>
<p>Navigates back in the popup history.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#goforward'><span class='return-type'>void</span> <span class='member-name'>GoForward</span>()</a></div></td><td><div class='simple-summary'>
<p>Navigates forward in the popup history.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#evaluatejavascript'><span class='return-type'>void</span> <span class='member-name'>EvaluateJavaScript</span>(string jsString, Action&lt;UniWebViewNativeResultPayload&gt; completionHandler = null)</a></div></td><td><div class='simple-summary'>
<p>Evaluates a JavaScript string in the popup window context.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='id'></div><div class='api-heading' data-id='id'><a href='#id'><span class='return-type'>string</span> <span class='member-name'>Id</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The identifier of the popup window.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='isalive'></div><div class='api-heading' data-id='isalive'><a href='#isalive'><span class='return-type'>bool</span> <span class='member-name'>IsAlive</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether this popup window is still alive.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='owner'></div><div class='api-heading' data-id='owner'><a href='#owner'><span class='return-type'>UniWebView</span> <span class='member-name'>Owner</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The owner UniWebView that created this popup window.</p>
</div>
                </div>
  </div>
</div>

### Events

<div class='api-box method'>
  <div class="api-anchor" id='onpagestarted'></div><div class='api-heading' data-id='onpagestarted'><a href='#onpagestarted'><span class='return-type'>void</span> <span class='member-name'>OnPageStarted</span>(UniWebViewPopup popup, string url)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the popup starts loading a url.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewPopup</span> <span class='parameter-item-name'>popup</span></div>
    <div class='parameter-item-desc'><p>The popup window handle.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The url which the popup is about to load.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onpagecommitted'></div><div class='api-heading' data-id='onpagecommitted'><a href='#onpagecommitted'><span class='return-type'>void</span> <span class='member-name'>OnPageCommitted</span>(UniWebViewPopup popup, string url)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the popup starts receiving web content.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewPopup</span> <span class='parameter-item-name'>popup</span></div>
    <div class='parameter-item-desc'><p>The popup window handle.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The url which the popup has started receiving content for.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onpagefinished'></div><div class='api-heading' data-id='onpagefinished'><a href='#onpagefinished'><span class='return-type'>void</span> <span class='member-name'>OnPageFinished</span>(UniWebViewPopup popup, UniWebViewNativeResultPayload payload)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the popup finishes loading a url.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewPopup</span> <span class='parameter-item-name'>popup</span></div>
    <div class='parameter-item-desc'><p>The popup window handle.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewNativeResultPayload</span> <span class='parameter-item-name'>payload</span></div>
    <div class='parameter-item-desc'><p>The payload which contains the loading result.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onpageerrorreceived'></div><div class='api-heading' data-id='onpageerrorreceived'><a href='#onpageerrorreceived'><span class='return-type'>void</span> <span class='member-name'>OnPageErrorReceived</span>(UniWebViewPopup popup, UniWebViewNativeResultPayload payload)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when an error encountered during the popup loading process.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewPopup</span> <span class='parameter-item-name'>popup</span></div>
    <div class='parameter-item-desc'><p>The popup window handle.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewNativeResultPayload</span> <span class='parameter-item-name'>payload</span></div>
    <div class='parameter-item-desc'><p>The payload which contains the loading error.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onpageprogresschanged'></div><div class='api-heading' data-id='onpageprogresschanged'><a href='#onpageprogresschanged'><span class='return-type'>void</span> <span class='member-name'>OnPageProgressChanged</span>(UniWebViewPopup popup, float progress)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the loading progress value changes in current popup page.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewPopup</span> <span class='parameter-item-name'>popup</span></div>
    <div class='parameter-item-desc'><p>The popup window handle.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>float</span> <span class='parameter-item-name'>progress</span></div>
    <div class='parameter-item-desc'><p>A value indicates the loading progress of current popup page.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='close'></div><div class='api-heading' data-id='close'><a href='#close'><span class='return-type'>void</span> <span class='member-name'>Close</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Closes the popup window.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='goback'></div><div class='api-heading' data-id='goback'><a href='#goback'><span class='return-type'>void</span> <span class='member-name'>GoBack</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Navigates back in the popup history. If it cannot go back, the popup will be closed.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='goforward'></div><div class='api-heading' data-id='goforward'><a href='#goforward'><span class='return-type'>void</span> <span class='member-name'>GoForward</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Navigates forward in the popup history.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='evaluatejavascript'></div><div class='api-heading' data-id='evaluatejavascript'><a href='#evaluatejavascript'><span class='return-type'>void</span> <span class='member-name'>EvaluateJavaScript</span>(string jsString, Action&lt;UniWebViewNativeResultPayload&gt; completionHandler = null)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Evaluates a JavaScript string in the popup window context.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>jsString</span></div>
    <div class='parameter-item-desc'><p>The JavaScript string to evaluate.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Action&lt;UniWebViewNativeResultPayload&gt;</span> <span class='parameter-item-name'>completionHandler</span></div>
    <div class='parameter-item-desc'><p>Called when evaluating JavaScript finishes.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>

