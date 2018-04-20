# Memory Management

Memory is a key limitation on mobile platforms. We designed and checked the memory management carefully to make sure there is no unintended memory usage or leaking. To keep your game fast and with small memory footprint, you may need to follow some rules below.

### Destroy the web view once you do not need it

A common mistake when using UniWebView is keeping creating new web views without destroying the unused ones.

Once you do not use a web view component, we strongly suggest to destroy it as soon as possible. To destroy a web view, just pass it to `Destroy` method of Unity. After it gets destroyed, you may also need to reset any reference to it for code safe:

```csharp
public class MyMonoBehaviour : MonoBehaviour {
    UniWebView webView = //... You set the web view as a member somewhere

    void CloseWebView() {
        Destroy(webView);
        webView = null;
    }
}
```

If there is a chance that the holder component of the web view (here, a `MyMonoBehaviour` component in this example) get destroyed, you may also want to add `OnDestroy` to `MyMonoBehaviour` and close the web view to prevent leaking:

```csharp
public class MyMonoBehaviour : MonoBehaviour {
    UniWebView webView = //... You set the web view as a member somewhere

    void CloseWebView() {
        Destroy(webView);
        webView = null;
    }

    void OnDestroy() {
        CloseWebView();
    }
}
```

Besides of destroying the web view, there is also a `Hide` method which could make the web view invisible. However, take notice that the `Hide` method is only a visual effect and the hidden web view is still there, of course taking memory. You still need to call `Destroy` on the hidden web view to release the memory. In fact, we suggest you always destroy the web view as soon as possible after a browsing session completes. You could always create a new web view when you need and use it for a new browsing action.

### Reset web view reference to avoid error

On Android, the user could close web view by device back button, and on iOS, there is a Done button in toolbar to do so. For either case, if you are holding a reference of the web view in your script, you need to reset it to `null`, otherwise you may encounter an issue saying that you are trying to access a destroyed component later.

To do so, add a listener to `OnShouldClose` event, which either Android and iOS would call when closing a web view from user action. There you could set the reference to web view back to `null`:

```csharp
public class MyMonoBehaviour : MonoBehaviour {
    UniWebView webView;

    void CreateWebView() {
        webView = gameObject.AddComponent<UniWebView>();
        webView.OnShouldClose += (view) => {
            webView = null;
            return true;
        };
    }
}
```

This also give you a chance to override the closing operation. If you return `false` in the event callback, the web view will not be closed.

And in other part of code in `MyMonoBehaviour` which is using the `webView`, you might want to check whether the `webView` is `null` before using it:

```csharp
public class MyMonoBehaviour : MonoBehaviour {
    UniWebView webView;

    void Load() {
        if (webView != null) {
            webView.Load("https://example.com");
        }
    }
}
```

### Clean cache when you are not using it

While your user browsing the Internet, it will create some cache, including cached images and response, or the web page stores something in local storage. Although it will not take memory in most cases, if you are not using the cache in your case, you could just call `CleanCache` to purge them.

```csharp
webView.CleanCache();
```
