# Loading Local Files

> UniWebView supports loading local HTML files from the StreamingAssets folder or persistent data path, with specific considerations for Android builds using "Split Application Binary."

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

If you are using "Split Application Binary" for Android build (OBB files), your local HTML files in the OBB bundle cannot be accessed directly by WebView. UniWebView provides an automated solution to handle this.

#### Before Unity 2021.2

If you are still using Unity 2021.1 or any earlier version, you can put your files to `Assets/Plugins/Android/assets/`
and then use the same way as you did for normal streaming assets resource to load it from the new location.

#### Unity 2021.2 and later (Automated Solution)

From Unity 2021.2, the Unity Editor prevents the existence of `Assets/Plugins/Android/assets/`. UniWebView now provides an automated solution:

1. **Configure Asset Folders**: Open **Preferences > UniWebView** (or **Edit > Project Settings > UniWebView** in Unity 2019.1+)
2. **Add Folders to Copy**: In the "Android Assets" section, add the folders you want to be accessible in OBB builds
3. **Build Normally**: When you export as Android Gradle Project, UniWebView will automatically copy the configured folders to the correct location

##### Example: Web Content Outside StreamingAssets

If you have web content in `Assets/WebContents/` (not in StreamingAssets):

```
Assets/
├── WebContents/
│   ├── index.html
│   ├── style.css
│   └── images/
│       └── logo.png
```

**Step 1: Configure UniWebView Settings**
- Open Preferences > UniWebView
- In "Android Assets" section, add: `WebContents`
- This tells UniWebView to copy this folder to Android assets during build

**Step 2: Load the Content**
```csharp
// After configuration, the files will be accessible at the configured path
var url = UniWebViewHelper.StreamingAssetURLForPath("WebContents/index.html");
webView.Load(url);

// This will resolve to "file:///android_asset/WebContents/index.html" on Android
// The folder will be automatically copied there during Gradle export
```

##### Example: Traditional StreamingAssets Approach

If your content is already in StreamingAssets:

```
Assets/
├── StreamingAssets/
│   └── WebContents/
│       ├── index.html
│       └── style.css
```

**Configuration**: Add `StreamingAssets/WebContents` to Android Assets
**Loading**:
```csharp
var url = UniWebViewHelper.StreamingAssetURLForPath("WebContents/index.html");
webView.Load(url);
```

##### Configuration for Multiple Folders

You can configure multiple folders from different locations:

```json
Android Assets: ["WebContents", "StreamingAssets/HTML", "MyPlugin/WebAssets"]
```

This will copy all specified folders to the Android assets directory, maintaining their relative paths.

##### Benefits

- ✅ **No Manual Copying**: Files are automatically copied during Gradle export
- ✅ **Flexible Organization**: Place web content anywhere in Assets folder
- ✅ **Error Prevention**: No risk of forgetting to copy files manually
- ✅ **Consistent Workflow**: Same build process for all developers

## From Persistent Data Path

Sometimes, you may want to download some HTML files to disk and then load them locally. One popular location to put the downloaded files would be the `Application.persistentDataPath`. If you are putting your files under this path, use `UniWebViewHelper.PersistentDataURLForPath` method to get the correct path:

```csharp
var url = UniWebViewHelper.PersistentDataURLForPath("www/index.html");
webView.Load(url);
```

Notice that You may also need to add external read permission to your Android manifest file since the `persistentDataPath` is usually a location on the SD card.
