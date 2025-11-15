# Position and Size

> UniWebView allows setting web view position and size either directly with a frame or by referencing a UI element's RectTransform for adaptive layouts.

UniWebView has two ways to determine where the web view should be displayed on the screen:

- **Setting a frame directly**, or
- **Setting a reference UI element**

## Setting Frame

You could set the position and size by using `Frame` property.

### Origin and Size

A frame is a combination of an origin (where it should be) and a size (how large it should be).

The coordinate system used in UniWebView is top-left based. The zero point `(0, 0)` in the coordinate is the most top-left point of your screen. And the size is defined by Unity `Screen`, with `Screen.width` and `Screen.height` as its max:

![](/images/RectXY.svg)

In this coordinate system, you could set the position and size of the web view quite easy:

```csharp
// Full screen web view:
webView.Frame = new Rect(0, 0, Screen.width, Screen.height);

// Bottom half of screen:
webView.Frame = new Rect(0, Screen.height / 2, Screen.width, Screen.height / 2);

// Insets from all sides by 10:
webView.Frame = new Rect(10, 10, Screen.width - 20, Screen.height - 20);

// 200 x 200 web view at point (100, 100)
webView.Frame = new Rect(100, 100, 200, 200)
```

> Although you can set the absolute value, keep in mind that the screen sizes are varying. Usually, you need to calculate a frame based on the current `Screen` before set it.

If you want more control on the position and size, UniWebView supports another way to get benefit from Resolution & Device Independence concept from Unity UI and **Canvas Scaler**. Read the [Using Reference UI Element](#using-reference-ui-element) below to know how to use it.

::: warning IMPORTANT
`Frame` property will be ignored if you use the method described in "Using Reference UI Element" (or say, if the `ReferenceRectTransform` property is not `null`).
:::

### Orientation Change

When setting `Frame` property, it is **only for the current screen**. If your game supports different orientation, you need to update the `Frame` to a new value when the screen orientation changes.

Listen to the `OnOrientationChanged` event and update `Frame` property there. For example, the code below will set the web view full screen and also keep it full screen when the orientation changes:

```csharp{4-8}
// Set the frame to full screen. Say it is portrait 320x640.
webView.Frame = new Rect(0, 0, Screen.width, Screen.height);

// OnOrientationChanged will be called whenever the screen orientation changes.
webView.OnOrientationChanged += (view, orientation) => {
    // Set full screen again. If it is now in landscape, it is 640x320.
    webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
};
```

> If you do not set the `Frame` again in the `OnOrientationChanged` event, the web view size will keep what it is initially set (320x640), and your layout will be broken.

## Using Reference UI Element

Unity has a responsive, nicely designed UI system: Unity UI. It considers screen canvas scaler and every rendered Unity UI comes with a `RectTransform`. You can set a `RectTransform` to UniWebView's `ReferenceRectTransform`, and UniWebView will follow this given `RectTransform` to determine its position and size. So you could skip to calculate the `Frame` and adapt to devices with different sizes and resolutions.

> Unity UI could be designed to fit for multiple resolutions by using a canvas with Canvas Scaler. With this feature, UniWebView can also be adaptive. If you are not familiar with it, we recommend you to read the [Designing UI for Multiple Resolutions](https://docs.unity3d.com/Manual/HOWTO-UIMultiResolution.html) first.

Once you have a `RectTransform`, just set the property:

```csharp
RectTransform myUITransform = ...
webView.ReferenceRectTransform = myUITransform;
```

And everything should be done.

> The `RectTransform` supports all three kinds render mode ("Screen Space - Overlay", "Screen Space - Camera" and "World Space") on the first `Canvas` from the transform above. However, if you are using a camera-depended space, please make sure you have set up the camera correctly for the render mode. Otherwise, `RectTransform` will fall back as there is no camera and the size/location might be incorrect.

### Handle Rect Transform Changing

Similar to the case for `Frame`, `ReferenceRectTransform` only considers the current state of the referenced transform when set. However, since we know the reference rect will be changed when the screen orientation changes, there is no need to update it again in `OnOrientationChanged` event. UniWebView will update its position and size automatically for you.

But for other changes besides of the orientation change, UniWebView cannot detect it automatically. You take the responsibility to update the web view position and size in this case. In Unity, the `OnRectTransformDimensionsChange` in `UIBehavior` will be called when the attached rect transform changed. Please call UniWebView's `UpdateFrame()` in this method to give UniWebView a chance to calculate correct layout:

```csharp
// In a UIBehavior script:

// This method is called whenever the associated `rectTransform` is changed.
void OnRectTransformDimensionsChange() {
    // Update web view's frame to match the reference rect transform.
    webView.UpdateFrame();
}
```

## Rounded Corners

Once the web view position and size are defined, you can optionally apply rounded corners. The rounding happens on the native container, so nothing in your Unity UI hierarchy needs to change.

```csharp
// Apply the same radius (Unity pixels) to every corner.
webView.SetRoundCornerRadius(12.0f);

// Or specify individual radii in clockwise order starting from the top-left corner.
webView.SetRoundCornerRadius(topLeft: 16.0f, topRight: 12.0f, bottomRight: 8.0f, bottomLeft: 4.0f);
```

Rounded corner settings work alongside `Frame`/`ReferenceRectTransform`. When you update the layout or the reference `RectTransform`, the previously applied corner radii remain in effect.

> The values are expressed in Unity pixel units. UniWebView converts them to platform-specific coordinates (points on iOS, pixels on Android) so the visual effect stays consistent across devices.

To emphasise rounded corners, you can add a container shadow that follows the same outline:

```csharp
var shadow = new UniWebViewShadow(
    radius: 18.0f,
    opacity: 0.35f,
    offsetX: 0.0f,
    offsetY: -6.0f,
    color: Color.black,
    spread: 4.0f
);
webView.SetShadow(shadow);
```

Passing `UniWebViewShadow.None` removes the shadow without changing the corner radius.
