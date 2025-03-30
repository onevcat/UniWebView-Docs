# Rotation and Scale

UniWebView allows you to transform the web view by applying rotation and scale. This gives you more flexibility when displaying web content in your game.

## Rotation

You can rotate a web view by setting a `UniWebViewTransform` value. The rotation is performed around the center point of the web view's frame.

```csharp
// Set rotation to 30 degrees
var rotation = new UniWebViewTransform(30)
webView.SetTransform(rotation);
```

The rotation value is measured in degrees, and it rotates the web view clockwise. When you apply a rotation, the web view maintains its frame dimensions but appears rotated on screen.

## Scale

Scaling a web view changes its visual size without affecting the actual frame dimensions. This is different from setting the size directly through the frame.

```csharp
// Scale the web view to 1.5 times its original size
var scale = new UniWebViewTransform(1.5f, 1.5f)
webView.SetTransform(scale);
```

It differs from adjusting the web view size via the `Frame` property: scaling the web view does not alter the layout of the web content. The web view loads the content at its original frame size and then visually scales the final display. This ensures that text and other elements keep their positions as set by the original frame.

## Use Cases

Both rotation and scale operations are performed around the center point of the web view's frame. This center point serves as the pivot for all transformations.

### Full Screen Landscape Web View in Portrait Mode

A common scenario is to display a landscape (horizontal) web view in a portrait (vertical) game orientation, if you do not want the game to follow the device auto-rotation. Here is how you can achieve this:

```csharp
void SetRotationLandscapeFullScreen()
{
    // Calculate dimensions for a rotated full-screen web view
    float x = (Screen.width - Screen.height) / 2.0f;
    float y = (Screen.height - Screen.width) / 2.0f;
    float width = Screen.height;
    float height = Screen.width;
    
    // Set the frame to properly position the web view
    webView.Frame = new Rect(x, y, width, height);
    
    // Apply 90-degree rotation
    var rotation = new UniWebViewTransform(90);
    webView.SetTransform(rotation);
    
    // Show the web view
    webView.Show();
}
```

In this example:
1. We calculate a frame where the width and height are swapped compared to the screen
2. We position it centered on screen by adjusting x and y coordinates
3. We rotate it by 90 degrees around its center
4. The result is a full-screen web view in landscape orientation while the game remains in portrait mode

### Combined Transformations

You can combine rotation and scale transformations for more complex presentations:

```csharp
// Rotate by 45 degrees and scale to 80% of the original size
var transform = new UniWebViewTransform(45.0f, 0.8f, 0.8f);
webView.SetTransform(transform);
```

### Maximum Toolbar Height

When applying rotation and scale, the toolbar height will be still calculated by the original frame size. Sometimes it may cause a too-high toolbar since it will take the notch area into account. If you need a compact toolbar, you can set the maximum toolbar height:

```csharp
// Set the maximum height of the toolbar to 40 pixels.
webView.EmbeddedToolbar.SetMaxHeight(40);
```

If the calculated toolbar height exceeds the maximum height, it will be clamped to the specified value. Otherwise, the toolbar will be displayed at its original height. This is useful when you want to ensure that the toolbar does not take up too much space on the screen, especially when using rotation and scale transformations.