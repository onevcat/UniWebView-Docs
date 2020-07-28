# Migration Guide

::: tip Upgrade Pricing
If you have purchased UniWebView 3 before, we offer an upgrading discount.

For users:

- Purchased from our Gumroad Store - [Submit a ticket](https://onevcat.atlassian.net/servicedesk/customer/portal/2/group/2/create/10011) with your purchasing Email and we will send a coupon back.
- Purchased from Unity Asset Store - Sign in to Asset Store and visit [our product page](https://assetstore.unity.com/packages/slug/175993)
  to find the Upgrade Price.
  :::

### Overview

Most part of UniWebView 4 is compatible with UniWebView 3. In most cases, migrating to the new version just takes several
minutes. You can do it with very little (if not no) efforts. You need to:

1. Remove UniWebView 3 from your project.
2. Install UniWebView 4.
3. Replace deprecated methods with new ones.
4. Check if new features can do better jobs.

Let's start!

::: warning
Before you start the migration, we strongly suggest that you should backup your project. If you are already using a
version control system (like git), you should be all fine!
:::

### Removing UniWebView 3

First we suggest remove UniWebView 3 from your project. Remove these files/folders (and the related ".meta" files if
any) from your project:

- "Assets/UniWebView" folder
- "Assets/Plugins/Android/UniWebView.aar"
- "Assets/Plugins/iOS/libUniWebView.a"
- "Assets/Plugins/UniWebView.bundle"

> It is assumed that you didn't move these files to another location. If you did that, remove the corresponding folders
> and files.

If you have ever modified your "AndroidManifest.xml" file under "Assets/Plugins/Android" folder, we also suggest you
restore the changes related to UniWebView. The latest UniWebView 4 can configure the project with a post-build script, so
manual modification is not recommended any more.

### Installing UniWebView 4

Now, you have completely removed UniWebView 3 from you project. Please make sure that you no longer have a "UniWebView" folder in "Assets". Then follow the [Installation Guide](./installation.md) to integrate UniWebView 4 into your project.

### Deprecated Methods

The methods below are deprecated and not functional from UniWebView 4. Please find a replacement or remove it from your code if you are using them:

#### SetImmersiveModeEnabled

> [`SetImmersiveModeEnabled` API Reference in v3](https://docs-v3.uniwebview.com/api/#setimmersivemodeenabled)

UniWebView 4 on Android changed its way of adding itself to Unity scene. Now it respects Unity's setting of immersive mode.
It means `SetImmersiveModeEnabled` is no longer needed anymore. If you want to show the web view with navigation bar
visible on Android, disable the immersive mode.

#### OnKeyCodeReceived

> [`OnKeyCodeReceived` API Reference in v3](https://docs-v3.uniwebview.com/api/#onkeycodereceived)

UniWebView 4 on Android now does not inject system touch event to handle user interaction. That means you can keep
receiving key code events even with a web view being shown. Now the `OnKeyCodeReceived` event is never raised. To
inspect a key code, check the `Input.GetKeyUp` in `Update` instead:

```csharp
// DON'T DO IT.
// webView.OnKeyCodeReceived += (view, keyCode) => {
//     if (keyCode == 4) {
//         Debug.Log("Back Button was clicked.");
//     }
// };

// Check Input in Update():
void Update() {
    if (Input.GetKeyUp(KeyCode.Escape)) {
        Debug.Log("Back Button was clicked.");
    }
}
```

### Checking New Features

UniWebView 4 introduces a bunch of new features. Check the [Version Highlight](version-highlight.md) guide for more
details. Among them, the most noticeable addition is the [Safe Browsing Mode](safe-browsing.md). Maybe it is a better
way to show your web content to your users, in a cleaner and safer way.

As the final step of the migration, we suggest you judge whether it is a good idea for your project to adopt to the
latest new features. However, even you choose to keep using your current implementation, you can still get benefits
from the upgrading, which contains quite a few fixes as well as performance improvement.
