# Using JavaScript

You can run any JavaScript embedded in the web page. Or you can even add new JavaScript functions to the current page.

## Add a Function

Call `AddJavaScript` to add some JavaScript to your page. This is an asynchronous API with a callback action. You can check the `resultCode` there to ensure the function is added without any problem.

```csharp{2-6}
webView.OnPageFinished += (view, statusCode, url) => {
    webView.AddJavaScript("function add(a, b) { return a + b; }", (payload) => {
        if (payload.resultCode.Equals("0")) {
            print("Adding JavaScript Finished without error.");
        }
    });
};
```

If any error occurs when you adding the JavaScript (syntax error, in most cases), the `resultCode` will not be "0".

::: tip JavaScript Related Methods
In the example above, we add the JavaScript inside the `OnPageFinished` event callback.

The JavaScript is always bound to a context, or say, the current web page. You can only add functions to a page, or execute a function which is already on the page. Usually, it is a good idea to perform JavaScript related operation **after the page being loaded** (inside `OnPageFinished`).
:::

## Run a Function

Call `EvaluateJavaScript` to run a JavaScript:

```csharp{3-7,11}
webView.OnPageFinished += (view, statusCode, url) => {
    webView.AddJavaScript("function add(a, b) { return a + b; }", (payload) => {
        webView.EvaluateJavaScript("add(1, 2);", (payload) => {
            if (payload.resultCode.Equals("0")) {
                print("1 + 2 = " + payload.data);
            }
        });
    });
};

// => "1 + 2 = 3"
```

Similar to `AddJavaScript`, the `payload` of `EvaluateJavaScript` also contains a `resultCode` to indicate whether the calling is successful or not. If everything goes fine, you can find the returned value of the JavaScript in `payload.data`.

Not only the functions you added, you can also execute any JavaScript already there, just like what you do in a modern browser. For example, to get the `innerHTML` of the whole document we loaded:

```csharp
webView.EvaluateJavaScript("document.body.innerHTML", (payload) => {
    // Do something with payload.
});
```

> You can also get the content of the page by the [GetHTMLContent](/api/#gethtmlcontent) method.

Thanks to the modern mobile web view component, UniWebView is fully compatible with JavaScript. You can expect that almost all features are supported in UniWebView if they are supported in the browser of your device. That means you are free to use lots of third-party JavaScript libraries to enhance your browsing experience. It is even possible to run a complicated Single Page Application built on something like React and Vue.js without any problem.

## Disabling

If you are not using any JavaScript, you could disable it by `UniWebView.SetJavaScriptEnabled(false)`. All web view created after this setting does not support JavaScript, it would give you a faster speed when browsing non-JavaScript content or for certain security purposes.
