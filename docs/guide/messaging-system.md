# Messaging System

You can send a message from the web view to UniWebView. It helps you implement a way to "control" your game from the web page.

UniWebView inspects all links starts from `uniwebview://` by default. That means if your user taps a link starting with "uniwebview", an `OnMessageReceived` event will be raised with a `UniWebViewMessage` as its parameter.

If you have this on your page:

```html
<a href="uniwebview://action?key=value&anotherKey=anotherValue">Tap Me</a>
```

And you have this event listener in Unity:

```csharp
webView.OnMessageReceived += (view, message) => {
    print(message.RawMessage);
};
```

When the link is tapped, "uniwebview://action?key=value&anotherKey=anotherValue" will be printed.

UniWebView parses the input and pass it to you in the `OnMessageReceived` event, as the `message` parameter. In the example above, you have:

```csharp
message.Scheme // "uniwebview"
message.Path   // "action"
message.Args   // {"key": value, "anotherKey": "anotherValue"}
```

::: warning Using a Valid URL
From iOS 15.4, Apple applied a limitation that an invalid URL is not triggering the necessary events for UniWebView to deliver the message anymore. 
That means you cannot use things like `uniwebview://{\"title\"=\"hello\"}` to send a message. Instead, you need to make sure to pass a valid URL, like `uniwebview://event?title=hello` or `uniwebview://event?payload={\"title\"=\"hello\"}`.

Using URL query to pass detail information is recommended. For more about what is a "valid URL", please check [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and other related specifications.
:::

::: tip DUPLICATED KEY
If you are using the same key in the URL query, `UniWebViewMessage` will parse them to the same key as well, with the values concatenated by a comma. For example, a URL like `uniwebview://action?key=1&key=2` will be parsed to a message with `Args` as `{"key": "1,2"}`.
:::

::: tip NAVIGATION
Besides of an HTML link, a `location.href` JavaScript will also send a message to UniWebView and trigger the event. The code below is identical to example above:

```javascript
location.href = "uniwebview://action?key=value&anotherKey=anotherValue";
```

:::

### Adding your own scheme

By default, "uniwebview" is inspected in UniWebView Messaging System. You can also add your own URL schemes. Call `AddUrlScheme` with the one you need:

```csharp
// Start to inspect all `myscheme://` URLs.
webView.AddUrlScheme("myscheme");
```

A tricky thing here is, you can even set `http` and `https` as the scheme. It will prevent all loading of web resources. A use case is that you do not want your user to leave the current page: first load your page, then, in the `OnPageFinished` event, disable all navigating by adding the "http(s)" scheme:

```csharp
webView.Load("https://yourpage.com");

webView.OnPageFinished += (view, statusCode, url) => {
    webView.AddUrlScheme("http");
    webView.AddUrlScheme("https");

    // Now your user will not be able to navigate to other pages hosted on HTTP or HTTPS.
};
```

---

::: warning Limitation
The messaging system is built on URL and Unity's message sender. It means you cannot send the unlimited size of data at once. The allowed max length of a URL is different from devices and system versions. But **a safe length is ~16KB** for a URL. If you have something huge to send from the web page to Unity and encountered some problems, it would be better to split them into smaller pieces.
:::
