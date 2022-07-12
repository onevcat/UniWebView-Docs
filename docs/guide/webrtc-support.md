# WebRTC Support

[WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) (or say, the popular `getUserMedia` or similar APIs) is supported from iOS 14.3 and all Android versions. But it requires a few steps before you can use it.

First, you need to choose either using the **Safe Browsing Mode** (if you only need to display a web page full screen and do not need other customization) or using the **regular web view** (when you need to resize the web view and get more control).

### Using Safe Browsing Mode

It is recommended that you use the [Safe Browsing Mode](safe-browsing.md) to show WebRTC contents. It launches an environment closer to a real browser, where WebRTC can work seamlessly.

```csharp
if (UniWebViewSafeBrowsing.IsSafeBrowsingSupported) {
  var safeBrowsing = UniWebViewSafeBrowsing.Create("https://webrtc.github.io/samples/");
  safeBrowsing.Show();
}
```

::: warning NOTICE
On Android, you need to add an additional intent query to allow `UniWebViewSafeBrowsing` API available. Please follow the "Checking Availability" part in [Safe Browsing Mode](safe-browsing.md#checking-availability) guide.
:::

### Using Regular Web View

If you need to take more control over the web view, you can still use the regular web view. Before the WebRTC APIs can work on your page, you need to configure the web view and project. In the example below, we try to use the camera. If you need other hardwares such as the microphone, you can add the corresponding permissions as well.

#### On iOS

1. Make sure you are targeting iOS 14.3 or later. Before iOS 14.3, there is no support of WebRTC on iOS system.
2. Add the code below to enable auto play on iOS before you create a web view. Otherwise, the captured video won't play correctly.

   ```csharp
   UniWebView.SetAllowAutoPlay(true);
   UniWebView.SetAllowInlinePlay(true);

   // Now, you can create the web view.
   var webView = webViewGameObject.AddComponent<UniWebView>();
   // ...
   ```

3. Add `NSCameraUsageDescription` key in the Info.plist to the exported Xcode project. You can do this by setting a value to the "Camera Usage Description" field in the "Player Settings, iOS Settings tab" of your Unity Project.

#### On Android

1. Request the camera permission in either the AndroidManifest.xml or through Unity's `Permission` class. It depends on the target Android API level of your game. For newer versions of Android, a `Permission` request should be sufficient.

   ```csharp
   Permission.RequestUserPermission(Permission.Camera);

   // Maybe you need these too in some cases in AndroidManifest.xml:
   <uses-permission android:name="android.permission.CAMERA" />
   ```

2. Call `AddPermissionTrustDomain` and add the domain of your WebRTC content before you load the page. It allows requests from a certain domain to use the camera hardware. Please note that you need to only add the domain part instead of the whole URL.

   ```csharp
   webView.AddPermissionTrustDomain("webrtc.github.io");
   // ...
   webView.Load("https://webrtc.github.io/samples/");
   ```

#### On macOS Editor

WebRTC does not support or work on macOS Editor version of UniWebView. You need to build it to an iOS or Android device to test it.
