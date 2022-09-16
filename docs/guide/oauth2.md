# OAuth 2.0 Support

## Overview

UniWebView provides support for [OAuth 2.0 authorization code flow](https://www.oauth.com/oauth2-servers/server-side-apps/authorization-code/). It contains built-in support for several popular OAuth 2.0 providers by following their options, which are:

| Service Provider | UniWebView Auth Class                | Provider Documentation                                                                                          |
| ---------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Google           | UniWebViewAuthenticationFlowGoogle   | [OAuth 2.0 for Mobile & Desktop Apps](https://developers.google.com/identity/protocols/oauth2/native-app?hl=en) |
| Facebook         | UniWebViewAuthenticationFlowFacebook | [Manually Build a Login Flow](https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow)  |
| Twitter          | UniWebViewAuthenticationFlowTwitter  | [Authentication](https://developer.twitter.com/en/docs/authentication/oauth-2-0/authorization-code)             |
| GitHub           | UniWebViewAuthenticationFlowGitHub   | [Authorizing OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) |
| Discord          | UniWebViewAuthenticationFlowDiscord  | [OAuth2 in Discord](https://discord.com/developers/docs/topics/oauth2)                                          |
| LINE             | UniWebViewAuthenticationFlowLine     | [LINE Login v2.1 API reference](https://developers.line.biz/en/reference/line-login/)                           |

Besides of them, UniWebView also a customizable common setup for **any other services which provides a standard OAuth 2.0 code flow**.

UniWebView follows the OAuth 2.0 standard and use a secure way to perform authentication. It supports both `state` verification and [PKCE](https://oauth.net/2/pkce/) challenge out-of-the-box, which simplifies your work a lot.

In this guide, we will cover both and show you how to have your users login to a service with OAuth 2.0.

> All services names and trademarks are property of their respective owners in this guide.

## Checking Availability

This feature is not available on all UniWebView supporting platforms. On Apple's devices, it only works on iOS 11, macOS 10.15 and later. On Android, it requires the similar environment as [Safe Browsing Mode](./safe-browsing.md#checking-availability).

#### Target API Level higher than Android 11

On Android, if you set your **Target API Level to Android 11 (30) or later**, you need to add the correct intent query
explicitly in your `AndroidManifest.xml` file, to follow the [Package Visibility](https://developer.android.com/about/versions/11/privacy/package-visibility)
to add `queries` as a sub-node of the `manifest` tag:

```xml{6-10}
<manifest>
  // ...

  </application>

  <queries>
    <intent>
      <action android:name="android.support.customtabs.action.CustomTabsService" />
    </intent>
  </queries>
</manifest>
```

::: warning Package Visibility from Android 11
If you are setting Target API Level higher than Android 11 (API Level 30), but not setting the `queries` in your
`AndroidManifest.xml`, the OAuth 2.0 related APIs will not work expectedly on Android.
:::

#### Runtime Checking

To check if OAuth 2.0 feature is available at runtime, call `IsAuthenticationSupported` like this:

```csharp
if (UniWebViewAuthenticationSession.IsAuthenticationSupported) {
    // OAuth 2.0 code flow is available on current device.
}
```

This `IsAuthenticationSupported` property returns `true` on Android with customize tabs, iOS 11, macOS 10.15 and later.
**You should always check whether this feature is available before using it.** Only continue to use OAuth 2.0 feature
when this value is `true`. Otherwise, the authentication flow may not even start.

## Built-In Providers

For built-in supported providers [mentioned above](#overview), each provider has a dedicated class responsible for the authentication flow. In this guide, we are using GitHub for demonstration purpose. For other providers, most of the settings are the same. For the provider-specific settings, please refer to the API reference of each class to know more details.

### Adding Component

> We assumed that you have already created a GitHub App to follow this guide. If not yet, please refer to [this official guide](https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app) to create one. We assume you have the following information for the app, and we will use them in this guide:
>
> | GitHub App Field                                       | Value                            |
> | ------------------------------------------------------ | -------------------------------- |
> | Client ID                                              | Iv1.1234567890abcdef             |
> | Client Secret                                          | 1234567890abcdef1234567890abcdef |
> | Callback URL                                           | authhub://auth                   |
> | Enable Device Flow                                     | false                            |
> | Webhook - Active                                       | false                            |
> | Request user authorization (OAuth) during installation | false                            |
>
> _\* The values here are only for demonstration purpose. In your implementation, replace them to the actual values of your app._

To get started, adding the `UniWebViewAuthenticationFlowGitHub` component to any of your game object in the scene. The easiest way is clicking the "Add Component" button in the Inspector, and search for "github":

![](/images/adding-github-auth.png)

### Setting Properties

Next, fill the necessary values of your app to the added `UniWebViewAuthenticationFlowGitHub` component. In this example, we need to set "Client Id", "Client Secret" and "Callback Url":

![](/images/property-github-auth.png)

You may find two common options for all OAuth providers: "Authorize On Start" and "Private Mode". We will cover them below soon.

There are also some other options under the "Optional" section. Usually it contains some other optional settings for the OAuth provider. For GitHub, you can specify other "Scope" or determine whether to use "State" to validate the callback. For difference service, there are usually different options. Please refer the service provider documentation to know more.

> For a built-in supported provider, you always just need to set the top-level properties to get a minimal available setup.

### Setting Callback URL

When users log in to the service with their accounts, the service will open the callback URL you set in the app. For OAuth 2.0 in a mobile app, this callback URL usually launches your app. For that works globally in the app, you need to add the callback URL to UniWebView's preference panel.

Open the preference panel (Unity → Preferences) and find "UniWebView" in the side bar. Then, expand the "Auth Callbacks Urls" and add the callback URL (`authhub://auth` in this example) to the list:

![](/images/adding-github-callback.png)

### Handling Result

Almost done! Now, you can add a handler to get the result of the authentication flow. It is similar to Unity.UI's button action. You can prepare a method and assign it to the handlers list.

Create an empty game object (Unity Menu, GameObject -> Create Empty) to the scene and rename it as "OAuthHandler". Then add a new component by clicking the "Add Component" button in the Inspector, input "OAuthHandler" and choose "New script":

![](/images/adding-oauth-handler.png)

In the new `OAuthHandler.cs`, add the following code:

```csharp
public void GitHubOAuthDone(UniWebViewAuthenticationGitHubToken token) {
    Debug.Log("Token received: " + token.AccessToken);
}

public void GitHubOAuthFailed(long errorCode, string errorMessage) {
    Debug.Log("Error happened: " + errorCode + " " + errorMessage);
}
```

At last, go back to the object with `UniWebViewAuthenticationFlowGitHub`, click the "plus" button. Then, drag the `OAuthHandler` object to the field and select its related methods:

![](/images/oauth-action-list.png)

### Start Authenticating

Now, you can start the authentication flow by calling `StartAuthentication` of the `UniWebViewAuthenticationFlowGitHub` component.

To do that, you first need to have a reference of the `UniWebViewAuthenticationFlowGitHub`. Add a new script component **to the same game object** where the `UniWebViewAuthenticationFlowGitHub` is on. Then in the new added script, add the following code in the `Start()` method:

```csharp {2,3}
void Start() {
    var githubFlow = GetComponent<UniWebViewAuthenticationFlowGitHub>();
    githubFlow.StartAuthenticationFlow();
}
```

:::tip
Alternative, you can turn on the "Authorize On Start" option in the `UniWebViewAuthenticationFlowGitHub` component. It
provides an easy way if you want to start the authentication flow automatically when the component starts.
:::

The GitHub authentication should work now. By running the scene, a web view will be opened and navigate to the GitHub authorization page. You can now log in with your GitHub account to the GitHub app, and get a valid access token in `GitHubOAuthDone` callback:

![](/images/github-login.png)

When log in successfully, you can find the following console log with the retrieved access token:

```
Token received: ${YOUR_ACCESS_TOKEN}
```

## Other Properties

For other OAuth 2.0 providers, you can use the same setup as above, by setting the responsive fields like "Client Id" and "Callback Url", etc. There are also some common fields between different providers.

#### Authorize On Start

Normally, you need to call `StartAuthenticationFlow` to display the web view for login form.

When this is enabled, the authentication flow will start automatically when the component starts (in the `Start()` method).

#### Private Mode

The system will remember the session for a certain service. Unless the user logs out from the service in the web view,
it will just reuse the last credentials if available when the user tries to log in again. To disable this behavior and
allow user to choose another account, set the "Private Mode" option to "true".

::: warning VERSIONS
When enabled, the web view will try to open the authorization page in private (incognito) mode.

On iOS, this works on iOS 13 and later.

On Android, it is not always available but depends on the Chrome version and might require users to enable the incognito
mode (and support for third-party use) in Chrome's settings. Check settings with `chrome://flags/#cct-incognito` and
`chrome://flags/#cct-incognito-available-to-third-party` in Chrome to see the current status.
:::

## Common Flow

Besides of the built-in supported OAuth 2.0 providers, you can also use the common flow to let your user log in to any
standard OAuth 2.0 provider. To adopt to a common flow, add the `UniWebViewAuthenticationFlowCustomize` component instead,
and set the necessary properties like "Authorization Endpoint", "Token Endpoint", "Client Id" and other more:

![](/images/common-flow-component.png)

> Usually, you can find these necessary entry points information in the service provider documentation.

To receive the authorization result, set the success handler parameter to `UniWebViewAuthenticationStandardToken`:

```csharp
public void CustomizeOAuthDone(UniWebViewAuthenticationStandardToken token) {
    Debug.Log("Token received: " + token.AccessToken);
}

public void CustomizeOAuthFailed(long errorCode, string errorMessage) {
    Debug.Log("Error happened: " + errorCode + " " + errorMessage);
}
```
