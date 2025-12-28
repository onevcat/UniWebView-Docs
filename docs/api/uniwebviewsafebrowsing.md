---
sidebarDepth: 0
---

## UniWebViewSafeBrowsing

### Summary

UniWebView Safe Browsing provides a way for browsing the web content in a more browser-like way, such as Safari on 
iOS and Chrome on Android.

This class wraps `SFSafariViewController` on iOS and “Custom Tabs” on Android. Starting with iOS 11, this component no 
longer shares cookies with Safari in the same way as it did in iOS 9 or 10, due to design restrictions by Apple that 
cannot be bypassed. It still supports auto-fill completion and other data sharing with the browser on the device. Most 
permissions are also built-in. You can use this class for tasks that are limited for a normal web view, such as using 
Apple Pay or Progressive Web Apps (PWA).

You create a `UniWebViewSafeBrowsing` instance by calling the static `UniWebViewSafeBrowsing.Create` method with a
destination URL. On iOS, the URL is fixed for the lifetime of the instance. On Android, you can change the target URL
before calling `Show` by using `ChangeUrl`. To show the safe browsing, call `Show` on
the instance. The web content will be displayed in full screen with a toolbar containing the loaded URL, as well
as some basic controls like Go Back, Go Forward and Done. 

Browsing web content in `UniWebViewSafeBrowsing` is only supported on iOS and Android. There is no such component in
Unity Editor. Creating and showing a `UniWebViewSafeBrowsing` on Unity Editor will fall back to open the URL in 
external browser by using Unity's `Application.OpenURL`.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#issafebrowsingsupported'><span class='return-type'>bool</span> <span class='member-name'>IsSafeBrowsingSupported</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Whether the safe browsing mode is supported in current runtime or not.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#colorscheme.system'><span class='return-type'>UniWebViewSafeBrowsing.ColorScheme</span> <span class='member-name'>ColorScheme.System</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Uses the system default color scheme.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#colorscheme.light'><span class='return-type'>UniWebViewSafeBrowsing.ColorScheme</span> <span class='member-name'>ColorScheme.Light</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Forces a light color scheme for the Custom Tabs UI.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#colorscheme.dark'><span class='return-type'>UniWebViewSafeBrowsing.ColorScheme</span> <span class='member-name'>ColorScheme.Dark</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Forces a dark color scheme for the Custom Tabs UI.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#activityheightresizebehavior.default'><span class='return-type'>UniWebViewSafeBrowsing.ActivityHeightResizeBehavior</span> <span class='member-name'>ActivityHeightResizeBehavior.Default</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Uses the default resize behavior decided by the Custom Tabs provider.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#activityheightresizebehavior.resizable'><span class='return-type'>UniWebViewSafeBrowsing.ActivityHeightResizeBehavior</span> <span class='member-name'>ActivityHeightResizeBehavior.Resizable</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Allows the user to resize the partial Custom Tab.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#activityheightresizebehavior.fixed'><span class='return-type'>UniWebViewSafeBrowsing.ActivityHeightResizeBehavior</span> <span class='member-name'>ActivityHeightResizeBehavior.Fixed</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Prevents the user from resizing the partial Custom Tab.</p>
</div>
</td></tr></table>

#### Events Summary

<table class='api-summary-table api-summary-table--events'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#onsafebrowsingfinished'><span class='return-type'>event</span> <span class='member-name'>OnSafeBrowsingFinished</span>(UniWebViewSafeBrowsing browsing)</a></div></td><td><div class='simple-summary'>
<p>Raised when user dismisses safe browsing by tapping the Done button or Back button.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onsafebrowsingclosed'><span class='return-type'>event</span> <span class='member-name'>OnSafeBrowsingClosed</span>(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)</a></div></td><td><div class='simple-summary'>
<p>Raised together with <code>OnSafeBrowsingFinished</code>, but includes the metadata payload from the native safe browsing component.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onsafebrowsingnavigationstarted'><span class='return-type'>event</span> <span class='member-name'>OnSafeBrowsingNavigationStarted</span>(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)</a></div></td><td><div class='simple-summary'>
<p>Raised when the underlying browser starts loading a page in Safe Browsing mode.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onsafebrowsingnavigationfinished'><span class='return-type'>event</span> <span class='member-name'>OnSafeBrowsingNavigationFinished</span>(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)</a></div></td><td><div class='simple-summary'>
<p>Raised when the Safe Browsing page finishes loading successfully.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#onsafebrowsingnavigationfailed'><span class='return-type'>event</span> <span class='member-name'>OnSafeBrowsingNavigationFailed</span>(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)</a></div></td><td><div class='simple-summary'>
<p>Raised when the Safe Browsing page fails to load.</p>
</div>
</td></tr></table>

