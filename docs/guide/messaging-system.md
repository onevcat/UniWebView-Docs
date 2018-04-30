# Messaging System

By sending a message from web page to Unity, you could control or notify your game. The UniWebView messaging system takes responsibility to observe some schemes navigation (from link clicking or JavaScript location navigation), then parse and forward specified navigating to Unity.

UniWebView inspects all links starts from `uniwebview://` by default. That means if you have a link with "uniwebview" as the URL scheme, the `OnMessageReceived` event will be raised with a received `UniWebViewMessage` object:

```csharp
webView.OnMessageReceived += (view, message) => {
    print(message.RawMessage);
};
webView.Load("uniwebview://action?key=value&anotherKey=anotherValue");

// This will print "uniwebview://action?key=value&anotherKey=anotherValue" as the raw message.
```

UniWebView messaging system also helps you to parse the input. You could access the `Scheme`, `Path` and `Args` properties to get information from the URL. For example, in the code about, you could get:

- `Scheme` - "uniwebview"
- `Path` - "action"
- `Args` - {"key": value, "anotherKey": "anotherValue"}

::: tip
If you are using the same key in the URL query, `UniWebViewMessage` will parse them to the same key as well, with the values concatenated by a comma. For example, a URL like `uniwebview://action?key=1&key=2` will be parsed to a message with `Args` as `{"key": "1,2"}`.
:::

### Adding your own scheme

Besides of the default "uniwebview", you could also add your own URL scheme. Call `AddUrlScheme` with the one you need:

```csharp
webView.AddUrlScheme("myscheme");
```

And then, all URLs started from "myscheme" will be messages sent to you.

A tricky thing here is you could even set "http" and "https" as the scheme. It will prevent all loading of web resources and send them to you. This gives a chance to inspect all traffic. A use case for it is you do not want your user to leave the current page. So you could first load your page, then, in the `OnPageFinished` event, disable all navigating by adding the "http(s)" scheme to UniWebView message system:

```csharp
webView.Load("https://yourpage.com");

webView.OnPageFinished += (view, statusCode, url) => {
    webView.AddUrlScheme("http");
    webView.AddUrlScheme("https");

    // Now your user will not be able to navigate to other pages.
};
```

### Limitation

The messaging system is built on URL and Unity's message sender. It means you cannot send the unlimited size of data at once. The allowed max length of a URL is different from devices and system versions. But a safe length is ~16KB for a URL. If you have something huge to send from web page to Unity and encountered some problems, it would be better to split them into smaller pieces.
