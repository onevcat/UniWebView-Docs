# Memory Management

> To manage memory effectively with UniWebView, destroy unused web views promptly, reset references when closed, and clear caches when not needed.

Memory is a key limitation on mobile platforms. We designed and checked the memory management carefully to make sure there is no unintended memory usage or leaking. To keep your game fast and with a small memory footprint, please follow the rules below.

### Destroy the web view once you do not need it

A common mistake when using UniWebView is keeping creating new web views without destroying the unused ones.

Once you do not use a web view component, we strongly suggest to destroy it as soon as possible. To close and destroy a web view, pass it to the Unity's `Destroy` method. Also reset any reference to it for code safe:

```csharp{5-6}
public class MyMonoBehaviour : MonoBehaviour {
    UniWebView webView = //... You set the web view as a member somewhere

    void CloseWebView() {
        Destroy(webView);
        webView = null;
    }
}
```

If there is a chance that the holder component of the web view (here, the `MyMonoBehaviour`) get destroyed, also add `OnDestroy` to `MyMonoBehaviour` and close the web view:

```csharp{9-11}
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

#### Hide Or Destroy

There is a `Hide` method which makes the web view invisible. However, the `Hide` method is only for visual effect: the hidden web view is still there, and of course, taking memory. If you are not going to show the page again, `Destroy` it instead of calling `Hide`.

We suggest you always destroy the web view as soon as possible after a browsing session completes. You could always create a new web view when you need it a new browsing action.

### Reset web view reference to avoid error

On Android, the user can close the web view with the back button on the device. On iOS, there is also a "Done" button in the toolbar. For either case, if you are holding a reference of the web view in your script, you need to reset it to `null` when the web view is closed.

Add a listener to `OnShouldClose` event, which either Android and iOS would call when the web view is going to be closed by a user action. There you can set the reference to web view back to `null`:

```csharp{6-9}
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

> This event also gives you a chance to override the closing operation. If you return `false` in the event action, the web view will not be closed.

In other parts in `MyMonoBehaviour` which is using the `webView`, keep in mind that the web view might be already gone. Perform `null` check before using it:

```csharp{5}
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

While your user browsing the Internet, it will create some cache, including cached images and responses. The web page might also store things in the local storage. Although it will not take memory in most cases, if you are not using the cache in your case, call `CleanCache` to purge them at a proper time:

```csharp
webView.CleanCache();
```
