# Version Highlight

> UniWebView 6 introduces the Channel Messaging System for high-performance bidirectional communication, enhanced error handling, and improved messaging reliability between web pages and Unity.

::: tip Upgrade Pricing
If you have purchased UniWebView 5 before, we offer an upgrading discount.

For users:

- **Purchased from our Gumroad Store** - [Submit a ticket](https://onevcat.atlassian.net/servicedesk/customer/portal/2/group/2/create/10011) with your purchasing email and we will send a 50% off coupon back.
- **Purchased from Unity Asset Store** - Sign in to Asset Store and visit [our product page](https://assetstore.unity.com/packages/slug/229335) to find the 50% off Upgrade Price.
- **Recent v5 Purchasers** (after July 26, 2025) - Contact us for a **free upgrade** to UniWebView 6.
  :::

UniWebView contains some significant improvements over its predecessor UniWebView 5. Here we will list a few of them to
give you an overview about what are added and changed.

### Summary

UniWebView 6 focuses on: high-performance bidirectional messaging (Channel Messages), reliability on new iOS versions (transparency clicking through redesign), build automation for Android large app scenarios, and modernization of iOS distribution with XCFramework. Below are the highlights.

### Channel Messaging System

UniWebView 6 introduces a revolutionary **Channel Messaging System** that provides high-performance, bidirectional communication between web pages and Unity. This new system addresses the limitations of traditional URL scheme messaging:

- **Large data transfer support** (tested up to tens of MB; performance may degrade beyond ~100MB)
- **No message loss** in high-frequency scenarios
- **Bidirectional communication** with sync/async patterns
- **Direct JSON object** passing without encoding
- **Enhanced error handling** with structured responses
- **Cross-platform consistency** (iOS, Android, Unity)

The Channel Messaging System offers three communication patterns when communicating between the web page and Unity:

| Pattern          | JavaScript Method       | Unity Behavior                       |
| ---------------- | ----------------------- | ------------------------------------ |
| Fire-and-Forget  | `send(action, data)`    | Receiving messages without response  |
| Synchronous Call | `call(action, data)`    | Immediate return values              |
| Async Request    | `request(action, data)` | Promise-based responses with timeout |

This new messaging system eliminates URL encoding overhead and navigation cancellation issues, providing better performance and reliability for communication-heavy applications.

For more information about the Channel Messaging System, please check the [Channel Message Guide](./channel-message.md).

#### Channel Message Security & Robustness

Alongside the new Channel Messaging System, a comprehensive security guideline is provided. It covers origin validation, input sanitization, replay protection and optional signature verification patterns. See the [Channel Message Security](./channel-message-security.md) guide.

### Native Apple Silicon Support

UniWebView 6 introduces **XCFramework** distribution for iOS, providing native support for Apple Silicon Macs and enhanced development experience:

- **Native ARM64 Simulator Support**: Test on Apple Silicon Mac simulators without conversion tools or Rosetta emulation
- **Universal Compatibility**: Single binary supports both device and simulator architectures
- **Future-Proof Distribution**: Modern Apple distribution format aligned with latest Xcode capabilities
- **Seamless Unity Integration**: Full compatibility with Unity 2021.3.37 LTS and later versions
- **Simplified Development Workflow**: No need for platform-specific library management or manual architecture conversion

This modernization eliminates the previous need for library conversion tools and provides a more robust, developer-friendly experience for iOS development workflows.
It is especially useful when you want to debug your game on an iOS simulator.

### Clicking Through Redesign

The clicking through feature has been fully redesigned to work reliably on iOS 26 and modern Android systems.
Instead of sampling pixels (which became unreliable with HDR rendering and remote layer trees), UniWebView now collaborates with your page.
You explicitly mark interactive elements with `data-uv-transparency="opaque"`, and UniWebView builds a precise hit mask.

Benefits:

- Works on iOS 26 (previous implementation failed due to HDR / remote layer rendering)
- Deterministic and performant (no per-touch pixel sampling)
- Supports dynamic updates via `RefreshTransparencyClickingThroughLayout()`
- Backward compatible: the new attributes are ignored safely by older UniWebView versions

See the updated [Clicking Through](./transparency-through.md) guide for details and migration steps.

### Android Local Assets Automation

For Android Split Application Binary builds, UniWebView now automates copying configured folders to the correct `android_asset` location during Gradle export. This removes the previous error‑prone manual copying process.
Configure folders under Preferences > UniWebView > Android Assets, then load them with `UniWebViewHelper.StreamingAssetURLForPath` as usual.
See the [Loading Local Files](./loading-local-files.md) guide for examples.

### Logger Performance Improvements

The UniWebView logging system now uses lazy evaluation internally to avoid unnecessary string allocations when a log level is disabled. This reduces overhead in production builds where the log level is typically Critical.

### Recommended Platform Targets

- Unity 2021.3.37 LTS, 2022.3.23 LTS or any Unity 6 (6000.x) build are our validated environments.
- Minimum iOS version is now 12.0.
- Android still supports 5.0 (API 21) and above.

### Much More

Please check other guides in the side bar and the [API Documentation](/latest/api/overview) to know more about UniWebView.
We strongly suggest you upgrade to the latest version for a more powerful and stable web view component.

If you need to migrate from UniWebView 5 to 6, refer to the [Migration Guide (v5 to v6)](./migration-guide-v5-to-v6.md).

You can find other recent changes and all release logs in the [Release Note](../release-note) page.
