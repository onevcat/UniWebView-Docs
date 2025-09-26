# Introduction

> UniWebView is a Unity plugin for iOS and Android, enabling web view integration with features like OAuth 2.0, JavaScript support, and cross-platform compatibility.

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
- [URL Messaging System](messaging-system.md)
- [Channel Between Unity and JavaScript](channel-message.md)

#### Other Tasks

- [OAuth 2.0 Support](oauth2.md)
- [Videos, inline or full-screen](playing-videos.md)
- [Image Picking & Uploading](uploading.md)
- [Render As Texture](render-as-texture.md)
- [User Agent & Cookie](/api/#setuseragent)
- [Allow clicks to pass through](transparency-through.md)
- [Full Log & Debugging](debugging.md)

And much more. Please check the [full API Reference](/api).

## Supported Platforms

UniWebView v6 supports running on:

- **Unity 2021.3.37 LTS**, **2022.3.23 LTS**, or **Unity 6 (6000.x)** or above recommended (earlier versions may still work but are not validated regularly)
- **iOS 12.0** or above
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

## About Version 6

The project started in 2013 and continues to evolve with platform changes. Version 6 focuses on a modern messaging layer (Channel Messages), reliability with new iOS rendering changes (transparency clicking through redesign), build automation for large Android distributions, and XCFramework adoption for Apple Silicon.

If you are upgrading from v5, review the [Version Highlight](./version-highlight.md) and the [Migration Guide (v5 to v6)](./migration-guide-v5-to-v6.md). Upgrading from v5 is usually seamless: remove the old package, import v6, and (if you use transparency clicking through) add the `data-uv-transparency="opaque"` attributes to interactive elements.

> Need older docs? v5 docs are available at [docs-v5.uniwebview.com](https://docs-v5.uniwebview.com).

## Next Step

If you are ready, follow the [Installation](./installation.md) and subsequent guides to know the basic usage of UniWebView.

Please feel free to browse this documentation site and UniWebView's [APIs](/api). You can find more information on UniWebView's [official site](https://uniwebview.com) too.
