---
sidebarDepth: 0
---

## UniWebView

### Summary

The main class of UniWebView. It represents a native web view and exposes a few APIs for you to use in 
Unity. You could create and use an instance of `UniWebView` to show a page from URL, interact with the web content, 
as well as receive a message from the web view.

#### Properties Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#iswebviewsupported'><span class='return-type'>bool</span> IsWebViewSupported { get; }</a></div></td><td><div class='simple-summary'>
<p>Whether the web view is supported in current runtime or not.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#frame'><span class='return-type'>Rect</span> Frame { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Gets or sets the frame of current web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#referencerecttransform'><span class='return-type'>RectTransform</span> ReferenceRectTransform { get; set; }</a></div></td><td><div class='simple-summary'>
<p>A reference rect transform which the web view should change its position and size to.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#url'><span class='return-type'>string</span> Url { get; }</a></div></td><td><div class='simple-summary'>
<p>The url of current loaded web page.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#cangoback'><span class='return-type'>bool</span> CanGoBack { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets whether there is a back page in the back-forward list that can be navigated to.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#cangoforward'><span class='return-type'>bool</span> CanGoForward { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets whether there is a forward page in the back-forward list that can be navigated to.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#backgroundcolor'><span class='return-type'>Color</span> BackgroundColor { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Gets or sets the background color of web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#alpha'><span class='return-type'>float</span> Alpha { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Gets or sets the alpha value of the whole web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#embeddedtoolbar'><span class='return-type'>UniWebViewEmbeddedToolbar</span> EmbeddedToolbar { get; }</a></div></td><td><div class='simple-summary'>
<p>Represents the embedded toolbar in the current web view.</p>
</div>
</td></tr></table>

#### Events Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#onpagestarted'><span class='return-type'>void</span> OnPageStarted(UniWebView webView, string url)</a></div></td><td><div class='simple-summary'>
<p>Raised when the web view starts loading a url.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onpagefinished'><span class='return-type'>void</span> OnPageFinished(UniWebView webView, int statusCode, string url)</a></div></td><td><div class='simple-summary'>
<p>Raised when the web view finished to load a url successfully.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onpageprogresschanged'><span class='return-type'>void</span> OnPageProgressChanged(UniWebView webView, float progress)</a></div></td><td><div class='simple-summary'>
<p>Raised when the loading progress value changes in current web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onpageerrorreceived'><span class='return-type'>void</span> OnPageErrorReceived(UniWebView webView, int errorCode, string errorMessage)</a></div></td><td><div class='simple-summary'>
<p>Raised when an error encountered during the loading process.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#oncapturesnapshotfinished'><span class='return-type'>void</span> OnCaptureSnapshotFinished(UniWebView webView, int errorCode, string diskPath)</a></div></td><td><div class='simple-summary'>
<p>Raised when an image captured and stored in a cache path on disk.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onfiledownloadstarted'><span class='return-type'>void</span> OnFileDownloadStarted(UniWebView webView, string remoteUrl, string fileName)</a></div></td><td><div class='simple-summary'>
<p>Raised when a file download task starts.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onfiledownloadfinished'><span class='return-type'>void</span> OnFileDownloadFinished(UniWebView webView, int errorCode, string remoteUrl, string diskPath)</a></div></td><td><div class='simple-summary'>
<p>Raised when a file download task finishes with either an error or success.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onmessagereceived'><span class='return-type'>void</span> OnMessageReceived(UniWebView webView, UniWebViewMessage message)</a></div></td><td><div class='simple-summary'>
<p>Raised when a message from web view is received.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onshouldclose'><span class='return-type'>bool</span> OnShouldClose(UniWebView webView)</a></div></td><td><div class='simple-summary'>
<p>Raised when the web view is about to close itself.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onorientationchanged'><span class='return-type'>void</span> OnOrientationChanged(UniWebView webView, ScreenOrientation orientation)</a></div></td><td><div class='simple-summary'>
<p>Raised when the screen orientation is changed.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onwebcontentprocessterminated'><span class='return-type'>void</span> OnWebContentProcessTerminated(UniWebView webView)</a></div></td><td><div class='simple-summary'>
<p>Raised when on iOS, when system calls <code>webViewWebContentProcessDidTerminate</code> method.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onmultiplewindowopened'><span class='return-type'>void</span> OnMultipleWindowOpened(UniWebView webView, string multipleWindowId)</a></div></td><td><div class='simple-summary'>
<p>Raised when a new window is opened.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onmultiplewindowclosed'><span class='return-type'>void</span> OnMultipleWindowClosed(UniWebView webView, string multipleWindowId)</a></div></td><td><div class='simple-summary'>
<p>Raised when the multiple window is closed.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onkeycodereceived'><span class='return-type'>void</span> OnKeyCodeReceived(UniWebView webView, int keyCode)</a></div></td><td><div class='simple-summary'>
<p>Raised when a key (like back button or volume up) on the device is pressed.</p>
</div>
</td></tr></table>

