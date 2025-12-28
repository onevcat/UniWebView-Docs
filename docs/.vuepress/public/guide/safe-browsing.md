# Safe Browsing Mode

> UniWebView's Safe Browsing Mode offers a full-screen, browser-like web experience with customizable UI and requires device support checks.

In this guide, we cover both of the prefab and code use of the Safe Browsing Mode.

In the Safe Browsing Mode, the web content will be displayed full-screen with a default UI on either iOS and Android:

![](/images/safe-browsing-mode-compare.png)

> Safe Browsing Mode is a simpler and out-of-the-box solution to show the web page as it is in the browser. For more detail about the difference between the general-purpose web view and the Safe Browsing Mode, refer to [this guide](./overview.md#two-options).

## Checking Availability

Before creating and showing a page, please ensure that the Safe Browsing Mode is available on the device. To do so, call
`IsSafeBrowsingSupported` and check its result:

```csharp
if (UniWebViewSafeBrowsing.IsSafeBrowsingSupported) {
    // Safe Browsing Mode is available on current device.
}
```

#### Target API Level higher than Android 11

If you set your **Target API Level to Android 11 (30) or later**, you need to add the correct intent query
explicitly in your `AndroidManifest.xml` file, to follow the [Package Visibility](https://developer.android.com/about/versions/11/privacy/package-visibility)
to add `queries` as a sub-node of the `manifest` tag:

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
`AndroidManifest.xml`, the `UniWebViewSafeBrowsing` related APIs will not work expectedly.
:::

#### About `IsSafeBrowsingSupported`

This property always returns `true` on iOS runtime platform. On Android, it depends on whether there is an Intent
can handle the safe browsing request. Usually this ability is provided by Chrome, but there are also other browser apps
might implement that. If there is no Intent can open the URL in safe browsing mode, or the handling app is set to
disabled in Android system settings, this property returns `false`.

You can only use the Safe Browsing Mode when the property is `true`. Otherwise, please let your user know how to enable
it by re-installing Chrome and enable it in the system settings.

## Prefab

> Remember to remove the previous `UniWebView.prefab` first if you just followed the [Web View - Prefab](./using-prefab.md) guide.
> Both prefabs try to show the web page up in the `Start` method, so you may get into a conflict.

The steps of using the safe browsing prefab are almost the same as above: drag the `UniWebViewSafeBrowsing.prefab` under
`UniWebView/Prefab` folder to your scene, configure it, and play the scene. UniWebViewSafeBrowsing prefab only provides one property:

![](/images/webview-safe-browsing-prefab-v5.png)

Set it to `https://uniwebview.com`, and build the scene to a device. The web page with a default title and toolbar UI will be displayed:

![](/images/webview-safebrowsing-sample.png)

## Code

### Create & Show

You can also create a safe browsing view by code:

```csharp
// Create a UniWebViewSafeBrowsing instance with a URL.
var safeBrowsing = UniWebViewSafeBrowsing.Create("https://docs.uniwebview.com");

// Show it on screen.
safeBrowsing.Show();
```

::: danger HTTP & HTTPS
Only web content hosted by HTTP or HTTPS is supported in Safe Browsing Mode. Attempts to load a local file URL in Safe Browsing Mode causes a runtime error.
:::

::: warning Safe Browsing Memory
Once created, the native Safe Browsing component keeps its underlying browser objects alive until the tab is closed **or** you explicitly dispose it.
If you create a Safe Browsing instance but later decide not to call `Show`, make sure to release it with `safeBrowsing.Invalidate()`; otherwise its memory stays allocated on both Android and iOS.
Whenever the Safe Browsing UI is actually shown, you do **not** need to call `Invalidate` manually—closing the tab (for example, tapping Done or pressing Back) triggers the native cleanup automatically.
:::

#### Releasing Safe Browsing Without Showing

Sometimes you prepare Safe Browsing but later decide not to present it. In that case call `Invalidate` to release the native resources:

```csharp
var safeBrowsing = UniWebViewSafeBrowsing.Create("https://docs.uniwebview.com");

// Business logic changed, Safe Browsing is no longer needed.
safeBrowsing.Invalidate();
```

`Invalidate` does not close a Safe Browsing tab that is already visible (Android cannot dismiss Custom Tabs programmatically), but it unbinds the native services and removes the Unity listener so the instance can be garbage collected safely.

### Customization

#### Color

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

On Android, the system will automatically pick from white or black, based on the background color you set by `SetToolbarColor`, to make sure the text is clearly visible.
Check the color palettes in the [Material design color guide](https://material.io/design/color/the-color-system.html#tools-for-picking-colors) to get detail on which color will be used.
:::

#### Advanced Custom Tabs Features (Android)

On Android, Chrome Custom Tabs (and other providers that support Custom Tabs) offer richer, customizable APIs: color schemes, flexible height, secondary (bottom) toolbar, navigation bar divider, etc. UniWebView exposes these through the Safe Browsing APIs; check the [API docs](/api/uniwebviewsafebrowsing.html) for usage.

For example, you can display a share button or present the page as a sheet:

![](/images/custom-chrome-tab.png)

The default AndroidX Browser version is **1.5.0**, which covers the core features. If an API call in the docs requires a higher version (e.g., 1.7/1.8), upgrade the Android Browser package in the [UniWebView Settings Panel](/guide/installation.html#optional-steps) before building. Sometimes, you may also need to upgrade the Android SDK Target API Level or the Kotlin version together.

### Events

#### Finish Event

`UniWebViewSafeBrowsing` delivers an `OnSafeBrowsingFinished` event when the browsing is done and web page is dismissed by user. It is a good time to restore your game session or reset any reference you are using to the `UniWebViewSafeBrowsing` object.

```csharp
safeBrowsing.OnSafeBrowsingFinished += (browsing) => {
    Debug.Log("UniWebViewSafeBrowsing is closed.");
};
```

#### Navigation Events and Android Limitation

Besides the finish event, there are three navigation lifecycle callbacks: `OnSafeBrowsingNavigationStarted`, `OnSafeBrowsingNavigationFinished`, and `OnSafeBrowsingNavigationFailed`. Each delegate now receives both the `UniWebViewSafeBrowsing` instance and a `UniWebViewSafeBrowsingEventMetadata` payload so you can inspect timestamps and native sources.

- **iOS/macOS**: The events are dispatched immediately when Safari reports each state.
- **Android**: Safe Browsing launches a Chrome Custom Tab, which pauses the Unity activity in the background. Unity does not process `UnitySendMessage` callbacks while paused, so these events are only delivered after the user dismisses the Custom Tab and the game returns to the foreground. They should not be used for real-time progress feedback on Android until a future update changes this behavior.

> Note: Safari does not expose a "navigation started" callback, so `OnSafeBrowsingNavigationStarted` is only raised on Android.

#### Metadata Payload

Internally, native callbacks send JSON metadata. UniWebView parses it into a strongly-typed `UniWebViewSafeBrowsingEventMetadata` and delivers it through every Safe Browsing event:

- `OnSafeBrowsingClosed(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)` – fires when the user closes the Safe Browsing tab with metadata payload (timestamp and native source).
- `OnSafeBrowsingNavigationStarted(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)`
- `OnSafeBrowsingNavigationFinished(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)`
- `OnSafeBrowsingNavigationFailed(UniWebViewSafeBrowsing browsing, UniWebViewSafeBrowsingEventMetadata metadata)`

```csharp
safeBrowsing.OnSafeBrowsingClosed += (browsing, metadata) => {
    Debug.Log($"Finished at {metadata.TimestampUtc}");
};
```

`UniWebViewSafeBrowsingEventMetadata.Timestamp` uses epoch milliseconds, so you can convert it to UTC or local time reliably across platforms.

#### Safe Browsing Mode in Editor

On macOS Editor, due to the corresponding native class is not available, there is no such "Safe Browsing Mode". When you create and show a `UniWebViewSafeBrowsing`, UniWebView falls back to `Application.OpenURL`. That means:

- Your URL will be opened in an external browser on system, such as Safari or Chrome.
- The customization methods and the events do not work. Any logic you write in `OnSafeBrowsingFinished` will never be called in Editor.
