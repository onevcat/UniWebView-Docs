# Loading Local Files

You could load local HTML files through web view if you put them to the [StreamingAssets folder](https://docs.unity3d.com/Manual/StreamingAssets.html). The StreamingAssets folder is a folder directly under your "Assets" folder, with "StreamingAssets" as its name. We have a helper method `UniWebViewHelper.StreamingAssetURLForPath` to help you get correct path in all platforms. You could pass the relative path of your HTML file to this method and load it with `Load` method of web view.

Say you have a page with path as: `Assets/StreamingAssets/local_www/index.html`, you could load it with this code:

```csharp
var url = UniWebViewHelper.StreamingAssetURLForPath("local_www/index.html");
webView.Load(url);
```

All resources in the HTML file are also available if they are put at correct place. For example, you have this code in the "local_www/index.html" file we just mentioned:

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

Then your style file would be loadded and the page could be styled. It is the same for other resources like images.

#### Android apps Using "Split Application Binary"

If you are using "Split Application Binary" for Android build (obb files), you should not put your local html files under **StreamingAssets** folder. Instead, you need to put them to `Assets/Plugins/Android/assets/` and then you can use the same way as you did for normal streaming assets resource to load it from the new location.
