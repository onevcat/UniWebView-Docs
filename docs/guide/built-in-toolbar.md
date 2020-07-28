# Built-in Toolbar

::: warning NOTICE
This guide is only for general-purpose web view on iOS. For Safe Browsing Mode, it is always presented with a toolbar,
containing navigation controls and the close button. For the general-purpose web view running on Android, users may choose
to use system navigation buttons or gestures.
:::

### Show a toolbar

You can display a toolbar containing "Go Back", "Go Forward" and "Done" buttons on iOS. It makes easier if you want to
have a way to navigate between pages or close it. By default, the toolbar presents at the top or bottom of the screen,
with an iOS system toolbar:

```csharp
webView.SetShowToolbar(
  true,  // Show or hide?         true  = show
  false, // With animation?       false = no animation
  true,  // Is it on top?         true  = top
  true,  // Should adjust insets? true  = avoid overlapping to web view
);
```

It gives you a nice-looking toolbar:

![](/images/toolbar-default.png)

### Customization

#### Buttons Text

The text of all buttons are customizable:

```csharp
webView.SetToolbarGoBackButtonText("后退");
webView.SetToolbarGoForwardButtonText("前进");

webView.SetToolbarDoneButtonText("完成");
```

#### Tint Color and Text Color

The background color and text color is also customizable, with an opaque color:

```csharp
webView.SetToolbarTintColor(new Color(0.0f, 0.59f, 0.34f));
webView.SetToolbarTextColor(Color.white);
```

---

You finally get this after these customizations:

![](/images/toolbar-customized.png)