#### Methods Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#load'><span class='return-type'>void</span> Load(string url, bool skipEncoding, string readAccessURL)</a></div></td><td><div class='simple-summary'>
<p>Loads a url in current web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#loadhtmlstring'><span class='return-type'>void</span> LoadHTMLString(string htmlString, string baseUrl, bool skipEncoding)</a></div></td><td><div class='simple-summary'>
<p>Loads an HTML string in current web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#reload'><span class='return-type'>void</span> Reload()</a></div></td><td><div class='simple-summary'>
<p>Reloads the current page.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#stop'><span class='return-type'>void</span> Stop()</a></div></td><td><div class='simple-summary'>
<p>Stops loading all resources on the current page.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#goback'><span class='return-type'>void</span> GoBack()</a></div></td><td><div class='simple-summary'>
<p>Navigates to the back item in the back-forward list.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#goforward'><span class='return-type'>void</span> GoForward()</a></div></td><td><div class='simple-summary'>
<p>Navigates to the forward item in the back-forward list.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setopenlinksinexternalbrowser'><span class='return-type'>void</span> SetOpenLinksInExternalBrowser(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the link clicking in the web view should open the page in an external browser.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#show'><span class='return-type'>bool</span> Show(bool fade, UniWebViewTransitionEdge edge, float duration, Action completionHandler)</a></div></td><td><div class='simple-summary'>
<p>Sets the web view visible on screen.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#hide'><span class='return-type'>bool</span> Hide(bool fade, UniWebViewTransitionEdge edge, float duration, Action completionHandler)</a></div></td><td><div class='simple-summary'>
<p>Sets the web view invisible from screen.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#animateto'><span class='return-type'>bool</span> AnimateTo(Rect frame, float duration, float delay, Action completionHandler)</a></div></td><td><div class='simple-summary'>
<p>Animates the web view from current <code>Frame</code> (position and size) to another <code>Frame</code> (position and size) within <code>duration</code>.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#updateframe'><span class='return-type'>void</span> UpdateFrame()</a></div></td><td><div class='simple-summary'>
<p>Updates and sets current frame of web view to match the setting.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#addjavascript'><span class='return-type'>void</span> AddJavaScript(string jsString, Action&lt;UniWebViewNativeResultPayload&gt; completionHandler)</a></div></td><td><div class='simple-summary'>
<p>Adds a JavaScript to current page.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#evaluatejavascript'><span class='return-type'>void</span> EvaluateJavaScript(string jsString, Action&lt;UniWebViewNativeResultPayload&gt; completionHandler)</a></div></td><td><div class='simple-summary'>
<p>Evaluates a JavaScript string on current page.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#addurlscheme'><span class='return-type'>void</span> AddUrlScheme(string scheme)</a></div></td><td><div class='simple-summary'>
<p>Adds a url scheme to UniWebView message system interpreter.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#removeurlscheme'><span class='return-type'>void</span> RemoveUrlScheme(string scheme)</a></div></td><td><div class='simple-summary'>
<p>Removes a url scheme from UniWebView message system interpreter.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#addsslexceptiondomain'><span class='return-type'>void</span> AddSslExceptionDomain(string domain)</a></div></td><td><div class='simple-summary'>
<p>Adds a domain to the SSL checking white list.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#removesslexceptiondomain'><span class='return-type'>void</span> RemoveSslExceptionDomain(string domain)</a></div></td><td><div class='simple-summary'>
<p>Removes a domain from the SSL checking white list.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setheaderfield'><span class='return-type'>void</span> SetHeaderField(string key, string value)</a></div></td><td><div class='simple-summary'>
<p>Sets a customized header field for web view requests.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setuseragent'><span class='return-type'>void</span> SetUserAgent(string agent)</a></div></td><td><div class='simple-summary'>
<p>Sets the user agent used in the web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#getuseragent'><span class='return-type'>string</span> GetUserAgent()</a></div></td><td><div class='simple-summary'>
<p>Gets the user agent string currently used in web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setcontentinsetadjustmentbehavior'><span class='return-type'>void</span> SetContentInsetAdjustmentBehavior(UniWebViewContentInsetAdjustmentBehavior behavior)</a></div></td><td><div class='simple-summary'>
<p>Sets the adjustment behavior which indicates how safe area insets 
are added to the adjusted content inset.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setallowautoplay'><span class='return-type'>void</span> SetAllowAutoPlay(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets allow auto-play for current web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setallowinlineplay'><span class='return-type'>void</span> SetAllowInlinePlay(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets allow inline play for current web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setallowfileaccess'><span class='return-type'>void</span> SetAllowFileAccess(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets whether loading a local file is allowed.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setallowfileaccessfromfileurls'><span class='return-type'>void</span> SetAllowFileAccessFromFileURLs(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets whether file access from file URLs is allowed.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setacceptthirdpartycookies'><span class='return-type'>void</span> SetAcceptThirdPartyCookies(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the UniWebView should allow third party cookies to be set.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setallowuniversalaccessfromfileurls'><span class='return-type'>void</span> SetAllowUniversalAccessFromFileURLs(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets allow universal access from file URLs.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setenablekeyboardavoidance'><span class='return-type'>void</span> SetEnableKeyboardAvoidance(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the web view area should avoid soft keyboard.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setjavascriptenabled'><span class='return-type'>void</span> SetJavaScriptEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether JavaScript should be enabled in current web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setallowjavascriptopenwindow'><span class='return-type'>void</span> SetAllowJavaScriptOpenWindow(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets whether JavaScript can open windows without user interaction.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setcalloutenabled'><span class='return-type'>void</span> SetCalloutEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether a callout (context) menu should be displayed when user long tapping on certain web view content.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setsupportmultiplewindows'><span class='return-type'>void</span> SetSupportMultipleWindows(bool enabled, bool allowJavaScriptOpening)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the web view should support a pop up web view triggered by user in a new tab.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setdefaultfontsize'><span class='return-type'>void</span> SetDefaultFontSize(int size)</a></div></td><td><div class='simple-summary'>
<p>Sets the default font size used in the web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settextzoom'><span class='return-type'>void</span> SetTextZoom(int textZoom)</a></div></td><td><div class='simple-summary'>
<p>Sets the text zoom used in the web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setdraginteractionenabled'><span class='return-type'>void</span> SetDragInteractionEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the drag interaction should be enabled on iOS.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#cleancache'><span class='return-type'>void</span> CleanCache()</a></div></td><td><div class='simple-summary'>
<p>Cleans web view cache.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setcookie'><span class='return-type'>void</span> SetCookie(string url, string cookie, bool skipEncoding)</a></div></td><td><div class='simple-summary'>
<p>Sets a cookie for a certain url.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#getcookie'><span class='return-type'>string</span> GetCookie(string url, string key, bool skipEncoding)</a></div></td><td><div class='simple-summary'>
<p>Gets the cookie value under a url and key.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#removecookies'><span class='return-type'>void</span> RemoveCookies(string url, bool skipEncoding)</a></div></td><td><div class='simple-summary'>
<p>Removes all the cookies under a url.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#removecooke'><span class='return-type'>void</span> RemoveCookie(string url, string key, bool skipEncoding)</a></div></td><td><div class='simple-summary'>
<p>Removes the certain cookie under a url for the specified key.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#clearcookies'><span class='return-type'>void</span> ClearCookies()</a></div></td><td><div class='simple-summary'>
<p>Clear all cookies from web views.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#clearhttpauthusernamepassword'><span class='return-type'>void</span> ClearHttpAuthUsernamePassword(string host, string realm)</a></div></td><td><div class='simple-summary'>
<p>Clears any saved credentials for HTTP authentication for both Basic and Digest.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setshowspinnerwhileloading'><span class='return-type'>void</span> SetShowSpinnerWhileLoading(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets whether to show a loading indicator while the loading is in progress.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setspinnertext'><span class='return-type'>void</span> SetSpinnerText(string text)</a></div></td><td><div class='simple-summary'>
<p>Sets the text displayed in the loading indicator, if <code>SetShowSpinnerWhileLoading</code> is set to <code>true</code>.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#sethorizontalscrollbarenabled'><span class='return-type'>void</span> SetHorizontalScrollBarEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the horizontal scroll bar should show when the web content beyonds web view bounds.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setverticalscrollbarenabled'><span class='return-type'>void</span> SetVerticalScrollBarEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the vertical scroll bar should show when the web content beyonds web view bounds.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setbouncesenabled'><span class='return-type'>void</span> SetBouncesEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the web view should show with a bounces effect when scrolling to page edge.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setzoomenabled'><span class='return-type'>void</span> SetZoomEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the web view supports zoom gesture to change content size.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#addpermissiontrustdomain'><span class='return-type'>void</span> AddPermissionTrustDomain(string domain)</a></div></td><td><div class='simple-summary'>
<p>Adds a trusted domain to white list and allow permission requests from the domain.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#removepermissiontrustdomain'><span class='return-type'>void</span> RemovePermissionTrustDomain(string domain)</a></div></td><td><div class='simple-summary'>
<p>Removes a trusted domain from white list.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setbackbuttonenabled'><span class='return-type'>void</span> SetBackButtonEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the device back button should be enabled to execute &quot;go back&quot; or &quot;closing&quot; operation.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setusewideviewport'><span class='return-type'>void</span> SetUseWideViewPort(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the web view should enable support for the &quot;viewport&quot; HTML meta tag or should use a wide viewport.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setloadwithoverviewmode'><span class='return-type'>void</span> SetLoadWithOverviewMode(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the web view loads pages in overview mode, that is, zooms out the content to fit on screen by width.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setimmersivemodeenabled'><span class='return-type'>void</span> SetImmersiveModeEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the web view should behave in immersive mode, that is, 
hides the status bar and navigation bar with a sticky style.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setshowtoolbar'><span class='return-type'>void</span> SetShowToolbar(bool show, bool animated, bool onTop, bool adjustInset)</a></div></td><td><div class='simple-summary'>
<p>Sets whether to show a toolbar which contains navigation buttons and Done button.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settoolbardonebuttontext'><span class='return-type'>void</span> SetToolbarDoneButtonText(string text)</a></div></td><td><div class='simple-summary'>
<p>Sets the done button text in toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settoolbargobackbuttontext'><span class='return-type'>void</span> SetToolbarGoBackButtonText(string text)</a></div></td><td><div class='simple-summary'>
<p>Sets the go back button text in toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settoolbargoforwardbuttontext'><span class='return-type'>void</span> SetToolbarGoForwardButtonText(string text)</a></div></td><td><div class='simple-summary'>
<p>Sets the go forward button text in toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setshowtoolbarnavigationbuttons'><span class='return-type'>void</span> SetShowToolbarNavigationButtons(bool show)</a></div></td><td><div class='simple-summary'>
<p>Sets the visibility of navigation buttons, such as &quot;Go Back&quot; and &quot;Go Forward&quot;, on toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settoolbartintcolor'><span class='return-type'>void</span> SetToolbarTintColor(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the background tint color for the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settoolbartextcolor'><span class='return-type'>void</span> SetToolbarTextColor(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the button text color for the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setuserinteractionenabled'><span class='return-type'>void</span> SetUserInteractionEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the web view can receive user interaction or not.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settransparencyclickingthroughenabled'><span class='return-type'>void</span> SetTransparencyClickingThroughEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the web view should pass through clicks at its clear pixels to Unity scene.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setwebcontentsdebuggingenabled'><span class='return-type'>void</span> SetWebContentsDebuggingEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Enables debugging of web contents.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setwindowuserresizeenabled'><span class='return-type'>void</span> SetWindowUserResizeEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Enables user resizing for web view window.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setallowbackforwardnavigationgestures'><span class='return-type'>void</span> SetAllowBackForwardNavigationGestures(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets whether horizontal swipe gestures should trigger back-forward list navigation.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setallowhttpauthpopupwindow'><span class='return-type'>void</span> SetAllowHTTPAuthPopUpWindow(bool flag)</a></div></td><td><div class='simple-summary'>
<p>Sets whether a prompt alert should be displayed for collection username and password when the web view receives an
HTTP authentication challenge (HTTP Basic or HTTP Digest) from server.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#gethtmlcontent'><span class='return-type'>void</span> GetHTMLContent(Action&lt;string&gt; handler)</a></div></td><td><div class='simple-summary'>
<p>Gets the HTML content from current page by accessing its <code>outerHTML</code> with JavaScript.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#print'><span class='return-type'>void</span> Print()</a></div></td><td><div class='simple-summary'>
<p>Prints current page.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#capturesnapshot'><span class='return-type'>void</span> CaptureSnapshot(string fileName)</a></div></td><td><div class='simple-summary'>
<p>Capture the content of web view and store it to the cache path on disk with the given file name.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#scrollto'><span class='return-type'>void</span> ScrollTo(int x, int y, bool animated)</a></div></td><td><div class='simple-summary'>
<p>Scrolls the web view to a certain point.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#adddownloadurl'><span class='return-type'>void</span> AddDownloadURL(string urlString, UniWebViewDownloadMatchingType type)</a></div></td><td><div class='simple-summary'>
<p>Adds the URL to download inspecting list.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#removedownloadurl'><span class='return-type'>void</span> RemoveDownloadURL(string urlString, UniWebViewDownloadMatchingType type)</a></div></td><td><div class='simple-summary'>
<p>Removes the URL from download inspecting list.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#adddownloadmimetype'><span class='return-type'>void</span> AddDownloadMIMEType(string MIMEType, UniWebViewDownloadMatchingType type)</a></div></td><td><div class='simple-summary'>
<p>Adds the MIME type to download inspecting list.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#removedownloadmimetypes'><span class='return-type'>void</span> RemoveDownloadMIMETypes(string MIMEType, UniWebViewDownloadMatchingType type)</a></div></td><td><div class='simple-summary'>
<p>Removes the MIME type from download inspecting list.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setdownloadeventforcontextmenuenabled'><span class='return-type'>void</span> SetDownloadEventForContextMenuEnabled(bool enabled)</a></div></td><td><div class='simple-summary'>
<p>Sets whether the <code>OnFileDownloadStarted</code> and <code>OnFileDownloadFinished</code> events should be raised even for an image
saving action triggered by the callout (context) menu on Android.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='iswebviewsupported'></div><div class='api-heading' data-id='iswebviewsupported'><a href='#iswebviewsupported'><span class='return-type'>bool</span> IsWebViewSupported { get; }</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether the web view is supported in current runtime or not.</p>
<p>On some certain Android customized builds, the manufacturer prefers not containing the web view package in the 
system or blocks the web view package from being installed. If this happens, using of any web view related APIs will
throw a <code>MissingWebViewPackageException</code> exception.</p>
<p>Use this method to check whether the web view is available on the current running system. If this parameter returns <code>false</code>, 
you should not use the web view.</p>
<p>This property always returns <code>true</code> on other supported platforms, such as iOS or macOS editor. It only performs 
runtime checking on Android. On other not supported platforms such as Windows or Linux, it always returns <code>false</code>.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>UniWebView<span class="token punctuation">.</span>IsWebViewSupported<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do other things with UniWebView.</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='frame'></div><div class='api-heading' data-id='frame'><a href='#frame'><span class='return-type'>Rect</span> Frame { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets or sets the frame of current web view. The value is based on current <code>Screen.width</code> and <code>Screen.height</code>.
The first two values of <code>Rect</code> is <code>x</code> and <code>y</code> position and the followed two <code>width</code> and <code>height</code>. The original point is 
top left corner:</p>
<p><img src="https://docs.unity3d.com/StaticFiles/ScriptRefImages/RectXY.svg" alt=""></p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        <code>Frame</code> will be ignored if <code>ReferenceRectTransform</code> is set.
  </p>
</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Make the web view full screen:</span>
webView<span class="token punctuation">.</span>Frame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>width<span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Make the web view center in the screen with size 500x500:</span>
<span class="token class-name"><span class="token keyword">var</span></span> side <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> x <span class="token operator">=</span> <span class="token punctuation">(</span>Screen<span class="token punctuation">.</span>width <span class="token operator">-</span> side<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2.0f</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> y <span class="token operator">=</span> <span class="token punctuation">(</span>Screen<span class="token punctuation">.</span>height <span class="token operator">-</span> side<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2.0f</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span>Frame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Rect</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> side<span class="token punctuation">,</span> side<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='referencerecttransform'></div><div class='api-heading' data-id='referencerecttransform'><a href='#referencerecttransform'><span class='return-type'>RectTransform</span> ReferenceRectTransform { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>A reference rect transform which the web view should change its position and size to.</p>
<p>Set it to a Unity UI element (which contains a <code>RectTransform</code>) under a canvas to determine the web view frame by a certain UI element. </p>
<p>By using this, you could get benefit from <a href="https://docs.unity3d.com/Manual/HOWTO-UIMultiResolution.html">Multiple Resolutions UI</a>.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Some panel</span>
<span class="token class-name">RectTransform</span> panel <span class="token operator">=</span> <span class="token range operator">..</span><span class="token punctuation">.</span>
<span />
<span class="token comment">// Set the web view position and size to match panel</span>
webView<span class="token punctuation">.</span>ReferenceRectTransform <span class="token operator">=</span> panel<span class="token punctuation">;</span>
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
<p>The url of current loaded web page.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://example.com/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Some time later or in "OnPageFinished":</span>
<span class="token function">print</span><span class="token punctuation">(</span>webView<span class="token punctuation">.</span>Url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => "https://example.com/"</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='cangoback'></div><div class='api-heading' data-id='cangoback'><a href='#cangoback'><span class='return-type'>bool</span> CanGoBack { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets whether there is a back page in the back-forward list that can be navigated to.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='cangoforward'></div><div class='api-heading' data-id='cangoforward'><a href='#cangoforward'><span class='return-type'>bool</span> CanGoForward { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets whether there is a forward page in the back-forward list that can be navigated to.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='backgroundcolor'></div><div class='api-heading' data-id='backgroundcolor'><a href='#backgroundcolor'><span class='return-type'>Color</span> BackgroundColor { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets or sets the background color of web view. The default value if <code>Color.white</code>.</p>
<p>This only sets the background color of the content view of the web view. Normally, the background
color will be hidden by the web page background. If you want to make the web view background visible,
you need to make the web page it transparent by adding some necessary style to it.</p>
<p>This property only changes the web view background. 
If you want to make the whole web view transparent, use <code>Alpha</code> instead.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Set the web view background (under the web page) to red.</span>
webView<span class="token punctuation">.</span>BackgroundColor <span class="token operator">=</span> Color<span class="token punctuation">.</span>red<span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='alpha'></div><div class='api-heading' data-id='alpha'><a href='#alpha'><span class='return-type'>float</span> Alpha { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets or sets the alpha value of the whole web view.</p>
<p>You can make the game scene behind web view visible to make the web view transparent.</p>
<p>The default value is <code>1.0f</code>, which means totally opaque. Set it to <code>0.0f</code> will make the web view totally transparent.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Set the web view half transparent.</span>
webView<span class="token punctuation">.</span>Alpha <span class="token operator">=</span> <span class="token number">0.5f</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='embeddedtoolbar'></div><div class='api-heading' data-id='embeddedtoolbar'><a href='#embeddedtoolbar'><span class='return-type'>UniWebViewEmbeddedToolbar</span> EmbeddedToolbar { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Represents the embedded toolbar in the current web view.</p>
<p>A toolbar is a built-in area inside the web view, shown at the top or bottom of the web view. It contains navigation buttons
like &quot;Back&quot; and &quot;Forward&quot;, as well as a &quot;Done&quot; button to close the web view. You can use APIs under <code>UniWebViewEmbeddedToolbar</code> 
to customize the toolbar. See its APIs for more details.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Show the embedded toolbar.</span>
webView<span class="token punctuation">.</span>EmbeddedToolbar<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

### Events

<div class='api-box method'>
  <div class="api-anchor" id='onpagestarted'></div><div class='api-heading' data-id='onpagestarted'><a href='#onpagestarted'><span class='return-type'>void</span> OnPageStarted(UniWebView webView, string url)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the web view starts loading a url.</p>
<p>This event will be invoked for both URL loading with <code>Load</code> method or by a link navigating from a page.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The url which the web view is about to load.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnPageStarted <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> url<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Loading started for url: "</span> <span class="token operator">+</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://example.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// => "Loading started for url: https://example.com/"</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onpagefinished'></div><div class='api-heading' data-id='onpagefinished'><a href='#onpagefinished'><span class='return-type'>void</span> OnPageFinished(UniWebView webView, int statusCode, string url)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the web view finished to load a url successfully.</p>
<p>This method will be invoked when a valid response received from the URL, regardless of the response status.
If a URL loading fails before reaching to the server and getting a response, <code>OnPageErrorReceived</code> will be 
raised instead.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        Android did not provide a way to get the HTTP status code until API Level 23 (Android 6). 
The <code>statusCode</code> is not trustable and will be always 200 on Android devices running a system before Android 6.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>statusCode</span></div>
    <div class='parameter-item-desc'><p>HTTP status code received from response.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The url which the web view begins to load.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnPageFinished <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> statusCode<span class="token punctuation">,</span> url<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>statusCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Web view loading finished for: "</span> <span class="token operator">+</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span />
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://example.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => "202"</span>
<span class="token comment">// => "Web view loading finished for: https://example.com"</span>
<span />
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://some_domain.com/404"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => "404"</span>
<span class="token comment">// => "Web view loading finished for: https://example.com"</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onpageprogresschanged'></div><div class='api-heading' data-id='onpageprogresschanged'><a href='#onpageprogresschanged'><span class='return-type'>void</span> OnPageProgressChanged(UniWebView webView, float progress)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the loading progress value changes in current web view.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>float</span> <span class='parameter-item-name'>progress</span></div>
    <div class='parameter-item-desc'><p>A value indicates the loading progress of current page. It is a value between 0.0f and 1.0f.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnPageProgressChanged <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> progress<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Progress: "</span> <span class="token operator">+</span> progress<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span />
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://uniwebview.com/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// => "Progress: 0.1"</span>
<span class="token comment">// => "Progress: 0.3"</span>
<span class="token comment">// => "Progress: 0.52"</span>
<span class="token comment">// => "Progress: 0.87"</span>
<span class="token comment">// => "Progress: 1.0"</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onpageerrorreceived'></div><div class='api-heading' data-id='onpageerrorreceived'><a href='#onpageerrorreceived'><span class='return-type'>void</span> OnPageErrorReceived(UniWebView webView, int errorCode, string errorMessage)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when an error encountered during the loading process. 
Such as the &quot;host not found&quot; error or &quot;no Internet connection&quot; error will raise this event.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>errorCode</span></div>
    <div class='parameter-item-desc'><p>The error code which indicates the error type. It can be different from systems and platforms.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>errorMessage</span></div>
    <div class='parameter-item-desc'><p>The error message which describes the detail of error.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnPageErrorReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> error<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Error."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span />
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://site-not-existing.com/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => "Error."</span>
<span />
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"unknown://host?param1=value1&amp;param2=value2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => "Error."</span>
<span />
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://self-signed.badssl.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => "Error."</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='oncapturesnapshotfinished'></div><div class='api-heading' data-id='oncapturesnapshotfinished'><a href='#oncapturesnapshotfinished'><span class='return-type'>void</span> OnCaptureSnapshotFinished(UniWebView webView, int errorCode, string diskPath)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when an image captured and stored in a cache path on disk.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>errorCode</span></div>
    <div class='parameter-item-desc'><p>The error code of the event. If the snapshot is captured and stored without a problem, the error code is 0. 
Any other number indicates an error happened. In most cases, the screenshot capturing only fails due to lack
of disk storage.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>diskPath</span></div>
    <div class='parameter-item-desc'><p>An accessible disk path to the captured snapshot image. If an error happens, it is an empty string.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnCaptureSnapshotFinished <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> errorCode<span class="token punctuation">,</span> filePath<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>errorCode <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> bytes <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">ReadAllBytes</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Texture2D</span> texture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Texture2D</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> TextureFormat<span class="token punctuation">.</span>RGB24<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    texture<span class="token punctuation">.</span><span class="token function">LoadImage</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
    <span class="token comment">// Use the texture.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">CaptureSnapshot</span><span class="token punctuation">(</span><span class="token string">"sample.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onfiledownloadstarted'></div><div class='api-heading' data-id='onfiledownloadstarted'><a href='#onfiledownloadstarted'><span class='return-type'>void</span> OnFileDownloadStarted(UniWebView webView, string remoteUrl, string fileName)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when a file download task starts.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>remoteUrl</span></div>
    <div class='parameter-item-desc'><p>The remote URL of this download task. This is also the download URL for the task.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>fileName</span></div>
    <div class='parameter-item-desc'><p>The file name which user chooses to use.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnFileDownloadStarted <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> remoteUrl<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"Download Started. From '{0}', file name '{1}'"</span><span class="token punctuation">,</span> remoteUrl<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onfiledownloadfinished'></div><div class='api-heading' data-id='onfiledownloadfinished'><a href='#onfiledownloadfinished'><span class='return-type'>void</span> OnFileDownloadFinished(UniWebView webView, int errorCode, string remoteUrl, string diskPath)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when a file download task finishes with either an error or success.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>errorCode</span></div>
    <div class='parameter-item-desc'><p>The error code of the download task result. Value <code>0</code> means the download finishes without a problem. 
Any other non-<code>0</code> value indicates an issue. The detail meaning of the error code depends on system. 
On iOS, it is usually the <code>errorCode</code> of the received <code>NSURLError</code>. On Android, the value usually represents
an <code>ERROR_*</code> value in <code>DownloadManager</code>.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>remoteUrl</span></div>
    <div class='parameter-item-desc'><p>The remote URL of this download task.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>diskPath</span></div>
    <div class='parameter-item-desc'><p>The file path of the downloaded file. On iOS, the downloader file is in a temporary folder of your app sandbox.
On Android, it is in the &quot;Download&quot; folder of your app.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnFileDownloadFinished <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> errorCode<span class="token punctuation">,</span> remoteUrl<span class="token punctuation">,</span> diskPath<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>errorCode <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Success</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"Download Finished. From '{0}', to '{1}'"</span><span class="token punctuation">,</span> remoteUrl<span class="token punctuation">,</span> diskPath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Download error: "</span> <span class="token operator">+</span> errorCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onmessagereceived'></div><div class='api-heading' data-id='onmessagereceived'><a href='#onmessagereceived'><span class='return-type'>void</span> OnMessageReceived(UniWebView webView, UniWebViewMessage message)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when a message from web view is received. </p>
<p>Generally, the message comes from a navigation to a scheme which is observed by current web view. You could use <code>AddUrlScheme</code> and 
<code>RemoveUrlScheme</code> to manipulate the scheme list.</p>
<p>&quot;uniwebview://&quot; scheme is default in the list, so a clicking on link starting with &quot;uniwebview://&quot;
will raise this event, if it is not removed.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewMessage</span> <span class='parameter-item-name'>message</span></div>
    <div class='parameter-item-desc'><p>The message object which contains information like message path and arguments.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnMessageReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Scheme<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Path<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token string">"param1"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token string">"param2"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Run the JavaScript below in the web page:</span>
<span class="token comment">// location.href = "uniwebview://host?param1=value1&amp;param2=value2"</span>
<span />
<span class="token comment">// => "uniwebview", "host", "value1", "value2"</span>
<span />
anotherWebView<span class="token punctuation">.</span>OnMessageReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>RawMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
anotherWebView<span class="token punctuation">.</span><span class="token function">AddUrlScheme</span><span class="token punctuation">(</span><span class="token string">"myscheme"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Click the link "myscheme://action" in a web page.</span>
<span class="token comment">// &lt;a href="myscheme://action">Click Me&lt;/a></span>
<span />
<span class="token comment">// => "myscheme://action"</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onshouldclose'></div><div class='api-heading' data-id='onshouldclose'><a href='#onshouldclose'><span class='return-type'>bool</span> OnShouldClose(UniWebView webView)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the web view is about to close itself.</p>
<p>This event is raised when the users close the web view by the Back button on Android, 
the Done button on iOS, or the Close button on Unity Editor. It gives a chance to make 
a final decision whether the web view should be closed and destroyed. You can also clean 
all related resources you created (such as a reference to the web view) in this event.</p>
<p>If this event is not listened and implemented, the web view will be closed and destroyed by default when
it needed.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>Whether the web view should be closed and destroyed.</p>
</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Clean webView field when </span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyBehaviour</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> webView<span class="token punctuation">;</span>
<span />
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        webView <span class="token operator">=</span> gameObject<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UniWebView<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        webView<span class="token punctuation">.</span>OnShouldClose <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            webView <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span />
<span class="token comment">// Make the web view there without being closed</span>
webView<span class="token punctuation">.</span>OnShouldClose <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onorientationchanged'></div><div class='api-heading' data-id='onorientationchanged'><a href='#onorientationchanged'><span class='return-type'>void</span> OnOrientationChanged(UniWebView webView, ScreenOrientation orientation)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the screen orientation is changed. It is a good time to set the web view frame if you 
need to support multiple orientations in your game.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>ScreenOrientation</span> <span class='parameter-item-name'>orientation</span></div>
    <div class='parameter-item-desc'><p>The screen orientation for current state.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Keep the web view full screen on both portrait and landscape mode.</span>
webView<span class="token punctuation">.</span>Frame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>width<span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span>OnOrientationChanged <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> orientation<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    webView<span class="token punctuation">.</span>Frame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>width<span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onwebcontentprocessterminated'></div><div class='api-heading' data-id='onwebcontentprocessterminated'><a href='#onwebcontentprocessterminated'><span class='return-type'>void</span> OnWebContentProcessTerminated(UniWebView webView)</a><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when on iOS, when system calls <code>webViewWebContentProcessDidTerminate</code> method. 
It is usually due to a low memory when loading the web content and leaves you a blank white screen. 
You need to free as much as the memory you could and then do a page reload.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Clean memory and reload current page</span>
webView<span class="token punctuation">.</span>OnWebContentProcessTerminated <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// Free memory</span>
    <span class="token comment">// unusedAssets.Clean();</span>
<span />
    webView<span class="token punctuation">.</span><span class="token function">Reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onmultiplewindowopened'></div><div class='api-heading' data-id='onmultiplewindowopened'><a href='#onmultiplewindowopened'><span class='return-type'>void</span> OnMultipleWindowOpened(UniWebView webView, string multipleWindowId)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when a new window is opened. This happens when you enable the <code>SetSupportMultipleWindows</code> and open a
new pop-up window.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which opens the new multiple (pop-up) window.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>multipleWindowId</span></div>
    <div class='parameter-item-desc'><p>The identifier of the opened new window.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">string</span></span> newWindow <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span>OnMultipleWindowOpened <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> windowId<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// A new window with identifier "windowId" is opened.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onmultiplewindowclosed'></div><div class='api-heading' data-id='onmultiplewindowclosed'><a href='#onmultiplewindowclosed'><span class='return-type'>void</span> OnMultipleWindowClosed(UniWebView webView, string multipleWindowId)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the multiple window is closed. This happens when the pop-up window is closed by navigation operation
or by a invocation of <code>close()</code> on the page.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which closes the multiple window.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>multipleWindowId</span></div>
    <div class='parameter-item-desc'><p>The identifier of the closed new window.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnMultipleWindowClosed <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> windowId<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// The opened window with identifier "windowId" is closed.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onkeycodereceived'></div><div class='api-heading' data-id='onkeycodereceived'><a href='#onkeycodereceived'><span class='return-type'>void</span> OnKeyCodeReceived(UniWebView webView, int keyCode)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when a key (like back button or volume up) on the device is pressed.</p>
<p>This event only raised on Android. It is useful when you disabled the back button but still need to get the back button event. On iOS, user&#39;s key action is not available and this event will never be 
raised.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        This event is deprecated from version 4.0. Now UniWebView never intercepts device key code events. 
So this event will be never raise anymore. Check <code>Input.GetKeyUp</code> in <code>Update()</code> instead.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebView</span> <span class='parameter-item-name'>webView</span></div>
    <div class='parameter-item-desc'><p>The web view component which raises this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>keyCode</span></div>
    <div class='parameter-item-desc'><p>The key code of pressed key. See <a href="https://developer.android.com/reference/android/view/KeyEvent.html#KEYCODE_0">Android API for keycode</a> to know the possible values.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// DON'T DO IT.</span>
<span class="token comment">// webView.OnKeyCodeReceived += (view, keyCode) => {</span>
<span class="token comment">//     if (keyCode == 4) {</span>
<span class="token comment">//         Debug.Log("Back Button was clicked.");</span>
<span class="token comment">//     }</span>
<span class="token comment">// };</span>
<span />
<span class="token comment">// Check Input in Update():</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Input<span class="token punctuation">.</span><span class="token function">GetKeyUp</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>Escape<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"Back Button was clicked."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='load'></div><div class='api-heading' data-id='load'><a href='#load'><span class='return-type'>void</span> Load(string url, bool skipEncoding, string readAccessURL)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Loads a url in current web view.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The url to be loaded. This url should start with <code>http://</code> or <code>https://</code> scheme, or retrieved from the path methods in <code>UniWebViewHelper</code>.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>skipEncoding</span></div>
    <div class='parameter-item-desc'><p>Whether UniWebView should skip encoding the url or not. If set to <code>false</code>, UniWebView will try to encode the url parameter before loading it. Otherwise, your original url string will be used as the url if it is valid. Default is <code>false</code>.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>readAccessURL</span></div>
    <div class='parameter-item-desc'><p>The URL to allow read access to. This parameter is only used when loading from the filesystem in iOS, and passed to <code>loadFileURL:allowingReadAccessToURL:</code> method of WebKit. By default, the parent folder of the <code>url</code> parameter will be read accessible.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Load a URL.</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://example.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Load a URL which is already escaped.</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://example.com?email=support%40uniwebview.com"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Load a local file, with "local_app_folder/root/images/" as its read access path.</span>
<span class="token class-name"><span class="token keyword">var</span></span> indexURL <span class="token operator">=</span> UniWebViewHelper<span class="token punctuation">.</span><span class="token function">StreamingAssetURLForPath</span><span class="token punctuation">(</span><span class="token string">"local_app_folder/root/page/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> accessURL <span class="token operator">=</span> UniWebViewHelper<span class="token punctuation">.</span><span class="token function">StreamingAssetURLForPath</span><span class="token punctuation">(</span><span class="token string">"/local_app_folder/root/images/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>indexURL<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> accessURL<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='loadhtmlstring'></div><div class='api-heading' data-id='loadhtmlstring'><a href='#loadhtmlstring'><span class='return-type'>void</span> LoadHTMLString(string htmlString, string baseUrl, bool skipEncoding)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Loads an HTML string in current web view.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>htmlString</span></div>
    <div class='parameter-item-desc'><p>The HTML string to use as the contents of the webpage.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>baseUrl</span></div>
    <div class='parameter-item-desc'><p>The url to use as the page&#39;s base url.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>skipEncoding</span></div>
    <div class='parameter-item-desc'><p>Whether UniWebView should skip encoding the baseUrl or not. If set to <code>false</code>, UniWebView will try to encode the baseUrl parameter before using it. Otherwise, your original url string will be used as the baseUrl if it is valid. Default is <code>false</code>.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">LoadHTMLString</span><span class="token punctuation">(</span><span class="token string">"&lt;p>Hello World&lt;/p>"</span><span class="token punctuation">,</span> <span class="token string">"https://domain.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='reload'></div><div class='api-heading' data-id='reload'><a href='#reload'><span class='return-type'>void</span> Reload()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Reloads the current page.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='stop'></div><div class='api-heading' data-id='stop'><a href='#stop'><span class='return-type'>void</span> Stop()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Stops loading all resources on the current page.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='goback'></div><div class='api-heading' data-id='goback'><a href='#goback'><span class='return-type'>void</span> GoBack()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Navigates to the back item in the back-forward list.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>webView<span class="token punctuation">.</span>CanGoBack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    webView<span class="token punctuation">.</span><span class="token function">GoBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='goforward'></div><div class='api-heading' data-id='goforward'><a href='#goforward'><span class='return-type'>void</span> GoForward()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Navigates to the forward item in the back-forward list.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>webView<span class="token punctuation">.</span>CanGoForward<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    webView<span class="token punctuation">.</span><span class="token function">GoForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setopenlinksinexternalbrowser'></div><div class='api-heading' data-id='setopenlinksinexternalbrowser'><a href='#setopenlinksinexternalbrowser'><span class='return-type'>void</span> SetOpenLinksInExternalBrowser(bool flag)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the link clicking in the web view should open the page in an external browser.</p>
<p>By default, when the user clicks a link, it will be opened in the same web view. After setting this with <code>true</code>, 
the user will be navigated to an external native browser.</p>
<p>On iOS, the mobile Safari; on Android, the default browser like Chrome; on macOS Editor, the default browser of your system will be used.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>The flag indicates whether a link should be opened externally.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// You may want to set it in OnPageFinished event, </span>
<span class="token comment">// otherwise the original page will be also opened externally</span>
webView<span class="token punctuation">.</span>OnPageFinished <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> statusCode<span class="token punctuation">,</span> url<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    webView<span class="token punctuation">.</span><span class="token function">SetOpenLinksInExternalBrowser</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='show'></div><div class='api-heading' data-id='show'><a href='#show'><span class='return-type'>bool</span> Show(bool fade, UniWebViewTransitionEdge edge, float duration, Action completionHandler)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the web view visible on screen.</p>
<p>If you pass <code>false</code> and <code>UniWebViewTransitionEdge.None</code> to the first two parameters, it means no animation will be applied when showing. So the <code>duration</code> parameter will not be taken into account. Otherwise, when 
either or both <code>fade</code> and <code>edge</code> set, the showing operation will be animated.</p>
<p>Regardless of there is an animation or not, the <code>completionHandler</code> will be called if not <code>null</code> when the web view
showing finishes.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>fade</span></div>
    <div class='parameter-item-desc'><p>Whether show with a fade in animation. Default is <code>false</code>.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewTransitionEdge</span> <span class='parameter-item-name'>edge</span></div>
    <div class='parameter-item-desc'><p>The edge from which the web view showing. It simulates a modal effect when showing a web view. Default is <code>UniWebViewTransitionEdge.None</code>.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>float</span> <span class='parameter-item-name'>duration</span></div>
    <div class='parameter-item-desc'><p>Duration of the showing animation. Default is <code>0.4f</code>.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Action</span> <span class='parameter-item-name'>completionHandler</span></div>
    <div class='parameter-item-desc'><p>Completion handler which will be called when showing finishes. Default is <code>null</code>.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>A <code>bool</code> value indicates whether the showing operation started.</p>
</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Show the web view without animation</span>
webView<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Show the web view with a fade animation</span>
webView<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Show the web view with a modal presenting animation from screen bottom</span>
webView<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> UniWebViewTransitionEdge<span class="token punctuation">.</span>Bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Print a message after the web view shown with animation</span>
webView<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> UniWebViewTransitionEdge<span class="token punctuation">.</span>Top<span class="token punctuation">,</span> <span class="token number">0.25f</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Show transition finished!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='hide'></div><div class='api-heading' data-id='hide'><a href='#hide'><span class='return-type'>bool</span> Hide(bool fade, UniWebViewTransitionEdge edge, float duration, Action completionHandler)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the web view invisible from screen.</p>
<p>If you pass <code>false</code> and <code>UniWebViewTransitionEdge.None</code> to the first two parameters, it means no animation will be applied when hiding. So the <code>duration</code> parameter will not be taken into account. Otherwise, when either or both <code>fade</code> and <code>edge</code> set, the hiding operation will be animated.</p>
<p>Regardless there is an animation or not, the <code>completionHandler</code> will be called if not <code>null</code> when the web view
hiding finishes.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        Hiding the web view does not destroy or release it. You can always call <code>Show</code> on the web view again to make it visible.

To release a web view and its resource, pass the web view component as the parameter of <code>Destroy</code>.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>fade</span></div>
    <div class='parameter-item-desc'><p>Whether hide with a fade in animation. Default is <code>false</code>.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewTransitionEdge</span> <span class='parameter-item-name'>edge</span></div>
    <div class='parameter-item-desc'><p>The edge from which the web view hiding. It simulates a modal effect when hiding a web view. Default is <code>UniWebViewTransitionEdge.None</code>.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>float</span> <span class='parameter-item-name'>duration</span></div>
    <div class='parameter-item-desc'><p>Duration of hiding animation. Default is <code>0.4f</code>.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Action</span> <span class='parameter-item-name'>completionHandler</span></div>
    <div class='parameter-item-desc'><p>Completion handler which will be called when hiding finishes. Default is <code>null</code>.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>A <code>bool</code> value indicates whether the hiding operation started.</p>
</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Hide the web view without animation</span>
webView<span class="token punctuation">.</span><span class="token function">Hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Hide the web view with a fade animation</span>
webView<span class="token punctuation">.</span><span class="token function">Hide</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Hide the web view with a modal presenting animation from screen bottom</span>
webView<span class="token punctuation">.</span><span class="token function">Hide</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> UniWebViewTransitionEdge<span class="token punctuation">.</span>Bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Print a message after the web view hidden with animation</span>
webView<span class="token punctuation">.</span><span class="token function">Hide</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> UniWebViewTransitionEdge<span class="token punctuation">.</span>Top<span class="token punctuation">,</span> <span class="token number">0.25f</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Hide transition finished!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='animateto'></div><div class='api-heading' data-id='animateto'><a href='#animateto'><span class='return-type'>bool</span> AnimateTo(Rect frame, float duration, float delay, Action completionHandler)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Animates the web view from current <code>Frame</code> (position and size) to another <code>Frame</code> (position and size) within <code>duration</code>.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Rect</span> <span class='parameter-item-name'>frame</span></div>
    <div class='parameter-item-desc'><p>The new <code>Frame</code> which the web view should be.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>float</span> <span class='parameter-item-name'>duration</span></div>
    <div class='parameter-item-desc'><p>Duration of the animation.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>float</span> <span class='parameter-item-name'>delay</span></div>
    <div class='parameter-item-desc'><p>Delay before the animation begins. Default is <code>0.0f</code>, which means the animation will start immediately.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Action</span> <span class='parameter-item-name'>completionHandler</span></div>
    <div class='parameter-item-desc'><p>Completion handler which will be called when animation finishes. Default is <code>null</code>.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>A <code>bool</code> value indicates whether the animation started.</p>
</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Animate current web view to cover half of the screen.</span>
<span class="token class-name"><span class="token keyword">var</span></span> halfScreen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>width<span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">AnimateTo</span><span class="token punctuation">(</span>halfScreen<span class="token punctuation">,</span> <span class="token number">0.4f</span><span class="token punctuation">,</span> <span class="token number">0.1f</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Animation finished!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='updateframe'></div><div class='api-heading' data-id='updateframe'><a href='#updateframe'><span class='return-type'>void</span> UpdateFrame()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Updates and sets current frame of web view to match the setting.</p>
<p>This is useful if the <code>referenceRectTransform</code> is changed and you need to sync the frame change
to the web view. This method follows the frame determining rules.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// In a UIBehavior script:</span>
<span class="token comment">// Called when associated `rectTransform` is changed.</span>
<span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnRectTransformDimensionsChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This will update web view's frame to match the reference rect transform if set.</span>
    webView<span class="token punctuation">.</span><span class="token function">UpdateFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='addjavascript'></div><div class='api-heading' data-id='addjavascript'><a href='#addjavascript'><span class='return-type'>void</span> AddJavaScript(string jsString, Action&lt;UniWebViewNativeResultPayload&gt; completionHandler)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Adds a JavaScript to current page. Normally, you add a JavaScript function or variable with this method.</p>
<p>The input <code>jsString</code> will be executed by current web view. If succeeded, the input JavaScript code will &quot;inject&quot; 
to the web view and a <code>UniWebViewNativeResultPayload</code> with <code>resultCode</code> being &quot;0&quot; will passed to the <code>completionHandler</code>.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>jsString</span></div>
    <div class='parameter-item-desc'><p>The JavaScript code to add. It should be a valid JavaScript statement string.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Action&lt;UniWebViewNativeResultPayload&gt;</span> <span class='parameter-item-name'>completionHandler</span></div>
    <div class='parameter-item-desc'><p>Called when adding JavaScript operation finishes. Default is <code>null</code>. If everything goes fine and the <code>jsString</code> added to current web view, <code>resultCode</code> would be &quot;0&quot;</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">AddJavaScript</span><span class="token punctuation">(</span><span class="token string">"function add() { return 1 + 2; }"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>resultCode<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span><span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"JavaScript adding finished without problem."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='evaluatejavascript'></div><div class='api-heading' data-id='evaluatejavascript'><a href='#evaluatejavascript'><span class='return-type'>void</span> EvaluateJavaScript(string jsString, Action&lt;UniWebViewNativeResultPayload&gt; completionHandler)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Evaluates a JavaScript string on current page. Normally you execute a certain JavaScript function or get a variable by this method.</p>
<p>The input <code>jsString</code> will be executed by current web view. Executing result will be sent back to you in the <code>completionHandler</code>. You could access the <code>data</code> member of <code>UniWebViewNativeResultPayload</code> passed in to get the JavaScript function return value.</p>
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
    <div class='parameter-item-desc'><p>Called when evaluating JavaScript operation finishes. Default is <code>null</code>. If everything goes find, the <code>resultCode</code> would be &quot;0&quot; and the return value of invoked JavaScript is contained in <code>data</code>.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Pop up an alert from web view.</span>
webView<span class="token punctuation">.</span><span class="token function">EvaluateJavaScript</span><span class="token punctuation">(</span><span class="token string">"alert('Alert!');"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>payload<span class="token punctuation">.</span>resultCode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => "0"</span>
    <span class="token function">print</span><span class="token punctuation">(</span>payload<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => ""</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Adding two numbers by a JavaScript function.</span>
webView<span class="token punctuation">.</span><span class="token function">AddJavaScript</span><span class="token punctuation">(</span><span class="token string">"function add(a, b) { return a + b; }"</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">completionHandler</span><span class="token punctuation">:</span> _ <span class="token operator">=></span> <span class="token punctuation">{</span>
    webView<span class="token punctuation">.</span><span class="token function">EvaluateJavaScript</span><span class="token punctuation">(</span><span class="token string">"add(4, 5);"</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">completionHandler</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>payload<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span>payload<span class="token punctuation">.</span>resultCode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => "0"</span>
        <span class="token function">print</span><span class="token punctuation">(</span>payload<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// => "9"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Call a JavaScript function not existing.</span>
webView<span class="token punctuation">.</span><span class="token function">EvaluateJavaScript</span><span class="token punctuation">(</span><span class="token string">"functionNotExisting()"</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">completionHandler</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>payload<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>payload<span class="token punctuation">.</span>resultCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// a non-zero value which indicates JavaScript error code.</span>
    <span class="token comment">// eg. "4" on iOS.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='addurlscheme'></div><div class='api-heading' data-id='addurlscheme'><a href='#addurlscheme'><span class='return-type'>void</span> AddUrlScheme(string scheme)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Adds a url scheme to UniWebView message system interpreter. All following url navigation to this scheme will be sent as a message to UniWebView instead.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>scheme</span></div>
    <div class='parameter-item-desc'><p>The URL scheme to add. It should not contain &quot;://&quot; part. You could even add &quot;http&quot; and/or &quot;https&quot; to prevent all resource loading on the page. &quot;uniwebview&quot; is added by default. Nothing will happen if you try to add a duplicated scheme.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Add "myscheme" as a UniWebView message scheme.</span>
webView<span class="token punctuation">.</span><span class="token function">AddUrlScheme</span><span class="token punctuation">(</span><span class="token string">"myscheme"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// A link like "myscheme://action" will be treated as a message and raise the `OnMessageReceived` event from now.</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='removeurlscheme'></div><div class='api-heading' data-id='removeurlscheme'><a href='#removeurlscheme'><span class='return-type'>void</span> RemoveUrlScheme(string scheme)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Removes a url scheme from UniWebView message system interpreter.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>scheme</span></div>
    <div class='parameter-item-desc'><p>The url scheme to remove. Nothing will happen if the scheme is not in the message system.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">RemoveUrlScheme</span><span class="token punctuation">(</span><span class="token string">"myscheme"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='addsslexceptiondomain'></div><div class='api-heading' data-id='addsslexceptiondomain'><a href='#addsslexceptiondomain'><span class='return-type'>void</span> AddSslExceptionDomain(string domain)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Adds a domain to the SSL checking white list.</p>
<p>If you are trying to access a website with un-trusted or expired certification, 
the web view will prevent its loading. If you could confirm that this site is trusted,
you can add the domain as an SSL exception, so you could visit it.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        We strongly suggest you upgrade your site certification to a trusted one. It would be dangerous to add a site as SSL exception and your user might be exposed to the risk of Man-in-the-middle attack. You should know exactly what you will do before adding a domain to the whitelist.
  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>domain</span></div>
    <div class='parameter-item-desc'><p>The domain to add. It should not contain any scheme or path part in url.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// This loading will fail since the certification is a self-signed one and not trusted.</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://self-signed.badssl.com/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span />
<span class="token comment">// Add "self-signed.badssl.com" as trusted.</span>
webView<span class="token punctuation">.</span><span class="token function">AddSslExceptionDomain</span><span class="token punctuation">(</span><span class="token string">"self-signed.badssl.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// This page should load now.</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://self-signed.badssl.com/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='removesslexceptiondomain'></div><div class='api-heading' data-id='removesslexceptiondomain'><a href='#removesslexceptiondomain'><span class='return-type'>void</span> RemoveSslExceptionDomain(string domain)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Removes a domain from the SSL checking white list.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>domain</span></div>
    <div class='parameter-item-desc'><p>The domain to remove. It should not contain any scheme or path part in url.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">RemoveSslExceptionDomain</span><span class="token punctuation">(</span><span class="token string">"self-signed.badssl.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setheaderfield'></div><div class='api-heading' data-id='setheaderfield'><a href='#setheaderfield'><span class='return-type'>void</span> SetHeaderField(string key, string value)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets a customized header field for web view requests.</p>
<p>The header field will be used for all subsequence request. 
Pass <code>null</code> as value to unset a header field.</p>
<p>Some reserved headers like user agent are not able to override by setting here, 
use the <code>SetUserAgent</code> method for them instead.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        Customized header fields will only be set for <code>GET</code> requests. The header fields set by this 
method will not be added when a form is submitted as <code>POST</code> requests, due to some limitation of WebKit on iOS 
and Android platforms.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>key</span></div>
    <div class='parameter-item-desc'><p>The key of customized header field.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>value</span></div>
    <div class='parameter-item-desc'><p>The value of customized header field. <code>null</code> if you want to unset the field.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Set "MyToken" field to "123abc" in a web view. It will be used for all following requests.</span>
webView<span class="token punctuation">.</span><span class="token function">SetHeaderField</span><span class="token punctuation">(</span><span class="token string">"MyToken"</span><span class="token punctuation">,</span> <span class="token string">"123abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Unset it</span>
webView<span class="token punctuation">.</span><span class="token function">SetHeaderField</span><span class="token punctuation">(</span><span class="token string">"MyToken"</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setuseragent'></div><div class='api-heading' data-id='setuseragent'><a href='#setuseragent'><span class='return-type'>void</span> SetUserAgent(string agent)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the user agent used in the web view. If the string is null or empty, the system default value will be used.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>agent</span></div>
    <div class='parameter-item-desc'><p>The new user agent string to use.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Set the user agent string sent in request header.</span>
webView<span class="token punctuation">.</span><span class="token function">SetUserAgent</span><span class="token punctuation">(</span><span class="token string">"My-App/1.0.0 (iOS 10.3, iPhone 7)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// => In request header:</span>
<span class="token comment">// User-Agent = "My-App/1.0.0 (iOS 10.3, iPhone 7)"</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='getuseragent'></div><div class='api-heading' data-id='getuseragent'><a href='#getuseragent'><span class='return-type'>string</span> GetUserAgent()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the user agent string currently used in web view. If a customized user agent is not set, the default user agent in current platform will be returned.</p>
</div>
                  <div class='section-title'>Return Value</div>
<div class='method-return'><p>The user agent string in use.</p>
</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Gets the default user agent.</span>
webView<span class="token punctuation">.</span><span class="token function">GetUserAgent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// => "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 ..."</span>
<span class="token comment">// This value varies in different platforms.</span>
<span />
<span class="token comment">// Sets a user agent and then get it.</span>
webView<span class="token punctuation">.</span><span class="token function">SetUserAgent</span><span class="token punctuation">(</span><span class="token string">"My-App/1.0.0 (iOS 10.3, iPhone 7)"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">GetUserAgent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// => "My-App/1.0.0 (iOS 10.3, iPhone 7)"</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setcontentinsetadjustmentbehavior'></div><div class='api-heading' data-id='setcontentinsetadjustmentbehavior'><a href='#setcontentinsetadjustmentbehavior'><span class='return-type'>void</span> SetContentInsetAdjustmentBehavior(UniWebViewContentInsetAdjustmentBehavior behavior)</a><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the adjustment behavior which indicates how safe area insets 
are added to the adjusted content inset. It is a wrapper of <a href="https://developer.apple.com/documentation/uikit/uiscrollview/2902261-contentinsetadjustmentbehavior"><code>contentInsetAdjustmentBehavior</code></a> on iOS.</p>
<p>It only works on iOS 11 and above.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        You need to call this method as soon as you create a web view,
before you call any other methods related to web view layout (like <code>Show</code> or <code>SetShowToolbar</code>).

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewContentInsetAdjustmentBehavior</span> <span class='parameter-item-name'>behavior</span></div>
    <div class='parameter-item-desc'><p>The behavior for determining the adjusted content offsets.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> webView <span class="token operator">=</span> gameObject<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UniWebView<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Do not adjust the scroll view insets in the web view.</span>
webView<span class="token punctuation">.</span><span class="token function">SetContentInsetAdjustmentBehavior</span><span class="token punctuation">(</span>UniWebViewContentInsetAdjustmentBehavior<span class="token punctuation">.</span>Never<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setallowautoplay'></div><div class='api-heading' data-id='setallowautoplay'><a href='#setallowautoplay'><span class='return-type'>void</span> SetAllowAutoPlay(bool flag)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets allow auto-play for current web view. By default, 
users need to touch the play button to start playing a media resource.</p>
<p>By setting this to <code>true</code>, you can start the playing automatically through
corresponding media <a href="https://www.w3schools.com/tags/att_video_autoplay.asp">tag attributes</a>.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        You need to set it before creating a web view. Existing web views are not affected.
  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>A flag indicates whether auto-playing of media is allowed or not.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>UniWebView<span class="token punctuation">.</span><span class="token function">SetAllowAutoPlay</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Create a new web view.</span>
<span class="token class-name"><span class="token keyword">var</span></span> webView <span class="token operator">=</span> gameObject<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UniWebView<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Now load and open a page which contains auto-started video to try</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_video_autoplay"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setallowinlineplay'></div><div class='api-heading' data-id='setallowinlineplay'><a href='#setallowinlineplay'><span class='return-type'>void</span> SetAllowInlinePlay(bool flag)</a><div class='api-badge api-badge-blue'>static</div><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets allow inline play for current web view. By default, on iOS, the video 
can only be played in a new full screen view.</p>
<p>By setting this to <code>true</code>, you could play a video inline the page, instead of opening 
a new full-screen window.</p>
<p>This only works for iOS and macOS Editor. 
On Android, you could play videos inline by default and calling this method does nothing.</p>
<p>Remember you also need to add &quot;playsinline&quot; attribute to your video tag in the HTML page.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        You need to set it before creating a web view. Existing web views are not affected.
  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>A flag indicates whether inline playing of media is allowed or not.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>UniWebView<span class="token punctuation">.</span><span class="token function">SetAllowInlinePlay</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Create a new web view.</span>
<span class="token class-name"><span class="token keyword">var</span></span> webView <span class="token operator">=</span> gameObject<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UniWebView<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Now load and open a page which contains inline video to try:</span>
<span class="token comment">// &lt;video src="file.mp4" playsinline> or &lt;video src="file.mp4" webkit-playsinline></span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://example.com/inline-video"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setallowfileaccess'></div><div class='api-heading' data-id='setallowfileaccess'><a href='#setallowfileaccess'><span class='return-type'>void</span> SetAllowFileAccess(bool flag)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether loading a local file is allowed.</p>
<p>If set to <code>false</code>, any load from a file URL <code>file://</code> for <code>Load</code> method will be rejected and trigger an 
<code>OnPageErrorReceived</code> event. That means you cannot load a web page from any local file. If you are not going to 
load any local files, setting it to <code>false</code> helps to reduce the interface of web view and improve the security.</p>
<p>By default, it is <code>true</code> and the local file URL loading is allowed.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>Whether the local file access by web view loading is allowed or not.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Forbid file:// URL loading.</span>
webView<span class="token punctuation">.</span><span class="token function">SetAllowFileAccess</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// This won't load and trigger an error in OnPageErrorReceived.</span>
<span class="token class-name"><span class="token keyword">var</span></span> url <span class="token operator">=</span> UniWebViewHelper<span class="token punctuation">.</span><span class="token function">StreamingAssetURLForPath</span><span class="token punctuation">(</span><span class="token string">"www/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setallowfileaccessfromfileurls'></div><div class='api-heading' data-id='setallowfileaccessfromfileurls'><a href='#setallowfileaccessfromfileurls'><span class='return-type'>void</span> SetAllowFileAccessFromFileURLs(bool flag)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether file access from file URLs is allowed.</p>
<p>By setting with <code>true</code>, access to file URLs inside the web view will be enabled and you could access 
sub-resources or make cross origin requests from local HTML files.</p>
<p>On iOS, it uses some &quot;hidden&quot; way by setting <code>allowFileAccessFromFileURLs</code> in config preferences for WebKit.
So it is possible that it stops working in a future version.</p>
<p>On Android, it sets the <code>WebSettings.setAllowFileAccessFromFileURLs</code> for the current web view.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        By setting this to <code>true</code>, you will bring some potential security issue to your app. Some malicious script 
would be able to read your sandbox. So we DO NOT recommend to enable it before you realize and understand the risk.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>Whether the file access inside web view from file URLs is allowed or not.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">SetAllowFileAccessFromFileURLs</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setacceptthirdpartycookies'></div><div class='api-heading' data-id='setacceptthirdpartycookies'><a href='#setacceptthirdpartycookies'><span class='return-type'>void</span> SetAcceptThirdPartyCookies(bool flag)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the UniWebView should allow third party cookies to be set. </p>
<p>By default, on Android, the third party
cookies are disallowed due to security reason. Setting this to <code>true</code> will allow the cookie manager to accept
third party cookies you set. </p>
<p>This method only works for Android. On iOS, this method does nothing and the third party cookies are always 
allowed.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>Whether the third party cookies should be allowed.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setallowuniversalaccessfromfileurls'></div><div class='api-heading' data-id='setallowuniversalaccessfromfileurls'><a href='#setallowuniversalaccessfromfileurls'><span class='return-type'>void</span> SetAllowUniversalAccessFromFileURLs(bool flag)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets allow universal access from file URLs. By default, on iOS, the <code>WKWebView</code> forbids any load of local files
through AJAX even when opening a local HTML file. It checks the CORS rules and fails at web view level. 
This is useful when you want access these files by setting the <code>allowUniversalAccessFromFileURLs</code> key of web view
configuration.</p>
<p>On iOS and macOS Editor. It uses some &quot;hidden&quot; way by setting <code>allowUniversalAccessFromFileURLs</code> in config 
for WebKit. So it is possible that it stops working in a future version.</p>
<p>On Android, it sets the <code>WebSettings.setAllowUniversalAccessFromFileURLs</code> and any later-created web views uses
that value.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        You need to set it before creating a web view. Existing web views are not affected.

By setting this to <code>true</code>, you will bring some potential security issue to your app. Some malicious script 
would be able to read your sandbox. So we DO NOT recommend to enable it before you realize and understand the risk.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>A flag indicates whether the universal access for files are allowed or not.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>UniWebView<span class="token punctuation">.</span><span class="token function">SetAllowUniversalAccessFromFileURLs</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Create a new web view.</span>
<span class="token class-name"><span class="token keyword">var</span></span> webView <span class="token operator">=</span> gameObject<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UniWebView<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setenablekeyboardavoidance'></div><div class='api-heading' data-id='setenablekeyboardavoidance'><a href='#setenablekeyboardavoidance'><span class='return-type'>void</span> SetEnableKeyboardAvoidance(bool flag)</a><div class='api-badge api-badge-blue'>static</div><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the web view area should avoid soft keyboard. It <code>true</code>, when the keyboard shows up, the web views
content view will resize itself to avoid keyboard overlap the web content. Otherwise, the web view will not resize
and just leave the content below under the soft keyboard.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        This method is only for Android. On iOS, the keyboard avoidance is built into the system directly and there is 
no way to change its behavior.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>Whether the keyboard should avoid web view content.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>UniWebView<span class="token punctuation">.</span><span class="token function">SetEnableKeyboardAvoidance</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Create a new web view.</span>
<span class="token class-name"><span class="token keyword">var</span></span> webView <span class="token operator">=</span> gameObject<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UniWebView<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setjavascriptenabled'></div><div class='api-heading' data-id='setjavascriptenabled'><a href='#setjavascriptenabled'><span class='return-type'>void</span> SetJavaScriptEnabled(bool enabled)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether JavaScript should be enabled in current web view. Default is enabled.</p>
<p>For a modern page, you may always want JavaScript enabled. However, if you could confirm that you are
not using any JavaScript in your page, you could turn it off to get better performance and safety.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        You need to set it before creating a web view. Existing web views are not affected.
  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether JavaScript should be enabled.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Disable JavaScript in web views created later.</span>
UniWebView<span class="token punctuation">.</span><span class="token function">SetJavaScriptEnabled</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// JavaScript is disabled in this web view.</span>
<span class="token class-name"><span class="token keyword">var</span></span> webView <span class="token operator">=</span> gameObject<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UniWebView<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setallowjavascriptopenwindow'></div><div class='api-heading' data-id='setallowjavascriptopenwindow'><a href='#setallowjavascriptopenwindow'><span class='return-type'>void</span> SetAllowJavaScriptOpenWindow(bool flag)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether JavaScript can open windows without user interaction.</p>
<p>By setting this to <code>true</code>, an automatically JavaScript navigation will be allowed in the web view.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        You need to set it before creating a web view. Existing web views are not affected.
  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>Whether JavaScript could open window automatically.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Allow JavaScript open window automatically.</span>
UniWebView<span class="token punctuation">.</span><span class="token function">SetAllowJavaScriptOpenWindow</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token class-name"><span class="token keyword">var</span></span> webView <span class="token operator">=</span> gameObject<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>UniWebView<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Now, the following JavaScript code could navigate to </span>
<span class="token comment">// "example.com" without user interaction in `webView`.</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> 'https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>example<span class="token punctuation">.</span>com'<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setcalloutenabled'></div><div class='api-heading' data-id='setcalloutenabled'><a href='#setcalloutenabled'><span class='return-type'>void</span> SetCalloutEnabled(bool enabled)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether a callout (context) menu should be displayed when user long tapping on certain web view content.</p>
<p>When enabled, when user long presses an image or link in the web page, a context menu would be show up to ask 
user&#39;s action. On iOS, it is a action sheet to ask whether opening the target link or saving the image. On 
Android it is a pop up dialog to ask whether saving the image to local disk. On iOS, the preview page triggered 
by force touch on iOS is also considered as a callout menu.</p>
<p>Default is <code>true</code>, means that the callout menu will be displayed. Call this method with <code>false</code> to disable it 
on the web view.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether a callout menu should be displayed when user long pressing or force touching a certain web page element.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Disable callout menu in the web view.</span>
webView<span class="token punctuation">.</span><span class="token function">SetCalloutEnabled</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setsupportmultiplewindows'></div><div class='api-heading' data-id='setsupportmultiplewindows'><a href='#setsupportmultiplewindows'><span class='return-type'>void</span> SetSupportMultipleWindows(bool enabled, bool allowJavaScriptOpening)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the web view should support a pop up web view triggered by user in a new tab.</p>
<p>In a general web browser (such as Google Chrome or Safari), a URL with <code>target=&quot;_blank&quot;</code> attribute is intended 
to be opened in a new tab. However, in the context of web view, there is no way to handle new tabs without 
proper configurations. Due to that, by default UniWebView will ignore the <code>target=&quot;_blank&quot;</code> and try to open 
the page in the same web view if that kind of link is pressed.</p>
<p>It works for most cases, but if this is a problem to your app logic, you can change this behavior by calling 
this method with <code>true</code>. It enables the &quot;opening in new tab&quot; behavior in a limited way, by adding the new tab 
web view above to the current web view, with the same size and position. When the opened new tab is closed, 
it will be removed from the view hierarchy automatically.</p>
<p>By default, only user triggered action is allowed to open a new window for security reason. That means, if you 
are using some JavaScript like <code>window.open</code>, unless you set <code>allowJavaScriptOpening</code> to <code>true</code>, it won&#39;t work. 
This default behavior prevents any other third party JavaScript code from opening a window arbitrarily.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether to support multiple windows. If <code>true</code>, the <code>target=&quot;_blank&quot;</code> link will be opened in a new web view. 
Default is <code>false</code>.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>allowJavaScriptOpening</span></div>
    <div class='parameter-item-desc'><p>Whether to support open the new window with JavaScript by <code>window.open</code>. Setting this to <code>true</code> means any JavaScript
code, even from third party (in an iframe or a library on the page), can open a new window. Use it as your risk.</p>
<p>Usually, when passing <code>true</code> to this parameter, you may also want to call <code>SetAllowJavaScriptOpenWindow</code> with <code>true</code>
before creating the web view.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setdefaultfontsize'></div><div class='api-heading' data-id='setdefaultfontsize'><a href='#setdefaultfontsize'><span class='return-type'>void</span> SetDefaultFontSize(int size)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the default font size used in the web view.</p>
<p>On Android, the web view font size can be affected by the system font scale setting. Use this method to set the 
font size in a more reasonable way, by giving the web view another default font size with the system font scale 
considered. It can removes or reduces the effect of system font scale when displaying the web content.</p>
<p>This method only works on Android. On iOS, this method does nothing since the web view will respect the font 
size setting in your CSS styles.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>size</span></div>
    <div class='parameter-item-desc'><p>The target default font size set to the web view.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settextzoom'></div><div class='api-heading' data-id='settextzoom'><a href='#settextzoom'><span class='return-type'>void</span> SetTextZoom(int textZoom)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the text zoom used in the web view.</p>
<p>On Android, this method call <a href="https://developer.android.com/reference/android/webkit/WebSettings#setTextZoom(int)"><code>WebSettings.setTextZoom</code></a> 
to the the text zoom used in the web view.</p>
<p>This method only works on Android.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>textZoom</span></div>
    <div class='parameter-item-desc'><p>The text zoom in percent.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setdraginteractionenabled'></div><div class='api-heading' data-id='setdraginteractionenabled'><a href='#setdraginteractionenabled'><span class='return-type'>void</span> SetDragInteractionEnabled(bool enabled)</a><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the drag interaction should be enabled on iOS.</p>
<p>From iOS 11, the iPad web view supports the drag interaction when user long presses an image, link or text.
Setting this to <code>false</code> would disable the drag feather on the web view.</p>
<p>This method only works on iOS. It does nothing on Android or macOS editor. Default is <code>true</code>, which means
drag interaction on iPad is enabled.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether the drag interaction should be enabled.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Disable the drag interaction in the web view.</span>
webView<span class="token punctuation">.</span><span class="token function">SetDragInteractionEnabled</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='cleancache'></div><div class='api-heading' data-id='cleancache'><a href='#cleancache'><span class='return-type'>void</span> CleanCache()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Cleans web view cache. This removes cached local data of web view.</p>
<p>If you need to clear all cookies, use <code>ClearCookies</code> instead.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setcookie'></div><div class='api-heading' data-id='setcookie'><a href='#setcookie'><span class='return-type'>void</span> SetCookie(string url, string cookie, bool skipEncoding)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets a cookie for a certain url.</p>
<p>The <code>cookie</code> string supports all available cookie properties as well as multiple cookies. See </p>
<p>UniWebView respects the server cookie header by default. Generally, you do not need to set the cookie from client manually. However, if you have to pass your server a manually set cookie, 
use this method.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The url to which cookie will be set.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>cookie</span></div>
    <div class='parameter-item-desc'><p>The cookie string to set. Need more information on cookie? See the <a href="https://en.wikipedia.org/wiki/HTTP_cookie">HTTP cookie</a> page.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>skipEncoding</span></div>
    <div class='parameter-item-desc'><p>Whether UniWebView should skip encoding the url or not. If set to <code>false</code>, UniWebView will try to encode the url parameter before using it. Otherwise, your original url string will be used to set the cookie if it is valid. Default is <code>false</code>.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Set a cookie "testCookie=1" to current url/domain.</span>
UniWebView<span class="token punctuation">.</span><span class="token function">SetCookie</span><span class="token punctuation">(</span>webView<span class="token punctuation">.</span>Url<span class="token punctuation">,</span> <span class="token string">"testCookie=1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Set a full properties specified cookie.</span>
UniWebView<span class="token punctuation">.</span><span class="token function">SetCookie</span><span class="token punctuation">(</span><span class="token string">"https://example.com"</span><span class="token punctuation">,</span> <span class="token string">"sessionToken=abc123; Expires=Wed, 09 Jun 2021 10:18:14 GMT"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='getcookie'></div><div class='api-heading' data-id='getcookie'><a href='#getcookie'><span class='return-type'>string</span> GetCookie(string url, string key, bool skipEncoding)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the cookie value under a url and key.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The url (domain) where the target cookie is.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>key</span></div>
    <div class='parameter-item-desc'><p>The key for target cookie value.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>skipEncoding</span></div>
    <div class='parameter-item-desc'><p>Whether UniWebView should skip encoding the url or not. If set to <code>false</code>, UniWebView will try to encode the url parameter before using it. Otherwise, your original url string will be used to get the cookie if it is valid. Default is <code>false</code>.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'><p>Value of the target cookie under url.</p>
</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>UniWebView<span class="token punctuation">.</span><span class="token function">GetCookie</span><span class="token punctuation">(</span><span class="token string">"https://example.com"</span><span class="token punctuation">,</span> <span class="token string">"testCookie"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// => The corresponding cookie value. Or "" if there is no such cookie.</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='removecookies'></div><div class='api-heading' data-id='removecookies'><a href='#removecookies'><span class='return-type'>void</span> RemoveCookies(string url, bool skipEncoding)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Removes all the cookies under a url.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The url (domain) where the target cookie is.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>skipEncoding</span></div>
    <div class='parameter-item-desc'><p>Whether UniWebView should skip encoding the url or not. If set to <code>false</code>, UniWebView will try to encode the url parameter before using it. Otherwise, your original url string will be used to get the cookie if it is valid. Default is <code>false</code>.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>UniWebView<span class="token punctuation">.</span><span class="token function">RemoveCookies</span><span class="token punctuation">(</span><span class="token string">"https://example.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='removecooke'></div><div class='api-heading' data-id='removecooke'><a href='#removecooke'><span class='return-type'>void</span> RemoveCookie(string url, string key, bool skipEncoding)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Removes the certain cookie under a url for the specified key.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The url (domain) where the target cookie is.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>key</span></div>
    <div class='parameter-item-desc'><p>The key for target cookie.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>skipEncoding</span></div>
    <div class='parameter-item-desc'><p>Whether UniWebView should skip encoding the url or not. If set to <code>false</code>, UniWebView will try to encode the url parameter before using it. Otherwise, your original url string will be used to get the cookie if it is valid. Default is <code>false</code>.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>UniWebView<span class="token punctuation">.</span><span class="token function">RemoveCookie</span><span class="token punctuation">(</span><span class="token string">"https://example.com"</span><span class="token punctuation">,</span> <span class="token string">"SID"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='clearcookies'></div><div class='api-heading' data-id='clearcookies'><a href='#clearcookies'><span class='return-type'>void</span> ClearCookies()</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Clear all cookies from web views.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        This will clear cookies from all domains in the web view and previous. If you only need to remove cookies from a certain domain, use <code>RemoveCookies</code> instead.
  </p>
</div>
                  <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>UniWebView<span class="token punctuation">.</span><span class="token function">ClearCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='clearhttpauthusernamepassword'></div><div class='api-heading' data-id='clearhttpauthusernamepassword'><a href='#clearhttpauthusernamepassword'><span class='return-type'>void</span> ClearHttpAuthUsernamePassword(string host, string realm)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Clears any saved credentials for HTTP authentication for both Basic and Digest.</p>
<p>On both iOS and Android, the user input credentials will be stored permanently across the session.
It could prevent your users to input username and password again until they changed. If you need the 
credentials only living in a shorter lifetime, call this method at proper timing.</p>
<p>On iOS, it will clear the credentials immediately and completely from both disk and network cache. 
On Android, it only clears from disk database, the authentication might be still cached in the network stack and will not be removed until next session (app restarting). </p>
<p>The client logout mechanism should be implemented by the Web site designer (such as server sending an HTTP 401 for invalidating credentials).</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>host</span></div>
    <div class='parameter-item-desc'><p>The host to which the credentials apply. It should not contain any thing like scheme or path part.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>realm</span></div>
    <div class='parameter-item-desc'><p>The realm to which the credentials apply.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>UniWebView<span class="token punctuation">.</span><span class="token function">ClearHttpAuthUsernamePassword</span><span class="token punctuation">(</span><span class="token string">"uniwebview.com"</span><span class="token punctuation">,</span> <span class="token string">"UniWebViewUserRealm"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setshowspinnerwhileloading'></div><div class='api-heading' data-id='setshowspinnerwhileloading'><a href='#setshowspinnerwhileloading'><span class='return-type'>void</span> SetShowSpinnerWhileLoading(bool flag)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether to show a loading indicator while the loading is in progress.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>Whether an indicator should show.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setspinnertext'></div><div class='api-heading' data-id='setspinnertext'><a href='#setspinnertext'><span class='return-type'>void</span> SetSpinnerText(string text)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the text displayed in the loading indicator, if <code>SetShowSpinnerWhileLoading</code> is set to <code>true</code>.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>text</span></div>
    <div class='parameter-item-desc'><p>The text to display while loading indicator visible. Default is &quot;Loading...&quot;</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='sethorizontalscrollbarenabled'></div><div class='api-heading' data-id='sethorizontalscrollbarenabled'><a href='#sethorizontalscrollbarenabled'><span class='return-type'>void</span> SetHorizontalScrollBarEnabled(bool enabled)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the horizontal scroll bar should show when the web content beyonds web view bounds.</p>
<p>This only works on mobile platforms. It will do nothing on macOS Editor.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether enable the scroll bar or not.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setverticalscrollbarenabled'></div><div class='api-heading' data-id='setverticalscrollbarenabled'><a href='#setverticalscrollbarenabled'><span class='return-type'>void</span> SetVerticalScrollBarEnabled(bool enabled)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the vertical scroll bar should show when the web content beyonds web view bounds.</p>
<p>This only works on mobile platforms. It will do nothing on macOS Editor.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether enable the scroll bar or not.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setbouncesenabled'></div><div class='api-heading' data-id='setbouncesenabled'><a href='#setbouncesenabled'><span class='return-type'>void</span> SetBouncesEnabled(bool enabled)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the web view should show with a bounces effect when scrolling to page edge.</p>
<p>This only works on mobile platforms. It will do nothing on macOS Editor.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether enable the bounces effect should be applied or not.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setzoomenabled'></div><div class='api-heading' data-id='setzoomenabled'><a href='#setzoomenabled'><span class='return-type'>void</span> SetZoomEnabled(bool enabled)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the web view supports zoom gesture to change content size. Default is <code>false</code>, which means the zoom gesture is not supported.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether the zoom gesture is allowed or not.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='addpermissiontrustdomain'></div><div class='api-heading' data-id='addpermissiontrustdomain'><a href='#addpermissiontrustdomain'><span class='return-type'>void</span> AddPermissionTrustDomain(string domain)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Adds a trusted domain to white list and allow permission requests from the domain.</p>
<p>You only need this on Android devices with the system before 6.0 when a site needs the location or camera permission. It will allow the permission gets approved so you could access the corresponding devices.
From Android 6.0, the permission requests method is changed and this is not needed anymore.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        This method is not the same to <code>AddSslExceptionDomain</code>, 
which is for bypassing SSL checking. You only need this method when 
you have trouble in granting users&#39; permission. It is not needed on iOS.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>domain</span></div>
    <div class='parameter-item-desc'><p>The domain to add to the white list.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">AddPermissionTrustDomain</span><span class="token punctuation">(</span><span class="token string">"my-own-site.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='removepermissiontrustdomain'></div><div class='api-heading' data-id='removepermissiontrustdomain'><a href='#removepermissiontrustdomain'><span class='return-type'>void</span> RemovePermissionTrustDomain(string domain)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Removes a trusted domain from white list.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>domain</span></div>
    <div class='parameter-item-desc'><p>The domain to remove from white list.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setbackbuttonenabled'></div><div class='api-heading' data-id='setbackbuttonenabled'><a href='#setbackbuttonenabled'><span class='return-type'>void</span> SetBackButtonEnabled(bool enabled)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the device back button should be enabled to execute &quot;go back&quot; or &quot;closing&quot; operation.</p>
<p>On Android, the device back button in navigation bar will navigate users to a back page. If there is no any back page available, the back button clicking will try to raise an <code>OnShouldClose</code> event and try to close the web view if <code>true</code> is return from the event. If the <code>OnShouldClose</code> event is not listened to,  the web view will be closed and the UniWebView component will be destroyed to release any resource in use.</p>
<p>Listen to <code>OnKeyCodeReceived</code> if you need to disable the back button, but still, want to get the back button key pressing event.</p>
<p>This method is only for Android. On iOS, you could show a toolbar with navigation and Done buttons for 
similar purpose or call <code>SetAllowBackForwardNavigationGestures</code> to enable gesture based navigation on iOS.</p>
<p>The default is enabled.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether the back button should perform go back or closing operation to web view.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setusewideviewport'></div><div class='api-heading' data-id='setusewideviewport'><a href='#setusewideviewport'><span class='return-type'>void</span> SetUseWideViewPort(bool flag)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the web view should enable support for the &quot;viewport&quot; HTML meta tag or should use a wide viewport.</p>
<p>This method is only for Android. The default is disabled.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>Whether to enable support for the viewport meta tag.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setloadwithoverviewmode'></div><div class='api-heading' data-id='setloadwithoverviewmode'><a href='#setloadwithoverviewmode'><span class='return-type'>void</span> SetLoadWithOverviewMode(bool flag)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the web view loads pages in overview mode, that is, zooms out the content to fit on screen by width.</p>
<p>This method is only for Android. The default is disabled.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>Whether to enable support for the overview mode.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setimmersivemodeenabled'></div><div class='api-heading' data-id='setimmersivemodeenabled'><a href='#setimmersivemodeenabled'><span class='return-type'>void</span> SetImmersiveModeEnabled(bool enabled)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the web view should behave in immersive mode, that is, 
hides the status bar and navigation bar with a sticky style.</p>
<p>If disabled, the navigation bar will always show up while the web view is visible.</p>
<p>This method is only for Android. The default is enabled.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether to enable immersive mode when web view is showing up.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setshowtoolbar'></div><div class='api-heading' data-id='setshowtoolbar'><a href='#setshowtoolbar'><span class='return-type'>void</span> SetShowToolbar(bool show, bool animated, bool onTop, bool adjustInset)</a><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether to show a toolbar which contains navigation buttons and Done button.</p>
<p>You could choose to show or hide the toolbar. By configuring the <code>animated</code> and <code>onTop</code> 
parameters, you can control the animating and position of the toolbar. If the toolbar is overlapping with some part of your web view, pass <code>adjustInset</code> with <code>true</code> to have the web view relocating itself to avoid the overlap.</p>
<p>This method is only for iOS. The toolbar is hidden by default.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>show</span></div>
    <div class='parameter-item-desc'><p>Whether the toolbar should show or hide.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>animated</span></div>
    <div class='parameter-item-desc'><p>Whether the toolbar state changing should be with animation. Default is <code>false</code>.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>onTop</span></div>
    <div class='parameter-item-desc'><p>Whether the toolbar should snap to top of screen or to bottom of screen. Default is <code>true</code></p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>adjustInset</span></div>
    <div class='parameter-item-desc'><p>Whether the toolbar transition should also adjust web view position and size if overlapped. Default is <code>false</code></p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Show a toolbar at top of screen with animation.</span>
webView<span class="token punctuation">.</span><span class="token function">SetShowToolbar</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Hide the tool bar without animation. At the same time, make </span>
<span class="token comment">// the web view snap to screen top if there was overlapping between </span>
<span class="token comment">// the web view and toolbar.</span>
webView<span class="token punctuation">.</span><span class="token function">SetShowToolbar</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settoolbardonebuttontext'></div><div class='api-heading' data-id='settoolbardonebuttontext'><a href='#settoolbardonebuttontext'><span class='return-type'>void</span> SetToolbarDoneButtonText(string text)</a><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the done button text in toolbar.</p>
<p>By default, UniWebView will show a &quot;Done&quot; button at bottom-right corner in the toolbar. You could change its title by passing a text.</p>
<p>This method is only for iOS since there is no toolbar on Android.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>text</span></div>
    <div class='parameter-item-desc'><p>The text needed to be set as done button title.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">SetToolbarDoneButtonText</span><span class="token punctuation">(</span><span class="token string">"关闭"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settoolbargobackbuttontext'></div><div class='api-heading' data-id='settoolbargobackbuttontext'><a href='#settoolbargobackbuttontext'><span class='return-type'>void</span> SetToolbarGoBackButtonText(string text)</a><div class='api-badge api-badge-orange'>iOS</div><div class='api-badge api-badge-purple'>macOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the go back button text in toolbar.</p>
<p>By default, UniWebView will show a back arrow at the left side in the toolbar. You could change its text.</p>
<p>This method is only for iOS and macOS Editor, since there is no toolbar on Android.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>text</span></div>
    <div class='parameter-item-desc'><p>The text needed to be set as go back button.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">SetToolbarGoBackButtonText</span><span class="token punctuation">(</span><span class="token string">"返回"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settoolbargoforwardbuttontext'></div><div class='api-heading' data-id='settoolbargoforwardbuttontext'><a href='#settoolbargoforwardbuttontext'><span class='return-type'>void</span> SetToolbarGoForwardButtonText(string text)</a><div class='api-badge api-badge-orange'>iOS</div><div class='api-badge api-badge-purple'>macOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the go forward button text in toolbar.</p>
<p>By default, UniWebView will show a forward arrow at the left side in the toolbar. You could change its text.</p>
<p>This method is only for iOS and macOS Editor, since there is no toolbar on Android.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>text</span></div>
    <div class='parameter-item-desc'><p>The text needed to be set as go forward button.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">SetToolbarGoForwardButtonText</span><span class="token punctuation">(</span><span class="token string">"前进"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setshowtoolbarnavigationbuttons'></div><div class='api-heading' data-id='setshowtoolbarnavigationbuttons'><a href='#setshowtoolbarnavigationbuttons'><span class='return-type'>void</span> SetShowToolbarNavigationButtons(bool show)</a><div class='api-badge api-badge-orange'>iOS</div><div class='api-badge api-badge-purple'>macOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the visibility of navigation buttons, such as &quot;Go Back&quot; and &quot;Go Forward&quot;, on toolbar.</p>
<p>By default, UniWebView will show the &quot;Go Back&quot; and &quot;Go Forward&quot; navigation buttons on the toolbar.
Users can use these buttons to perform go back or go forward action just like in a browser. If the navigation
model is not for your case, call this method with <code>false</code> as <code>show</code> parameter to hide them.</p>
<p>This method is only for iOS, since there is no toolbar on Android.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>show</span></div>
    <div class='parameter-item-desc'><p>Whether the navigation buttons on the toolbar should show or hide.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settoolbartintcolor'></div><div class='api-heading' data-id='settoolbartintcolor'><a href='#settoolbartintcolor'><span class='return-type'>void</span> SetToolbarTintColor(Color color)</a><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the background tint color for the toolbar.</p>
<p>By default, UniWebView uses a default half-transparent iOS standard background for toolbar.
You can change it by setting a new opaque color.</p>
<p>This method is only for iOS, since there is no toolbar on Android.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>The color should be used for the background tint of the toolbar.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settoolbartextcolor'></div><div class='api-heading' data-id='settoolbartextcolor'><a href='#settoolbartextcolor'><span class='return-type'>void</span> SetToolbarTextColor(Color color)</a><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the button text color for the toolbar.</p>
<p>By default, UniWebView uses the default text color on iOS, which is blue for most cases.
You can change it by setting a new opaque color.</p>
<p>This method is only for iOS, since there is no toolbar on Android.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>The color should be used for the button text of the toolbar.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setuserinteractionenabled'></div><div class='api-heading' data-id='setuserinteractionenabled'><a href='#setuserinteractionenabled'><span class='return-type'>void</span> SetUserInteractionEnabled(bool enabled)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the web view can receive user interaction or not.</p>
<p>By setting this to <code>false</code>, the web view will not accept any user touch event so your users cannot tap links or
scroll the page.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether the user interaction should be enabled or not.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settransparencyclickingthroughenabled'></div><div class='api-heading' data-id='settransparencyclickingthroughenabled'><a href='#settransparencyclickingthroughenabled'><span class='return-type'>void</span> SetTransparencyClickingThroughEnabled(bool enabled)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the web view should pass through clicks at its clear pixels to Unity scene.</p>
<p>Setting this method is a pre-condition for the whole passing-through feature to work. To allow your touch passing through
to Unity scene, the following conditions should be met at the same time:</p>
<ol>
<li>This method is called with <code>true</code>. It enables the web view to check every touch on the web view.</li>
<li>The web view has a transparent background in body style for its content by CSS.</li>
<li>The web view itself has a transparent background color by setting <code>BackgroundColor</code> with a clear color.</li>
</ol>
<p>Then, when user clicks on the clear pixel on the web view, the touch events will not be handled by the web view.
Instead, these events are passed to Unity scene. By using this feature, it is possible to create a UI for your game 
with the web view.</p>
<p>Only clicks on transparent part on the web view will be delivered to Unity scene. The web view still intercepts
and handles other touches on visible pixels on the web view.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether the transparency clicking through feature should be enabled in this web view.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Allow transparency clicking through.</span>
webView<span class="token punctuation">.</span><span class="token function">SetTransparencyClickingThroughEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Make Unity scene visible.</span>
webView<span class="token punctuation">.</span>BackgroundColor <span class="token operator">=</span> Color<span class="token punctuation">.</span>clear<span class="token punctuation">;</span>
<span />
<span class="token comment">// Disable the scrolling bounces effect to fix the web UI.</span>
webView<span class="token punctuation">.</span><span class="token function">SetBouncesEnabled</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Other configuration, usually handle some messages from web view.</span>
webView<span class="token punctuation">.</span>OnMessageReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setwebcontentsdebuggingenabled'></div><div class='api-heading' data-id='setwebcontentsdebuggingenabled'><a href='#setwebcontentsdebuggingenabled'><span class='return-type'>void</span> SetWebContentsDebuggingEnabled(bool enabled)</a><div class='api-badge api-badge-green'>Android</div><div class='api-badge api-badge-purple'>macOS</div><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Enables debugging of web contents. You could inspect of the content of a 
web view by using a browser development tool of Chrome for Android or Safari for macOS.</p>
<p>This method is only for Android and macOS Editor. On iOS, you do not need an additional step. 
You could open Safari&#39;s developer tools to debug a web view on iOS.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        Due to a memory bug under WebKit and Unity, it might crash your macOS Editor when you stop playing with an inspector showing embedded in a web view. You could close the inspector first or use it as a standalone window to avoid this. It will only happen in the editor and never affect real devices. 

Please remember to disable this in your product build. This should be only used while development.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether the content debugging should be enabled.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setwindowuserresizeenabled'></div><div class='api-heading' data-id='setwindowuserresizeenabled'><a href='#setwindowuserresizeenabled'><span class='return-type'>void</span> SetWindowUserResizeEnabled(bool enabled)</a><div class='api-badge api-badge-purple'>macOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Enables user resizing for web view window. By default, you can only set the window size by setting its frame on mac Editor. 
By enabling user resizing, you would be able to resize the window by dragging its border as a normal macOS window.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        This method only works for macOS for debugging purpose. It does nothing on iOS and Android.
  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether the window could be able to be resized by the cursor.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setallowbackforwardnavigationgestures'></div><div class='api-heading' data-id='setallowbackforwardnavigationgestures'><a href='#setallowbackforwardnavigationgestures'><span class='return-type'>void</span> SetAllowBackForwardNavigationGestures(bool flag)</a><div class='api-badge api-badge-orange'>iOS</div><div class='api-badge api-badge-purple'>macOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether horizontal swipe gestures should trigger back-forward list navigation.</p>
<p>By setting with <code>true</code>, users can swipe from screen edge to perform a back or forward navigation.
This method only works on iOS and macOS Editor. Default is <code>false</code>. </p>
<p>On Android, the screen navigation gestures are simulating the traditional back button and it is enabled by 
default. To disable gesture navigation on Android, you have to also disable the device back button. See 
<code>SetBackButtonEnabled</code> for that purpose.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>The value indicates whether a swipe gestures driven navigation should be allowed. Default is <code>false</code>.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">SetAllowBackForwardNavigationGestures</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setallowhttpauthpopupwindow'></div><div class='api-heading' data-id='setallowhttpauthpopupwindow'><a href='#setallowhttpauthpopupwindow'><span class='return-type'>void</span> SetAllowHTTPAuthPopUpWindow(bool flag)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether a prompt alert should be displayed for collection username and password when the web view receives an
HTTP authentication challenge (HTTP Basic or HTTP Digest) from server.</p>
<p>By setting with <code>false</code>, no prompt will be shown and the user cannot login with input credentials. In this case,
you can only access this page by providing username and password through the URL like: &quot;<a href="http://username:password@example.com&quot;">http://username:password@example.com&quot;</a>.
If the username and password does not match, normally an error with 401 as status code would be returned (this behavior depends
on the server implementation). If set with <code>true</code>, a prompt will be shown when there is no credentials provided or it is not
correct in the URL.</p>
<p>Default is <code>true</code>.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>Whether a prompt alert should be shown for HTTP authentication challenge or not.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// This URL requires HTTP Basic authentication.</span>
<span class="token class-name"><span class="token keyword">var</span></span> url <span class="token operator">=</span> <span class="token string">"https://example.com/auth/http-basic"</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// A prompt alert will be shown and user has a chance to input their username/password.</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Setting to false, this will use "username" and "password" to response server challenge.</span>
webView<span class="token punctuation">.</span><span class="token function">SetAllowHTTPAuthPopUpWindow</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://username:password@example.com/auth/http-basic"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Loading a URL but not providing credentials and no chance for user to input.</span>
<span class="token comment">// An error might be raised according to your server implementation.</span>
webView<span class="token punctuation">.</span><span class="token function">SetAllowHTTPAuthPopUpWindow</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='gethtmlcontent'></div><div class='api-heading' data-id='gethtmlcontent'><a href='#gethtmlcontent'><span class='return-type'>void</span> GetHTMLContent(Action&lt;string&gt; handler)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the HTML content from current page by accessing its <code>outerHTML</code> with JavaScript.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Action&lt;string&gt;</span> <span class='parameter-item-name'>handler</span></div>
    <div class='parameter-item-desc'><p>Called after the JavaScript executed. The parameter <code>string</code> is the content read from page.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">GetHTMLContent</span><span class="token punctuation">(</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// => "&lt;html>&lt;head> ... &lt;/html>"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='print'></div><div class='api-heading' data-id='print'><a href='#print'><span class='return-type'>void</span> Print()</a><div class='api-badge api-badge-orange'>iOS</div><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Prints current page.</p>
<p>By calling this method, a native print preview panel will be brought up on iOS and Android. 
This method does nothing on macOS editor.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        On iOS and Android, the web view does not support JavaScript (window.print()), you can only initialize a print job from Unity by this method.
  </p>
</div>
                      </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='capturesnapshot'></div><div class='api-heading' data-id='capturesnapshot'><a href='#capturesnapshot'><span class='return-type'>void</span> CaptureSnapshot(string fileName)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Capture the content of web view and store it to the cache path on disk with the given file name.</p>
<p>When the capturing finishes, <code>OnCaptureSnapshotFinished</code> event will be raised, with an error code to indicate
whether the operation succeeded and an accessible disk path of the image. </p>
<p>The captured image will be stored as a PNG file under the <code>fileName</code> in app&#39;s cache folder. If a file with the 
same file name already exists, it will be overridden by the new captured image.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>fileName</span></div>
    <div class='parameter-item-desc'><p>The file name to which the captured image is stored to, for example &quot;screenshot.png&quot;. If empty, UniWebView will pick a 
random UUID with &quot;png&quot; file extension as the file name.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnCaptureSnapshotFinished <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> errorCode<span class="token punctuation">,</span> filePath<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>errorCode <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> 
    <span class="token class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> bytes <span class="token operator">=</span> File<span class="token punctuation">.</span><span class="token function">ReadAllBytes</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Texture2D</span> texture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Texture2D</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> TextureFormat<span class="token punctuation">.</span>RGB24<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    texture<span class="token punctuation">.</span><span class="token function">LoadImage</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
    <span class="token comment">// Use the texture.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">CaptureSnapshot</span><span class="token punctuation">(</span><span class="token string">"sample.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='scrollto'></div><div class='api-heading' data-id='scrollto'><a href='#scrollto'><span class='return-type'>void</span> ScrollTo(int x, int y, bool animated)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Scrolls the web view to a certain point.</p>
<p>Use 0 for both <code>x</code> and <code>y</code> value to scroll the web view to its origin. In a normal vertical web page, it is equivalent as scrolling to top.</p>
<p>You can use the <code>animated</code> parameter to control whether scrolling the page with or without animation.
This parameter only works on iOS and Android. On macOS editor, the scrolling always happens without animation.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>x</span></div>
    <div class='parameter-item-desc'><p>X value of the target scrolling point.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>y</span></div>
    <div class='parameter-item-desc'><p>Y value of the target scrolling point.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>animated</span></div>
    <div class='parameter-item-desc'><p>If <code>true</code>, the scrolling happens with animation. Otherwise, it happens without animation and the content is set directly.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Scroll the web page to top with animation.</span>
webView<span class="token punctuation">.</span><span class="token function">ScrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='adddownloadurl'></div><div class='api-heading' data-id='adddownloadurl'><a href='#adddownloadurl'><span class='return-type'>void</span> AddDownloadURL(string urlString, UniWebViewDownloadMatchingType type)</a><div class='api-badge api-badge-orange'>iOS</div><div class='api-badge api-badge-purple'>macOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Adds the URL to download inspecting list.</p>
<p>If a response is received in main frame and its URL is already in the inspecting list, a download task will be 
triggered. Check &quot;Download Files&quot; guide for more.</p>
<p>This method only works on iOS and macOS Editor.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>urlString</span></div>
    <div class='parameter-item-desc'><p>The inspected URL string or a regular expression.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewDownloadMatchingType</span> <span class='parameter-item-name'>type</span></div>
    <div class='parameter-item-desc'><p>The download matching type used to match the URL. Default is <code>ExactValue</code>.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// On iOS, access to "https://example.com/file.pdf" will trigger a download task instead of being rendered in place.</span>
webView<span class="token punctuation">.</span><span class="token function">AddDownloadURL</span><span class="token punctuation">(</span><span class="token string">"https://example.com/file.pdf"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// You can also use a regular expression.</span>
webView<span class="token punctuation">.</span><span class="token function">AddDownloadURL</span><span class="token punctuation">(</span><span class="token string">"https://example.com/file*"</span><span class="token punctuation">,</span> UniWebViewDownloadMatchingType<span class="token punctuation">.</span>RegularExpression<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='removedownloadurl'></div><div class='api-heading' data-id='removedownloadurl'><a href='#removedownloadurl'><span class='return-type'>void</span> RemoveDownloadURL(string urlString, UniWebViewDownloadMatchingType type)</a><div class='api-badge api-badge-orange'>iOS</div><div class='api-badge api-badge-purple'>macOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Removes the URL from download inspecting list.</p>
<p>If a response is received in main frame and its URL is already in the inspecting list, a download task will be 
triggered. Check &quot;Download Files&quot; guide for more.</p>
<p>This method only works on iOS and macOS Editor.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>urlString</span></div>
    <div class='parameter-item-desc'><p>The inspected URL string or a regular expression.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewDownloadMatchingType</span> <span class='parameter-item-name'>type</span></div>
    <div class='parameter-item-desc'><p>The download matching type used to match the URL. Default is <code>ExactValue</code>.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// On iOS, access to "https://example.com/file.pdf" will be rendered in place.</span>
webView<span class="token punctuation">.</span><span class="token function">RemoveDownloadURL</span><span class="token punctuation">(</span><span class="token string">"https://example.com/file.pdf"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='adddownloadmimetype'></div><div class='api-heading' data-id='adddownloadmimetype'><a href='#adddownloadmimetype'><span class='return-type'>void</span> AddDownloadMIMEType(string MIMEType, UniWebViewDownloadMatchingType type)</a><div class='api-badge api-badge-orange'>iOS</div><div class='api-badge api-badge-purple'>macOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Adds the MIME type to download inspecting list.</p>
<p>If a response is received in main frame and its MIME type is already in the inspecting list, a 
download task will be triggered. Check &quot;Download Files&quot; guide for more.</p>
<p>This method only works on iOS and macOS Editor.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>MIMEType</span></div>
    <div class='parameter-item-desc'><p>The inspected MIME type of the response.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewDownloadMatchingType</span> <span class='parameter-item-name'>type</span></div>
    <div class='parameter-item-desc'><p>The download matching type used to match the MIME type. Default is <code>ExactValue</code></p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// On iOS, access to any PDF files will trigger a download task instead of being rendered in place.</span>
webView<span class="token punctuation">.</span><span class="token function">AddDownloadMIMEType</span><span class="token punctuation">(</span><span class="token string">"application/pdf"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// You can also use a regular expression.</span>
webView<span class="token punctuation">.</span><span class="token function">AddDownloadMIMEType</span><span class="token punctuation">(</span><span class="token string">"image/*"</span><span class="token punctuation">,</span> UniWebViewDownloadMatchingType<span class="token punctuation">.</span>RegularExpression<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='removedownloadmimetypes'></div><div class='api-heading' data-id='removedownloadmimetypes'><a href='#removedownloadmimetypes'><span class='return-type'>void</span> RemoveDownloadMIMETypes(string MIMEType, UniWebViewDownloadMatchingType type)</a><div class='api-badge api-badge-orange'>iOS</div><div class='api-badge api-badge-purple'>macOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Removes the MIME type from download inspecting list.</p>
<p>If a response is received in main frame and its MIME type is already in the inspecting list, a 
download task will be triggered. Check &quot;Download Files&quot; guide for more.</p>
<p>This method only works on iOS and macOS Editor.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>MIMEType</span></div>
    <div class='parameter-item-desc'><p>The inspected MIME type of the response.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewDownloadMatchingType</span> <span class='parameter-item-name'>type</span></div>
    <div class='parameter-item-desc'><p>The download matching type used to match the MIME type. Default is <code>ExactValue</code></p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// On iOS, access to any PDF files will be rendered in place.</span>
webView<span class="token punctuation">.</span><span class="token function">RemoveDownloadMIMETypes</span><span class="token punctuation">(</span><span class="token string">"application/pdf"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setdownloadeventforcontextmenuenabled'></div><div class='api-heading' data-id='setdownloadeventforcontextmenuenabled'><a href='#setdownloadeventforcontextmenuenabled'><span class='return-type'>void</span> SetDownloadEventForContextMenuEnabled(bool enabled)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the <code>OnFileDownloadStarted</code> and <code>OnFileDownloadFinished</code> events should be raised even for an image
saving action triggered by the callout (context) menu on Android.</p>
<p>By default, the image saving goes through a different route and it does not trigger the <code>OnFileDownloadStarted</code> 
and <code>OnFileDownloadFinished</code> events like other normal download tasks. Setting this with enabled with <code>true</code> if
you also need to get notified when user long-presses on the image and taps &quot;Save Image&quot; button. By default, the
image will be saved to the Downloads directory and you can get the path from the parameter 
of <code>OnFileDownloadFinished</code> event.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        This only works on Android. On iOS, there is no way to get a callback or any event from the &quot;Add to Photos&quot;
button in the callout menu.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enabled</span></div>
    <div class='parameter-item-desc'><p>Whether the context menu image saving action triggers the download related events.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span><span class="token function">SetDownloadEventForContextMenuEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

