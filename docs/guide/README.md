# Introduction

## What can UniWebView do

UniWebView is a Unity 3D plugin for adding a web view component to your Unity 3D mobile games on iOS and Android. It provides a set of abstract, cross-platforms, and high-level APIs in C#. That means you can implement your web view in your game without any knowledge of the underlying native platform.

It boosts your development process dramatically when you need to show an announcement or notice, add a leader board for player rankings, or display any interactive web pages to your users.

## Feature List

#### Web Content Browsing

- [HTTP and HTTPS pages](/api/#load)
- [Local Files](loading-local-files.md)
- [Presenting and Dismissing](transition.md)
- [Size and Position](position-and-size.md)
- [Loading Events](/api/#events-summary)
- [Safe Browsing Mode](safe-browsing.md)

#### Interacting with Web Page

- [Embedded Toolbar](embedded-toolbar.md)
- [Full JavaScript Support](using-javascript.md)
- [Messaging System](messaging-system.md)

#### Other Tasks

- [OAuth 2.0 Support](oauth2.md)
- [Videos, inline or full-screen](playing-videos.md)
- [Image Picking & Uploading](uploading.md)
- [User Agent & Cookie](/api/#setuseragent)
- [Allow clicks to pass through](transparency-through.md)
- [Full Log & Debugging](debugging.md)

And much more. Please check the [full API Reference](/api).

## Supported Platforms

UniWebView v5 supports running on:

- **Unity 2020.1** or above
- **iOS 9.0** or above
- **Android 5.0** (API Level 21) or above

## How It Works

UniWebView wraps the technology under the hood to render a general-purpose web view:

- On iOS, [WKWebView](https://developer.apple.com/reference/webkit/wkwebview)
- On Android, [WebView](https://developer.android.com/reference/android/webkit/WebView.html)

It also provides a "Safe Browsing" mode, to help you get a system-level experience of web content, which uses:

- On iOS, [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller)
- On Android, [Custom Tabs](https://developers.google.com/web/android/custom-tabs)

UniWebView supports the standard OAuth 2.0 with the [Authorization Code Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow), which is the most common way to use OAuth 2.0 in a client app:

- On iOS, [ASWebAuthenticationSession](https://developer.apple.com/documentation/authenticationservices/aswebauthenticationsession)
- On Android, [Custom Tabs](https://developers.google.com/web/android/custom-tabs)

UniWebView also contains Unity Editor support on macOS for debugging purposes. You can bring up a standalone web view directly in the Play Mode of Unity Editor if you are developing your Unity game on macOS.

:::warning WINDOWS EDITOR
If you are working on a Windows PC, you can still build and use UniWebView on mobile devices, but you cannot see the result directly in the Windows Unity Editor. UniWebView does not come with Unity Editor support on Windows.
:::

:::tip MAC OS TARGET
UniWebView on macOS Editor is a full-featured variety of its iOS version. Although UniWebView is designed for mobile platforms, it does not prevent you from putting it into a standalone macOS game.
:::

## About Version 5

The start of the UniWebView project can be traced back to 2013. Until now, we shipped more than 120 versions to make sure the package works well with the latest technology. UniWebView version 5 is a huge step further. We worked even harder to bring more important features (like OAuth 2.0 support), rewrote the toolbar to extend it to Android, improved the performance on both platforms, and added a bunch of new features.

At the same time, we managed to keep the code compatibility for most of the APIs as they were in v4. That means upgrading from version 4 to version 5 is painless. For most of the projects, just reimport the new version and you can get all the new things immediately.

Already using UniWebView 4? Please take a look at the [Version Highlight](./version-highlight.md) to see how it gets evolved from the previous versions. To upgrade to the latest version, take a brief look at the [Migration Guide](./migration-guide-v4-to-v5.md). We also recommend you read our documentation to bring the potential power of UniWebView to your project.

> This documentation is for version 5. If you are still using v4, you can find its documentation on [this site](https://docs-v4.uniwebview.com) instead.

## Next Step

If you are ready, follow the [Installation](./installation.md) and subsequent guides to know the basic usage of UniWebView.

Please feel free to browse this documentation site and UniWebView's [APIs](/api). You can find more information on UniWebView's [official site](https://uniwebview.com) too.
