# Migration Guide

::: tip Upgrade Pricing
If you have purchased UniWebView 2 before, we offer a discount on upgrade. For users purchased 
UniWebView 2 from UniWebView Store, please visit our [home page](https://uniwebview.com/#prices) for more information.
For Unity Asset Store users, you could login with your Asset Store and visit [our product page](https://www.assetstore.unity3d.com/#!/content/92605) 
to find the Upgrade Price.
:::

We create UniWebView 3 from the first line of code, it contains many breaking changes from UniWebView 2. 
Most of the APIs are redesigned with much better naming conventions and more stable behaviors. Although 
it may take you some time to upgrade your project from UniWebView 2 to 3, we believe it is worth to do so.

In this documentation, we will guide you to upgrade your existion project from UniWebView 2 to UniWebView 3.
We will also list all the API changes before and after version 3. You could take them as a reference if you 
need to take the migration. If you are new to UniWebView and were not using UniWebView 2 in your current project,
see the [Installation Guide](/latest/installation) instead to know how to get started with UniWebView from a fresh state.

### Overview

Although quite many APIs were changed in UniWebView 3, the basic idea and main features are kept the same. So you should 
be comfortable with most new APIs and could recognize the changing logic of them. First, we will guide you to remove the 
related part of UniWebView 2 from your existing project. Then you could follow the [Installation Guide](/latest/installation) 
to integrate UniWebView 3. At last, you can follow the API changes list to modify your existing API calls to match the latest 
version of UniWebView.

::: warning
Before you start the migration, we strongly suggest that you should backup your project.
:::

## Removing UniWebView 2

First you need to remove UniWebView 2 from your project. Remove these files/folders (and the 
related ".meta" files if any) under the "Assets" of your project:

- The whole "UniWebView" folder
- "index.html", "UniWebViewDemo"
- "Plugins/Editor/UniWebView.bundle"
- "Plugins/Android/UniWebView.jar"
- "Plugins/iOS/UniWebView.mm"
- All files under "Plugins" started with "UniWebView" (like "UniWebViewEventProcessor.cs", "UniWebViewPluginAndroid.cs", etc.)
- "Plugins/WP8/UniWebViewWP.dll"

You also need to modify the "AndroidManifest.xml" file under "Assets/Plugins/Android" folder. UniWebView is no longer needed to be your main activity. So you could revert to your original main activity. If you were using another third party library which needs to be main activity, change the value of "android:name" for the main activity to the name of that activity. Otherwise if you are not using any other as main activity, change it back to Unity's default `com.unity3d.player.UnityPlayerActivity`.

It should be no need to have these two attributes in the manifest file:

```xml
<meta-data android:name="android.app.lib_name" android:value="unity" />
<meta-data android:name="unityplayer.ForwardNativeEventsToDalvik" android:value="true" />
```

However, depends on your Unity version, you may encounter a problem while showing soft keyboard in a web view on Android. If this turns to be your case, you could add these two lines back to you AndroidManifest.xml.

If you have changed other part of AndroidManifest.xml, you may also want to revert it. You could find the default AndroidManifest.xml used by Unity under the "PlaybackEngines/AndroidPlayer/Apk/AndroidManifest.xml" in Unity installation path.

## Integrating UniWebView 3

Now, you completed removed UniWebView 2 from you project. Please make sure that you no longer have a "UniWebView" folder in "Assets". Then follow the [Installation Guide](/latest/installation) to integrate UniWebView 3 into your project.

### API Changes In Detail

Since the APIs are totally different, the compiler could not provide an advice to fix issues. Now you should be having quite a few compiling errors. Fortunately, the basic using of UniWebView does not change, so you could just look up the complaining UniWebView 2 APIs in the table and replace it with the new APIs.

For an API you are not sure, just click the API name to see its API reference. We also suggest you to check the [whole documentation](/latest/api/overview) briefly before you get your hand dirty.

Here is the API change list:


| Before (UniWebView 2)                   | After (UniWebView 3)                                                                                                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OnLoadBegin                             | [OnPageStarted](/latest/api/uniwebview.html?id=onpagestarted)                                                                                           |
| OnLoadComplete                          | [OnPageFinished](/latest/api/uniwebview.html?id=onpagefinished)                                                                                         |
| OnReceivedMessage                       | [OnMessageReceived](/latest/api/uniwebview.html?id=onmessagereceived)                                                                                   |
| OnEvalJavaScriptFinished                | Removed. Use handler based [EvaluateJavaScript](http://unidocs.onevcat.com/#/latest/api/uniwebview.html?id=evaluatejavascript) instead.                 |
| OnWebViewShouldClose                    | [OnShouldClose](/latest/api/uniwebview.html?id=onshouldclose)                                                                                           |
| OnReceivedKeyCode                       | [OnKeyCodeReceived](/latest/api/uniwebview.html?id=onkeycodereceived)                                                                                   |
| InsetsForScreenOreitation               | [OnOreintationChanged](/latest/api/uniwebview.html?id=onoreintationchanged)                                                                             |
| Load()                                  | Removed. Use [Load(string url)](/latest/api/uniwebview.html?id=load) instead.                                                                           |
| EvaluatingJavaScript(string javaScript) | [EvaluateJavaScript(string jsString, Action&lt;UniWebViewNativeResultPayload&gt; completionHandler)](/latest/api/uniwebview.html?id=evaluatejavascript) |
| AddJavaScript(string javaScript)        | [AddJavaScript(string jsString, Action&lt;UniWebViewNativeResultPayload&gt; completionHandler)](/latest/api/uniwebview.html?id=addjavascript)           |
| SetTransparentBackground                | Removed. Use [BackgroundColor](/latest/api/uniwebview.html?id=backgroundcolor) with 0 alpha value.                                                      |
| SetBackgroundColor                      | [BackgroundColor](/latest/api/uniwebview.html?id=backgroundcolor)                                                                                       |
| ShowToolBar                             | [SetShowToolbar](/latest/api/uniwebview.html?id=setshowtoolbar) with `true`                                                                             |
| HideToolBar                             | [SetShowToolbar](/latest/api/uniwebview.html?id=setshowtoolbar) with `false`                                                                            |
| SetShowSpinnerWhenLoading               | [SetShowSpinnerWhileLoading](/latest/api/uniwebview.html?id=setshowspinnerwhileloading)                                                                 |
| SetSpinnerLabelText                     | [SetSpinnerText](/latest/api/uniwebview.html?id=setspinnertext)                                                                                         |
| LoadWithOverviewMode                    | [SetLoadWithOverviewMode](/latest/api/uniwebview.html?id=setloadwithoverviewmode)                                                                       |
| CanGoBack()                             | [CanGoBack](/latest/api/uniwebview.html?id=cangoback)                                                                                                   |
| CanGoForward()                          | [CanGoForward](/latest/api/uniwebview.html?id=cangoforward)                                                                                             |
| AddPermissionRequestTrustSite           | [AddPermissionTrustDomain](/latest/api/uniwebview.html?id=addpermissiontrustdomain)                                                                     |
| SetHorizontalScrollBarShow              | [SetHorizontalScrollBarEnabled](/latest/api/uniwebview.html?id=sethorizontalscrollbarenabled)                                                           |
| SetVerticalScrollBarShow                | [SetVerticalScrollBarEnabled](/latest/api/uniwebview.html?id=setverticalscrollbarenabled)                                                               |
| SetAllowAutoPlay                        | [static SetAllowAutoPlay](/latest/api/uniwebview.html?id=setallowautoplay)                                                                              |
| SetAllowInlinePlay                      | [static SetAllowInlinePlay](/latest/api/uniwebview.html?id=setallowinlineplay)                                                                          |
| static SetUserAgent                     | [SetUserAgent](/latest/api/uniwebview.html?id=setuseragent)                                                                                             |
| static ResetUserAgent                   | Removed. Use [SetUserAgent](/latest/api/uniwebview.html?id=setuseragent) and pass `null`.                                                               |
| SetDoneButtonText                       | [SetToolbarDoneButtonText](/latest/api/uniwebview.html?id=settoolbardonebuttontext)                                                                     |
| CleanCookie                             | [static ClearCookies](/latest/api/uniwebview.html?id=clearcookies)                                                                                      |
| inets                                   | Removed. Use [Frame](/latest/api/uniwebview.html?id=frame) or [ReferenceRectTransform](/latest/api/uniwebview.html?id=referencerecttransform) instead.  |
| url                                     | urlOnStart (This is private and can only be set in Inspector. Use [Load](/latest/api/uniwebview.html?id=load) if you want to load a new page.)          |
| currentUrl                              | [Url](/latest/api/uniwebview.html?id=url)                                                                                                               |
| backButtonEnable                        | [SetBackButtonEnabled](/latest/api/uniwebview.html?id=setbackbuttonenabled)                                                                             |
| bouncesEnable                           | [SetBouncesEnabled](/latest/api/uniwebview.html?id=setbouncesenabled)                                                                                   |
| zoomEnable                              | [SetZoomEnabled](/latest/api/uniwebview.html?id=setzoomenabled)                                                                                         |
| userAgent                               | [GetUserAgent](/latest/api/uniwebview.html?id=getuseragent)                                                                                             |
| alpha                                   | [Alpha](/latest/api/uniwebview.html?id=alpha)                                                                                                           |
| openLinksInExternalBrowser              | [SetOpenLinksInExternalBrowser](/latest/api/uniwebview.html?id=setopenlinksinexternalbrowser)                                                           |
| immersiveMode                           | [SetImmersiveModeEnabled](/latest/api/uniwebview.html?id=setimmersivemodeenabled)                                                                       |
