# FAQ

#### Can I render a texture from the webview in the game?

No, UniWebView is not designed for grabbing a page and rendering it to a texture in your game object. It is a view added above Unity's view, without interrupt Unity game. You can use it to show something like a game FAQ page, events notification or release note. You can set the size of webview so you can decide if the Unity game scene could be seen or not. But it is not and will not be a in-game texture render solution.

#### Can I put some Unity GUI/object above of UniWebView?

No, you can't. 

UniWebView is a layer from system and is added above of the whole Unity view. That means it is always floating over your Unity scene. You can never put your elements from Unity above of the webpage. You can only organize the layout of your Unity elements and the web view to make them looks good together. With the help of `ReferenceRectTransform`, it should be quite easy.

#### Which platforms could UniWebView work on?

UniWebView supports running on iOS 9.0 or above, and Android 5.0 (API Level 21) or above. On iOS, UniWebView is using [`WKWebView`](https://developer.apple.com/reference/webkit/wkwebview) as the render engine. While on Android, [`WebView`](https://developer.android.com/reference/android/webkit/WebView.html) is used.

UniWebView also contains Unity Editor support on macOS for debug purpose. You could bring up a standalone web view directly in the Play Mode of Unity Editor if you are development your game on a Mac. If you are working on a Windows PC, you can still build and use UniWebView on mobile devices, but you cannot see the result directly in the Windows Unity Editor.

> This Editor plugin is a full-features variety of mobile version. Although UniWebView is designed for platform, you could also put it in a standalone macOS game if you want.

#### Does this package support Unity Personal? Or it is only working in Unity Profession?

UniWebView can work well in all supported platforms with both Unity Personal and Profession. 

#### Is there a trial version?

No, we don't provide trial currently. That is mainly because that there is no good way to protect Unity package without being harm to using experience of our customers. Instead of a trial version, we promise a no reason refund if you decide not to use it in your project. Just send us your invoice number and mail address and we would issue a refund for you.

#### Where to purchase? How long will I get the free updates for it?

You can buy this package in both our digital store and Unity Asset Store. Please see our [official site](https://uniwebview.com/#prices) for more. Although you can get full support from either store, we suggest you purchase it from our digital store to get faster update versions.

You get all minor and patch updates for free until (but not including) the next major version. If there is quite huge change in either Unity or the system webview, we have to introduce breaking changes to maintain the pacakge usability and stability. At this situation, we will release a new major version for it.

#### What's the license type? Does the package contain all source code?

You can use UniWebView in all your projects with the same Unity ID exporting the final product. But if you need to use another Unity ID, you need to purchase anothe license.

All C# source code of the Unity side is included in the package. But the native side is distributed by binary and the source code (Objective-C for iOS and macOS, Java for Android) are not included. In case you need to extend UniWebView as your own requirement, we also provide a license to access to our main development repository. We are hosting this project and all its code in GitHub. With the source code license, your GitHub account will be added to our repo and you could access and modify the source code as you need. See our [official site](https://uniwebview.com/#prices) for more about it.

 You should observe the [EULA of Unity Asset Store](http://unity3d.com/company/legal/as_terms) you agreed when you register your Unity Asset Store account. That means you have no rights to reproduce, duplicate, copy, sell, trade or resell this package, even you have source access. If you need to redistribute your package containing UniWebView to other developers (that means you are developing a SDK or something else which does not orientate to final customers), please [contact us](https://onevcat.zendesk.com/hc/en-us/requests/new) for a **Limited Redistribution License** instead.
