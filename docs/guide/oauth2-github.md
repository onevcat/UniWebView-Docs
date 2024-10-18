# OAuth 2.0 with GitHub

In this guide, we are using GitHub for demonstration purpose.

We assumed that you have already created a GitHub App to follow this guide. If not yet, please refer to [this official guide](https://docs.github.com/en/developers/apps/building-github-apps/creating-a-github-app) to create one. We assume you have the following information for the app, and we will use them in this guide:

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

## Adding Component

To get started, adding the `UniWebViewAuthenticationFlowGitHub` component to any of your game object in the scene. The easiest way is clicking the "Add Component" button in the Inspector, and search for "github":

![](/images/adding-github-auth.png)

## Setting Properties

Next, fill the necessary values of your app to the added `UniWebViewAuthenticationFlowGitHub` component. In this example, we need to set "Client Id", "Client Secret" and "Callback Url":

![](/images/property-github-auth.png)

There are also some other options on the component. Usually it contains some other optional settings for the OAuth provider. For GitHub, you can specify other "Scope" or determine whether to use "State" to validate the callback. For difference service, there are usually different options. Please refer the service provider documentation to know more.

> For a built-in supported provider, you always just need to set the top-level properties to get a minimal available setup.

## Setting Callback URL

When users log in to the service with their accounts, the service will open the callback URL you set in the app. For OAuth 2.0 in a mobile app, this callback URL usually launches your app. For that works globally in the app, you need to add the callback URL to UniWebView's preference panel.

Open the preference panel (Unity → Preferences) and find "UniWebView" in the side bar. Then, expand the "Auth Callbacks Urls" and add the callback URL (`authhub://auth` in this example) to the list:

![](/images/adding-github-callback.png)

## Handling Result

Almost done! Now, you can add a handler to get the result of the authentication flow. It is similar to Unity.UI's button action. You can prepare a method and assign it to the handlers list.

Create an empty game object (Unity Menu, GameObject -> Create Empty) to the scene and rename it as "OAuthHandler". Then add a new component by clicking the "Add Component" button in the Inspector, input "OAuthHandler" and choose "New script":

![](/images/adding-oauth-handler.png)

In the new `OAuthHandler.cs`, add the following code:

```csharp
public void OnGitHubTokenReceived(UniWebViewAuthenticationGitHubToken token) {
    Debug.Log("Token received: " + token.AccessToken);
}

public void OnGitHubAuthError(long errorCode, string errorMessage) {
    Debug.Log("Error happened: " + errorCode + " " + errorMessage);
}
```

At last, go back to the object with `UniWebViewAuthenticationFlowGitHub`, click the "plus" button. Then, drag the `OAuthHandler` object to the field and select its related methods:

![](/images/oauth-action-list.png)

## Start Authenticating

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

The GitHub authentication should work now. By running the scene, a web view will be opened and navigate to the GitHub authorization page. You can now log in with your GitHub account to the GitHub app, and get a valid access token in `OnGitHubTokenReceived` callback:

![](/images/github-login.png)

When log in successfully, you can find the following console log with the retrieved access token:

```
Token received: ${YOUR_ACCESS_TOKEN}
```

## Store & Read the Token

Sometimes, you may want to store the token locally. UniWebView, as a web view component and with its OAuth support, does not provide any storage for the token. You need to implement it yourself.

You can read the [`RawValue` string of the token](/api/UniWebViewAuthenticationStandardToken.html#rawvalue), and store it on the device or on your server. Remember the token is sensitive data, you should not store it in plain text. Usually, it is a good idea to encrypt it before storing it.

> There are several ways to encrypt and store a string in Unity, for example, the [SecurePlayerPrefs](https://assetstore.unity.com/packages/tools/input-management/secureplayerprefs-35160) is a good one.

When you need to use the token, you can read the raw string value from the storage and create a new `UniWebViewAuthenticationStandardToken` object:

```csharp
var rawValue = // Read the raw value from the storage
var token = new UniWebViewAuthenticationGitHubToken(rawValue);

// Or, if you are using a subclass of UniWebViewAuthenticationStandardToken, use its `Parse` method:
var token = UniWebViewAuthenticationTokenFactory<UniWebViewAuthenticationGitHubToken>.Parse(rawValue);
```

## Refresh Token

If in the token, there is a non-null `RefreshToken` property, it usually suggests that you can use it to refresh the access token.

In any compatible flow (in this example, the `UniWebViewAuthenticationFlowGitHub`), there is a `StartRefreshTokenFlow` method. You can pass the refresh token in, and the flow will try to communicate with 
the service provider and refresh the token. Similar to the access token authentication flow, the refresh token result will be returned in the callback too. 

But instead of setting the methods for "On Authentication Finished" and "On Authentication Errored", this time you need to set "On Refresh Token Finished" and "On Refresh Token Errored":


![](/images/refresh-action-list.png)


```csharp
public void OnGitHubTokenRefreshed(UniWebViewAuthenticationGitHubToken token) {
    Debug.Log("Token refreshed: " + token.AccessToken);
}

var rawValue = // Read the raw value from the storage
var token = new UniWebViewAuthenticationGitHubToken(rawValue);
if (token.RefreshToken != null) {
    githubFlow.StartRefreshTokenFlow(token.RefreshToken);
}
```
