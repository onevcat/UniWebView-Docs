# URL Messaging System

UniWebView provides two messaging systems for communication between web content and Unity:

1. **URL Scheme Messaging** (Traditional) - Simple, one-way communication using custom URL schemes
2. **Channel Message System** (New) - Advanced, bidirectional communication with structured data support

## Choosing the Right System

| Feature | URL Scheme Messaging | Channel Message System |
|---------|---------------------|----------------------|
| **Complexity** | Simple, easy setup | More powerful, slightly more complex |
| **Communication** | One-way (Web → Unity) | Bidirectional (Web ↔ Unity) |
| **Data Format** | URL query parameters | Structured JSON data |
| **Response Support** | No | Yes (sync and async) |
| **Data Size Limit** | ~16KB | Much larger (no URL length limits) |
| **Performance** | Good for simple messages | Better for complex data |
| **Type Safety** | String-based parsing | Native object serialization |
| **Use Cases** | Simple actions, notifications | Complex data exchange, API-like interactions |

**Recommendation:**
- Use **URL Scheme Messaging** for simple, fire-and-forget messages
- Use **Channel Message System** for complex data exchange and when you need responses

::: tip NEW FEATURE
The Channel Message system is available starting from UniWebView v6. It provides more powerful communication capabilities. Learn more in the [Channel Message Guide](./channel-message.md).
:::

In this guide, we focus on the URL Scheme Messaging.

---

## URL Scheme Messaging

> This traditional messaging system enables one-way communication from web views to Unity using custom URL schemes, with a safe data transfer limit of about 16KB per message.

### Send and Receive

You can send a message from the web view to UniWebView. It helps you implement a way to "control" your game from the web page.

UniWebView inspects all links starts from `uniwebview://` by default. That means if your user taps a link starting with "uniwebview://", an `OnMessageReceived` event will be raised with a `UniWebViewMessage` as its parameter.

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

When the link is tapped, it prints:

> uniwebview://action?key=value&anotherKey=anotherValue

::: tip NAVIGATION
Besides of an HTML link, a `location.href` JavaScript will also send a message to UniWebView and trigger the event. The code below is identical to example above:

```javascript
location.href = "uniwebview://action?key=value&anotherKey=anotherValue";
```

:::

### Message Object

UniWebView parses the input and pass it to you in the `OnMessageReceived` event, as the `message` parameter. In the example above, you have:

```csharp
message.Scheme // "uniwebview"
message.Path   // "action"
message.Args   // {"key": "value", "anotherKey": "anotherValue"}
```

::: warning Using a Valid URL
From iOS 15.4, Apple applied a limitation that an invalid URL is not triggering the necessary events for UniWebView to deliver the message anymore.
That means you **cannot** use things like `location.href = "uniwebview://{\"title\":\"hello\"}"` to send a message. Instead, you need to make sure to pass a valid URL, like `location.href = "uniwebview://event?title=hello"` or `location.href = "uniwebview://event?payload={\"title\":\"hello\"}"`.

Furthermore, if you prefer an HTML link instead of the `location.href` above, remember to encode your URL query:

```html
<a href="uniwebview://event?payload=%7B%22title%22:%22hello%22%7D">Hello</a>
```

For more about what is a "valid URL", please check [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and other related specifications.
:::

::: tip DUPLICATED KEY
If you are using a same key for multiple values in the URL query, `UniWebViewMessage` will parse them to the same key as well, with the values concatenated by a comma. For example, a URL like `uniwebview://action?key=1&key=2` will be parsed to a message with `Args` as `{"key": "1,2"}`.
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
The URL scheme messaging system is built on URL and Unity's message sender. It means you cannot send the unlimited size of data at once. The allowed max length of a URL is different from devices and system versions. But **a safe length is ~16KB** for a URL. If you have something huge to send from the web page to Unity and encountered some problems, it would be better to split them into smaller pieces or switch to the Channel Message System.
:::

## Migrating to Channel Message System

If you find the URL scheme messaging limitations restrictive, consider migrating to the Channel Message system. Here's a simple example:

### Before (URL Scheme)
```javascript
// JavaScript - Limited data size, no response
location.href = "uniwebview://updateScore?score=1500&level=3&bonus=true";
```

```csharp
// Unity - String parsing required
webView.OnMessageReceived += (view, message) => {
    if (message.Scheme == "uniwebview" && message.Path == "updateScore") {
        var score = int.Parse(message.Args["score"]);
        var level = int.Parse(message.Args["level"]);
        var bonus = bool.Parse(message.Args["bonus"]);
        UpdateScore(score, level, bonus);
    }
};
```

### After (Channel Message)
```javascript
// JavaScript - Structured data, can get response
const result = window.uniwebview.call('updateScore', {
    score: 1500,
    level: 3,
    bonus: true
});

console.log('Score updated:', result);
```

```csharp
// Unity - Type-safe object serialization
webView.OnChannelMessageReceived += (view, message) => {
    if (message.action == "updateScore") {
        var data = message.GetData<ScoreData>();
        var result = UpdateScore(data.score, data.level, data.bonus);
        return UniWebViewChannelMessageResponse.Success(result);
    }
    return null;
};

[System.Serializable]
public class ScoreData {
    public int score;
    public int level;
    public bool bonus;
}
```

::: tip NEXT STEPS
Ready to use the more powerful Channel Message system? Check out the [Channel Message Guide](./channel-message.md) for complete documentation and examples.
:::
