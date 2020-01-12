# Supporting New Window

In a general web browser (like Chrome or Safari), a URL with `target="_blank"` attribute is intended 
to be opened in a new tab. However, in the context of web view, there is no way to handle new tabs without 
proper configurations. Due to that, by default UniWebView will ignore the `target="_blank"` and try to open 
the page in the same web view if that kind of link is pressed.

This works for most cases, but if this is a problem to your app logic, and you need to handle the new tab,
you can change this behavior by calling `SetSupportMultipleWindows` with `true`:

```swift
webView.SetSupportMultipleWindows(true);
```

It enables the "opening in new tab" behavior in a limited way, by adding the new tab web view above to the current web 
view, with the same size and position. When the opened new tab is closed, it will be removed from the view hierarchy 
automatically.

The new tab web view is just a temporary layer, it is not a fully functional `UniWebView` component and will not follow some settings as the original web view. You have to make sure it can be dismissed correctly, for example, by
a JavaScript calling of `window.close()`. Otherwise, the original web view will be always covered and invisible.