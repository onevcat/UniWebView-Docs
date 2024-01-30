# Embedded Toolbar

UniWebView contains an embedded toolbar that can be displayed with the web view. In this guide, we will discuss how to use the embedded toolbar and the way it can be customized.

### Showing a toolbar

Each `UniWebView` component contains an `EmbeddedToolbar` property. You can just call `Show()` on it to make the toolbar visible:

```csharp{5}
var webView = webViewGameObject.AddComponent<UniWebView>();
webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
webView.Load("https://uniwebview.com/");

webView.EmbeddedToolbar.Show();
```

It shows a toolbar with Go Back, Go Forward and Done buttons on both iOS and Android:

![](/images/toolbar-compare.png)

### Handling Done Button

Similar to the [Clean Work section](./working-with-code.md#listening-to-the-event), if you have a reference for the web view component, you need to clean it in the `OnShouldClose` event.

```csharp{10-13}
public class MyMonoBehaviour : MonoBehaviour {
    UniWebView webView

    void ShowWebView ()
    {
        webView = webViewGameObject.AddComponent<UniWebView>();

        // ...

        webView.OnShouldClose += (view) => {
            webView = null;
            return true;
        };
    }
}
```

`OnShouldClose` will be triggered when user taps the Done button in the toolbar. If you do not want the user to close it, you can also return a `false` in `OnShouldClose` and perform your logic there. In that case, to close the web view, you can just pass the `webView` reference to the `Destroy` method:

```csharp
void CloseWebView() {
    Destroy(webView);
    webView = null;
}
```

To know more about the cleaning work and memory management, please refer to the [related topic](./memory-management.md).

### Customization

UniWebView provides several ways to customize the style of the toolbar.

##### Position

```csharp
webView.EmbeddedToolbar.SetPosition(UniWebViewToolbarPosition.Bottom);
```

##### Buttons Text

```csharp
webView.EmbeddedToolbar.SetGoBackButtonText("后退");
webView.EmbeddedToolbar.SetGoForwardButtonText("前进");

webView.EmbeddedToolbar.SetDoneButtonText("完成");
```

##### Title Text

```csharp
webView.EmbeddedToolbar.SetTitleText("UniWebView");
```

##### Colors

```csharp
webView.EmbeddedToolbar.SetButtonTextColor(Color.white);
webView.EmbeddedToolbar.SetTitleTextColor(Color.white);
webView.EmbeddedToolbar.SetBackgroundColor(new Color(0.0f, 0.59f, 0.34f));
```

With these customization, we can get the result as below on iOS and Android:

![](/images/embedded-toolbar-customize.png)

For more about the Embedded Toolbar APIs, check its [API reference](/api/uniwebviewembeddedtoolbar.md).
