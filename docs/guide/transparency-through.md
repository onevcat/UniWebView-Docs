# Clicking Through

> UniWebView enables clicking through transparent web pages to interact with Unity scenes behind.

It is possible to click through the web page and deliver the touch events to the Unity scene behind. This is called "Transparency Clicking Through" in UniWebView. Starting from v6, the implementation is redesigned for reliability on iOS 26 and modern Android systems.

## How It Works

UniWebView uses a modern approach for transparency detection. It collaborates with your web page to identify which areas should block touches and which should let them pass through to Unity. By setting the web page background to a transparent color, it can simultaneously display elements from both the web page and Unity, while keeping each of them clickable. 

## Steps

There are three steps to enable clicking through transparent areas:

### 1. Enable transparency clicking through

Call [`SetTransparencyClickingThroughEnabled`](/api/#settransparencyclickingthroughenabled) with `true` after creating your web view:

```csharp
webView = gameObject.AddComponent<UniWebView>();
webView.SetTransparencyClickingThroughEnabled(true);
```

This enables the transparency detection system and injects the necessary JavaScript code into your web page.

### 2. Mark interactive elements in your web page

In your HTML, add the `data-uv-transparency="opaque"` attribute to any elements that should **block** touches to Unity and **not** allow clicking through (In other words, these mark the web elements you want to interact with.):

```html
<!-- This button will block touches and handle clicks normally -->
<button data-uv-transparency="opaque" onclick="handleClick()">
    Interactive Button
</button>

<!-- This div will also block touches in its entire area -->
<div class="toolbar" data-uv-transparency="opaque">
    <button onclick="action1()">Tool 1</button>
    <button onclick="action2()">Tool 2</button>
</div>

<!-- Elements without the attribute allow clicks to pass through -->
<div class="background">
    This area allows clicking through to Unity
</div>
```

**Important:** Only elements marked with `data-uv-transparency="opaque"` will intercept touches. All other areas will be transparent and allow touches to pass through to your Unity scene.

### 3. (Optional) Prepare transparent web page and web view

Usually, you want to set up your web page with a transparent background:

```html
<body style="background-color: transparent"></body>
```

And set the web view background to clear:

```csharp
webView.BackgroundColor = Color.clear;
```

That allows you to see your Unity scene behind. However, this step is optional; even if your page has a color, elements not marked as opaque can still be clicked through.

## Dynamic Content Updates

Normally, the JavaScript injected by UniWebView automatically detects layout changes and scrolling events. However, if your web page content changes dynamically, you should manually refresh the transparency detection:

```csharp
webView.RefreshTransparencyClickingThroughLayout();
```

This is useful after:
- Adding or removing DOM elements with JavaScript
- Changing element visibility or styles
- After animations or transitions complete

## Complete Example

Here's a complete example showing how to set up transparency clicking through:

```csharp
public class TransparencyExample : MonoBehaviour
{
    UniWebView webView;
    public Text statusText;

    void Start()
    {
        SetupWebView();
    }

    void SetupWebView()
    {
        // Create web view
        webView = gameObject.AddComponent<UniWebView>();
        webView.Frame = new Rect(0, 0, Screen.width, Screen.height);

        // Enable transparency clicking through
        webView.SetTransparencyClickingThroughEnabled(true);

        // Make Unity scene visible behind web view
        webView.BackgroundColor = Color.clear;

        // Handle messages from web page
        webView.OnMessageReceived += (view, message) => {
            if (message.Path == "button-clicked") {
                statusText.text = "Web button clicked!";
            } else if (message.Path == "close") {
                CloseWebView();
            }
        };

        // Load your web page
        webView.Load("https://yourdomain.com/transparent-page.html");
        webView.Show();
    }

    void CloseWebView()
    {
        if (webView != null) {
            Destroy(webView);
            webView = null;
        }
    }
}
```

And the corresponding HTML page:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color: transparent;
            margin: 0;
            font-family: Arial, sans-serif;
        }

        .toolbar {
            background: rgba(0, 0, 0, 0.8);
            padding: 20px;
            text-align: center;
        }

        .btn {
            background: #007AFF;
            color: white;
            border: none;
            padding: 12px 24px;
            margin: 10px;
            border-radius: 8px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <!-- This toolbar will block touches -->
    <div class="toolbar" data-uv-transparency="opaque">
        <h2 style="color: white; margin-top: 0;">Web Toolbar</h2>
        <button class="btn" onclick="buttonClicked()">Web Button</button>
        <button class="btn" onclick="closeWebView()">Close</button>
    </div>

    <!-- This area allows clicking through to Unity -->
    <div style="height: 400px; display: flex; align-items: center; justify-content: center;">
        <p style="color: rgba(255,255,255,0.7); text-align: center;">
            This area is transparent.<br>
            Clicks will pass through to Unity UI below.
        </p>
    </div>

    <script>
        function buttonClicked() {
            window.location = 'uniwebview://button-clicked';
        }

        function closeWebView() {
            window.location = 'uniwebview://close';
        }
    </script>
</body>
</html>
```

## Conclusion

This transparency clicking through system works on iOS and Android, providing a reliable way to create immersive experiences where web content and Unity UI can coexist seamlessly.
