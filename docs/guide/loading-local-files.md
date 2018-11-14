# Loading Local Files

::: warning NOTICE
Note: Loading local files in Unity Editor will not on macOS 10.10 or below. You need at least macOS 10.11 to display local pages correctly.
:::

## From Game Bundle

You could load local HTML files through web view if you put them to the [StreamingAssets folder](https://docs.unity3d.com/Manual/StreamingAssets.html). The StreamingAssets folder is a folder directly under your "Assets" folder, with "StreamingAssets" as its name. We have a helper method `UniWebViewHelper.StreamingAssetURLForPath` to help you get the correct path on all platforms. You could pass the relative path of your HTML file to this method and load it with `Load` method of the web view.

Say you have a page with path as: `Assets/StreamingAssets/local_www/index.html`, you could load it with this code:

```csharp
var url = UniWebViewHelper.StreamingAssetURLForPath("local_www/index.html");
webView.Load(url);
```

All resources in the HTML file are also available if they are put in the correct place. For example, you have this code in the "local_www/index.html" file we just mentioned:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <h1>Styled heading</h1>
  </body>
</html>
```

And if you have the "style.css" in the same folder:

```css
/* This file is at "Assets/StreamingAssets/local_www/style.css" */
h1   {color: red;}
```

Then your style file would be loaded and the page could be styled. It is the same for other resources like images.

> On iOS, when you use `Load` method to load a local page, by default, only the resources in the same folder are visible to your page.
> If your resources are located to another folder (typically it should be a parent folder of your loading page), you could pass a `readAccessURL`
> parameter when you call `Load`. See the [API reference](https://docs.uniwebview.com/api/#load) of this parameter for more.

### Using "Split Application Binary"

If you are using "Split Application Binary" for Android build (obb files), you should not put your local HTML files under **StreamingAssets** folder. Instead, you need to put them to `Assets/Plugins/Android/assets/` and then you can use the same way as you did for normal streaming assets resource to load it from the new location.

## From Persistent Data Path

Sometimes, you may want to download some HTML files to disk and then load them locally. One popular location to put the downloaded files would be the `Application.persistentDataPath`. If you are putting your files under this path, use `UniWebViewHelper.PersistentDataURLForPath` method to get the correct path:

```csharp
var url = UniWebViewHelper.PersistentDataURLForPath("www/index.html");
webView.Load(url);
```

Notice that You may also need to add external read permission to your Android manifest file since the `persistentDataPath` is usually a location on SD card.