#### Methods Summary

<table class='api-summary-table api-summary-table--methods'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#create'><span class='return-type'>UniWebViewSafeBrowsing</span> <span class='member-name'>Create</span>(string url)</a></div></td><td><div class='simple-summary'>
<p>Creates a new <code>UniWebViewSafeBrowsing</code> instance with a given URL.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setpreferredcustomtabsbrowsers'><span class='return-type'>void</span> <span class='member-name'>SetPreferredCustomTabsBrowsers</span>(string[] packages)</a></div></td><td><div class='simple-summary'>
<p>Sets the preferred browsers for Custom Tabs in order of preference.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#show'><span class='return-type'>void</span> <span class='member-name'>Show</span>()</a></div></td><td><div class='simple-summary'>
<p>Shows the safe browsing content above current screen.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#dismiss'><span class='return-type'>void</span> <span class='member-name'>Dismiss</span>()</a></div></td><td><div class='simple-summary'>
<p>Dismisses the safe browsing component.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#invalidate'><span class='return-type'>void</span> <span class='member-name'>Invalidate</span>()</a></div></td><td><div class='simple-summary'>
<p>Releases the native Safe Browsing resources when you no longer plan to use this instance.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settoolbarcolor'><span class='return-type'>void</span> <span class='member-name'>SetToolbarColor</span>(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the color for toolbar background in the safe browsing component.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setcolorscheme'><span class='return-type'>void</span> <span class='member-name'>SetColorScheme</span>(ColorScheme colorScheme)</a></div></td><td><div class='simple-summary'>
<p>Sets the Custom Tabs UI color scheme.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#changeurl'><span class='return-type'>void</span> <span class='member-name'>ChangeUrl</span>(string url)</a></div></td><td><div class='simple-summary'>
<p>Changes the URL to be loaded before the tab is shown (useful for warmup/prefetch).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setsecondarytoolbarcolor'><span class='return-type'>void</span> <span class='member-name'>SetSecondaryToolbarColor</span>(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the secondary/bottom toolbar color.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setnavigationbarcolor'><span class='return-type'>void</span> <span class='member-name'>SetNavigationBarColor</span>(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the navigation bar color.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setnavigationbardividercolor'><span class='return-type'>void</span> <span class='member-name'>SetNavigationBarDividerColor</span>(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the navigation bar divider color.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settoolbarcornerradiusdp'><span class='return-type'>void</span> <span class='member-name'>SetToolbarCornerRadiusDp</span>(int cornerRadiusDp)</a></div></td><td><div class='simple-summary'>
<p>Sets the toolbar corner radius in dp for partial Custom Tabs.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setinitialheightpx'><span class='return-type'>void</span> <span class='member-name'>SetInitialHeightPx</span>(int initialHeightPx, ActivityHeightResizeBehavior resizeBehavior = ActivityHeightResizeBehavior.Fixed)</a></div></td><td><div class='simple-summary'>
<p>Sets initial Custom Tab height in pixels for partial tabs and chooses how the sheet can resize.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setinitialwidthpx'><span class='return-type'>void</span> <span class='member-name'>SetInitialWidthPx</span>(int initialWidthPx)</a></div></td><td><div class='simple-summary'>
<p>Sets initial Custom Tab width in pixels (side sheet).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setsharemenuitemenabled'><span class='return-type'>void</span> <span class='member-name'>SetShareMenuItemEnabled</span>(bool enable)</a></div></td><td><div class='simple-summary'>
<p>Enables or disables share menu items.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#seturlbarhidingenabled'><span class='return-type'>void</span> <span class='member-name'>SetUrlBarHidingEnabled</span>(bool enable)</a></div></td><td><div class='simple-summary'>
<p>Enables hiding the URL bar on scroll.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setsendtoexternaldefaulthandlerenabled'><span class='return-type'>void</span> <span class='member-name'>SetSendToExternalDefaultHandlerEnabled</span>(bool enable)</a></div></td><td><div class='simple-summary'>
<p>Sends redirects to the system default handler when enabled.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setmaximizationenabled'><span class='return-type'>void</span> <span class='member-name'>SetMaximizationEnabled</span>(bool enable)</a></div></td><td><div class='simple-summary'>
<p>Toggles side-sheet maximization for partial Custom Tabs.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setdownloadbuttonenabled'><span class='return-type'>void</span> <span class='member-name'>SetDownloadButtonEnabled</span>(bool enable)</a></div></td><td><div class='simple-summary'>
<p>Enables or disables the download button in the overflow menu.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setbookmarksbuttonenabled'><span class='return-type'>void</span> <span class='member-name'>SetBookmarksButtonEnabled</span>(bool enable)</a></div></td><td><div class='simple-summary'>
<p>Enables or disables the bookmarks button in the overflow menu.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setbackgroundinteractionenabled'><span class='return-type'>void</span> <span class='member-name'>SetBackgroundInteractionEnabled</span>(bool enable)</a></div></td><td><div class='simple-summary'>
<p>Allows interaction with background apps when a partial Custom Tab is shown.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setwarmup'><span class='return-type'>void</span> <span class='member-name'>SetWarmup</span>(bool enable)</a></div></td><td><div class='simple-summary'>
<p>Warms up the Custom Tabs provider process to speed up later loads.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setprefetch'><span class='return-type'>void</span> <span class='member-name'>SetPrefetch</span>(bool enable, string alternativeUrl = null)</a></div></td><td><div class='simple-summary'>
<p>Uses Custom Tabs prefetch (<code>mayLaunchUrl</code>) before showing the tab.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settoolbaritemcolor'><span class='return-type'>void</span> <span class='member-name'>SetToolbarItemColor</span>(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the color for toolbar controls in the safe browsing component.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='issafebrowsingsupported'></div><div class='api-heading' data-id='issafebrowsingsupported'><a href='#issafebrowsingsupported'><span class='return-type'>bool</span> <span class='member-name'>IsSafeBrowsingSupported</span> { get; }</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether the safe browsing mode is supported in current runtime or not.</p>
<p>If supported, the safe browsing mode will be used when <code>Show</code> is called on a <code>UniWebViewSafeBrowsing</code> instance.
Otherwise, the system default browser will be used to open the page when <code>Show</code> is called.</p>
<p>This property always returns <code>true</code> on iOS runtime platform. On Android, it depends on whether there is an Intent 
can handle the safe browsing request. Usually this ability is provided by Chrome, but there are also other browser app
might implement that. If there is no Intent can open the URL in safe browsing mode, or the handling app is set to 
disabled in Android system, this property returns <code>false</code>.</p>
<p>To use this API on Android when you set your Target SDK to Android 11 or later, you need to add the correct 
intent query explicitly in your AndroidManifest.xml, to follow the Package Visibility 
(<a href="https://developer.android.com/about/versions/11/privacy/package-visibility">https://developer.android.com/about/versions/11/privacy/package-visibility</a>). Add <code>queries</code> as a subnode of the 
<code>manifest</code> tag:</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token operator">&lt;</span>manifest<span class="token operator">></span>
  <span class="token comment">// ...</span>
<span />
  <span class="token operator">&lt;</span><span class="token operator">/</span>application<span class="token operator">></span>
<span />
  <span class="token operator">&lt;</span>queries<span class="token operator">></span>
    <span class="token operator">&lt;</span>intent<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token class-name">action</span> android<span class="token punctuation">:</span>name<span class="token operator">=</span><span class="token string">"android.support.customtabs.action.CustomTabsService"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>intent<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>queries<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>manifest<span class="token operator">></span>
<span />
<span class="token comment">// To use it:</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>UniWebViewSafeBrowsing<span class="token punctuation">.</span>IsSafeBrowsingSupported<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Safe Browsing Mode is available on current device.</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='colorscheme.system'></div><div class='api-heading' data-id='colorscheme.system'><a href='#colorscheme.system'><span class='return-type'>UniWebViewSafeBrowsing.ColorScheme</span> <span class='member-name'>ColorScheme.System</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Uses the system default color scheme.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='colorscheme.light'></div><div class='api-heading' data-id='colorscheme.light'><a href='#colorscheme.light'><span class='return-type'>UniWebViewSafeBrowsing.ColorScheme</span> <span class='member-name'>ColorScheme.Light</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Forces a light color scheme for the Custom Tabs UI.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='colorscheme.dark'></div><div class='api-heading' data-id='colorscheme.dark'><a href='#colorscheme.dark'><span class='return-type'>UniWebViewSafeBrowsing.ColorScheme</span> <span class='member-name'>ColorScheme.Dark</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Forces a dark color scheme for the Custom Tabs UI.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='activityheightresizebehavior.default'></div><div class='api-heading' data-id='activityheightresizebehavior.default'><a href='#activityheightresizebehavior.default'><span class='return-type'>UniWebViewSafeBrowsing.ActivityHeightResizeBehavior</span> <span class='member-name'>ActivityHeightResizeBehavior.Default</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Uses the default resize behavior decided by the Custom Tabs provider.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='activityheightresizebehavior.resizable'></div><div class='api-heading' data-id='activityheightresizebehavior.resizable'><a href='#activityheightresizebehavior.resizable'><span class='return-type'>UniWebViewSafeBrowsing.ActivityHeightResizeBehavior</span> <span class='member-name'>ActivityHeightResizeBehavior.Resizable</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Allows the user to resize the partial Custom Tab.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='activityheightresizebehavior.fixed'></div><div class='api-heading' data-id='activityheightresizebehavior.fixed'><a href='#activityheightresizebehavior.fixed'><span class='return-type'>UniWebViewSafeBrowsing.ActivityHeightResizeBehavior</span> <span class='member-name'>ActivityHeightResizeBehavior.Fixed</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Prevents the user from resizing the partial Custom Tab.</p>
</div>
                </div>
  </div>
</div>

### Events

<div class='api-box method'>
  <div class="api-anchor" id='onsafebrowsingfinished'></div><div class='api-heading' data-id='onsafebrowsingfinished'><a href='#onsafebrowsingfinished'><span class='return-type'>event</span> <span class='member-name'>OnSafeBrowsingFinished</span>(UniWebViewSafeBrowsing browsing)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when user dismisses safe browsing by tapping the Done button or Back button.</p>
<p>The dismissed safe browsing instance will be invalid after this event being raised, and you should not use 
it for another browsing purpose. Instead, create a new one for a new browsing session.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        This event will not happen in Unity Editor, because the whole <code>UniWebViewSafeBrowsing</code> will fall back to an 
external browser.

  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewSafeBrowsing</span> <span class='parameter-item-name'>browsing</span></div>
    <div class='parameter-item-desc'><p>The <code>UniWebViewSafeBrowsing</code> object raised this event.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>safeBrowsing<span class="token punctuation">.</span>OnSafeBrowsingFinished <span class="token operator">+=</span> <span class="token punctuation">(</span>browsing<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
    Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"UniWebViewSafeBrowsing closed."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onsafebrowsingclosed'></div><div class='api-heading' data-id='onsafebrowsingclosed'><a href='#onsafebrowsingclosed'><span class='return-type'>event</span> <span class='member-name'>OnSafeBrowsingClosed</span>(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised together with <code>OnSafeBrowsingFinished</code>, but includes the metadata payload from the native safe browsing component.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewSafeBrowsing</span> <span class='parameter-item-name'>browsing</span></div>
    <div class='parameter-item-desc'><p>The <code>UniWebViewSafeBrowsing</code> object raised this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewSafeBrowsingEventMetadata</span> <span class='parameter-item-name'>metadata</span></div>
    <div class='parameter-item-desc'><p>Structured metadata describing the native callback (timestamp, native source).</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>safeBrowsing<span class="token punctuation">.</span>OnSafeBrowsingClosed <span class="token operator">+=</span> <span class="token punctuation">(</span>browsing<span class="token punctuation">,</span> metadata<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"Safe Browsing closed at </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">metadata<span class="token punctuation">.</span>TimestampUtc</span><span class="token punctuation">}</span></span><span class="token string"> from </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">metadata<span class="token punctuation">.</span>Source</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onsafebrowsingnavigationstarted'></div><div class='api-heading' data-id='onsafebrowsingnavigationstarted'><a href='#onsafebrowsingnavigationstarted'><span class='return-type'>event</span> <span class='member-name'>OnSafeBrowsingNavigationStarted</span>(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the underlying browser starts loading a page in Safe Browsing mode.</p>
</div>
      <div class='custom-container warning'>
  <p class="custom-container-title">NOTICE</p>
  <p>
        This event is not raised on iOS/macOS because Safari does not expose a navigation-start callback.
  </p>
</div>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewSafeBrowsing</span> <span class='parameter-item-name'>browsing</span></div>
    <div class='parameter-item-desc'><p>The <code>UniWebViewSafeBrowsing</code> object raised this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewSafeBrowsingEventMetadata</span> <span class='parameter-item-name'>metadata</span></div>
    <div class='parameter-item-desc'><p>Structured metadata describing the native callback.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>safeBrowsing<span class="token punctuation">.</span>OnSafeBrowsingNavigationStarted <span class="token operator">+=</span> <span class="token punctuation">(</span>browsing<span class="token punctuation">,</span> metadata<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"Navigation started at </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">metadata<span class="token punctuation">.</span>TimestampUtc</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onsafebrowsingnavigationfinished'></div><div class='api-heading' data-id='onsafebrowsingnavigationfinished'><a href='#onsafebrowsingnavigationfinished'><span class='return-type'>event</span> <span class='member-name'>OnSafeBrowsingNavigationFinished</span>(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the Safe Browsing page finishes loading successfully.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewSafeBrowsing</span> <span class='parameter-item-name'>browsing</span></div>
    <div class='parameter-item-desc'><p>The <code>UniWebViewSafeBrowsing</code> object raised this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewSafeBrowsingEventMetadata</span> <span class='parameter-item-name'>metadata</span></div>
    <div class='parameter-item-desc'><p>Structured metadata describing the native callback.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>safeBrowsing<span class="token punctuation">.</span>OnSafeBrowsingNavigationFinished <span class="token operator">+=</span> <span class="token punctuation">(</span>browsing<span class="token punctuation">,</span> metadata<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"Navigation finished at </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">metadata<span class="token punctuation">.</span>TimestampUtc</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='onsafebrowsingnavigationfailed'></div><div class='api-heading' data-id='onsafebrowsingnavigationfailed'><a href='#onsafebrowsingnavigationfailed'><span class='return-type'>event</span> <span class='member-name'>OnSafeBrowsingNavigationFailed</span>(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Raised when the Safe Browsing page fails to load.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewSafeBrowsing</span> <span class='parameter-item-name'>browsing</span></div>
    <div class='parameter-item-desc'><p>The <code>UniWebViewSafeBrowsing</code> object raised this event.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewSafeBrowsingEventMetadata</span> <span class='parameter-item-name'>metadata</span></div>
    <div class='parameter-item-desc'><p>Structured metadata describing the native callback.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>safeBrowsing<span class="token punctuation">.</span>OnSafeBrowsingNavigationFailed <span class="token operator">+=</span> <span class="token punctuation">(</span>browsing<span class="token punctuation">,</span> metadata<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"Safe Browsing error reported at </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">metadata<span class="token punctuation">.</span>TimestampUtc</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='create'></div><div class='api-heading' data-id='create'><a href='#create'><span class='return-type'>UniWebViewSafeBrowsing</span> <span class='member-name'>Create</span>(string url)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Creates a new <code>UniWebViewSafeBrowsing</code> instance with a given URL.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The URL to navigate to. The URL must use the <code>http</code> or <code>https</code> scheme.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> safeBrowsing <span class="token operator">=</span> UniWebViewSafeBrowsing<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"https://uniwebview.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setpreferredcustomtabsbrowsers'></div><div class='api-heading' data-id='setpreferredcustomtabsbrowsers'><a href='#setpreferredcustomtabsbrowsers'><span class='return-type'>void</span> <span class='member-name'>SetPreferredCustomTabsBrowsers</span>(string[] packages)</a><div class='api-badge api-badge-blue'>static</div><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the preferred browsers for Custom Tabs in order of preference.</p>
<p>This allows developers to specify which browsers should be preferred when multiple Custom Tabs providers are available on the device. This setting affects both SafeBrowsing and AuthenticationSession functionality.</p>
<p><strong>Browser Selection Priority (Android):</strong></p>
<ol>
<li><strong>User-defined preferred packages</strong> (highest priority) - checked in order</li>
<li><strong>Default browser if it&#39;s Chromium-based</strong> (Chrome, Edge, etc.)</li>
<li><strong>Default browser if it supports Custom Tabs</strong> (even non-Chromium)</li>
<li><strong>Any Chromium-based browser</strong> (only when no user preference is set)</li>
<li><strong>Any available Custom Tabs provider</strong> (last resort)</li>
</ol>
<p>This prioritization helps avoid browsers with incomplete Custom Tabs implementations (such as Firefox, which may not trigger <code>onNavigationEvent</code> callbacks properly).</p>
<p>On iOS, this method has no effect as Safari is always used for safe browsing.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string[]</span> <span class='parameter-item-name'>packages</span></div>
    <div class='parameter-item-desc'><p>Array of browser package names in order of preference. Common package names include:</p>
<ul>
<li>&quot;com.android.chrome&quot; (Chrome)</li>
<li>&quot;com.brave.browser&quot; (Brave Browser) </li>
<li>&quot;com.opera.browser&quot; (Opera Browser)</li>
<li>&quot;com.microsoft.emmx&quot; (Microsoft Edge)</li>
<li>&quot;com.sec.android.app.sbrowser&quot; (Samsung Internet)</li>
</ul>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Set Chrome and Brave as preferred browsers</span>
UniWebViewSafeBrowsing<span class="token punctuation">.</span><span class="token function">SetPreferredCustomTabsBrowsers</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span>
    <span class="token string">"com.android.chrome"</span><span class="token punctuation">,</span>
    <span class="token string">"com.brave.browser"</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token class-name"><span class="token keyword">var</span></span> safeBrowsing <span class="token operator">=</span> UniWebViewSafeBrowsing<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"https://uniwebview.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
safeBrowsing<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='show'></div><div class='api-heading' data-id='show'><a href='#show'><span class='return-type'>void</span> <span class='member-name'>Show</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Shows the safe browsing content above current screen.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> safeBrowsing <span class="token operator">=</span> UniWebViewSafeBrowsing<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"https://uniwebview.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
safeBrowsing<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='dismiss'></div><div class='api-heading' data-id='dismiss'><a href='#dismiss'><span class='return-type'>void</span> <span class='member-name'>Dismiss</span>()</a><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Dismisses the safe browsing component.</p>
<p>This method only works on iOS. On Android, there is no way to dismiss the safe browsing component </p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='invalidate'></div><div class='api-heading' data-id='invalidate'><a href='#invalidate'><span class='return-type'>void</span> <span class='member-name'>Invalidate</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Releases the native Safe Browsing resources when you no longer plan to use this instance.</p>
<p>Call this after <code>Create</code> if the business logic changes and you decide not to show the Safe Browsing UI. Android will unbind its Custom Tabs service, while iOS simply discards the underlying <code>SFSafariViewController</code>. When the UI is actually presented and the user closes it (Done/Back), cleanup runs automatically and you do not need to call this method.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> safeBrowsing <span class="token operator">=</span> UniWebViewSafeBrowsing<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token string">"https://uniwebview.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Later we decide not to show Safe Browsing anymore.</span>
safeBrowsing<span class="token punctuation">.</span><span class="token function">Invalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settoolbarcolor'></div><div class='api-heading' data-id='settoolbarcolor'><a href='#settoolbarcolor'><span class='return-type'>void</span> <span class='member-name'>SetToolbarColor</span>(Color color)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the color for toolbar background in the safe browsing component. </p>
<p>The changes are ignored after <code>Show</code> method is called.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>The color to tint the toolbar.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>safeBrowsing<span class="token punctuation">.</span><span class="token function">SetToolbarColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setcolorscheme'></div><div class='api-heading' data-id='setcolorscheme'><a href='#setcolorscheme'><span class='return-type'>void</span> <span class='member-name'>SetColorScheme</span>(ColorScheme colorScheme)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the Custom Tabs UI color scheme. Ignored after <code>Show</code>.</p>
<p>Android only. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>ColorScheme</span> <span class='parameter-item-name'>colorScheme</span></div>
    <div class='parameter-item-desc'><p>The desired color scheme (<code>System</code>, <code>Light</code>, or <code>Dark</code>).</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='changeurl'></div><div class='api-heading' data-id='changeurl'><a href='#changeurl'><span class='return-type'>void</span> <span class='member-name'>ChangeUrl</span>(string url)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Changes the URL to be loaded before the tab is shown (useful for warmup/prefetch). Ignored after <code>Show</code>.</p>
<p>Android only. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The URL to switch to before calling <code>Show</code>.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setsecondarytoolbarcolor'></div><div class='api-heading' data-id='setsecondarytoolbarcolor'><a href='#setsecondarytoolbarcolor'><span class='return-type'>void</span> <span class='member-name'>SetSecondaryToolbarColor</span>(Color color)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the secondary/bottom toolbar color. Ignored after <code>Show</code>.</p>
<p>Android only. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>Tint color for the secondary toolbar.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setnavigationbarcolor'></div><div class='api-heading' data-id='setnavigationbarcolor'><a href='#setnavigationbarcolor'><span class='return-type'>void</span> <span class='member-name'>SetNavigationBarColor</span>(Color color)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the navigation bar color. Ignored after <code>Show</code>.</p>
<p>Android only. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>Tint color for the navigation bar.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setnavigationbardividercolor'></div><div class='api-heading' data-id='setnavigationbardividercolor'><a href='#setnavigationbardividercolor'><span class='return-type'>void</span> <span class='member-name'>SetNavigationBarDividerColor</span>(Color color)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the navigation bar divider color. Ignored after <code>Show</code>.</p>
<p>Android only. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>Tint color for the divider.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settoolbarcornerradiusdp'></div><div class='api-heading' data-id='settoolbarcornerradiusdp'><a href='#settoolbarcornerradiusdp'><span class='return-type'>void</span> <span class='member-name'>SetToolbarCornerRadiusDp</span>(int cornerRadiusDp)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the toolbar corner radius in dp for partial Custom Tabs. Ignored after <code>Show</code>.</p>
<p>Android only. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>cornerRadiusDp</span></div>
    <div class='parameter-item-desc'><p>Corner radius in density-independent pixels.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setinitialheightpx'></div><div class='api-heading' data-id='setinitialheightpx'><a href='#setinitialheightpx'><span class='return-type'>void</span> <span class='member-name'>SetInitialHeightPx</span>(int initialHeightPx, ActivityHeightResizeBehavior resizeBehavior = ActivityHeightResizeBehavior.Fixed)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets initial Custom Tab height in pixels for partial tabs and chooses how the sheet can resize. Ignored after <code>Show</code>.</p>
<p>Android only. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>initialHeightPx</span></div>
    <div class='parameter-item-desc'><p>Initial height in pixels.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>ActivityHeightResizeBehavior</span> <span class='parameter-item-name'>resizeBehavior</span></div>
    <div class='parameter-item-desc'><p>Resize behavior (<code>Default</code>, <code>Resizable</code>, or <code>Fixed</code>). Defaults to <code>Fixed</code>.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setinitialwidthpx'></div><div class='api-heading' data-id='setinitialwidthpx'><a href='#setinitialwidthpx'><span class='return-type'>void</span> <span class='member-name'>SetInitialWidthPx</span>(int initialWidthPx)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets initial Custom Tab width in pixels (side sheet). Ignored after <code>Show</code>.</p>
<p>Android only. Requires AndroidX Browser 1.8.0+. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>int</span> <span class='parameter-item-name'>initialWidthPx</span></div>
    <div class='parameter-item-desc'><p>Initial width in pixels.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setsharemenuitemenabled'></div><div class='api-heading' data-id='setsharemenuitemenabled'><a href='#setsharemenuitemenabled'><span class='return-type'>void</span> <span class='member-name'>SetShareMenuItemEnabled</span>(bool enable)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Enables or disables share menu items. Ignored after <code>Show</code>.</p>
<p>Android only. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enable</span></div>
    <div class='parameter-item-desc'><p>Whether sharing buttons are enabled.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='seturlbarhidingenabled'></div><div class='api-heading' data-id='seturlbarhidingenabled'><a href='#seturlbarhidingenabled'><span class='return-type'>void</span> <span class='member-name'>SetUrlBarHidingEnabled</span>(bool enable)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Enables hiding the URL bar on scroll. Ignored after <code>Show</code>.</p>
<p>Android only. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enable</span></div>
    <div class='parameter-item-desc'><p>Whether the URL bar hides when scrolling.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setsendtoexternaldefaulthandlerenabled'></div><div class='api-heading' data-id='setsendtoexternaldefaulthandlerenabled'><a href='#setsendtoexternaldefaulthandlerenabled'><span class='return-type'>void</span> <span class='member-name'>SetSendToExternalDefaultHandlerEnabled</span>(bool enable)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sends redirects to the system default handler when enabled. Ignored after <code>Show</code>.</p>
<p>Android only. Requires AndroidX Browser 1.7.0+. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enable</span></div>
    <div class='parameter-item-desc'><p>Allow redirects to be handled externally.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setmaximizationenabled'></div><div class='api-heading' data-id='setmaximizationenabled'><a href='#setmaximizationenabled'><span class='return-type'>void</span> <span class='member-name'>SetMaximizationEnabled</span>(bool enable)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Toggles side-sheet maximization for partial Custom Tabs. Ignored after <code>Show</code>.</p>
<p>Android only. Requires AndroidX Browser 1.8.0+. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enable</span></div>
    <div class='parameter-item-desc'><p>Whether the maximization button is enabled.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setdownloadbuttonenabled'></div><div class='api-heading' data-id='setdownloadbuttonenabled'><a href='#setdownloadbuttonenabled'><span class='return-type'>void</span> <span class='member-name'>SetDownloadButtonEnabled</span>(bool enable)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Enables or disables the download button in the overflow menu. Ignored after <code>Show</code>.</p>
<p>Android only. Requires AndroidX Browser 1.7.0+. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enable</span></div>
    <div class='parameter-item-desc'><p>Enable download button in overflow.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setbookmarksbuttonenabled'></div><div class='api-heading' data-id='setbookmarksbuttonenabled'><a href='#setbookmarksbuttonenabled'><span class='return-type'>void</span> <span class='member-name'>SetBookmarksButtonEnabled</span>(bool enable)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Enables or disables the bookmarks button in the overflow menu. Ignored after <code>Show</code>.</p>
<p>Android only. Requires AndroidX Browser 1.7.0+. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enable</span></div>
    <div class='parameter-item-desc'><p>Enable bookmarks button in overflow.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setbackgroundinteractionenabled'></div><div class='api-heading' data-id='setbackgroundinteractionenabled'><a href='#setbackgroundinteractionenabled'><span class='return-type'>void</span> <span class='member-name'>SetBackgroundInteractionEnabled</span>(bool enable)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Allows interaction with background apps when a partial Custom Tab is shown. Ignored after <code>Show</code>.</p>
<p>Android only. Requires AndroidX Browser 1.7.0+. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enable</span></div>
    <div class='parameter-item-desc'><p>Allow background interaction while partial tab is visible.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setwarmup'></div><div class='api-heading' data-id='setwarmup'><a href='#setwarmup'><span class='return-type'>void</span> <span class='member-name'>SetWarmup</span>(bool enable)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Warms up the Custom Tabs provider process to speed up later loads. Can be called multiple times. Ignored after <code>Show</code>.</p>
<p>Android only. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enable</span></div>
    <div class='parameter-item-desc'><p>Whether to warm up the provider.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setprefetch'></div><div class='api-heading' data-id='setprefetch'><a href='#setprefetch'><span class='return-type'>void</span> <span class='member-name'>SetPrefetch</span>(bool enable, string alternativeUrl = null)</a><div class='api-badge api-badge-green'>Android</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Uses Custom Tabs prefetch (<code>mayLaunchUrl</code>) before showing the tab. Ignored after <code>Show</code>.</p>
<p>Android only. This method does nothing on iOS.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>enable</span></div>
    <div class='parameter-item-desc'><p>Enable or disable prefetch.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>alternativeUrl</span></div>
    <div class='parameter-item-desc'><p>Optional URL to prefetch instead of the current one.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settoolbaritemcolor'></div><div class='api-heading' data-id='settoolbaritemcolor'><a href='#settoolbaritemcolor'><span class='return-type'>void</span> <span class='member-name'>SetToolbarItemColor</span>(Color color)</a><div class='api-badge api-badge-orange'>iOS</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the color for toolbar controls in the safe browsing component. </p>
<p>The changes are ignored after <code>Show</code> method is called.</p>
<p>This method only works on iOS. On Android, the controls color is determined by system to keep a reasonable 
contrast, based on the toolbar background color you provided in <code>SetToolbarColor</code>.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>The color to tint the controls on toolbar.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>safeBrowsing<span class="token punctuation">.</span><span class="token function">SetToolbarItemColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

