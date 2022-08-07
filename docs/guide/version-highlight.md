# Version Highlight

::: tip Upgrade Pricing
If you have purchased UniWebView 4 before, we offer an upgrading discount.

For users:

- Purchased from our Gumroad Store - [Submit a ticket](https://onevcat.atlassian.net/servicedesk/customer/portal/2/group/2/create/10011) with your purchasing Email and we will send a coupon back.
- Purchased from Unity Asset Store - Sign in to Asset Store and visit [our product page](https://assetstore.unity.com/packages/slug/229334)
  to find the Upgrade Price.
  :::

UniWebView contains some significant improvements over its predecessor UniWebView 4. Here we will list a few of them to
give you an overview about what are added and changed.

### Built-in OAuth 2.0 Support

UniWebView 5 supports OAuth 2.0 authentication. It provides an easy way to integrate OAuth 2.0 authentication into your
app for most popular service providers. If you are planning to let your users log in with one of these built-in supported
platform, UniWebView 5 gives you an out-of-the-box solution:

| Service Provider | UniWebView Auth Class                | Provider Documentation                                                                                          |
| ---------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Google           | UniWebViewAuthenticationFlowGoogle   | [OAuth 2.0 for Mobile & Desktop Apps](https://developers.google.com/identity/protocols/oauth2/native-app?hl=en) |
| Facebook         | UniWebViewAuthenticationFlowFacebook | [Manually Build a Login Flow](https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow)  |
| Twitter          | UniWebViewAuthenticationFlowTwitter  | [Authentication](https://developer.twitter.com/en/docs/authentication/oauth-2-0/authorization-code)             |
| GitHub           | UniWebViewAuthenticationFlowGitHub   | [Authorizing OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) |
| Discord          | UniWebViewAuthenticationFlowDiscord  | [OAuth2 in Discord](https://discord.com/developers/docs/topics/oauth2)                                          |
| LINE             | UniWebViewAuthenticationFlowLine     | [LINE Login v2.1 API reference](https://developers.line.biz/en/reference/line-login/)                           |

Besides of them, UniWebView also a customizable common setup for **any other services which provides a standard OAuth 2.0 code flow**.

For more information of the built-in OAuth 2.0 authentication, please check the related [OAuth 2.0 Support Guide](./oauth2.md).

### Embedded Toolbar

Instead of the toolbar in previous versions, now UniWebView 5 has an embedded toolbar for both iOS and Android.
It adopts to better layout methods and gives a more stable toolbar style. This new embedded toolbar contains the
navigation buttons and a title to provide a context to your users. The size and position of toolbar now also follows the
web view's size and position. It provides a much better immersive experience for your users.

For more information of the embedded toolbar, please check the related [Embedded Toolbar Guide](./embedded-toolbar.md).

### Uploading Rewriting

The image uploading support is rewritten from scratch. If you need to upload some files, especially photos and images
to a server through the HTTP `<input>` form, you will find now it is much more stable on almost all types of Android
devices and system versions.

### Improved Export Phase

In previous versions, when exporting with Release configuration and project minifying on, it is possible that the required
symbols gets stripped out on Android. In UniWebView 5, we have a deeper integration with Unity's build pipeline to make sure
this not happen again. Now the exporting behavior should be much more stable under different build configurations.

### Much More

Please check other guides in the side bar and the [API Documentation](/latest/api/overview) to know more about UniWebView.
We strongly suggest you upgrade to the latest version for a more powerful and stable web view component.

If you need to migrate from UniWebView 4 to the latest UniWebView 5, please refer to the [Migration Guide](./migration-guide-v4-to-v5.md).

You can find other recent changes and all release logs in the [Release Note](../release-note) page.
