# Installation

!>  We strongly recommend that you perform a backup before importing UniWebView to your project. If you are using any [version control system](https://en.wikipedia.org/wiki/Version_control) (like Git or SVN), it should be definitely safe to continue.

#### Unity Asset Store

If you purchased UniWebView from Unity Asset Store, open the Asset Store window from **Window → Asset Store**. You could search for UniWebView 3 there, then download it and click the "Import" button.

#### UniWebView Store

Besides of Unity Asset Store, we also have our own store. After purchasing from our store, you could download the `uniwebview_x_y_z.unitypackage` file of UniWebView (`x_y_z` in the file name means the package version is `x.y.z`). Open your project in which you want to use UniWebView first, then double click the downloaded file to import it.

### Importing Package

No matter in which way you import UniWebView, Unity would prompt you with a window to confirm the importing files.

<img src="images/importing.png" data-rjs="2" />

There should be no conflicting for those files, unless you already have a `AndroidManifest.xml` in your project under `Assets/Plugins/Android`. If it shows a yellow warning mark for `AndroidManifest.xml`, you could uncheck it to keep your current version for now. We will describe how to modify the manifest file in [next section](/archived/3.1/installation?id=manifest-file).

> The files might not be the same as they were in the image above. You should always import everything under `Plugins` and `UniWebView` from package. When exporting the package by Unity's tools, there is a chance to contain some other files. It should be safe to ignore any files if they are under neither `Plugins` nor `UniWebView`.

### Manifest File

`AndroidManifest.xml` is used to describe some meta information for Android target. If your projece does not contain a manifest file before, the one you imported with UniWebView will be used. Otherwise, you should keep your original one and do some modification. Open the `Assets/Plugins/AndroidManifest.xml` file with your favorite text editor and follow the steps below:

1. UniWebView needs `hardwareAccelerated` to be `true` to have a good render performance and play videos. Find your current main activity (the one with `android.intent.action.MAIN` filter) and add `android:hardwareAccelerated="true"` in the `<activity>` tag if it does not exist yet. Here is an example of modified main activity:

  ```xml
  <activity android:name="com.unity3d.player.UnityPlayerActivity"
           android:label="@string/app_name"
           android:hardwareAccelerated="true">
           <!--Web page and video accelereate for UniWebView-->

     <intent-filter>
         <action android:name="android.intent.action.MAIN" />
         ...
     </intent-filter>
     ...
 </activity>
   ```

2. UniWebView needs an additional activity to open file chooser if you need to upload a photo from a web page. Add the `UniWebViewFileChooserActivity` declaration just above the `</application>` line:

  ```xml
      ...
      </activity>

      <!--Image file chooser activity for UniWebView-->
      <activity android:name="com.onevcat.uniwebview.UniWebViewFileChooserActivity" />
  </application>
  ```

3. Add permission for using Internet if you need to access web content. This is not needed if you only use UniWebView for local files. Add the `INTERNET` permission line just the next line below `</application>`:

  ```xml
  </application>
  
  <!--Access Internet for web content-->
  <uses-permission android:name="android.permission.INTERNET" />
  ```

4. Other permissions. Depending on your use case, you may need to add more permissions to the manifest file. For example, you may need `ACCESS_FINE_LOCATION` if you want to use location service in web view, or `WRITE_EXTERNAL_STORAGE` if you want to choose or capture a photo to upload (since a temporary file will be created in the disk).

!> You also need to add Android's Support Library v4 as a dependency if you need to upload an image. Please download the support-v4 package from [here](https://chromium.googlesource.com/android_tools/+/master/sdk/extras/android/m2repository/com/android/support/support-v4/24.1.1/support-v4-24.1.1.aar) or just find it (`support-v4-24.1.1.aar`) under your Android SDK extras folder. Then put it to "/Assets/Plugins/Android" folder. If you did not add it, a crash will happen when user trys to upload an image on Android. We strongly suggest you take a look at the [Uploading](/archived/3.1/uploading) documentation to get a full guide on how to support image uploading in UniWebView.

### Restarting Unity

You need to restart your Unity Editor to load UniWebView bundle for macOS Editor. Also remember to switch your build target in player setting to either iOS or Android, since UniWebView will only work on these two platforms.

### Next Step

Congratulations! You are prepared to use UniWebView in your project now. Please read [next chapter](/archived/3.1/using-prefab) to know how to use the simplest prefab way to show a web page.
