# Using JavaScript

JavaScript is a powerful tool to interact and even change the web content from your Unity games. UniWebView has full support on running JavaScript in the web page. You could not only run existing JavaScript code in the page, but also define your own functions in JavaScript and add it to the web view.

### Adding JavaScript

Use `AddJavaScript` to add some JavaScript to your page. This is an asynchronous API with a callback action. You will not be able to call your new added JavaScript before the `completionHandler` gets called without error:

```csharp
webView.AddJavaScript("function add(a, b) { return a + b; }", (payload) => {
    if (payload.resultCode.Equals("0")) {
        print("Adding JavaScript Finished without error.");
    }
});
```

If any error occurs when you adding the JavaScript (syntax error, in most case), the `resultCode` will not be "0".

### Executing JavaScript

Executing a JavaScript code is as easy as adding operation:

```csharp
webView.EvaluateJavaScript("add(1, 2);", (payload) => {
    if (payload.resultCode.Equals("0")) {
        print("1 + 2 = " + payload.data);
    }
});

// => "1 + 2 = 3"
```

Similar to `AddJavaScript`, the `payload` of `EvaluateJavaScript` also contains a `resultCode` to indicate whether the evaluating was successful or not. If everything goes fine, you could find the return value of the JavaScript in `payload.data`.

Not only the functions you added, you could also execute any JavaScript already there, just like what you do in a modern browser. For example, we could get the `innerHTML` of the whole document we loaded:

```csharp
webView.EvaluateJavaScript("document.body.innerHTML", (payload) => {
    // Do something with payload.
});
```

Thanks to modern mobile web view component, UniWebView is fully compatible with JavaScript. You could expect that almost all features are supported in UniWebView if they are supported in the browser of your device. That means you could use lots of third party JavaScript libraries to enhance your browsing experience. It is even possible to run a complicated Single Page Application built on something like React and vue.js without problem.

### Disable JavaScript

If you are not using any JavaScript, you could disable it by `UniWebView.SetJavaScriptEnabled(false)`. All web view created after this setting will not support JavaScript, it would give you a faster spped when browsing non-JavaScript content.
