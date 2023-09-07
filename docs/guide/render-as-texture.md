# Render as Texture

Usually, UniWebView is used as a native overlay layer on top of the whole Unity scene. That means you cannot put any
other Unity element on top of the web view (see the [FAQ here](/guide/faq.html#can-i-put-some-unity-gui-object-above-of-uniwebview)).
Instead, UniWebView provides a way to render the current web view content into a texture, you can use the texture in the 
3D world, such as Unity `RawImage` or any `Material` on any 3D object.

::: warning LIMITATION
When rendered as texture, the web view will not be interactive anymore. Although it is still possible to call any method
programmatically on the web view, you cannot click on any link or button, or scroll the web view by gesture. It is just
a visual snapshot of the current web view content.

All hardware acceleration content, such as the video or WebGL elements, cannot be rendered.

See the [Limitations](#other-limitations) section below for more details.
:::

Here is what it looks like when you render the web view into a texture and put it on a cube:

![](/images/webview-cube.png)

## Implementation

UniWebView provides a neat API to render the current web view content into a texture. However, this feature is turned off
by default for performance reasons. You need to manually start and stop the process of rendering as you need.

### Start Rendering Process

Before you begin to access any data or texture, you need to start the rendering process first. You can do it by calling the
[`StartSnapshotForRendering`](/api/#startsnapshotforrendering) method.

```csharp
public class MyBehaviour : MonoBehaviour {

  UniWebView webView;

  void OpenWebView() {
    webView = gameObject.AddComponent<UniWebView>();
    webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
    webView.Load("https://uniwebview.com");

    // Start the rendering process.
    webView.StartSnapshotForRendering();
  }
}
```

> It is no need to call `Show` method to actually display the web view. The rendering process will be started even if
> the web view is not visible.

### Create the Texture

You can choose either to create a texture once, or repeatedly create a new texture in the `Update` method. Gets the
texture and assign it somewhere in your scene. For example, assume there is a `cube` in the scene with a renderer:

```csharp
public class MyBehaviour : MonoBehaviour {

    // ...

    Renderer cubeRenderer; // cube.GetComponent<Renderer>();

    void Update() {
      if (webView != null) {
        Destroy(cubeRenderer.material.mainTexture);
        cubeRenderer.material.mainTexture = webView.CreateRenderedTexture();
      }
    }
}
```

Every call to `CreateRenderedTexture` creates a new texture. You should destroy the old one before creating a new one.
Otherwise, it will cause a memory leak and your game might be killed very soon.

> If you still want to show the texture in a plain 2D format, then a the Unity's `Plane` or `RawImage` might be your
> choice.

### Clean Work

Finally, when you no longer need the web view to generate any additional textures, it is a good practice to stop the
rendering process. This closes the data channel and clears the buffer to free up some memory.

```csharp
webView.StopSnapshotForRendering();
```

When you destroy the web view (by either calling the `Destroy` on the UniWebView component or destroying the whole
scene containing the web view), UniWebView will call the `StopSnapshotForRendering` for you. When you keep the best
practice that is mentioned in the [Memory Management](./memory-management.md) guide, usually you do not need to call
this method manually yourself.

Also, do not forget to destroy the last rendered texture:

```csharp
Destroy(cubeRenderer.material.mainTexture);
```

## Performance

It is heavy work to take snapshots of the web view and pass them between the native side and Unity, especially on
old devices. There are some small tips to improve the performance.

### Create Less Texture

The most straightforward way is creating less textures. Instead of creating a new texture in every `Update`, you can
set an interval. For example, a very naive change to make it create only a quarter of the textures compared to above:

```csharp
int counter = 0;

void Update() {
  if (webView != null) {
    count += 1;
    if (count == 4) {
      Destroy(cubeRenderer.material.mainTexture);
      cubeRenderer.material.mainTexture = webView.CreateRenderedTexture();
      count = 0;
    }
  }
}
```

### One Time Rendering

If the web content is static and does not change after the first load, instead of taking the snapshot in `Update`, you
can also choose to perform a one-time rendering by calling `StartSnapshotForRendering` in the `OnPageFinished`
event, and passing an `onStart` callback to it:

```csharp
public class MyBehaviour : MonoBehaviour {
  
  // ...

  void OpenWebView() {
    webView = gameObject.AddComponent<UniWebView>();
    webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
    webView.Load("https://uniwebview.com");

    webView.OnPageFinished += (view, code, error) => {
      webView.StartSnapshotForRendering(onStarted: texture => {
        cubeRenderer.material.mainTexture = texture;
      });
    };
  }
}
```

> Also, do not forget to call `Destroy(cubeRenderer.material.mainTexture);` at proper time to avoid memory leak.

### Size and Partial Snapshot

The size of the texture is also a factor that affects the performance. The larger the texture is, the more time it takes
to be rendered and passed between native and Unity.

To only take a partial snapshot of the web view, you can pass a `Rect` to the `CreateRenderedTexture` method:

```csharp
// Take the snapshot of 100x100 square in the middle of the web view.
var rect = new Rect(webView.Frame.width / 2 - 50,  webView.Frame.height / 2 - 50, 100, 100);
cubeRenderer.material.mainTexture = webView.CreateRenderedTexture(rect);
```

> The final pixel count of the snapshot matters. If you do not need the texture to be at the high resolution, you can
> also create a smaller web view from the very beginning, for example:
> ```csharp
> // webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
> webView.Frame = new Rect(0, 0, Screen.width / 4, Screen.height / 4);
> ```

## Other Limitations

The rendered texture is not a native view but only a live snapshot of the view. There are some other limitations other
than the performance.

### Interaction

The rendered texture is not interactive. You cannot click any link or button on the texture, or scroll the web view 
by gesture.

Although the user interaction is not available, you can still call any `UniWebView` methods on the web view 
programmatically. It is also possible to use methods like `ScrollTo` to "simulate" the scrolling, or use JavaScript to
"click" the button or link on the web page. For example, you can use the following code to get all links on the page,
and click the first one:

```csharp
webView.OnPageFinished += (view, statusCode, url) => {
    webView.EvaluateJavaScript("Array.from(document.links).map(link => link.href);", result => {
        var data = UniWebViewExternal.Json.Deserialize(result.data) as List<object>;
        // Use the data: ["https://example.com", "https://example.com/link1", ...]

    });
};

// Later, simulate the click on the first link.
webView.EvaluateJavaScript("document.links[0].click();");
```

> Simulating a user tap on the native view is not possible through public APIs on iOS. So it won't be implemented in
> the current UniWebView. We are keeping an eye on the latest iOS system changes. If Apple provides a way to do it in
> iOS, we will try to support it too.

### Video

Any hardware-accelerated content, such as video or WebGL elements, cannot be rendered. You will only see a black 
rectangle in the place of the video.
