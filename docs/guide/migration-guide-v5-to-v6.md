# Migration Guide (v5 to v6)

> To migrate from UniWebView 5 to 6, remove old files, install the new version, and explore the new Channel Message system for enhanced bidirectional communication.

::: tip Upgrade Pricing
If you have purchased UniWebView 5 before, we offer an upgrading discount.

For users:

- Purchased from our Gumroad Store - [Submit a ticket](https://onevcat.atlassian.net/servicedesk/customer/portal/2/group/2/create/10011) with your purchasing Email and we will send a coupon back.
- Purchased from Unity Asset Store - Sign in to Asset Store and visit [our product page](https://assetstore.unity.com/packages/slug/229334)
  to find the Upgrade Price.
  :::

## Overview

UniWebView 6 is mostly compatible with UniWebView 5. The migration to the new version is seamless and requires minimal effort. You need to:

1. Remove UniWebView 5 from your project.
2. Install UniWebView 6.
3. Checking the usage of `SetTransparencyClickingThroughEnabled`.
4. Explore new Channel Message features.
5. Consider upgrading existing URL scheme messaging to Channel Messages for better performance.

Let's start!

::: warning
Before you start the migration, we strongly suggest that you should backup your project. If you are already using a
version control system (like git), you should be all fine!
:::

### Removing UniWebView 5

First we suggest remove UniWebView 5 from your project. Remove these files/folders (and the related ".meta" files if
any) from your project:

- "Assets/UniWebView" folder
- "Assets/Plugins/Android/UniWebView.aar"
- "Assets/Plugins/iOS/libUniWebView.a"
- "Assets/Plugins/UniWebView.bundle"

> It is assumed that you didn't move these files to another location. If you did that, remove the corresponding folders
> and files.

### Installing UniWebView 6

Now, you have completely removed UniWebView 5 from you project. Please make sure that you no longer have a "UniWebView"
folder in "Assets". Then follow the [Installation Guide](./installation.md) to integrate UniWebView 6 into your project.

It's worth noting that UniWebView 6 uses XCFramework for iOS integration. This lets you run your project and UniWebView content smoothly on the iOS simulator without any issues.

### Backward Compatibility

UniWebView 6 maintains full backward compatibility with UniWebView 5 in Unity code level. All existing APIs and functionality continue to work exactly as before. Your existing code will build without any modifications.

However, if you are using the "Transparency Clicking Through" feature, you need to update the web page content and add new data attributes in the appropriate places.

## Transparency Clicking-Through Migration

If you're currently using "Transparency Clicking Through" (`SetTransparencyClickingThroughEnabled(true)`), check the content below. Otherwise, you can jump to the next section.

The underlying principle of the `SetTransparencyClickingThroughEnabled` API conflicts with the rendering engine of iOS 26, which causes this API does not work on iOS 26 devices. So we have completely redesigned a new solution.

### Migration Steps

The traditional pixel-sampling approach has been replaced with a collaborative system where your web page explicitly marks interactive elements.

**1. Update Your HTML Content**

Add `data-uv-transparency="opaque"` to interactive elements that should block touches:

```html
<!-- Before: All elements were handled by pixel detection -->
<button onclick="handleClick()">Button</button>
<div class="toolbar">
  <button onclick="action1()">Action 1</button>
  <button onclick="action2()">Action 2</button>
</div>

<!-- After: Mark interactive elements explicitly -->
<button data-uv-transparency="opaque" onclick="handleClick()">Button</button>
<div class="toolbar" data-uv-transparency="opaque">
  <button onclick="action1()">Action 1</button>
  <button onclick="action2()">Action 2</button>
</div>
```

**2. No Unity Code Changes Required**

Your existing Unity code continues to work without changes:

```csharp
// This remains the same
webView.SetTransparencyClickingThroughEnabled(true);
webView.BackgroundColor = Color.clear;
```

**3. Handle Dynamic Content (Optional)**

For dynamically added content to the page, use the new refresh API when it is added:

```csharp
// After adding elements dynamically
webView.EvaluateJavaScript("addNewButton()", (result) => {
    webView.RefreshTransparencyClickingThroughLayout();
});
```

### Important Notes

- **Elements without the attribute** will allow clicks to pass through to Unity
- **Container elements** marked as opaque will block touches for all child elements

### Backward Compatibility

Adding the `data-uv-transparency="opaque"` attribute won't affect any existing clients with older UniWebView versions. So you can still use the same updated HTML for all your app versions.

We strongly recommend updating your HTML content to use the new element marking approach, if you need to run your app on iOS 26 or later.

## Channel Message System

The most significant addition in UniWebView 6 is the **Channel Message system**. If you are using a traditional URL-based message system (`uniwebview://`), you may want to consider migrating. This new system provides enhanced communication capabilities between web pages and Unity:

#### Enhanced Communication
- **Better Performance**: Direct bridge communication without URL scheme overhead
- **Bidirectional Communication**: Unity can respond with data back to JavaScript
- **Structured Data**: Native JSON support for complex data types
- **Multiple Patterns**: Choose between fire-and-forget, synchronous, and asynchronous communication

### When to Use Channel Messages

Consider upgrading from URL scheme messaging (`uniwebview://`) to Channel Messages when:

- You need to send large amounts of data
- You require bidirectional communication
- You want better error handling and debugging
- You need high-frequency messaging without loss
- You prefer working with structured JSON data

#### Migration Example

**Old URL Scheme Approach:**
```javascript
// JavaScript
window.location = "uniwebview://action?data=" + encodeURIComponent(JSON.stringify(myData));
```

```csharp
// Unity
webView.OnMessageReceived += (view, message) => {
    if (message.path == "action") {
        var data = message.args["data"];
        // Process data...
    }
};
```

**New Channel Message Approach:**
```javascript
// JavaScript
window.uniwebview.send('action', myData);
```

```csharp
// Unity
webView.OnChannelMessageReceived += (view, message) => {
    if (message.action == "action") {
        var data = message.GetData<MyDataType>();
        // Process data...
        return null; // For send messages
    }
    return null;
};
```

#### Getting Started with Channel Messages

To start using the new Channel Message system, check out the comprehensive [Channel Message Guide](./channel-message.md). The guide covers:

- Three communication patterns (Send, Call, Request)
- JavaScript API usage
- Unity event handling
- Error handling best practices
- Security considerations

## Checking New Features

For a complete overview of all new features and improvements in UniWebView 6, please check the [Version Highlight](./version-highlight.md) guide.

For detailed API documentation of the Channel Message system, refer to the API references for:
- [UniWebViewChannelMessage](../api/UniWebViewChannelMessage.md)
- [UniWebViewChannelMessageResponse](../api/UniWebViewChannelMessageResponse.md)
- [UniWebViewChannelMessageType](../api/UniWebViewChannelMessageType.md)

For all changes and fixes in UniWebView v6, please check the [Release Notes](../release-note/).