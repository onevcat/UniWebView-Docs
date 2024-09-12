# Release Note

### 5.11.1 (12 Sep, 2024)

#### Fix

* A build issue when running under Unity Editor on Windows when the target is not iOS. It was introduced by 5.11.0.

### 5.11.0 (10 Sep, 2024)

#### Add

* Support setting an HTTPS link (universal link for iOS or app link for Android) as the callback URL of an OAuth 2.0 flow. (Before, only the custom scheme was supported)
* iOS 18 & Xcode 16 build support.

### 5.10.2 (3 Aug, 2024)

#### Fix

* Fix a potential freeze of the game when calling cookie related methods on iOS in some Unity versions.

### 5.10.1 (21 Jun, 2024)

#### Fix

* Fixed a bug where certain comment lines were unexpectedly removed while patching Gradle files.
* Resolved an issue where the `OnLoadingErrorReceived` event (along with the deprecated `OnPageErrorReceived` event) was triggered twice during a loading error on certain Android versions.

### 5.10.0 (9 Jun, 2024)

#### Add

* A `RestoreViewHierarchyOnResume` property to make the web view restore its view hierarchy when the app resumes from background on Android. This is an issue in these Unity versions: from Unity 2021.3.31 to 2021.3.34, from Unity 2022.3.10 to 2022.3.15. If you are using UniWebView in these versions, you need to set this value to `true` after upgrading.

#### Fix

* Some internal improvements.

### 5.9.2 (10 Apr, 2024)

#### Fix

* An issue that missing the x86_64 slice for UniWebView on macOS. Now the macOS version can run on Unity editor under x86_64 mode again.

### 5.9.1 (20 Mar, 2024)

#### Fix

* A compiling error of Android build system under Unity 2023.2.13 or later. This was due to Unity removed the related APIs in the new version. Now UniWebView reverts to use the old way (the same before UniWebView 5.8.0) to patch the Android project files.

### 5.9.0 (28 Feb, 2024)

#### Add

* Now the WebRTC support on Android does not require adding trust domain by code. A prompt window will be shown to the user if the web page tries to access the camera or microphone.
* Now it is possible to customize the permission request handler for WebRTC, such as grant the access request without prompt to the user. Check `RegisterOnRequestMediaCapturePermission` for more information.

#### Deprecate

* As `RegisterOnRequestMediaCapturePermission` is introduced, the current `AddPermissionTrustDomain` method is deprecated. Use the new method if you need to grant the permission by code.

### 5.8.0 (28 Jan, 2024)

#### Add

* Supporting of specifying the cache mode used when loading a request. You can now use `SetCacheMode` and pick a `UniWebViewCacheMode` policy to determine whether and how to use the cache data when loading a request.
* Adopt to use `AndroidProjectFilesModifier` to modify the exported Android project from Unity 2023.2. This prevents some potential edge issues when exporting the project if another custom Gradle template is used.
* Supporting of the data URI on the page. Now the links starting with `data:` is treated as a valid URL and it trigger a standard downloading process.
* Add a method `SetAllowUserEditFileNameBeforeDownloading` to provide a more customizable way of downloading. By setting it with `false`, UniWebView will skip the file name editing step and use the default file name instead, and start the downloading immediately.

### 5.7.3 (25 Dec, 2023)

#### Fix

* The context menu image downloading now should work correctly on Android 14.
* An issue that the downloading URL was converted to lower case when triggering a context menu download on Android.
* Refine the gradle properties file patcher to not add a trailing new line when patching the file.
* A potential vulnerability scanner warning that the file provider can read files from a wider scope than needed.

#### Deprecate

* Completely mark the legacy toolbar related methods as deprecated. Use the new embedded toolbar instead whenever possible.

### 5.7.2 (4 Dec, 2023)

#### Fix

* A potential issue on some Android browser implementations, the OAuth support crashes due to a "null activity handler found!" error. Now UniWebView will use a workaround to prevent the crash.

### 5.7.1 (24 Nov, 2023)

#### Fix

* The `SetDragInteractionEnabled` method also works on Android now. It allows you to disable the drag interaction on Android devices that support drag-and-drop gesture.
* Mark several methods in `UniWebViewAuthenticationFlowCustomize` as `virtual` to allow overriding them in subclasses.
* Now the OAuth 2.0 flow will ignore the letter case when receiving the response code URL from the server. It allows you to register the redirect URL with different letter cases in the OAuth provider and UniWebView.

### 5.7.0 (25 Oct, 2023)

#### Add

* A new `SetForwardWebConsoleToNativeOutput` method which enables forwarding the web console log (such as `console.log` or `console.error`) to the native log output. On iOS, it prints the log to Xcode console, on Android to the Android logcat, and on macOS Editor to the Unity console. This is useful for debugging issues from the web page.
* Now the `OnWebContentProcessTerminated` event will also be invoked when the render process is gone on Android (when the `OnRenderProcessGone` event is raise). This is a new behavior on Android 11 and above and the default handling will only prevent the whole app crash. You need to implement this event and 
try to release resources and/or perform a reload to recover.

#### Fix

* An issue that the keyboard avoidance behavior on Android is not working properly and contains an undesired offset when the web view is not placed at the top of the screen.

### 5.6.3 (4 Oct, 2023)

#### Fix

