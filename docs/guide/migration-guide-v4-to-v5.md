# Migration Guide (v4 to v5)

> To migrate from UniWebView 4 to 5, remove old files, install the new version, replace deprecated methods, and explore new features like the embedded toolbar and OAuth 2.0 support.

::: tip Upgrade Pricing
If you have purchased UniWebView 4 before, we offer an upgrading discount.

For users:

- Purchased from our Gumroad Store - [Submit a ticket](https://onevcat.atlassian.net/servicedesk/customer/portal/2/group/2/create/10011) with your purchasing Email and we will send a coupon back.
- Purchased from Unity Asset Store - Sign in to Asset Store and visit [our product page](https://assetstore.unity.com/packages/slug/229335)
  to find the Upgrade Price.
  :::

### Overview

Most part of UniWebView 5 is compatible with UniWebView 4. In most cases, migrating to the new version just takes several
minutes. You can do it with very little (if not no) efforts. You need to:

1. Remove UniWebView 4 from your project.
2. Install UniWebView 5.
3. Replace deprecated methods with new ones.
4. Check if new features can do better jobs.

Let's start!

::: warning
Before you start the migration, we strongly suggest that you should backup your project. If you are already using a
version control system (like git), you should be all fine!
:::

### Removing UniWebView 4

First we suggest remove UniWebView 4 from your project. Remove these files/folders (and the related ".meta" files if
any) from your project:

- "Assets/UniWebView" folder
- "Assets/Plugins/Android/UniWebView.aar"
- "Assets/Plugins/iOS/libUniWebView.a"
- "Assets/Plugins/UniWebView.bundle"

> It is assumed that you didn't move these files to another location. If you did that, remove the corresponding folders
> and files.

### Installing UniWebView 5

Now, you have completely removed UniWebView 4 from you project. Please make sure that you no longer have a "UniWebView"
folder in "Assets". Then follow the [Installation Guide](./installation.md) to integrate UniWebView 5 into your project.

### Deprecated Methods

In UniWebView, the old **built-in toolbar** (iOS only) is deprecated and will be removed in the future. Although the
code will still work for a while, we suggest you to use the new **embedded toolbar** instead. The new toolbar works for
both iOS and Android, and is more flexible and customizable. If you are using any of these methods of `UniWebView` in
your project, consider to replace them with the new ones:

| Deprecated                              | New                                            |
| --------------------------------------- | ---------------------------------------------- |
| webView.SetShowToolbar                  | webView.EmbeddedToolbar.Show                   |
| webView.SetToolbarDoneButtonText        | webView.EmbeddedToolbar.SetDoneButtonText      |
| webView.SetToolbarGoBackButtonText      | webView.EmbeddedToolbar.SetGoBackButtonText    |
| webView.SetToolbarGoForwardButtonText   | webView.EmbeddedToolbar.SetGoForwardButtonText |
| webView.SetShowToolbarNavigationButtons | webView.EmbeddedToolbar.ShowNavigationButtons  |
| webView.SetToolbarTintColor             | webView.EmbeddedToolbar.SetButtonTextColor     |
| webView.SetToolbarTextColor             | webView.EmbeddedToolbar.SetButtonTextColor     |

There are also some new methods in the new `EmbeddedToolbar` class. You can check them in the
[Embedded Toolbar](./embedded-toolbar.md) guide for more information.

### Checking New Features

The most noticeable change in UniWebView 5 is the new built-in OAuth 2.0 support. If you are using OAuth 2 in your project,
regardless of using UniWebView to perform the user login or another plugin, now it is possible to use a "UniWebViewAuthenticationFlow"
prefab to simplify the work. UniWebView provides the out-of-box level support for most popular OAuth 2.0 providers. If you
need to support a new provider, you can also create your own auth flow. To get started, read the [OAuth 2.0 Support Guide](./oauth2.md).

For other features and fixes in new versions of UniWebView v5, please check the [Release Notes](./release-notes.md).
