# Using Prefab

## Adding to Scene

[Prefab](https://docs.unity3d.com/Manual/Prefabs.html) is the fastest way to integrate a web view to your project. UniWebView provides two prefabs under the `UniWebView/Prefab` folder:

- `UniWebView.prefab`: For general-purpose web view
- `UniWebViewSafeBrowsing.prefab`: For safe browsing mode

::: tip
To know the difference between the general-purpose web view mode and the safe browsing mode, please check the [Safe Browsing Mode](./safe-browsing.md) guide.
:::

Drag either to the scene you need to show a web view. Then you can configure the properties of the component in the Inspector Tab.

### Using UniWebView.prefab

The `UniWebView.prefab` provides settings as below by default:

![](/images/uniwebview-property.png)

For now, just input your web page URL into the "Url On Start" field (eg. `https://uniwebview.com`) and leave others as default. Click the "Play" button in Unity Editor and now you should be able to see the web view opened and the page is loaded. You could also build it to an iOS or Android device to see how it works in the real device!

::: details Properties Detail

---

#### Url On Start

> The URL which will be loaded in `Start()` of UniWebView. A normal web URL started with "http://" or "https://"is supported.

#### Show On Start

> Show the web view in `Start()` of UniWebView. If `false`, the web view will not show up automatically. You need to call `Show` method of the web view to display it.

#### Full Screen

> Make the web view be full screen at start. If `true`, the "Frame" and "Reference Rect Transform" below will be ignored by default.

#### Reference Rect Transform

> UniWebView could refer to a `RectTransform` and change web view size to follow that transform. It is very useful if you are using [Unity UI](https://docs.unity3d.com/Manual/UISystem.html) with [Multiple Resolutions](https://docs.unity3d.com/Manual/HOWTO-UIMultiResolution.html) support. You can just create a UI element (like a `Panel`) under your Canvas to let it determine the position and size of your web view. Similar to the "Full Screen" option, setting "Reference Rect Transform" will make "Frame" option ignored.

#### Frame

> Set the rect frame value for the web view. It is a `Rect` which indicates web view's origin point and its size as: `{x, y, width, height}`. If you need a fixed-size web view regardless of the screen size is, you could uncheck the "Full Screen" option, leave "Reference Rect Transform" to `null` and set "Frame" instead.

#### Use Toolbar

> This is only for iOS and macOS Editor. By turning this on, a toolbar contains Go Back Button, Go Forward Button and Done Button (iOS only) will be shown with the web view. Your user could use this toolbar to navigate and close the web view. On Android, users could use the back button in the navigation bar to perform "go back" and "close" operation, so there is no need to supply a toolbar for Android.

#### Toolbar Position

> If "Use Toolbar" is on, UniWebView will show the toolbar in the position specified by this. It only works for iOS, since on macOS the toolbar will always show in the window title bar.

:::

Here is what it would look like when opening in an iOS device:

![](/images/webview-sample.png)

### Using UniWebViewSafeBrowsing.prefab

The steps of using the safe browsing prefab are almost the same as above: drag the prefab to your scene, configure it, and play the scene. UniWebViewSafeBrowsing prefab only provides one property:

![](/images/webview-safe-browsing-prefab.png)

Similarly, set it to `https://uniwebview.com`, and build the scene to a device. The web page with a default title and toolbar UI will be displayed:

![](/images/webview-safebrowsing-sample.png)

> Remember to remove the previous `UniWebView.prefab` if you are trying this `UniWebViewSafeBrowsing.prefab`. Both would show the web page up in the `Start` method, so you may get into a conflict.

::: warning Safe Browsing Mode in Editor
The native component which is required in Safe Browsing Mode does not exist in the macOS system. In macOS Unity Editor, the Safe Browsing Mode will fallback to opening the external browser like Safari or Chrome and all its lifecycle events will not work.
:::

## Instantiating at Runtime

Instead of adding the prefab to the scene before running it, you can also instantiate it at runtime. There is nothing different from instantiating a UniWebView prefab than any other normal prefab. Please refer to [Unity's documentation](https://docs.unity3d.com/Manual/InstantiatingPrefabs.html) to know more about this topic.

Once a UniWebView gets closed by Done Button or Back Button, it will destroy the component itself by default for releasing resources as soon as possible. You will not be able to reuse the same UniWebView. You need to create a new UniWebView if you want to display another page. Don't worry if you are not sure what does that means. We will explain this behavior in the [memory management](./memory-management.md) section later.

## Next Step

It is fairly easy to add a web view by using the UniWebView prefabs. But to get benefit from all features of UniWebView, you have to write some code. We have a set of elegant and simple APIs as well as an exhaustive guide. So even you have no experience in coding before, it should be not hard for you to follow up and control UniWebView fine. Follow the [Working with Code](./working-with-code.md) chapter to get your hand dirty now! :sweat_drops:
