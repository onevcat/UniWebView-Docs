# Version Highlight

> UniWebView 6 introduces the Channel Message system for high-performance bidirectional communication, enhanced error handling, and improved messaging reliability between web pages and Unity.

::: tip Upgrade Pricing
If you have purchased UniWebView 5 before, we offer an upgrading discount.

For users:

- Purchased from our Gumroad Store - [Submit a ticket](https://onevcat.atlassian.net/servicedesk/customer/portal/2/group/2/create/10011) with your purchasing Email and we will send a coupon back.
- Purchased from Unity Asset Store - Sign in to Asset Store and visit [our product page](https://assetstore.unity.com/packages/slug/229334)
  to find the Upgrade Price.
  :::

UniWebView contains some significant improvements over its predecessor UniWebView 5. Here we will list a few of them to
give you an overview about what are added and changed.

### Channel Message System

UniWebView 6 introduces a revolutionary **Channel Message system** that provides high-performance, bidirectional communication between web pages and Unity. This new system addresses the limitations of traditional URL scheme messaging:

- **No size limits** for data transfer
- **No message loss** in high-frequency scenarios
- **Bidirectional communication** with sync/async patterns
- **Direct JSON object** passing without encoding
- **Enhanced error handling** with structured responses
- **Cross-platform consistency** (iOS, Android, Unity)

The Channel Message system offers three communication patterns:

| Pattern | Method | Description |
| ------- | ------ | ----------- |
| Fire-and-Forget | `send(action, data)` | Async messages without response |
| Synchronous Call | `call(action, data)` | Immediate return values |
| Async Request | `request(action, data)` | Promise-based responses with timeout |

For more information about the Channel Message system, please check the [Channel Message Guide](./channel-message.md).

### Enhanced Error Handling

UniWebView 6 provides structured error responses that include error codes, detailed messages, and additional metadata. This makes debugging and error handling much more robust in production applications.

### Improved Performance and Reliability

The new messaging system eliminates URL encoding overhead and navigation cancellation issues, providing better performance and reliability for communication-heavy applications.

The pure JavaScript uploading controls are now also supported. For more, please read the [Uploading](./uploading.md) guide.

### Improved Export Phase

In previous versions, when exporting with Release configuration and project minifying on, it is possible that the required
symbols gets stripped out on Android. In UniWebView 5, we have a deeper integration with Unity's build pipeline to make sure
this not happen again. Now the exporting behavior should be much more stable under different build configurations.

Starting from UniWebView 5, the library on Android now are also built with minify enabled, which means a smaller binary
size and an improvement of project security.

### Much More

Please check other guides in the side bar and the [API Documentation](/latest/api/overview) to know more about UniWebView.
We strongly suggest you upgrade to the latest version for a more powerful and stable web view component.

If you need to migrate from UniWebView 4 to the latest UniWebView 5, please refer to the [Migration Guide](./migration-guide-v4-to-v5.md).

You can find other recent changes and all release logs in the [Release Note](../release-note) page.
