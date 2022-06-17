---
home: true
heroImage: /images/hero.png
actionText: Get Started →
actionLink: /guide/
heroText: " "
tagline: UniWebView is a modern web view component for mobile Unity3D games. Integrating web content to your games was never easier.
features:
  - title: Functionality
    details: Supporting a full set of general web tasks. Including browsing pages, playing videos, interacting and more.
  - title: Modern & Fast
    details: Built on modern Unity and web technology. Smaller memory footprint and better performance.
  - title: Brilliant API
    details: Well designed APIs and documentation for developers. Easy for both using and extending.
footer: Copyright © 2016-present OneV's Den (@onevcat)
---

### As Easy as 1, 2, 3

```csharp
// Add a full-screen UniWebView component.
var webView = gameObject.AddComponent<UniWebView>();
webView.Frame = new Rect(0, 0, Screen.width, Screen.height);

// Load a URL.
webView.Load("https://uniwebview.com");

// Show it.
webView.Show();
```

::: warning About UniWebView 3
UniWebView 4 requires Unity >= 2019.4. It runs on iOS >= 9.0 and Android >= 5.0.

Needs to show a page in an earlier version of Unity? Looking for documentation of UniWebView 3? Check the [v3 doc site](https://docs-v3.uniwebview.com) instead.
:::
