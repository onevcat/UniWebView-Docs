---
home: true
heroImage: /images/hero.png
actions:
  - text: Get Started →
    link: /guide/
    type: primary
  - text: API Reference
    link: /api/
    type: secondary
heroText: " "
tagline: UniWebView is a modern web view component for mobile Unity3D games. Integrating web content into your games was never easier.
features:
  - title: Functionality
    details: Supporting a full set of general web tasks. Including browsing pages, playing videos, interacting, OAuth 2.0, Channel Messages and more.
  - title: Modern & Fast
    details: Built on modern Unity, native and web technology. High-performance bidirectional communication with enhanced Channel Message system.
  - title: Brilliant API
    details: Well-designed APIs and documentation. Made by developers, for developers. Easy for both using and extending.
footer: Copyright © 2016-present OneV's Den (@onevcat)
---

### As Easy as 1, 2, 3

```csharp
// 1. Add a full-screen UniWebView component.
var webView = gameObject.AddComponent<UniWebView>();
webView.Frame = new Rect(0, 0, Screen.width, Screen.height);

// 2. Load a URL.
webView.Load("https://uniwebview.com");

// 3. Show it. 🎉
webView.Show();
```
