# Embedded Toolbar

> UniWebView's embedded toolbar provides a customizable navigation bar with built-in and custom buttons, title interactions, and flexible layout — all configured through a simple config object.

UniWebView contains an embedded toolbar that can be displayed with the web view. In this guide, we will discuss how to use the embedded toolbar and how it can be customized.

## Quick Start

Each `UniWebView` component contains an `EmbeddedToolbar` property. The simplest way to show it is calling `Show()`:

```csharp{5}
var webView = webViewGameObject.AddComponent<UniWebView>();
webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
webView.Load("https://uniwebview.com/");

webView.EmbeddedToolbar.Show();
```

This shows a toolbar with default items: a back button (❮) and forward button (❯) on the left, and a Done button on the right. It works on iOS, Android, and macOS (Unity Editor).

### Handling the Done Button

When the user taps the Done button, the `OnShouldClose` event is triggered. If you hold a reference to the web view, clean it up in that event:

```csharp{10-13}
public class MyMonoBehaviour : MonoBehaviour {
    UniWebView webView;

    void ShowWebView()
    {
        webView = webViewGameObject.AddComponent<UniWebView>();

        // ...

        webView.OnShouldClose += (view) => {
            webView = null;
            return true;
        };
    }
}
```

Return `false` from `OnShouldClose` if you want to prevent the user from closing the web view through the Done button.

## Simple Customization

For quick styling adjustments, you can use the convenience methods directly:

##### Position

```csharp
webView.EmbeddedToolbar.SetPosition(UniWebViewToolbarPosition.Bottom);
```

##### Button Text

```csharp
webView.EmbeddedToolbar.SetGoBackButtonText("Back");
webView.EmbeddedToolbar.SetGoForwardButtonText("Fwd");
webView.EmbeddedToolbar.SetDoneButtonText("Close");
```

##### Title Text

```csharp
webView.EmbeddedToolbar.SetTitleText("UniWebView");
```

##### Colors

```csharp
webView.EmbeddedToolbar.SetButtonTextColor(Color.white);
webView.EmbeddedToolbar.SetTitleTextColor(Color.white);
webView.EmbeddedToolbar.SetBackgroundColor(new Color(0.0f, 0.59f, 0.34f));
```

These convenience methods are simple wrappers that modify the underlying config and apply changes automatically.

## Config-Based Customization

For full control over the toolbar layout, use `ApplyConfig` with a `UniWebViewEmbeddedToolbarConfig` object. This lets you:

- Choose which built-in items to show (back, forward, done, reload, title)
- Add custom buttons with your own identifiers
- Arrange items freely across left, center, and right sections
- Enable title interactions (tap to scroll to top, long press to copy URL)
- Set per-item styles and colors

### Starting from Default

The easiest way to build a custom config is starting from `UniWebViewEmbeddedToolbarConfig.Default`, which gives you the standard layout:

| Left | Center | Right |
|------|--------|-------|
| ❮ Back, ❯ Forward | Title | Done |

```csharp
var config = UniWebViewEmbeddedToolbarConfig.Default;

// Set the title.
var titleItem = config.FindFirstBuiltInItem(
    UniWebViewEmbeddedToolbarConfig.BuiltInItemKind.Title
);
titleItem.Title = "My App";

// Customize colors.
config.BackgroundColor = UniWebViewEmbeddedToolbarConfig.ColorValue.FromColor(
    new Color(0.2f, 0.2f, 0.2f)
);
config.ButtonTextColor = UniWebViewEmbeddedToolbarConfig.ColorValue.FromColor(Color.white);
config.TitleTextColor = UniWebViewEmbeddedToolbarConfig.ColorValue.FromColor(Color.white);

webView.EmbeddedToolbar.ApplyConfig(config);
```

### Adding a Reload Button

The default config does not include a reload button. You can add one to any section:

```csharp
var config = UniWebViewEmbeddedToolbarConfig.Default;

// Add a reload button to the left, after back and forward.
config.Left.Add(
    UniWebViewEmbeddedToolbarConfig.Item.BuiltIn(
        UniWebViewEmbeddedToolbarConfig.BuiltInItemKind.Reload
    )
);

webView.EmbeddedToolbar.ApplyConfig(config);
```

### Adding Custom Buttons

You can add custom buttons with your own identifiers. When a custom button is tapped, it triggers the toolbar item action callback — there is no built-in native behavior for custom items.

```csharp
var config = UniWebViewEmbeddedToolbarConfig.Default;

// Add a "Share" button to the right section, before Done.
config.Right.Insert(0,
    UniWebViewEmbeddedToolbarConfig.Item.Custom("my.share", "Share")
);

webView.EmbeddedToolbar.ApplyConfig(config);

// Handle the custom button tap.
webView.RegisterOnEmbeddedToolbarItemAction((action) => {
    if (action.Identifier == "my.share") {
        Debug.Log("Share tapped!");
        // Your share logic here.
        return true; // Mark as handled.
    }
    return false; // Let other items use their default behavior.
});
```

### Building a Config from Scratch

If you want complete control, you can build a config without starting from the default:

