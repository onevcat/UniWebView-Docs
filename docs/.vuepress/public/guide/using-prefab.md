# Web View - Prefab

> UniWebView prefab simplifies adding a web view to Unity scenes, with options for URL loading and toolbar customization.

In this guide, we will add a `UniWebView.prefab` to the scene and show a sample page with it. This covers the basic usage of the general-purpose web view through prefab.

## Adding to Scene

[Prefab](https://docs.unity3d.com/Manual/Prefabs.html) is the fastest way to integrate a web view to your project. You can find the general-purpose web view prefab in `UniWebView/Prefab/UniWebView.prefab`:

Drag it to the scene you need to show a web view. Then you can configure the properties of the component in the Inspector Tab.

#### UniWebView.prefab Inspector

The `UniWebView.prefab` provides settings as below by default:

![](/images/uniwebview-property-v5.png)

For now, just input your web page URL into the "Url On Start" field (eg. `https://uniwebview.com`) and leave others as default. If you are on macOS, click the "Play" button in Unity Editor and now you should be able to see the web view opened and the page is loaded. You could also build it to an iOS or Android device to see how it works in the real device!

::: warning
If Unity reports any error when you play the scene, try to restart your Unity Editor and give it a chance to load the plugin at launch.
:::

::: details Properties Detail

---

##### Url On Start

> The URL which will be loaded in `Start()` of UniWebView. A normal web URL started with "http://" or "https://" is supported.

##### Show On Start

> Show the web view in `Start()`. If `false`, the web view will not show up automatically. You need to call `Show` method of the web view to display it later.

##### Full Screen

> Make the web view be full screen at start. If `true`, the "Frame" and "Reference Rect Transform" below will be ignored.

##### Use Toolbar

> **Deprecated.** Do not use it anymore. It is replaced by "Use Embedded Toolbar".

> ~~This is only for iOS and macOS Editor. By turning this on, a toolbar contains Go Back Button, Go Forward Button and Done Button (iOS only) will be shown with the web view. Your user could use this toolbar to navigate and close the web view. On Android, users could use the back button in the navigation bar to perform "go back" and "close" operation, so there is no need to supply a toolbar for Android.~~

##### Toolbar Position

> **Deprecated.** Do not use it anymore. It is replaced by "Embedded Toolbar Position".

> ~~If "Use Toolbar" is on, UniWebView will show the toolbar in the position specified by this. It only works for iOS, since on macOS the toolbar will always show in the window title bar.~~

##### Use Embedded Toolbar

> Show an embedded toolbar with the web view. It contains a Go Back Button, a Go Forward Button, a Done Button and a title label (default empty). Your user could use this toolbar to navigate and close the web view.

##### Embedded Toolbar Position

> If "Use Embedded Toolbar" is on, UniWebView will show the toolbar in the position specified by this. On macOS the toolbar will always show in the window title bar.

##### Frame

> Set the rect frame value for the web view. It is a `Rect` which indicates web view's origin point and its size as: `{x, y, width, height}`. If you need a fixed-size web view regardless of the screen size is, you could uncheck the "Full Screen" option, leave "Reference Rect Transform" to `null` and set this "Frame" instead.

##### Reference Rect Transform

> UniWebView could refer to a `RectTransform` and change web view size to follow that transform. It is very useful if you are using [Unity UI](https://docs.unity3d.com/Manual/UISystem.html) and/or with [Multiple Resolutions](https://docs.unity3d.com/Manual/HOWTO-UIMultiResolution.html) support. You can just create a UI element (like a `Panel`) under your Canvas and assign its `RectTransform` component here. UniWebView will determine the position and size based on this transform. You need to uncheck the "Full Screen" option, and setting "Reference Rect Transform" will also make "Frame" ignored.

:::

When you exporting your project to a device, please remember to contain the sample scene in the Build Settings. Here is what it would look like when opening in an iOS device:

![](/images/webview-sample.png)

## Instantiating at Runtime

Instead of adding the prefab to the scene before running it, you can also instantiate it at runtime. There is nothing different from instantiating a UniWebView prefab than any other normal prefab. Please refer to [Unity's documentation](https://docs.unity3d.com/Manual/InstantiatingPrefabs.html) to know more about this topic.

Once a UniWebView gets closed by Done Button or Back Button, it will destroy the component itself by default for releasing resources as soon as possible. You will not be able to reuse the same UniWebView. You need to create a new UniWebView if you want to display another page. Don't worry if you are not sure what does that means. We will explain this behavior in the [memory management](./memory-management.md) section later.

## Next Step

It is fairly easy to add a web view by using the UniWebView prefab. But to use all features of UniWebView, you have to write some code. We have a set of elegant and simple APIs. Even without any experience in coding before, it should be not hard for you to follow up the guide and control UniWebView fine. Follow the [Working with Code](./working-with-code.md) chapter to get your hand dirty now! :sweat_drops:
