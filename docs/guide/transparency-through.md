# Clicking Through

> UniWebView enables clicking through transparent web pages to interact with Unity scenes behind.

::: warning iOS 26 Compatibility Issue
The transparency clicking through feature in UniWebView v5 has compatibility issues with iOS 26. For full iOS 26 support and improved reliability, please upgrade to **UniWebView v6** which uses a modern, DOM-based detection method instead of the deprecated pixel-alpha detection.
:::

If you have a web page with transparency background, it is possible to click through the web page and deliver the touch events to the Unity scene behind. This is called "Transparency Clicking Through" in UniWebView.

## Steps

There are three steps before you can actually click through the transparent part on web view.

### Enabling click through check

Calling [`SetTransparencyClickingThroughEnabled`](/api/#settransparencyclickingthroughenabled) with `true`. This allows UniWebView to check every touch and the pixel color at the touch point.

You can simply do this after creating the web view:

```csharp
webView = gameObject.AddComponent<UniWebView>();
webView.SetTransparencyClickingThroughEnabled(true);
```

### Preparing a transparent web page

To allow clicking through, it is required that the Unity scene is visible even under the web view. So you need to have a transparent web page content in HTML. Normally, it is controlled by the style used by `body` tag in the page:

```html
<body style="background-color: transparent"></body>
```

Or in the CSS:

```css
body {
  background-color: transparent;
}
```

> By default, if `background-color` style is not set in the `body`, it has a default value of `transparent`. See the [related documentation](https://www.w3schools.com/cssref/pr_background-color.asp) for more.

### Setting clear background color for web view

Lastly, you need to set a clear color to the `BackgroundColor` property of UniWebView.

```csharp
webView.BackgroundColor = Color.clear;
```

> The `BackgroundColor` is different from the `background-color` of HTML body. It is the background color of the web view control, while `background-color` is for the HTML web content.

## Full example

Here you can find a [sample HTML page](/passthrough.html.zip) with transparent background. There are two buttons on the web page. When clicking, they use UniWebView's [Messaging System](/guide/messaging-system.html) to deliver messages to Unity. Meanwhile the web view is displayed in full screen, the UI in Unity scene is available at the same time.

Here is some reference code:

```csharp
Text passthroughText;
UniWebView webView;

void ShowWebView() {
    // Prepare Unity UI.
    passthroughText.text = "Sample Text";

    // Create web view.
    webView = gameObject.AddComponent<UniWebView>();
    webView.Frame = new Rect(0, 0, Screen.width, Screen.height);

    // Allow transparency clicking through.
    webView.SetTransparencyClickingThroughEnabled(true);
    // Make Unity scene visible.
    webView.BackgroundColor = Color.clear;

    // Disable the scrolling bounces effect to fix the web UI.
    webView.SetBouncesEnabled(false);

    webView.OnShouldClose += (view) => {
        webView = null;
        return true;
    };

    webView.OnMessageReceived += (view, message) => {
        if (message.Path == "close") {
            Destroy(webView);
            webView = null;
        } else if (message.Path == "hello") {
            passthroughText.text = "Hello From Web View";
        }
    };

    webView.Load("https://docs.uniwebview.com/passthrough.html");
    webView.Show();
}

void UnityCloseButtonTapped() {
    Destroy(webView);
    webView = null;
}
```

![](/images/passthrough.jpg)

The "Sample Text" and "Close From Unity" are created and as a part of Unity UI.
Although the web view covers full screen, the Unity scene is still visible and all three buttons will be responsible and do their works.
