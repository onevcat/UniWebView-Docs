# UniWebView

<center>
![](images/logo.png)
</center>

> UniWebView is a modern web view component for mobile Unity3D games. Integrating web content to your games was never easier.

## What is UniWebView

UniWebView is a Unity 3D plugin for adding a web view component to your Unity 3D mobile games. UniWebView includes a set of abstract high level APIs in C#, which wrapped the native APIs of iOS and Android platforms. With UniWebView, you can have some behaviors like a browser into your games without knowing anything about native developement. It is very useful when you need to show an annoucement or notice, add a leader board for player rankings, or just display any web pages to your users.

## Supported Platforms

UniWebView supports running on iOS 9.0 or above, and Android 5.0 (API Level 21) or above. On iOS, UniWebView is using [`WKWebView`](https://developer.apple.com/reference/webkit/wkwebview) as the render engine. While on Android, [`WebView`](https://developer.android.com/reference/android/webkit/WebView.html) is used.

UniWebView also contains a Unity Editor support on macOS for debug purpose. You could bring up a standalone web view directly in the Play Mode of Unity Editor if you are development your game on a Mac.

> This Editor version is a full-features variety of mobile one. Although UniWebView is designed for platform, you could also use it in a standalone macOS game if you want.

## Version 3

UniWebView project was started in 2013. The original version of UniWebView supported Unity 4. In Unity 5, Unity team changed the method how native plugins work and there was no way to support both Unity 4 and 5 in a same plugin version. So we decided to have a major upgrade to version 2. After several years development, UniWebView 2 is quite stable now. However, the legacy code only supported old fashion (and deprecated) `UIWebView` on iOS, and we also had to consider back compatibility and use out-dated APIs for `WebView` too. 

We are not satisfied with this situation. The performance and code quality could be dramatically improved if we use the latest technology. Adding features and fixing issues would be much easier and faster too. That is why we decided to rewrite UniWebView from scratch. In version 3, we started again from 0 and redesigned almost all APIs. With the experience of past a few years of development, we have a chance to make good things better and bad design gone.

Version 3 is not compatible with 2. If you are upgrading from UniWebView 2, you may want to take a brief look at the [migration guide](migration-guide). Most concepts are similar but it might still take you a while to upgrade. We also recommend you to read our documentation to bring the potential power of UniWebView to your project.

> This documentation is only for version 3. Need to know more about version 2 and its future? See [this answer](/latest/faq?id=what-about-uniwebview-2).

## Next Step

If you are ready, follow the [Installation](/latest/installation) and subsequent guides to know basic usage of UniWebView.

Please feel free to browse this documentation site and UniWebView's [APIs](/latest/api.md). You can find more information on UniWebView's [official site](https://uniwebview.com) too.
