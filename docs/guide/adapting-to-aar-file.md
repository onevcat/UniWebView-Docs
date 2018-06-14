# Adapting to AAR File

The latest UniWebView uses AAR library instead of Jar file. If you were using UniWebView 3.6.x or earlier, and want to upgrade to 3.7.0 or later, you may need to follow these simple steps below, to keep your project working fine.

1. Remove `UniWebView.jar` from `Assets/Plugins/Android`.
2. Revert changes in your `AndroidManifest.xml`:
     * If you are using UniWebView's `AndroidManifest.xml` from a previous version without any modification, you could just delete it.
     * If you followed previous [installation guide to merge](/guide/installation.html#uniwebview-3-6-x-and-earlier) your manifest file for UniWebView, you need to revert the changes. Most importantly, you need to remove the `<activity android:name="com.onevcat.uniwebview.UniWebViewFileChooserActivity" />` declaration.
3. Import the new package and add `UniWebView.aar` to you project.

