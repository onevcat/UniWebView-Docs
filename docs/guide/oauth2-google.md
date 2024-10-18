# OAuth 2.0 with Google

> The guide below was last updated in Oct 2024. It may be outdated if the provider changes its user interface or workflow.

## Creating an OAuth Client ID

We assumed that you have already created have a valid Google Cloud account for development. Navigate to your project on 
[Google Cloud](https://console.cloud.google.com/welcome), click "APIs & Services" -> "Credentials" (or use 
[this link](https://console.cloud.google.com/apis/credentials)). The click "Create Credentials" 
and choose "OAuth client ID" there:

![](/images/create-google-oauth-client.png)

In the "Create OAuth client ID", choose "iOS" as the application type. Give a proper name to your application and fill in
the bundle ID. You can leave all other fields empty for now. Click "Create" to generate an OAuth Client ID for your app:

![](/images/fill-oauth-info.png)

> Here we created an iOS application as our OAuth Client. It can be used for testing purpose for both iOS and Android in 
> UniWebView. However, if you also need to publish your game on Android, maybe you need to create another OAuth Client ID
> by choosing "Android" as the application type, and fill in some platform specified information (such as package name and
> signature, for example) before you can get it pass the Google's review before publishing.

In the next screen, you will get a new client ID value, it contains two component before a fixed Google domain suffix, 
in the format like this:

`{number}-{token}.apps.googleusercontent.com`

In this guide, we will use this Client Id value as an example:

`1234567890-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com`

To allow a Google account to perform sign-in to this newly created OAuth Client ID during development phase, you also 
need to add a test account. Open the "OAuth consent screen" setting panel on the Google Cloud Console, and add any test
accounts you need to the "Test users" section.

## Adding Component

Add a `UniWebViewAuthenticationFlowGoogle` component to any of your game object in the scene. The easiest way is clicking the "Add Component" button in the Inspector, and search for "google":

![](/images/adding-google-auth.png)

## Setting Properties

Next, fill the necessary values of your app to the added `UniWebViewAuthenticationFlowGoogle` component. In this example, we need to set "Client Id", "Redirect Uri" and "Scope" to these values:

> | Field              | Value                            |
> | ------------------ | -------------------------------- |
> | Client ID          | 1234567890-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com       |
> | Redirect Uri       | com.googleusercontent.apps.1234567890-abcdefghijklmnopqrstuvwxyz:/auth |
> | Scope              | https://www.googleapis.com/auth/userinfo.profile                       |

Remember to replace the `1234567890-abcdefghijklmnopqrstuvwxyz` part in "Client ID" and "Redirect Uri" with the actual 
content of your Client Id. For the "Scope" field, here we add the "userinfo.profile" scope so we can some get basic user 
information. You may need to add more scopes to meet your requirement. Please check [Google's documentation](https://developers.google.com/identity/protocols/oauth2/scopes) for the full list.

![](/images/property-google-auth.png)

There are also some other options on the component. Usually it contains some other optional settings for the OAuth provider. For Google, leave the "PKCE Support" and the "Enable State" to the default values (`S256` and "enabled"). They are here to provide a secured client auth flow.

> For a built-in supported provider, you always just need to set the top-level properties to get a minimal available setup.

## Setting Callback URL

When users log in to the service with their accounts, the service will open the callback URL you set in the app. For OAuth 2.0 in a mobile app, this callback URL usually launches your app. For that works globally in the app, you need to add the callback URL to UniWebView's preference panel.

Open the preference panel (Unity → Preferences) and find "UniWebView" in the side bar. Then, expand the "Auth Callbacks Urls" and add the callback URL (`com.googleusercontent.apps.1234567890-abcdefghijklmnopqrstuvwxyz:/auth` in this example) to the list:

![](/images/adding-google-callback.png)

## Handling Result

Almost done! Now, you can add a handler to get the result of the authentication flow. It is similar to Unity.UI's button action. You can prepare a method and assign it to the handlers list.

Create an empty game object (Unity Menu, GameObject -> Create Empty) to the scene and rename it as "OAuthHandler". Then add a new component by clicking the "Add Component" button in the Inspector, input "OAuthHandler" and choose "New script":

![](/images/adding-oauth-handler.png)

In the new `OAuthHandler.cs`, add the following code:

```csharp
public void OnGoogleTokenReceived(UniWebViewAuthenticationGoogleToken token) {
    Debug.Log("Token received: " + token.AccessToken);
}

public void OnGoogleAuthError(long errorCode, string errorMessage) {
    Debug.Log("Error happened: " + errorCode + " " + errorMessage);
}
```

At last, go back to the object with `UniWebViewAuthenticationFlowGoogle`, click the "plus" button in the "On Authentication Finished" and "On Authentication Errored" section to create a callback. Then, drag the `OAuthHandler` object to the field and select its related methods:

![](/images/oauth-action-list-google.png)