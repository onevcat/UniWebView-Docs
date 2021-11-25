# Safe Browsing Mode

## What is Safe Browsing Mode

UniWebView provides a flexible solution for interacting with web content when configured correctly. However, sometimes you may want a simpler way. Safe Browsing Mode is an **out-of-the-box solution** to show the web page as it is in the browser.

#### Consider to use the Safe Browsing Mode if the following conditions are met:

- **You do not need to resize the web view.** The Safe Browsing Mode always shows your page full-screen.
- **You do not need to hide the system UI.** In Safe Browsing Mode, a title shows the current URL and some default controls (such as Back & Forward buttons, Done button, etc) will show.
- **Users visit your page just like in a browser.** You can not execute JavaScript from Unity or receive any message from the web page. There is very little things customizable.

#### In return for these limitations, the benefits are also obvious:

- **Excluded functionality.** Some features are only available in Safe Browsing Mode: such as **Apple Pay**, **Reader** and **Password Autofill**. A few **OAuth sign-in** services also [reject normal web view](https://developers.googleblog.com/2016/08/modernizing-oauth-interactions-in-native-apps.html), but you can still perform them in Safe Browsing Mode.
- **Zero configurations.** You just give a URL and all other things are handled without further effort. No need to request for user permissions.
- **Browser level of experience.** Users can feel at home with a standard browser UI. The rendering happens in lower level and you get a better performance.

---

In the Safe Browsing Mode, the web content will be displayed full-screen with a default UI on either iOS and Android:

![](/images/safe-browsing-mode-compare.png)

# Checking Availability

Before creating and showing a page, please ensure that the Safe Browsing Mode is available on the device. To do so, call
`IsSafeBrowsingSupported` and check its result:

```csharp
if (UniWebViewSafeBrowsing.IsSafeBrowsingSupported) {
    // Safe Browsing Mode is available on current device.
}
```

This property always returns `true` on iOS runtime platform. On Android, it depends on whether there is an Intent 
can handle the safe browsing request. Usually this ability is provided by Chrome, but there are also other browser apps
might implement that. If there is no Intent can open the URL in safe browsing mode, or the handling app is set to 
disabled in Android system, this property returns `false`.

To use this and any other Safe Browsing APIs on Android when you set your **Target API Level to Android 11 (30) or later**, you 
need to add the correct intent query explicitly in your `AndroidManifest.xml` file, to follow the 
[Package Visibility](https://developer.android.com/about/versions/11/privacy/package-visibility). Add `queries` as a 
sub-node of the `manifest` tag:

```xml{6-10}
<manifest>
  // ...

  </application>

  <queries>
    <intent>
      <action android:name="android.support.customtabs.action.CustomTabsService" />
    </intent>
  </queries>
</manifest>
```
::: warning Package Visibility from Android 11 
If you are setting Target API Level higher than Android 11 (API Level 30), but not setting the `queries` in your 
`AndroidManifest.xml`, the `UniWebViewSafeBrowsing` related APIs might not work expectedly.
:::

## Opening a URL in Safe Browsing Mode

Besides of [using the prefab](./using-prefab.md#using-uniwebviewsafebrowsing-prefab), you can create a safe browsing view by code:

```csharp
// Create a UniWebViewSafeBrowsing instance with a URL.
var safeBrowsing = UniWebViewSafeBrowsing.Create("https://docs.uniwebview.com");

// Show it on screen.
safeBrowsing.Show();
```

Once created, the URL cannot be modified anymore. It is also the only chance you can set which URL the user would start to browse.

::: danger HTTP & HTTPS
Only web content hosted by HTTP or HTTPS is supported in Safe Browsing Mode. Attempts to load a local file URL in Safe Browsing Mode causes a runtime error.
:::

## Customization & Events

### Color

You can customize the color of title/tool bar background:

```csharp
var color = new Color(0.263f, 0.627f, 0.278f);

// Background color.
safeBrowsing.SetToolbarColor(color);

// Controls color. Only for iOS.
safeBrowsing.SetToolbarItemColor(Color.white);
```

The code above will give you a colorful toolbar:

![](/images/sb-toolbar-ios.png)

![](/images/sb-toolbar-android.png)

::: warning Controls color on Android
Although in the screenshot above, the controls are rendered with white and it seems that `SetToolbarItemColor` also applies to Android, that method actually only works for iOS.

On Android, the system will automatically pick from white or black, based on the background color you set by `SetToolbarColor`.
Check the color palettes in the [Material design color guide](https://material.io/design/color/the-color-system.html#tools-for-picking-colors) to get detail on which color will be used.
:::

### Finish Event

`UniWebViewSafeBrowsing` delivers an `OnSafeBrowsingFinished` event when the browsing is done and web page is dismissed by user. It is a good time to restore your game session or reset any reference you are using to the `UniWebViewSafeBrowsing` object.

```csharp
safeBrowsing.OnSafeBrowsingFinished += (browsing) => {
    Debug.Log("UniWebViewSafeBrowsing is closed.");
};
```

### Safe Browsing Mode in Editor

On macOS Editor, due to the corresponding native class is not available, there is no such "Safe Browsing Mode". When you create and show a `UniWebViewSafeBrowsing`, UnIWebView falls back to `Application.OpenURL`. That means:

- Your URL will be opened in an external browser on system, such as Safari or Chrome.
- The customization methods and the events do not work. Any logic you write in `OnSafeBrowsingFinished` will never be called.
