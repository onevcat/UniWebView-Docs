# Uploading

UniWebView supports uploading files from the disk of your device or from a cloud service to your website.

To show an upload field, use the standard input tag with proper type:

```html
<input type="file" name="filename" accept="image/*" />
```

When the user clicks the select file button, UniWebView will prompt the user from where they want to choose a file.
If you specified the "accept" to `image/*` as the sample above, only photo sources and image files will be available.
You can also change the "accept" type to a wider `*/*`, which will cause all types of files be choosable.

::: warning NOTICE
Additional steps are required for allowing uploading in some cases, please keep reading below to know more about it.
:::

### Additional Setup

On iOS, if you just want your user upload images from the photo library, it should already work without any effort. However, if you want to let users upload images from cameras, you need to set [NSCameraUsageDescription](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW24) in your Info.plist file. Otherwise, your app would crash when users choose to take photos or videos with the camera.

::: tip Apple-specific setup
You can set the `NSCameraUsageDescription` key from Unity's player settings panel. Check [Unity documentation](https://docs.unity3d.com/Manual/PlayerSettingsiOS-Other.html#Config-Apple) for detail.
:::
