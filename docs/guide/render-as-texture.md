# Render as Texture

> UniWebView allows rendering web content as a non-interactive texture in Unity, suitable for 3D integration but with performance and feature limitations.

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

UniWebView provides `StartSnapshotTextureStream` for continuous render-as-texture use. The stream owns one live texture
and updates it in place on supported platforms. Assign the texture once when the stream becomes ready, then dispose the
stream during cleanup.

The older `StartSnapshotForRendering`, `GetRenderedData`, and `CreateRenderedTexture` APIs are still available for
compatibility, but they are legacy. They use a PNG-backed snapshot path and `CreateRenderedTexture` creates a new
standalone texture every time it is called.

### Start a Texture Stream

Before you begin to use the texture, start a stream by calling the
[`StartSnapshotTextureStream`](/api/#startsnapshottexturestream) method.

```csharp
public class MyBehaviour : MonoBehaviour {

  UniWebView webView;
  UniWebViewSnapshotTextureStream stream;
  Renderer cubeRenderer; // cube.GetComponent<Renderer>();

  void OpenWebView() {
    webView = gameObject.AddComponent<UniWebView>();
    webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
    webView.Load("https://uniwebview.com");

    stream = webView.StartSnapshotTextureStream(onReady: texture => {
      cubeRenderer.material.mainTexture = texture;
    });
  }
}
```

> It is no need to call `Show` method to actually display the web view. The stream can be started even if
> the web view is not visible.

The texture passed to `onReady` is owned by the stream and updated in place. Do not destroy and recreate it every frame.
If `onReady` is not called and `stream.IsReady` remains `false`, the current platform or graphics backend does not
support the optimized stream path. UniWebView does not silently fall back to the legacy PNG texture path.

On Android, the optimized stream currently supports OpenGL ES 2 and OpenGL ES 3 only. Vulkan is not supported by this
stream path. If your project uses Auto Graphics API and Unity selects Vulkan on Android, the stream remains not ready.
Switch the Android graphics API to OpenGL ES to use snapshot texture streaming.

> If you still want to show the texture in a plain 2D format, then a the Unity's `Plane` or `RawImage` might be your
> choice.

### Clean Work

Finally, when you no longer need the web view to generate any additional textures, dispose the stream. This closes the
native stream and releases the stream-owned texture.

```csharp
cubeRenderer.material.mainTexture = null;
stream?.Dispose();
stream = null;
```

When you destroy the web view (by either calling the `Destroy` on the UniWebView component or destroying the whole
scene containing the web view), UniWebView will dispose the active stream for you. When you keep the best
practice that is mentioned in the [Memory Management](./memory-management.md) guide, usually you do not need to call
this method manually yourself.

## Performance

It is heavy work to take snapshots of the web view and pass them between the native side and Unity, especially on
old devices. There are some small tips to improve the performance.

### Refresh Interval

By default, `StartSnapshotTextureStream` captures a new snapshot every frame for the best responsiveness. However,
this can be expensive — especially on Android where snapshot capture runs on the main thread. You can pass a
`refreshInterval` parameter to reduce the capture frequency:

```csharp
// Capture at ~30 fps instead of every frame.
stream = webView.StartSnapshotTextureStream(refreshInterval: 1.0f / 30, onReady: texture => {
    cubeRenderer.material.mainTexture = texture;
});

// Capture at ~10 fps for a mostly-static page.
stream = webView.StartSnapshotTextureStream(refreshInterval: 1.0f / 10, onReady: texture => {
    cubeRenderer.material.mainTexture = texture;
});
```

With a refresh interval set, the stream scheduler requests native snapshots at the specified rate while keeping the same
Unity texture object alive.

::: tip
The stream API avoids the legacy PNG encode/decode path on supported platforms. The legacy APIs remain source-compatible
for existing projects, but they should not be used for new continuous texture rendering.
:::

### Start After Page Load

If the web content is static and does not change after the first load, instead of taking the snapshot in `Update`, you
can start the stream in the `OnPageFinished` event:

```csharp
public class MyBehaviour : MonoBehaviour {

  // ...

  void OpenWebView() {
    webView = gameObject.AddComponent<UniWebView>();
    webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
    webView.Load("https://uniwebview.com");

    webView.OnPageFinished += (view, code, error) => {
      stream = webView.StartSnapshotTextureStream(onReady: texture => {
        cubeRenderer.material.mainTexture = texture;
      });
    };
  }
}
```

### Size and Partial Snapshot

The size of the texture is also a factor that affects the performance. The larger the texture is, the more time it takes
to be rendered and passed between native and Unity.

To only stream a partial snapshot of the web view, pass a `Rect` to `StartSnapshotTextureStream`:

```csharp
// Take the snapshot of 100x100 square in the middle of the web view.
var rect = new Rect(webView.Frame.width / 2 - 50,  webView.Frame.height / 2 - 50, 100, 100);
stream = webView.StartSnapshotTextureStream(rect, onReady: texture => {
    cubeRenderer.material.mainTexture = texture;
});
```

> The final pixel count of the snapshot matters. If you do not need the texture to be at the high resolution, you can
> also create a smaller web view from the very beginning, for example:
>
> ```csharp
> // webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
> webView.Frame = new Rect(0, 0, Screen.width / 4, Screen.height / 4);
> ```

## Other Limitations

The rendered texture is not a native view but only a live snapshot stream of the view. There are some other limitations other
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
