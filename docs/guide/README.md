# Introduction

## What can UniWebView do

UniWebView is a Unity 3D plugin for adding a web view component to your Unity 3D mobile games on iOS and Android. It provides a set of abstract, cross-platforms, and high-level APIs in C#. With UniWebView, you can have some behaviors like a browser into your games without knowing anything about native development.

It boosts your development process dramatically when you need to show an announcement or notice, add a leader board for player rankings, or display any interactive web pages to your users.

## Feature List

### Web Content Browsing

- [HTTP and HTTPS pages](/api/#load)
- [Local Files](loading-local-files.md)
- [Presenting and Dismissing](transition.md)
- [Size and Position](position-and-size.md)
- [Loading Events](/api/#events-summary)
- [Safe Browsing Mode](safe-browsing.md)

### Interacting with Web Page

- [Built-in Toolbar](built-in-toolbar.md)
- [Full JavaScript Support](using-javascript.md)
- [Messaging System](messaging-system.md)

### Other Tasks

- [Videos, inline or full-screen](playing-videos.md)
- [Image Picking & Uploading](uploading.md)
- [User Agent & Cookie](/api/#setuseragent)
- [Allow clicks passing through](transparency-through.md)
- [Full Log & Debugging](debugging.md)

And much more. Please check the [full API Reference](/api).

## Supported Platforms

UniWebView v4 supports running on:

- **Unity 2018.3** or above
- **iOS 9.0** or above
- **Android 5.0** (API Level 21) or above

:::tip EARLIER VERSION
If you are looking for a UniWebView version for earlier Unity versions, check the [v3 version](https://assetstore.unity.com/packages/tools/network/uniwebview-3-92605). It supports from the **same iOS and Android versions**, but back to **Unity 2017.3**. However, it only ships a subset of features compared to the latest v4, and only receives critical bug fix.
:::

## How It Works

UniWebView wraps the technology under the hood to render a general-purpose web view:

- On iOS, [WKWebView](https://developer.apple.com/reference/webkit/wkwebview)
- On Android, [WebView](https://developer.android.com/reference/android/webkit/WebView.html)

It also provides a "Safe Browsing" mode, to help you get a system-level experience of web content, which uses:

- On iOS, [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller)
- On Android, [Custom Tabs](https://developers.google.com/web/android/custom-tabs)

UniWebView also contains Unity Editor support on macOS for the debug purpose. You can bring up a standalone web view directly in the Play Mode of Unity Editor if you are developing your game on macOS.

:::warning WINDOWS EDITOR
If you are working on a Windows PC, you can still build and use UniWebView on mobile devices, but you cannot see the result directly in the Windows Unity Editor. UniWebView does not come with Unity Editor support on Windows.
:::

:::tip MAC OS TARGET
UniWebView on macOS Editor is a full-featured variety of its iOS version. Although UniWebView is designed for the mobile platforms, it does not prevent you from putting it into a standalone macOS game.
:::

## About Version 4

The starting of the UniWebView project can be traced back to 2013. Until now, we shipped more than 100 versions to make sure the package works well with the latest technology. UniWebView version 4 is a huge step further. We worked even harder to clean up the codebase, rewrote the native side from scratch in a more reliable way, improved the performance on both platforms, and added a bunch of new features.

At the same time, we are managed to keep the code compatibility for most of the APIs as they were in v3. That means upgrading from version 3 to version 4 is painless. For most of the projects, just reimport the new version and you can get all the new things immediately.

Already using UniWebView 3? Please take a look at the [Version Highlight](./version-highlight.md) to see how it gets evolved from the previous versions. To upgrade to the latest version, take a brief look at the [Migration Guide](./migration-guide.md). We also recommend you to read our documentation to bring the potential power of UniWebView to your project.

> This documentation is for version 4. If you are still using v3, you can find its documentation on [this site](https://docs-v3.uniwebview.com) instead.

## Next Step

If you are ready, follow the [Installation](./installation.md) and subsequent guides to know basic usage of UniWebView.

Please feel free to browse this documentation site and UniWebView's [APIs](/api). You can find more information on UniWebView's [official site](https://uniwebview.com) too.
