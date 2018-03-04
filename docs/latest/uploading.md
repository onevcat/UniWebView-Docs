# Uploading

UniWebView supports uploading files from disk of your device or from a cloud service to web site.

To show a upload field, use the stardard input tag with proper type:

```html
<input type="file" name="filename" accept="image/*">
```

When user click the select file button, UniWebView will prompt the user from where they want to choose a file.
If you specified the "accept" to `image/*` as the sample above, only photo sources and image files will be available. 
You can also change the "accept" type to a wider `*/*`, which will cause all types of files be choosable. 

### Additional setup on iOS

On iOS, if you just want let your user to upload images from photo library, it should already work without any effort. However, if you want to let users to upload images from cameras, you need to set [NSCameraUsageDescription](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html#//apple_ref/doc/uid/TP40009251-SW24) in your Info.plist file in the exported Xcode project, otherwise your app would crash when users choose to take photo or video by camera.

### Additional setup on Android

1. Please make sure you have added `UniWebViewFileChooserActivity` into your "AndroidManifest.xml" file. You should have already done that if you followed the [Installation Guide](/latest/installation) when you import UniWebView into your project. Otherwise, please refer to that guide and modify the manifest file.

2. You need to add `WRITE_EXTERNAL_STORAGE` permission to the manifest file. File uploading on Android needs to create a temporary file on disk so UniWebView needs the external storage writing permission for that. Please make sure the following declaration is in your manifest file, just after the closing `</application>` tag:

    ```xml
    </application>

    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    ```

Now you should be able to choose an image from either camera or photo library, then upload it to your server.
