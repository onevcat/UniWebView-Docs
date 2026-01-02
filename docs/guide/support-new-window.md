# Supporting New Window

> UniWebView supports new windows in web views through configuration, allowing links and JavaScript to open new tabs or windows.

::: tip Choose Safe Browser Mode
This guide is for the general-purpose web view.

To get full support for a new window or new tab, we suggest you choose to use the Safe Browsing Mode, which gives a browser level experience.
:::

### Links with "\_blank" attribute

In a general web browser (like Chrome or Safari), a URL with `target="_blank"` attribute is intended
to be opened in a new tab. However, in the context of web view, there is no way to handle new tabs without
proper configurations. Due to that, by default UniWebView will ignore the `target="_blank"` and try to open
the page in the same web view if that kind of link is pressed.

This works for most cases, but if this is a problem to your app logic, and you need to handle the new tab,
you can change this behavior by calling `SetSupportMultipleWindows` with `true`:

```csharp
webView.SetSupportMultipleWindows(true, false);
```

It enables the "opening in new tab" behavior in a limited way, by adding the new tab web view above to the current web
view, with the same size and position. When the opened new tab is closed, it will be removed from the view hierarchy
automatically.

The new tab web view is just a temporary layer: it is not a fully functional `UniWebView` component itself, and will not
follow all settings as the original web view. You should dismiss it correctly, otherwise the original web view will be
always covered and invisible.

To manage a popup window, use the `OnPopupWindowOpened` event to receive a `UniWebViewPopup` handle:

```csharp
webView.OnPopupWindowOpened += (view, popup) => {
    // Close the popup directly.
    popup.Close();
};
```

The popup handle provides minimal controls like `Close`, `GoBack`, `GoForward`, and `EvaluateJavaScript`. You can also
observe `OnPopupWindowClosed` to track its lifecycle.

Popup page lifecycle events are disabled by default to avoid extra message noise. If you need them (for example, to
wait until the popup is ready before running JavaScript), enable them before opening the popup:

```csharp
webView.SetPopupPageEventEnabled(true);
webView.OnPopupWindowOpened += (view, popup) => {
    popup.OnPageFinished += (popupView, payload) => {
        popupView.EvaluateJavaScript("console.log('popup ready');");
    };
};
```

### Opening window with JavaScript

Besides of a link with "\_blank" attribute, there is another way to open a new window: JavaScript. An invocation of `window.open`
will ask the web view to open a new window. To support it, make sure you pass `true` as the second parameter (`allowJavaScriptOpening`) to the
`SetSupportMultipleWindows` method. On some devices, you also need to call `SetAllowJavaScriptOpenWindow` before creating
the web view to allow UniWebView can receive the opening request:

```csharp
UniWebView.SetAllowJavaScriptOpenWindow(true);
var webView = // Creating the web view component...

webView.SetSupportMultipleWindows(true, true);

// Then, you can use JavaScript like `window.open` to open the web view.
```

> The code above allows any JavaScript to open a new window, even without user's action. It might be an issue in some cases,
> especially if you are using an iframe to display an external page, or some un-controlled third-party JavaScript
> code is contained in your page. Use it at your own risk.

For more about this topic, please check the [API reference](/api/#setsupportmultiplewindows) of `SetSupportMultipleWindows`.