* An issue that the web view disappears when switching back to foreground in some newer Unity versions (2021.3.31f1, 2022.3.10f1, 2023.3.0a1). This is a regression of the particular Unity versions when it tries to fix [UUM-30881](https://issuetracker.unity3d.com/issues/android-a-black-screen-appears-for-a-few-seconds-when-returning-to-the-game-from-the-lock-screen-after-idle-time).

### 5.6.2 (29 Sep, 2023)

#### Fix

* Support for Android 14. Solve a crash when setting Android 14 (API Level 34) as the target SDK for the game, and opening a web view on Android 14 devices.

### 5.6.1 (9 Sep, 2023)

#### Fix

* A compile error when using UniWebView on Windows Editor was introduced in 5.6.0. Now you should be able to compile the project on Windows Editor. Mac Editor is not affected.

### 5.6.0 (8 Sep, 2023)

#### Add

* New feature of rendering the web view to a texture. Now you can use `CreateRenderedTexture` to render the web view to a texture and use it in the game world. Check [this guide](https://docs.uniwebview.com/guide/render-to-texture.html) for more information and the implementation steps.

#### Fix

* Replace using of `NameValueCollection` in OAuth flows to prevent potential issues with different .Net versions.
* An issue that a crash may happen when adding downloading URL or MIME type with `UniWebViewDownloadMatchingType.RegularExpression` option.


### 5.5.1 (29 Aug, 2023)

#### Fix

* An issue that causes OAuth 2.0 flow crash on some browser implementations (such as Firefox and Amazon Silk) which does not provide the correct support. Chrome and some other browsers are not affected. You need a clean build after upgrading to get this fix.

### 5.5.0 (6 Aug, 2023)

#### Add

* A new `OnLoadingErrorReceived` event, which is triggered when the web view loading encounters an error. This replaces the original `OnPageErrorReceived` event. The new event contains an additional `payload` parameter, in which some error detail (such as the failing URL) is contained.
* Add a build option for adding `androidx.core` package in UniWebView's preference panel. This should fix the problem of crashing due to missing class `FileProvider` on Android 11 or above on Android when disabling the `androidx.browser` package. For more about building issues on Android, we also prepared a new [trouble shooting guide page](https://docs.uniwebview.com/guide/trouble-shooting.html).

#### Fix

* A potential issue that cookie values sometimes are not treated correctly when requesting following resource request inside an iframe target.

#### Deprecate

* `OnPageErrorReceived` is now deprecated. Use `OnLoadingErrorReceived` instead.

### 5.4.3 (26 Jul, 2023)

#### Fix

* A potential issue that code obfuscation on Android might cause class conflicting with other plugins which also perform a full obfuscation. Now UniWebView uses a more stable way to obfuscate its native code.
* A bug that `OnOrientationChanged` event might be called too early in some cases, which causes the received value is not yet correct.

### 5.4.2 (9 Jun, 2023)

#### Fix

* The method `AddDownloadMIMEType` did not work as expected even when the target MIME type is detected. Now it should trigger the download as expected.

### 5.4.1 (17 May, 2023)

#### Fix

* An issue that the web view crashes on some Android devices when there is no loading callback is registered under Release mode. This was a regression introduced in 5.4.0. If you are using 5.4.0 and has this crash, please upgrade to 5.4.1 to get a fix.

### 5.4.0 (13 May, 2023)

#### Add

* A method to control whether a loading should be started or not. Use `RegisterShouldHandleRequest` to register a callback and returns whether the loading should be started or not. Check [its reference](https://docs.uniwebview.com/api/#registershouldhandlerequest) for more.

#### Fix

* Now web view on iOS 16.4 can also be inspected. However, different from previous versions, you need to call `SetWebContentsDebuggingEnabled` to enable the debugging mode before inspecting the web view on all platforms.

### 5.3.2 (5 Apr, 2023)

#### Fix

* Strip using of methods from `System.Web.HttpUtility` internally to resolve a runtime issue in older Unity versions.

### 5.3.1 (18 Feb, 2023)

#### Fix

* An issue that `SetOpenLinksInExternalBrowser` setting is ignored for links with "target=_blank" attribute. Now the external browser will be used for such links instead of opening the page in place. If `SetOpenLinksInExternalBrowser` and `SetSupportMultipleWindows` is set to `true` at the same time, the external browser will be used.
* Now the activity for OAuth 2.0 flow on Android allows orientation changes. It won't throw an exception anymore when the device is rotated during the flow.

### 5.3.0 (28 Jan, 2023)

#### Add

* Support for customization of Kotlin and Android Browser package versions. This can help to resolve the conflict with other plugins which use another version of these packages.

#### Fix

* Improve the visual effect of the Embedded Toolbar on iOS. Now it has a larger and bold font for the title.
* A better way to find the root view controller for adding UniWebView to on iOS. Now you can implement a `rootViewControllerForUniWebView` method in your app delegate and return the view controller you want UniWebView to be added to. By default, if the app delegate does not implement either `rootViewControllerForUniWebView` or `rootViewController`, UniWebView now also tries to find the top-most view controller instead of the window's direct root view controller.

### 5.2.1 (4 Jan, 2023)

#### Fix

* A crash when an SSL error is encountered during loading a scheme other than "http" or "https" (for example, "wss://" links) on Android.

### 5.2.0 (23 Dec, 2022)

#### Add

* Most of the OAuth flows now support refresh token. Use `StartRefreshTokenFlow` on the flow to start token refresh. For more about OAuth 2.0 support in UniWebView, check [this guide](https://docs.uniwebview.com/guide/oauth2.html#refresh-token).

#### Fix

* A workaround for Facebook login on Android. Facebook is preventing a web view to perform OAuth login on Android, now the `UniWebViewAuthenticationFlowFacebook` will use a desktop browser user-agent to open the login page.
* A crash that caused by orientation change when the camera is presented on Android while the game is landscape but the camera is portrait.
* A crash when taking screenshot when the web view has a zero or negative size. Now under this case, the `CaptureSnapshot` method will give an error `-1002` in its `OnCaptureSnapshotFinished` event.

### 5.1.0 (21 Nov, 2022)

#### Add

* New methods to control the behavior of the loading spinner. Use `SetAllowUserDismissSpinner` to allow or forbid users dismissing the loading indicator; Use `ShowSpinner` and `HideSpinner` to control its visibility programmatically.
* A new API `SetLimitsNavigationsToAppBoundDomains`, it is a wrapper of `limitsNavigationsToAppBoundDomains` for iOS. It limits user's navigation to only pre-defined domains on iOS.

#### Fix

* Improve the delay that on Android the received cookies are not flushed fast enough in some cases. Now a forcibly cookie flush is always performed when closing the web view.
* The Unity InputSystem assembly reference is added explicitly to prevent compiling error on Unity's versions without InputSystem support.
* An issue prevents the package built on macOS 13 SDK.

### 5.0.2 (24 Oct, 2022)

#### Fix

* A potential issue that the post-build Gradle file parses wrongly when using variables.
* The loading spinner is now not shown wrongly when a mail link tapped.

### 5.0.1 (8 Oct, 2022)

#### Fix

* An issue that the exported iOS project cannot be built with Xcode 13.
* A problem which stops the project from compiling when ".Net Framework" profile is used in Unity.

### 5.0.0 (18 Sep, 2022)

::: danger
5.0.0 is a major update of UniWebView. Although most of APIs in UniWebView 5 are compatible with UniWebView 4 and it should be easy enough to migrate, there are still a few breaking changes. If you are using the toolbar in UniWebView 4, although it is still available, but it is deprecated and replaced by the new embedded toolbar. For migration from UniWebView 4 in detail, visit the [Migration Guide](https://docs.uniwebview.com/guide/migration-guide-v4-to-v5.html). To know the highlight of the version, check [this page](https://docs.uniwebview.com/guide/version-highlight.html) for more.
:::

#### Add

* **Built-in OAuth 2.0 support** for Google, Twitter, Facebook, LINE and GitHub. Now your user can login with their account easily and get access token for other API calls on those service. For more about OAuth 2.0 support in UniWebView, check [this guide](https://docs.uniwebview.com/guide/oauth2.html).
* **Customized OAuth 2.0 support** for any other service provider which defines a standard OAuth 2.0 Authorization Code Flow.
* Embedded toolbar for both iOS and Android. It replaces the old toolbar on iOS. The new toolbar contains a set of navigation buttons and a title, showing as a part of the web view on top or bottom of the web view frame. For more about embedded toolbar, check [this guide](https://docs.uniwebview.com/guide/embedded-toolbar.html).

#### Fix

* A layout issue which occasionally happens when opening the old toolbar. Now the buttons position should be always correct.
* An issue which causes web view's `Url` property not parsing correctly when it contains some special characters.

#### Deprecate

* The original iOS-only toolbar is now deprecated. Use the new embedded toolbar instead.
* As Xcode 14 drops the support of 32-bit iOS devices, UniWebView 5 will not support 32-bit iOS devices anymore. If you are using UniWebView 4 and still need to support 32-bit iOS devices for a while, please stay with UniWebView 4.

#### Known Issues

* The `WKWebView` on iOS 16 Simulator is broken: the web view process won't connect and no content can be loaded due to a bug inside WebKit and Apple's system. To develop on iOS simulators, please use iOS 15 or earlier versions for now. This issue does not affect any physical devices running iOS 16.

### 4.13.0 (3 Sep, 2022)

#### Add

* A `SetAcceptThirdPartyCookies` method to allow third party cookies on Android. By default, the third party cookies are not allowed for security reason.

### 4.12.1 (24 Jun, 2022)

#### Fix

* An issue that a stored cookie cannot be read when using `GetCookie` method on iOS if its domain starting with a dot. According to RFC6265, the leading dot should be ignored when matching a cookie.

### 4.12.0 (17 Jun, 2022)

#### Add

* An `allowJavaScriptOpening` parameter in `SetSupportMultipleWindows` to allow the web view opens a new window even triggered by JavaScript instead of user action.

#### Fix

* An issue which prevents "uploading from camera" from working properly on some Android 11 and Android 12 devices.
* an issue which causes getting JavaScript evaluating result on the pages with UTF code format (a.k.a, characters as `\uXXXX`) will fail on Android.
* Now UniWebView 4 supports from Unity 2019.4. This is a requirement of Unity publisher submission guidelines. If you need to continue using UniWebView 4.12.0 and later versions, please consider to upgrade your Unity version.

### 4.11.2 (6 Apr, 2022)

#### Fix

* An issue that Safe Browsing on iOS will leak its memory when using `Dismiss` to close the web page by code.

### 4.11.1 (23 Feb, 2022)

#### Fix

* Now UniWebView can build with Unity's new Input System enabled. But due to a bug in Unity's Input System, the back button detection on some Android devices may break and cause a stuck state. Before Unity can fix that, it is strongly recommended to use the "Both" option for Input System to get a stable experience.
* An issue that when header is set, the HTML content in iframe tag not shows properly in some cases.
* Fix a problem that the Post Build script edits format of some embedded variables in gradle file incorrectly.

### 4.11.0 (26 Jan, 2022)

#### Add

* An `IsWebViewSupported` property on `UniWebView` to check whether the current device supports web view.

### 4.10.3 (3 Dec, 2021)

#### Fix

* A crash when scrolling outside of the web view area when `SetTransparencyClickingThroughEnabled` is set to `true`.
* Now Android supports RTL languages layout.

### 4.10.2 (25 Nov, 2021)

#### Fix

* Now UniWebView also supports NTLM authentication method.
* Uses the intent-based way to detect availability of SafeBrowsing. Now the `IsSafeBrowsingSupported` API would give back a more accurate result.
* Removes the requirement of Gradle plugin version of 4.0.1 or later. This fixes some Android build errors on earlier Unity versions which ships with an older Gradle Plugin. However, if you are using `UniWebViewSafeBrowsing` and setting the Target API Level to Android 11 (Level 30), you still need a newer version of Unity and follow the [related guide](https://docs.uniwebview.com/guide/safe-browsing.html) to add `queries` to the `AndroidManifest.xml` file.
* An issue that the toolbar on iOS can be clicked through to the Unity scene.


### 4.10.1 (11 Nov, 2021)

#### Fix

* An issue that `UniWebViewSafeBrowsing.IsSafeBrowsingSupported` may always return `false` wrongly when build against Android API 30 or above.

### 4.10.0 (2 Oct, 2021)

#### Add

* Add option to support for using regular expression matching in `AddDownloadURL` or `AddDownloadMIMEType` methods.

#### Fix

* Now the `Load` method allows a `null` URL on Android instead of crash the game.
* The file downloading respects the SSL exception settings of the host web view now.
* The UniWebView message system now support URLs without authority part. Now, a URL like `myscheme:this_is_the_message?foo=bar` can be parsed without problem.

### 4.9.0 (26 Jul, 2021)

#### Add

* New feature Transparency Clicking Through. Now you can use `SetTransparencyClickingThroughEnabled` and set the `BackgroundColor` of web view to a clear color to allow the user tap through the web view background. Those taps will be delivered to Unity scene.

#### Fix

* A potential issue that in some cases the `Hide` or `Show` method freeze the game for a few seconds.

### 4.8.0 (19 Jul, 2021)

#### Add

* A method to disable the keyboard avoidance behavior on Android. It can prevent the web view layout changing when showing keyboard on Android.

#### Fix

* A gradle parser issue that ignores tab in a gradle node. This may lead some gradle build failing if a tab is used in the gradle file.
* Now the SSL error exception works properly even for resource on the allowed page.
* An issue which causes the video auto play not working on Android.

### 4.7.0 (14 Jun, 2021)

#### Add

* A new method `SetTextZoom` on Android. It delegates setting to Android `WebSettings.setTextZoom` for the web view .
* A new method `SetDownloadEventForContextMenuEnabled` on Android. This allows the image saving action in context menu also triggers the `OnFileDownloadStarted` and `OnFileDownloadFinished` events.

#### Fix

* A potential issue that on some old Android devices, the `Show` and `Hide` methods do not return correct value for the animation starting state.

### 4.6.1 (8 May, 2021)

#### Fix

* An issue that extension format of `accept` field is not recognized when uploading through the input file form on Android. It causes the file picker not shown up in some cases.

### 4.6.0 (4 Apr, 2021)

#### Add

* Methods to remove cookies under a URL and with a certain cookie name. It allows you to remove some of the stored cookies instead of clearing them all. Check the `RemoveCookies` and `RemoveCooke` methods respectively.

### 4.5.1 (12 Mar, 2021)

#### Fix

* Now file uploading from Android contains a more readable file name in its `Content-Disposition` field.
* An issue which causes external keyboard input is not valid while opening the web view on iOS.

### 4.5.0 (17 Feb, 2021)

#### Add

* A new method to capture the current web view content and store it on a temporary folder on disk. Check `CaptureSnapshot` method and `OnCaptureSnapshotFinished` event for more.

#### Fix

* A potential issue that Safe Browsing crashes on certain devices without Chrome and Google Mobile Services (GMS) properly installed.

### 4.4.0 (26 Jan, 2021)

#### Add

* Support download files in the general web view. Now, a download task will be triggered if the loading of resource cannot be rendered in place. See the [Downloading Files Guide](https://docs.uniwebview.com/guide/download-files.html) for more information.

#### Fix

* Now Jetifier is not required when Android exporting. If you need Jetifier for other third-party libraries, set it in UniWebView's setting panel.
* The `Hide` method now correctly hides the web view even when a full-screen view is being used on Android.

### 4.3.1 (18 Dec, 2020)

#### Fix

* An issue that causes the app to crash on iOS 9 and 10 when closing the web view.

### 4.3.0 (14 Dec, 2020)

#### Add

* A property to check whether the Safe Browsing Mode is supported on the device. Some Android devices may not have Chrome installed, so Safe Browsing Mode is not supported. Instead of ignoring the requests of opening the web page in Safe Browsing Mode, now UniWebView will open it in the installed system browser. Use `UniWebViewSafeBrowsing.IsSafeBrowsingSupported` to get availability.
* Add Assembly Definitions (`asmdef`) support. Now UniWebView will organize itself as an assembly. This should boost your compile-time in Unity Editor.

#### Fix

* Better support for multiple windows. The pop-up new web page window can pop another new window now.
* Now the script should compile when using Unity Editor even on Linux.
* A Gradle issue which causes error while exporting project when some certain customized Gradle templates are used.
* A potential problem that accessing to web page cookie might freeze the app in older iOS devices or systems.

### 4.2.0 (17 Oct, 2020)

#### Add

* A method `SetAllowUniversalAccessFromFileURLs` to allow local file loading by AJAX from a local HTML page. This ignores CORS checking on iOS `WKWebView` when loading both the page and resource locally.
* Now you can enable the screen swipe gesture on iOS or macOS to perform back or forward navigation. Call `SetAllowBackForwardNavigationGestures` to allow it.
* Add opening and closing events for multiple window. Now you can receive `OnMultipleWindowOpened` and `OnMultipleWindowClosed` event when a new window is opened or closed respectively.

#### Fix

* Now the Safe Browsing on Android only requires "androidx.browser:browser" version 1.0.0. This solves some conflicting with other "old and bad-behaved" packages which not upgrading to the latest dependency.
* The JavaScript pop-up alert now has a better cancel button style. Also fixed the duplicated prompt text for input alert.
* An issue which causes wrong parsing for Gradle build file when a string is defined inside a non-node block.

### 4.1.0 (26 Sep, 2020)

#### Add

* Add a method to dismiss the `UniWebViewSafeBrowsing` on iOS. To close an opened safe browsing component, call the `Dismiss` method.
* Build support for iOS 14 and Xcode 12.

#### Fix

* An issue that `BackgroundColor` property not working on Android.

### 4.0.4 (1 Sep, 2020)

#### Fix

* An issue causes the web view does not show up until switching the app from background on some customized Android distribution.
* Now setting for "Accept" header will give a warning since iOS does not support customize this header field.

### 4.0.3 (18 Aug, 2020)

#### Fix

* Fix an issue that causes keyboard overlaying not handled correctly on Android.

### 4.0.2 (14 Aug, 2020)

#### Fix

* Android X browser dependency ('androidx.browser:browser') for UniWebView Android can now be disabled in the preference panel. Turn it off if other plugins are already adding it for you.

### 4.0.1 (12 Aug, 2020)

#### Fix

* A issue that prevents the Gradle file being processed correctly if inline comments are used.
* Kotlin dependency for UniWebView Android can now be disabled in the preference panel. Turn it off if other plugins are already adding it for you.

### 4.0.0 (1 Aug, 2020)

::: danger
4.0.0 is a major update of UniWebView. Although most of APIs in UniWebView 4 are compatible with UniWebView 3 and it should be easy enough to migrate, there are still a few breaking changes. For migration from UniWebView 3 in detail, visit the [Migration Guide](https://docs-v4.uniwebview.com/guide/migration-guide.html). To know the highlight of the version, check [this page](https://docs-v4.uniwebview.com/guide/version-highlight.html) for more.
:::

#### Add

* **Safe Browsing Mode support.** Now UniWebView also contains a wrapper for [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller) on iOS and [Custom Tabs](https://developers.google.com/web/android/custom-tabs) on Android. It allows you to browse web pages in a more browser-like level, including sharing cookies or credentials with the system browser. Check the [Safe Browsing guide](https://docs.uniwebview.com/guide/safe-browsing.html) for more information. 
* **Customizable built-in toolbar on iOS.** Now you can set the bar background color, button text, and the text color in the toolbar. Check the [Built-in Toolbar](https://docs.uniwebview.com/guide/built-in-toolbar.html) guide for more information.
* **Add support for Unity 2020.1.** In the latest Unity version, it changes its way of handling native touch events. It may cause some functionality broken in UniWebView 3. UniWebView 4 uses itself in a new way to handle events to ensure working fine on all supported Unity versions. UniWebView 4 itself **supports from Unity 2018.3**.
* **New Post Build Processing system and Preference Panel.** They provide a better way to define the dependencies and help you modify the "AndroidManifest.xml" file without touch it directly.
* **Better permission model.** UniWebView now does not require the write external permission for uploading a photo from the gallery or camera to the web. It also adopts to permission models for Android 10. Other possible needed permission can be setup in the UniWebView Preference Panel.
* An `OnPageProgressChanged` event which will be raised every time the loading progress changes in the web view.

#### Fix

* Now the web view resizes itself when a soft keyboard is showing up and about to cover the text input fields on the page. It keeps the text input visible.
* UniWebView now always respects Unity setting of immersive mode on Android. The navigation bar will not jump out or flicker when showing the web view in an immersive mode.
* Audio resource can stop correctly when the web view is closed now.
* The alert pop-up and its text edit views for JavaScript confirm window or HTTP auth now have a better style and alignment.

#### Deprecate

* `SetImmersiveMode` is not needed anymore since the Unity setting is now always respected. This method will not do anything but give an error log instead.
* `OnKeyCodeReceived` will not be called anymore since UniWebView is not intercepting any native events. Try Unity's `Input.GetKeyUp` in `Update` to get key code events instead.

### 3.18.1 (4 Jul, 2020)

#### Fix

* A potential issue that the Android keyboard is not shown when switching back from a full screen view on Android 9 or above.
* Now the Unity Editor support also allows displaying a web view when using the Device Simulator package.
* An issue on iOS which causes the toolbar buttons placed in wrong position when switching back to the game while the web view is showing.

### 3.18.0 (14 May, 2020)

#### Add

* An API to disable the whole user interaction of the web view. Call `SetUserInteractionEnabled(false)` on the web view if you do not want users to tap or scroll the web view.
* Allow "Go Back" feature on a pop-up window if `SetSupportMultipleWindows` is set to `true`.

#### Fix

* An issue that the `OnPageFinished` event is not called on Android when loading an HTML string.

### 3.17.0 (14 Apr, 2020)

#### Add

* A method to set the default font size on Android. This can help to reduce the influence of the user's display setting of the font scale. Use `SetDefaultFontSize` to give a more reasonable default font size based on the scale setting.
* Now the visibility of navigation buttons (Go Back and Go Forward) on iOS toolbar can be set from Unity by `SetShowToolbarNavigationButtons`.

#### Fix

* A layout issue that breaks web view size when switching back to foreground when an action sheet shown in some cases.
* The customized user agent string now also applies to the pop-up window when `SetSupportMultipleWindows` was called with `true`.
* An issue that causes the new window cannot be dismissed correctly by `window.close()` on Android.
* Now the text input views should be automatically scrolled up on Android when the soft keyboard displays and overlaps them.
* The `ReferenceRectTransform` can calculate the correct final size and position for a non-default resolution setting for screen now.

### 3.16.0 (5 Feb, 2020)

#### Add

* Support for `target="_blank"` links. By default, UniWebView will open the destination URL in the same page even it is attributed by a `_blank` target. If you want to open it in a new page, call `SetSupportMultipleWindows` with `true` and it will create a new web view above the current one to load the new request.

#### Fix

* Improve SSL error handling logic for Android to prevent warnings from Google.

### 3.15.2 (8 Jan, 2020)

#### Fix

* URLs with "#" should be loaded correctly in iOS even the `skipEncoding` is not set to `true` in `Load` method.
* The keyboard will be dismissed automatically when hiding the web view by calling `Hide` now.

### 3.15.1 (18 Dec, 2019)

#### Fix

* Unity 2019.3 support. Fixed a problem which causes your app hanging and being killed at starting on iOS devices when building against Unity 2019.03 and without Xcode connected.
* A possible crash when uploading and converting data between file choosers.
* A potential issue that the Camera can be ignored when choosing images for uploading.

### 3.15.0 (11 Dec, 2019)

#### Add

* A new method `ScrollTo` to scroll web view to a certain point.
* Basic localization support for Android. Now the UniWebView related UI elements are localized for the following locals: `en`, `zh`, `zh-rTW`, `ja`, `ko`, `fr`, `de`, `es`, `ru`, `vi`, `pt`, `da`, `it`, `nl`, `sv`.

#### Fix

* Solve an issue that HTTP status cannot be retrieved correctly due to page loading events order are not correct on some Android systems.
* Now the web view window will be pinned to top on macOS editor. This aligns the fact that the web view will always be the top-layer view on iOS and Android.

### 3.14.0 (20 Nov, 2019)

#### Add

* New API `SetContentInsetAdjustmentBehavior` for setting the adjustment behavior which indicates how safe area insets. It is a wrapper for `contentInsetAdjustmentBehavior` on iOS.

#### Fix

* A crash when uploading a single picture taken by camera on some Android devices.
* Unescape JavaScript result from Android. This helps get correct value when using `GetHTMLContent`.

### 3.13.2 (29 Aug, 2019)

#### Fix

* An unintended symbol link to deprecated UIWebView on iOS. This prevents the deprecation warning when submitting an app to the App Store.

### 3.13.1 (17 Aug, 2019)

#### Fix

* Enabled app cache support for web view on Android.

### 3.13.0 (11 Jun, 2019)

::: warning
From 3.13.0, UniWebView supports from Unity 2017.3. This would help to reduce some legacy code and achieve more stable behaviors.
If you need to continue use UniWebView 3 on Unity 5.6, Unity 2017.1 or Unity 2017.2, please keep to use UniWebView 3.12.1 or earlier.
:::

#### Add

* Support on Android for uploading multiple files at the same time.

#### Fix

* The `RawMessage` of `UniWebViewMessage` is now not escaped any more. It will return exactly the original URL it receives. Meanwhile, the values in `Args` keep escaped as is.
* An issue on iPad that the customized "Done" button text might be truncated in some cases.

### 3.12.1 (26 Apr, 2019)

####  Fix

* An issue that web content does not go back to its original position after keyboard dismissed on iOS.
* A crash when dismissing the web view on iOS 9 devices.
* An issue causes some files cannot be selected when uploading with a form and the file chooser.

### 3.12.0 (10 Apr, 2019)

#### Add

* Now you can use `SetDragInteractionEnabled` to disable the drag interaction on iPad running iOS 11 or above.

#### Fix

* A issue which causes the non full screen web view position moving in some cases when soft keyboard is showing up.

### 3.11.0 (27 Mar, 2019)

#### Add

* Add `SetCalloutEnabled` method to control the behavior when the user taps an image or link with long press or force touch gesture. Now you can choose not to display the context callout menu.

#### Fix

* Now the navigation bar on Android will automatically hide immediately when the soft keyboard dismissed.
* A workaround for regression on iOS 12 which causes selecting input fields in forms does not trigger the web view auto scrolling.

### 3.10.2 (28 Feb, 2019)

#### Fix

* Fix a crash when selecting files from Downloads folder on certain Android devices when uploading.
* Support showing web view in cutout mode in Android. Now UniWebView will follow the cutout render setting.

### 3.10.1 (15 Feb, 2019)

#### Fix

* An issue that lack of a placeholder method which causes code not compile on Windows.

### 3.10.0 (9 Feb, 2019)

#### Add

* A method to turn off automatically prompt alert showing when received an HTTP auth challenge from server. Use `SetAllowHTTPAuthPopUpWindow` to control the behavior.
* Support open third party app with links of corresponding URL schemes. Now you can use a link to open other apps as long as it was registered.

#### Fix

* Performance issues when using some sync getter APIs on Android native side.

### 3.9.2 (10 Jan, 2019)

#### Fix

* A problem that `SetZoomEnabled` not works correctly on iOS 12.
* Now `CanGoBack`, `CanGoForward` and `Url` getters also work for single page app page.

### 3.9.1 (18 Dec, 2018)

#### Fix

* A potential issue causes file chooser not response correctly when user dismiss the permission prompt without choosing.
* Remove JavaScript Interface support for suppressing security warning from Google.

### 3.9.0 (30 Nov, 2018)

#### Add

* A parameter for `Load` method to customize the read access URL for local file loading. It helps to load local resources under a different URL other than the current load page.

#### Fix

* A problem that read access URL not encoded correctly when special characters contained.
* An issue causes crash when changing screen orientation by code when closing the web view with a toolbar displayed.

### 3.8.1 (24 Oct, 2018)

#### Fix

* Fix a potential crash when reference `RectTransform` is used to determine web view frame, while there is no cavans for some reason on the transform.

### 3.8.0 (5 Sep, 2018)

#### Add

* A method to allow file access from file URLs. This could solve some problem when request in a cross origin way from local pages. However, by setting it to true may cause some potential security issue, so make your choice at the risk.

#### Fix

* A problem causing immersive mode flickering in Android 8.x.
* Post request on back button would work correctly.

### 3.7.1 (26 Jun, 2018)

#### Fix

* A typo on "OnOrientationChanged" event. It was "OnOreintationChanged" and now we correct this issue in both code and documentation.

### 3.7.0 (14 Jun, 2018)

::: danger
From Unity 2018, Gradle is used as the default build system, so we updated the integration method to make UniWebView works better in the new build system. If you are upgrading UniWebView from an earlier version, please refer to the [Adapting to AAR File](https://docs.uniwebview.com/guide/adapting-to-aar-file.html) documentation.
:::

#### Add

* Compatible with Unity 2018.1 and gradle build system. Please note that you need some migration if you want to upgrade from an earlier version.

### 3.6.1 (26 Apr, 2018)

#### Fix

* Compatible with Unity 2017.4. Now videos could be played correctly on Android devices in project exported by Unity 2017.4.

---

### 3.6.0 (3 Apr, 2018)

#### Add

* OnWebContentProcessTerminatedDelegate event is added. This event will be raised when iOS system stops loading the web content for some reason (Usually due to memory pressure). Prior UniWebView versions will try to refresh the page for you automatically. However, that would not fix the problem in most cases. This event provides a chance for you to free as much as resources and do reloading/handling as you need.

#### Fix

* As issue which causes web view frame not set properly when using prefab with a pre-set reference rectangle transform.
* Some other minor internal fix.

---

### 3.5.2 (28 Feb, 2018)

#### Fix

* An issue which causes POST data from HTML form is missing when a customized header field is set on iOS.
* Now customized header fields will be also added to image download requests on Android.

---

### 3.5.1 (31 Jan, 2018)

#### Fix

* A potential issue which may cause game unresponsive when switching back to foreground when a web view's game object or its parent objects are inactive.
* An issue causes web view cannot be added to correct view in the first game run loop while splash screen is disabled.

---

### 3.5.0 (22 Jan, 2018)

#### Add

* Images from Internet now could be downloaded to Download folder in Android.
* More consistent toolbar layout mechanism for toolbar on iOS. Now Auto Layout is used for layout toolbar, and `adjustInset` option works better.

#### Fix

* An issue which crashes macOS Editor when loading a local file in macOS 10.11 or earlier.
* iOS context menu (action bar) now could cover toolbar properly.
* A regression that makes setting text for toolbar done button title not working.
* No need to add support-v4 package anymore to support uploading files to server.
* Toolbar intersection with web view will now respect your frame setting first, then adjust its own height or top anchor.

---

### 3.4.2 (28 Dec, 2017)

#### Fix

* Use new message sending method between native and C# script. Now all messages could be received even when the web view game object is inactive.
* Prevent `Init` with an empty name for security.

---

### 3.4.1 (12 Dec, 2017)

#### Fix

* Fix an issue on Android that getting some web view properties inside web view events may freeze the loading process.
* The toolbar will not show automatically when you are using a prefab with "Use Toolbar" on. Now the toolbar will follow the show and hide state of the web view itself.
* Fix an error in Editor when stop playing mode while a web view is being shown.
* Upgrade to Android build SDK to API Level 26. (But still support from Android 5.0.)

---

### 3.4.0 (7 Nov, 2017)

UniWebView now requires Xcode 9 with iOS SDK 11 to build. If you are still using Xcode 8 and iOS 10 SDK, please use UniWebView 3.3.x instead.

#### Add

* Better cookie management for iOS 11. On iOS 11, now UniWebView uses the newly added HTTP cookie store to get more stable cookie states.
* Update web view layout and toolbar for iPhone X screen.
* A method for printing current web view to a printer or air printer.

#### Fix

* A potential issue which may cause cookie lost during 301 or 302 redirecting.

---

### 3.3.2 (6 Oct, 2017)

#### Fix

* A crash when games are built against iOS 11 SDK and setting screen orientation with Unity API while the web view showing.

---

### 3.3.1 (6 Oct, 2017)

#### Fix

* A crash when setting screen orientation with Unity API while the web view showing.
* Compatible with iOS 11 SDK and Xcode 9.
* Due to a Unity High Sierra support issue, UniWebView 3 now require Unity 5.6.3 at least.

---

### 3.3.0 (9 Sep, 2017)

#### Add

* Support HTTP Basic and HTTP Digest authentication. A native pop-up will be displayed when there is a challenge to ask users to provide user name and password.
* Support "intent" and "market" URL scheme. Now any valid "intent://" URL will be handled on Android. If target intent is not found, and there is no fallback URL provided, UniWebView will try to open the application page on Play Market. The "market://" URL will be navigated to Play Market.

#### Fix

* A problem which caused hidden web view also receiving touch event on Android when multiple web views are used.
* Fix an issue which causes crash when uploading a camera captured photo on some Android devices.
* Improvement on loading performance a bit on Android.

---

### 3.2.0 (3 Sep, 2017)

#### Add

* An option to URL or HTML string loading APIs to skip encoding, it is useful when you need to encode the url yourself instead of using the default encoding rule in UniWebView.
* An option to cookie setting and getting APIs to skip encoding.

#### Fix

* An issue on Android which cause the default user agent cannot be retrieved correctly before the first request.
* A memory leak on macOS Editor that web view window not get closed correctly.
* More accurate scaling calculating in Zoomed Display mode on iOS.
* Event touch could be handled correctly in Android when multiple web views shown now.
* The URL encoding will not be applied to an already encoded input URL now.
* The local file loading will not be loaded again in current view. This prevents a wrong behavior when loading a local page containing iframe tag.
* The UniWebViewMessage will now respect the encoded url parameters and queries.

---

### 3.1.4 (17 Aug, 2017)

#### Fix

* Fix a problem which could cause web view alpha value not correct in some situation after transition with fade animation.
* Fix position issue when showing web view with both edge and fade animation.

---

### 3.1.3 (9 Aug, 2017)

#### Fix

* A linking issue when running with a lower iOS SDK in Xcode.

---

### 3.1.2 (6 Aug, 2017)

#### Fix

* Now `SetWebContentsDebuggingEnabled` also works for macOS Editor build. Set it to true and you could right click in the web view in editor to show an inspector for debugging purpose.
* Fix a flickering of navigation bar when loading a new page with immersive mode on Android.
* A compiling error when build iOS target on a Windows editor.
* A problem that built-in some schemes (`mailto`, `sms` and `tel`) not handled correctly on iOS and macOS.
* Fix some deprecated methods of build system for Android.

---

### 3.1.1 (21 Jul, 2017)

#### Fix

* Local file URL with special characters now can be corrected encoded when loading.
* Avoid unhandled Show method calling right after a Hide method. Now, the Hide method will be ignore if the web view is already hidden.
* All three kinds of render mode for canvas (`ScreenSpaceOverlay`, `ScreenSpaceCamera` and `WorldSpace`) are now supported when using `RectTransform` to determine web view position and size.
* Array query in `UniWebViewMessage` should work as expected. Now a query like "?a[]=1&a[]=2" will be parsed to "1,2" in the result message.

---

### 3.1.0 (14 Jul, 2017)

#### Add

* A helper method `UniWebViewHelper.PersistentDataURLForPath` to return a url string for files under `persistentDataPath`.
* A method to enable user resizing for web view windows on macOS Editor.
* Upgrade to new build tool chain to get better optimized binary for both iOS and Android targets.

#### Fix

* An issue which might cause url encoding returns wrong result when the original url contains space for other special characters.

---

### 3.0.1 (3 Jul, 2017)

#### Fix

* Setting cookies from JavaScript now could work correctly.
* Allowing back compatibility for mixed content loading in Android.
* Stopping loading now could trigger page loading error event.
* Fully bit code support is now enabled for iOS build.

---

### 3.0.0 (27 Jun, 2017)

::: danger
3.0.0 is a major update of UniWebView. We rewrote the whole software from scratch to bring your experience of using a web view in Unity to a next level. Be caution it is not compatible with UniWebView 2, there are quite a few breaking changes in this version. For migration from UniWebView 2 in detail, visit our [Migration Guide](https://docs-v3.uniwebview.com/guide/migration-guide.html) in documentation. To know the highlight of the version, check [this page](https://docs-v3.uniwebview.com/guide/version-highlight.html) for more.
:::

#### Add

* Better way to set frame of the web view. You can also use a reference `RectTransform` to set position and size.
* Use `WKWebView` instead of `UIWebView` on iOS.
* New pop-up style Unity Editor support on macOS. It is a fully functional tool for debugging purpose.
* A new way to setup bridging between Unity and Cocoa native. Now there is no message sending delay.
* You can now set the position of toolbar to top or bottom on iOS.
* A leveled logger to log all UniWebView related information. See [UniWebViewLogger](https://docs.uniwebview.com/api/uniwebviewlogger.html) documentation for more.
* Use a payload based callback API like transition and JavaScript related methods. It takes more data. See [UniWebViewNativeResultPayload]https://docs.uniwebview.com(/api/uniwebviewnativeresultpayload.html).
* SSL exception for white listed domain. It is useful for a un-trusted certification but you still want to access.
* A method to get current web view HTML content as a string.

#### Fix

* UniWebView Android no longer requires to be the main activity.
* Uploading now could work properly on all supported devices.
* The url scheme based message now supports UTF-8 and url encoding directly.
* Now the customized header field will be existing for all requests until removed, not only the first one.

---

### 2.11.1 (22 May, 2017)

#### Fix

* A performance issue which causes the camera scene gets slow and laggy when used with Vuforia.

---

### 2.11.0 (28 Apr, 2017)

#### Add

* An API to ignore SSL cert error for a certain host in Android.
* Add Firebase as built-in third party jar supporting.

#### Fix

* An icon used to demonstrate UniWebView.

---

### 2.10.0 (28 Feb, 2017)

#### Add

* An API to set allowing video auto-play. Call `SetAllowAutoPlay` on the web view for it. Please note that you also need to add an "auto-play" property in the video tag to enable auto-play in the web page.
* An API to enable inline video play for iOS. By default, iOS video play will be pop to full-screen. By calling SetAllowInlinePlay with a true flag, you can play video inline on iOS. Please note you also need to add an "inline" property in your video tag to support it.
* SetCookie and GetCookie methods to set and get a cookie for a specified URL and key.

#### Fix

* A potential issue that cleaning cookie did not work in some case. Since the logic of current cleaning cookie is not correct, we also marked the original CleanCookie method to be obsoleted. You should now use SetCookie method to set a cookie value to empty for cleaning purpose.

---

### 2.9.2 (31 Jan, 2017)

#### Fix

* Pre-compiled jar file for Google VR activity.
* An issue which causes web view cannot be opened correctly in some old Android devices.

---

### 2.9.1 (7 Nov, 2016)

#### Fix

* Add a null check for Android web view. This prevented a potential crash when navigating from javascript

---

### 2.9.0 (29 Sep, 2016)

#### Add

* Android remote web content debugging support. Now you can debug your web page in Android with Chrome. Just set `SetWebContentsDebuggingEnabled` with true to enable it.
* Ability for loading page with overview mode for Android.

#### Fix

* Now all key down events are forwarded to Unity side by OnKeyDown callback in Android, even for TV remote controller and real device keys.

---

### 2.8.0 (29 Jul, 2016)

#### Add

* An option (`openLinksInExternalBrowser`) that all the links should be opened in an external browser or not. It will be useful if you want to open a URL in Mobile Safari or Chrome, instead of opening it in UniWebView. Default is false.
* Now you can set the Done button title from Unity. Use `SetDoneButtonText` to customize the button title.
* LGC SDK built-in support.

---

### 2.7.1 (3 Apr, 2016)

#### Fix

* Now the keyboard will also be dismissed in iOS when you call Hide on the web view with the keyboard showing.
* A potential problem of activity type casting which might cause the app crashes when you use UniWebView with some other third party activity.
* Add "singleTop" to launch mode in Android to prevent crash from multiple activity racing.

---

### 2.7.0 (11 Mar, 2016)

#### Add

* Add APIs for setting visibility of vertical and horizontal scroll bar of the web view.

#### Fix

* Update pre-compiled jar file for Prime31 and CardBoard, to be compatible to their latest SDKs.
* Return an empty string for asset path string API, so it will compile even you switch to a platform that UniWebView does not support.
* Fix a problem which prevents you from settings background color to transparent ones. It is a regression in version 2.6.0 and now it will not show a black background color anymore.
* Not disabling hardware accelerating when Settings background color with alpha for Android. This would improve the performance of using a transparent background a lot.
* A potential issue that will fail in type casting in Android activity type. This would improve the compatibility when working with other third party packages which tries to convert the Unity activity.

---

### 2.6.0 (15 Feb, 2016)

#### Add

* Rewrite video playing for Android web view. Now you could expect a better and stable video playback for both Youtube and Vimeo.

#### Fix

* Remove custom activity which is not needed anymore.

---

### 2.5.2 (27 Jan, 2016)

#### Fix

* Use UnityPlayerActivity instead. This makes UniWebView compatible with Unity 5.4 (current in beta).

---

### 2.5.1 (22 Jan, 2016)

#### Fix

* A crash issue in editor when you use AddUrlScheme.

---

### 2.5.0 (31 Dec, 2015)

#### Add

* Support for adding customize header field.
* A helper method to generate streaming asset url for local pages.
* Add AppFlyer jar file.

#### Fix

* Hide transition callback will work correctly for Android now.
* Improve performance for OS X Editor version.

---

### 2.4.1 (11 Dec, 2015)

#### Fix

* Compatible with Unity 5.3.0's new OS X OpenGL Core for editor.
* Clean some debug log.
* Update default page in demo scene.
* Set default user agent of Editor version to an iPhone agent. So you could get the mobile version of web view in Editor.

::: danger
Notice: Unity dropped Windows Phone 8 support officially from 5.3. UniWebView will not continue development for Windows Phone as well from this version.
:::

Reason: The amount of our Windows Phone users is very few compared to iOS and Android (it is less than 1% share according to report).
However, if we want to to support Windows Store App with Windows Phone 8.1 SDK or Windows 10 SDK, it would take even more time than either of other platforms.

Since the Windows Phone SDK itself is not backwards compatible, the transition from Windows 8 to 8.1 or 10 means we need to rewrite all code in the package.

We have only limited resource. To make sure we could build the asset in a better quality for most of our users, we decided to focus back to iOS and Android only from next version.

The current Windows Phone 8 support (UniWebViewWP.dll) will be kept in later versions of UniWebView for a while, but we are sorry that it doesn't seem to get updated anymore.

---

### 2.4.0 (4 Dec, 2015)

#### Add

* Built-in show/hide transition. You could now show or hide the web view with a transition effect. Currently we support fade in/out and transition from/to one of screen edges. Please take a look at reference of Show() and Hide() for more.
  Add: Recreate new demo scenes as a better tutorial. Now most of the useful features are contained in the demo scenes, with fully commented script to show how to use them.
* Now you can use "ESC" in OS X Editor to go back or close the web view.

#### Fix

* The color of iOS toolbar is now white. This fixed an issue that the clear background tool bar will become black if no web page is underneath.
* Fix an issue which cause show tool bar property not working in some situation.
* Adjust the behavior of insets, it is a preparation for later feature like insets translating. The API of insets remains the same now.

#### Remove

::: danger
Notice: Unity will drop Windows Phone 8 support officially from 5.3. UniWebView will not continue development for Windows Phone as well from the next version.
:::

Reason: The amount of our Windows Phone users is very few compared to iOS and Android (it is less than 1% share according to report).
However, if we want to to support Windows Store App with Windows Phone 8.1 SDK or Windows 10 SDK, it would take even more time than either of other platforms.

Since the Windows Phone SDK itself is not backwards compatible, the transition from Windows 8 to 8.1 or 10 means we need to rewrite all code in the package.

We have only limited resource. To make sure we could build the asset in a better quality for most of our users, we decided to focus back to iOS and Android only from next version.

The current Windows Phone 8 support (UniWebViewWP.dll) will be kept in later versions of UniWebView for a while, but we are sorry that it doesn't seem to get updated anymore.

---

### 2.3.1 (5 Nov, 2015)

#### Fix

* An issue that script is missing in the prefab if you import the asset in a new version of Unity.
* Compatibility for Unity 5.2.2 editor.

---

### 2.3.0 (13 Oct, 2015)

#### Add

* SMS link support for Android devices.

---

### 2.2.5 (8 Oct, 2015)

#### Fix

* Compatibility for Unity 5.2.1 editor.

---

### 2.2.4 (4 Oct, 2015)

#### Fix

* A status bar truncating issue which may appears on some Android devices when user show/hide the soft keyboard for several times.

---

### 2.2.3 (27 Sep, 2015)

* An API to add trusted sites for Android. You will need to add your site url to the white list if you need to request the protected resources of Android devices (such as microphone or camera).
* Add third party support for Craftar.

#### Fix

* A vulnerability that accept SSL connect even an error happens. Now UniWebView will use the default behavior of system and reject all un-trusted SSL connection. It will protect your web content from possible man-in-the-middle attacks. At the same time, it means you have to use a valid certification even if you are in test environment.

* A null exception when input in a text field in Editor.

---

### 2.2.2 (12 Sep, 2015)

#### Fix

* An issue in Unity 5.2 which causes the web view not showing correctly in Unity Editor.
* Alert compatibility for iOS in Unity 5.2.

---

### 2.2.1 (4 Sep, 2015)

#### Add

* PIs to get navigation state of current web view. Now you can use CanGoBack() and CanGoForward() to determine whether there is a page to go back or forward.

#### Fix

* Optimize performance for 64-bit OSX Editor version.

---

### 2.2.0 (22 Aug, 2015)

#### Add

* An API to set background color for the web view.

#### Fix

* The video will paused when app switched to background in Android devices now.
* An issue causes the loading indicator not removed in Windows Phone 8 devices when dismiss the web view.
* Add Neatplugin and RigidFace to default supported third party jar.

---

### 2.1.3 (30 Apr, 2015)

#### Fix

* File chooser for Android 5.0+.

---

### 2.1.2 (28 Apr, 2015)

#### Fix

* An issue on Android which causes screen remaining black when user taps back button when playing a full-screen Youtube video.

---

### 2.1.1 (26 Apr, 2015)

#### Add

* API for setting and getting alpha value.

#### Fix

* An issue which causes spinner not hidden when web view dismissed by done button.

---

### 2.1.0 (22 Apr, 2015)

#### Add

* Add immersive mode support for Android for API Level 19 and above.
* Google CardBoard support. You can now find a pre-built CardBoard jar library.

#### Fix

* A crash which causes crash when setting insets to an invalid value.

---

### 2.0.0 (15 Mar, 2015)

#### Add

* Support for Windows Phone 8 and 8.1. Please note you need to add WebBrowser capability in Windows Phone's manifest file after exported from Unity.
* Support for Unity 5. If you upgrade from UniWebView 1.x, you need to remove the old package and reimport again.
* 64 bit support for Mac Editor version, since Unity 5 is now a 64-bit app.

#### Fix

* An issue which may cause the cache can not be cleaned completed in iOS.
* A serialize issue which may cause editor crash in some occasion.

::: danger
Notice: This version is not compatible with Unity 4.x. If you need to use UniWebView on Unity 4.x, please use UniWebView 1.x instead. You can find more information about the earlier version on Asset Store: https://assetstore.unity3d.com/jp/#!/content/12476
:::

---

### 1.9.0 (10 Feb, 2015)

::: warning
1.9.x will be the last version support Unity 4.x. Due to the huge difference between Unity 4 and 5, we decide to make a major update as well. Please keep an eye on our website (https://uniwebview.onevcat.com) to know more information about Unity 5 compatible version.
:::

#### Fix

* An issue cause Mac Editor can not be used in 64bit environment.
* Removed source folder and zipped them to avoid a potential compile error.
* Removed a deprecated method to avoid compile error.

---

### 1.8.1 (9 Nov, 2014)

#### Fix

* Improve performance for Mac Editor a lot.
* An issue which cause spinner can not hide when the web view removed by code from Unity.
* Update Android build target.

---

### 1.8.0 (5 Nov, 2014)

#### Fix

Add: A method to change the user agent of the web view. Now you can use the SetUserAgent method to set customized user agent for the web view.
Add: The Mac Editor now supports for Xcode 6.1 and OSX Yosemite.

* An orientation issue when you set game as a landscape one, while the web view can not rotated to portrait on iOS 8.

---

### 1.7.3 (8 Oct, 2014)

#### Fix

* A issue which may cause crash on some Android device with system version 2.x.

---

### 1.7.2

#### Add

* An API for Android to enable wide view port support. Call SetUseWideViewPort(true) before loading any webpage containing viewport meta tag on Android to make it available.

#### Fix

* Now the viewport support for Android is disabled by default. Use the new added SetUseWideViewPort API to enable it if you are using viewport tag in your webpage.

---

### 1.7.1 (7 Oct, 2014)

#### Add

* Insets setting for portrait and landscape mode. You can now set different portrait and landscape inset easier. If you need show your web content in both orientation, you might want to use the new `InsetsForScreenOreitation` event. See demo code for the usage.

#### Fix

* Viewport issue for some Android devices. Now the html's viewport should work correctly.
* Web view truncated issue when the y position set to 0 on some Android devices. This is an advanced fix continuing for version 1.6.1.
* An issue which causes auto-rotation not work on iOS 8 in some situation.
* The position of toolbar and spinner should be correct on iOS 8 now.
* A build error which stops the exported project compiling in Xcode 5 and iOS 7 SDK.

---

### 1.7.0 (26 Sep, 2014)

::: danger
This version dropped support for Unity 4.1.4. Now UniWebView starts from 4.2.2. And 1.7.x will be the last versions support Unity version below 4.4 (because there is a compile error in iOS 8 SDK in the exported Xcode project, which is annoying and makes the development harder).
:::

#### Add

* UniWebViewHelper.screenHeight and UniWebViewHelper.screenWidth. You can retrieve the screen size in "point" instead of "pixel" with these two new API. See the migrate guide below for more.
* "tel:" link support for Android. Now you can open the telephone UI by a link like "tel:12345678".
* An example in demo file, to show how to handle the auto-orientation, with keeping the layout unchanged in both portrait and landscape.
* iOS 8 and 5.5 inch iPhone 6 Plus support.

#### Fix

* The auto-orientation issue on iOS 8. Now it works for both iOS 8 SDK.
* Trim the url leading and trailing spaces, making the behaviors the same for iOS and Android.

#### Deprecate

* UniWebViewHelper.RunningOnRetinaIOS() is now deprecated due to 3x size of iPhone 6 Plus. Use UniWebViewHelper.screenHeight and UniWebViewHelper.screenWidth to decide the insets for retina display now. See the migrate guide below for more.

#### Remove

* Remove the long-ago deprecated Dismiss().
* Remove support for Unity 4.1.4.

> Migrate Guide - If you are using UniWebViewHelper.RunningOnRetinaIOS() to decide the insets of UniWebView, you may want to look at the Migrate Guide:

Due to introduction of iPhone 6 Plus and its new @3x scale, the old way would not work well. Now, all screen-size-based insets calculation for UniWebView should NOT use RunningOnRetinaIOS anymore. Instead you should use UniWebViewHelper.screenHeight and UniWebViewHelper.screenWidth and specify the point directly. For example, if you want to show a web view taking the upper half of screen, before version 1.7.0, it might be something like this:

    int uiFactor = UniWebViewHelper.RunningOnRetinaIOS() ? 2 : 1;
    int bottomInset = Screen.height / ( 2 * uiFactor );
    _webView.insets = new UniWebViewEdgeInsets(0,0,bottomInset,0);

Right now, with the new API, you can just use this:

    int bottomInset = (int)(UniWebViewHelper.screenHeight * 0.5f);
    _webView.insets = new UniWebViewEdgeInsets(0,0,bottomInset,0);

No more ui factor and device-specified calculation needed.

To make sure you can notice this change, the usage of RunningOnRetinaIOS() will cause an error now. You can just delete all usage of that, and change your insets code like the example above.

---

### 1.6.1 (2 Sep, 2014)

#### Add

* A pre-compiled package for Vuforia's QCARPlayerNativeActivity activity. You can find it under the /UniWebView/Source/ThirdPartyJar folder.

#### Fix

* An issue which cause the web view can not be full screen on some Android tablet.
* Drop support for Android 2.2.x and earlier. So you can recompile the jar file with Android SDK 18 and later.

---

### 1.5.4 (29 Jul, 2014)

#### Fix

* Keyboard overlap issue when text filed on Android. Now the web content will be scrolled up automatically.

---

### 1.5.3 (16 Jul, 2014)

#### Fix

* A bug which causes an unexpected behavior when starting from other activities in Android.

---

### 1.5.2 (19 Jun, 2014)

#### Fix

* A bug when setting insets in some Android devices.

---

### 1.5.0 (1 Jun, 2014)

#### Add

* New download feature support for Android.
* Compatibility with Unity 4.5.

#### Fix

* Update Android recompile guide for Unity 4.5.
* Rotation problem when playing full screen video on iOS. Now the layout can work perfectly.

---

### 1.4.2 (30 Apr, 2014)

#### Fix

* Fix errors when export from Unity for the platforms not supported in UniWebView. Be caution, this fix does not make UniWebView supporting for other platforms than iOS and Android. It just disabled UniWebView code and suspended the errors.

---

### 1.4.1 (31 Mar, 2014)

#### Add

* An API for adding some javascript snippet to Android and iOS in runtime. Now you can dynamically add js code to your page when the game is running, instead of defining it in the web page before loading the web content.
* API for cleaning a specified cookie, instead of cleaning them all.
* A key down event on Android while the web view is activated.

#### Fix

* Improved the performance for Mac Editor.
* Some other small issues.

> The parameters of LoadBeginDelegate is changed from 1.4.0. There is now an url parameter in the delegate. If you are using web view.currentUrl in the corresponding event, now please use this parameter instead of that. The currentUrl is updated only when web page loading finished or failed now.

---

### 1.4.0 (12 Mar, 2014)

#### Add

* Add an API for clean cookies for the web view.
* Add an API for stop current loading of the web view.

#### Fix

* Change the logic when loading web view, now UniWebView will send all loading begin event back to Unity.
* An issue which cause Youtube video can not be automatically played in iOS.

---

### 1.3.0 (11 Feb, 2014)

#### Add

#### Fix

New: Customize url schemes. You can now add and remove the url schemes UniWebView is using. By using new API of AddUrlScheme and RemoveUrlScheme, you can now integrate some more third party service easier.
New: Support for location service of Android.

* Some memory leak on iOS.

---

### 1.2.6 (21 Jan, 2014)

#### Add

* Add bouncesEnable property to Android. You can set the bounce effect for Android as well. Default is false, which means not show the bounce effect on Android, and not bounce the web view on iOS.
* Add a refresh button in iOS's built-in tool bar.
* Add zoom feature to both iOS and Android. Now you can set the zoomEnable property to let your users zoom-in or zoom-out web view by a pinch gesture.
* Add Reload method, you can reload the current page now from code.

#### Fix

* Ignore the ssl check in Android, it is useful when you are testing your page with a certification you create yourself. Otherwise, you can not get pass from it.
* Log order issue on Android. Now the create and show events can be logged correctly.

---

### 1.2.5 (9 Jan, 2014)

#### Add

* Add a bouncesEnable property to control the bounces when scroll the web view in iOS. The bounces effect is turned off by default, if you want it back, set this property to true.

#### Fix

* A problem causing the OnComplete event can not be raised correctly when load fails.
* A problem which causes the name of web view game object being appended instead of replaced.
* A problem with hiding the web view. Now the web view area could be clicked through correctly when hidden.

#### Deprecate

* `Dismiss()` is now deprecated, use `Hide()` to hide the web view.

---

### 1.2.3 (25 Dec, 2013)

#### Add

* Support for "mailto" link for Android.

#### Fix

* A potential issue which may cause unity scene turning to black when switching back to game while web view opened. It might shows on some old Android devices.
* A problem which causes the source can not get compiled in Mono Develop.
* Update the Dismiss method to let it work as designed in Mac Editor and Android devices. It now behaviors as making the web view hidden instead of close and destroy it. You can use Show to make it visible again after dismissing it.

---

### 1.2.2 (18 Dec, 2013)

#### Add

* An option to disable the back button on Android device. It is useful when you don't want users dismiss the web view (for example you want to use web view as part of your UI).

#### Fix

* Change the local file loading back to previous because the new method can not handle base url very well.
* An issue which caused current url can not be retrieved properly for Android.

---

### 1.2.1 (12 Dec, 2013)

#### Add

* A property to get the current page url. You can know on which page now when you using UniWebView.
* An event when the page begins to load. Not only the first page load from code, but also all the page loading by clicking links on the page.

#### Fix

* A mistake in transparent setting method in Android.
* Background can be setting to transparent now in Android, from 2.x to 4.x (and later I think).
* Make the local html load easier to use. Now just set the correct streaming asset path, and load. No more platform-specified step.

---

### 1.2.0 (7 Dec, 2013)

#### Add

* A spinner is added to web view, which will show when the webpage is under loading. The spinner is on by default, if you don't want it, you can set it not show by the SetShowSpinnerWhenLoading method of UniWebView.
* We also added a text label in the spinner, to show some information to your users.
* Added an OnEvalJavaScriptFinished event for evaluate js script. Now EvaluatingJavaScript will not return a value, but raise the event. So you can use the same API for both iOS and Android.
* Local file load for Android 4.x.

#### Fix

* Rewrote all the Android native code, to make it working properly under Unity 4.3.
* A problem which may cause unity game scene disappeared when game goes to background with web view opened in some old Android devices.

---

### 1.1.7 (2 Dec, 2013)

#### Add

* Support for loading local file in Android.

#### Fix

* A bug in the demo which causes an exception when you click the web page of the demo.
* A problem which causes the plugin not working sometimes in Editor.

---

### 1.1.6 (28 Nov, 2013)

#### Fix

* A problem the file input tag can not trigger a file chooser in Android.

---

### 1.1.3 (21 Nov, 2013)

#### Add

* Add a method to the web view for loading from a html string.
* Add some demo script to tell demonstrate how to load a local html file.

#### Fix

* A problem when users close the web view with soft keyboard showing in Android.

---

### 1.1.2 (16 Nov, 2013)

#### Add

* A better and more interesting demo scene to explain how to make the UniWebView work.

#### Fix

* A problem which cause the keyboard not working on Android.
* A rotation issue which cause the web view can not rotate correctly in iOS.

---

### 1.1.0 (9 Nov, 2013)

#### Add

* Add Youtube video playing support for Android.
* Add a tool bar to iOS.
* The users can use back button (Android) or a native toolbar (iOS) to close the web view now.
* Add an event to control whether the web view can be closed or not.

#### Fix

* Update the demo scene to make it clearer and more interesting.

---

### 1.0.1 (1 Nov, 2013)

Init release


