# Loading Local Files

## From Game Bundle

You can load local HTML files through the web view if you put them to the [StreamingAssets folder](https://docs.unity3d.com/Manual/StreamingAssets.html) (`Assets/StreamingAssets/` folder in the Unity project).

There is a helper method `UniWebViewHelper.StreamingAssetURLForPath` to get the correct path on all platforms. By passing the relative path of your HTML file, you get a URL pointing to the page. Then load it with the `Load`.

For example, if you have a page under the path: `Assets/StreamingAssets/local_www/index.html`, you can load it with:

```csharp
var url = UniWebViewHelper.StreamingAssetURLForPath("local_www/index.html");
webView.Load(url);
```

All resources in the HTML file are also available if they are put in the correct place. Assume the content of "local_www/index.html" file is:

```html {4}
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <h1>Styled heading</h1>
  </body>
</html>
```

And if you have the "style.css" in the same folder:

```css
/* Assets/StreamingAssets/local_www/style.css */
h1 {
  color: red;
}
```

Then your style file can be loaded and the page is styled. It is the same for other resources, such as images and videos.

::: warning Resource Folder
On iOS and macOS, when you use the `Load` method to load a local page, by default, only the resources in the same folder are visible to your page.

If your resources are located in another folder, you could pass a `readAccessURL` parameter when you call `Load`. See the [API Reference](https://docs.uniwebview.com/api/#load) of this parameter for more.
:::

### Using "Split Application Binary"

If you are using "Split Application Binary" for Android build (OBB files), you should not put your local HTML files under **StreamingAssets** folder, which will be put to the OBB bundle and cannot be read directly.

#### Before Unity 2021.2

Instead, if you are still using Unity 2021.1 or any earlier version, you can put them to `Assets/Plugins/Android/assets/`
and then you use the same way as you did for normal streaming assets resource to load it from the new location.

#### Unity 2021.2 and later

From Unity 2021.2, the Unity Editor prevents the existing of `Assets/Plugins/Android/assets/`. Any file under that
folder would trigger a build error. There is very little UniWebView can do. As a workaround, you can export your game as an
Android Gradle Project first and then put your local files under the "unityLibrary/src/main/assets" folder in the exported project.
After building to APK from the exported project, the local files will be located in the "assets" folder in the APK bundle, where you can load them with the same method above.

## From Persistent Data Path

Sometimes, you may want to download some HTML files to disk and then load them locally. One popular location to put the downloaded files would be the `Application.persistentDataPath`. If you are putting your files under this path, use `UniWebViewHelper.PersistentDataURLForPath` method to get the correct path:

```csharp
var url = UniWebViewHelper.PersistentDataURLForPath("www/index.html");
webView.Load(url);
```

Notice that You may also need to add external read permission to your Android manifest file since the `persistentDataPath` is usually a location on the SD card.