```csharp
var config = new UniWebViewEmbeddedToolbarConfig();
config.Visible = true;
config.Position = UniWebViewToolbarPosition.Top;
config.BackgroundColor = UniWebViewEmbeddedToolbarConfig.ColorValue.FromColor(Color.black);
config.ButtonTextColor = UniWebViewEmbeddedToolbarConfig.ColorValue.FromColor(Color.cyan);

// Left: only a back button.
config.Left.Add(
    UniWebViewEmbeddedToolbarConfig.Item.BuiltIn(
        UniWebViewEmbeddedToolbarConfig.BuiltInItemKind.Back, title: "←"
    )
);

// Center: title with interactions.
config.Center.Add(
    UniWebViewEmbeddedToolbarConfig.Item.BuiltIn(
        UniWebViewEmbeddedToolbarConfig.BuiltInItemKind.Title,
        title: "Browser",
        titleInteraction: new UniWebViewEmbeddedToolbarConfig.TitleInteraction {
            OnTap = UniWebViewEmbeddedToolbarConfig.TitleInteraction.TapAction.ScrollToTop,
            OnLongPress = UniWebViewEmbeddedToolbarConfig.TitleInteraction.LongPressAction.CopyUrl,
            CopyToastText = "Link copied!"
        }
    )
);

// Right: reload and done.
config.Right.Add(
    UniWebViewEmbeddedToolbarConfig.Item.BuiltIn(
        UniWebViewEmbeddedToolbarConfig.BuiltInItemKind.Reload
    )
);
config.Right.Add(
    UniWebViewEmbeddedToolbarConfig.Item.BuiltIn(
        UniWebViewEmbeddedToolbarConfig.BuiltInItemKind.Done, title: "✕"
    )
);

webView.EmbeddedToolbar.ApplyConfig(config);
```

## Title Interactions

The built-in Title item supports two interactions that can be enabled via `TitleInteraction`:

### Tap to Scroll to Top

When enabled, tapping the title scrolls the web view content to the top of the page.

```csharp
var config = UniWebViewEmbeddedToolbarConfig.Default;
var titleItem = config.FindFirstBuiltInItem(
    UniWebViewEmbeddedToolbarConfig.BuiltInItemKind.Title
);
titleItem.Title = "My Page";
titleItem.TitleInteraction = new UniWebViewEmbeddedToolbarConfig.TitleInteraction {
    OnTap = UniWebViewEmbeddedToolbarConfig.TitleInteraction.TapAction.ScrollToTop
};

webView.EmbeddedToolbar.ApplyConfig(config);
```

### Long Press to Copy URL

When enabled, long-pressing the title copies the current page URL to the system clipboard and shows a brief toast message. You can customize the toast text.

```csharp
titleItem.TitleInteraction = new UniWebViewEmbeddedToolbarConfig.TitleInteraction {
    OnTap = UniWebViewEmbeddedToolbarConfig.TitleInteraction.TapAction.ScrollToTop,
    OnLongPress = UniWebViewEmbeddedToolbarConfig.TitleInteraction.LongPressAction.CopyUrl,
    CopyToastText = "URL copied!"
};
```

If `CopyToastText` is not set, the default toast text "URL copied" is shown.

## Intercepting Toolbar Actions

You can intercept any toolbar item action (both built-in and custom) before the native default behavior executes.
Use `RegisterOnEmbeddedToolbarItemAction` on your `UniWebView` instance:

```csharp
webView.RegisterOnEmbeddedToolbarItemAction((action) => {
    Debug.Log($"Toolbar item tapped: {action.Identifier}, gesture: {action.Gesture}");

    if (action.Identifier == UniWebViewEmbeddedToolbarConfig.BuiltInIdentifier.Done) {
        // Custom handling for the Done button.
        Debug.Log("User tapped Done — showing confirmation dialog instead.");
        return true; // Skip the native default (which closes the web view).
    }

    return false; // Let other items use their default behavior.
});
```

The `action` parameter provides:

- `Identifier`: The item's identifier string. Built-in items use `uwv.toolbar.*` prefixed identifiers (e.g., `uwv.toolbar.back`, `uwv.toolbar.done`).
- `Gesture`: The gesture type — `Tap` or `LongPress`. Long press is only used by the title item when `OnLongPress` is configured.
- `CopyToastText`: The toast text from the title's `TitleInteraction` config, if applicable.

Return `true` to mark the action as handled (skips native default). Return `false` to let the native default behavior proceed.

To stop receiving callbacks, call:

```csharp
webView.UnregisterOnEmbeddedToolbarItemAction();
```

## Platform Notes

- **iOS / Android**: The toolbar is a native view attached to the web view. Position (top/bottom) and max height are supported.
- **macOS (Unity Editor)**: The toolbar is displayed in the window's title bar. Position and max height settings are ignored. The toolbar automatically stretches to fill the available title bar width.

For full API details, see the [UniWebViewEmbeddedToolbar API Reference](/api/UniWebViewEmbeddedToolbar) and [UniWebViewEmbeddedToolbarConfig API Reference](/api/UniWebViewEmbeddedToolbarConfig).
