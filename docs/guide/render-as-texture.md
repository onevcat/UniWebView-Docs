# Render as Texture

Usually, UniWebView is used as a native overlay layer on top of the whole Unity scene. That means you cannot put any
other Unity element on top of the web view (see the [FAQ here](/guide/faq.html#can-i-put-some-unity-gui-object-above-of-uniwebview)).
Instead, UniWebView provides a way to render the current web view content into a texture, you can use the texture in a
Unity `RawImage` or a `Material` on any 3D object.

::: warning LIMITATION
When rendered as texture, the web view will not be interactive anymore. Although it is still possible to call any method
programmatically on the web view, you cannot click on any link or button, or scroll the web view by gesture. It is just
a visual snapshot of the current web view content.

All hardware acceleration content, such as the video or WebGL elements, cannot be rendered.

See the [Limitations](#limitations) section below for more details.
:::

Here is how it looks like when you render the web view into a texture and put it on a cube:

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

### Render Once

TODO: Add event callback.

### Size and Partial Snapshot

## Limitations

### Interaction

### Video
