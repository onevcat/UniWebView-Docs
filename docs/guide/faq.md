---
sidebarDepth: 0
---

# FAQ

## Can I render a texture from the webview in the game?

No, UniWebView is not designed for grabbing a page and rendering it to a texture in your game object. It is a view added above Unity's view, without interrupting the Unity game. You can use it to show something like a game FAQ page, events notification or release note. You can set the size of webview so you can decide if the Unity game scene can be seen or not, but it is not and will not be an in-game texture render solution.

## Can I put some Unity GUI/object above of UniWebView?

No, you can't.

UniWebView is a layer of the system UI and is added above of the whole Unity view. That means it is always floating over your Unity scene. You can never put your elements from Unity above of the webpage. You can only organize the layout of your Unity elements and the web view to make them look good together. With the help of `ReferenceRectTransform`, it should be quite easy.

## Which platforms could UniWebView work on?

UniWebView supports running on **iOS 9.0 or above, and Android 5.0 (API Level 21) or above**. On iOS, UniWebView is using [`WKWebView`](https://developer.apple.com/reference/webkit/wkwebview) as the render engine. While on Android, [`WebView`](https://developer.android.com/reference/android/webkit/WebView.html) is used.

UniWebView also contains Unity Editor support on macOS for debug purpose. You could bring up a standalone web view directly in the Play Mode of Unity Editor if you are developing your game on a Mac. If you are working on a Windows PC, you can still build and use UniWebView on mobile devices, but you cannot see the result directly in the Windows Unity Editor.

> This Editor plugin is a full-featured mobile version. Although UniWebView is designed for mobile platforms, you could also put it in a standalone macOS game if you want.

## Sometimes the session is not kept on iOS.

On iOS, the web view is running in another self-managed process. It always takes some time (typically several seconds) to synchronize your cookie/session to the cookie storage. So if you destroy the web view too soon before the storage could be synced, the cookie/session information might be lost. This behavior is more likely a limitation of `WKWebView` on the iOS system.

## I have a performance issue, the page is loading/running laggy.

UniWebView is a wrapper of the web view components on iOS or Android. So you can expect the similar performance for your page when they are running with UniWebView against when running with `WKWebView` on iOS or `WebView` on Android. However, please remember you are displaying the web content inside Unity, which is also taking a lot of resource to run.

As a result, it is not surprising that your web page could be slower than normal when displaying or scrolling, especially if you have heavy tasks running in your Unity game. If you hit a performance issue in the web view, we suggest you can try below:

1. Turn off all the cameras in your game, if the game scene is below the web view and invisible. It will reduce a lot of rendering pressure and the system can focus on rendering the web content instead.
2. Stop all unnecessary scripts in your scene, especially those contain heavy logic inside `Update`, `FixedUpdate` or `LateUpdate`.
3. Unload and release the unused resource as much as possible.
4. If possible, try to create a clean and new scene to display the web view.

Usually, the performance of the web view component on system is also improving with the new system version releasing. For example, we can observe ~50% speed up from a web view on Android 9.0, compared to Android 5.0. Changing your deploy target of your app is also an important way to improve the performance.

## Does this package support Unity Personal or does it only work in Unity Professional?

UniWebView can work well on all supported platforms with both Unity Personal and Profession.

## Is there a trial version?

No, we don't provide a trial currently. That is mainly because there is no good way to protect a Unity package without harming the experience of our customers. Instead of a trial version, we promise a no-reason refund if you decide not to use it in your project. Just send us your invoice number and mail address and we will issue a refund for you.

## Where to purchase? How long will I get the free updates for it?

You can buy this package in both our digital store and the Unity Asset Store. Please see our [official site](https://uniwebview.com/#prices) for more. Although you can get full support from either store, we suggest you purchase it from our digital store to get updated versions more quickly.

You get all minor and patch updates for free until (but not including) the next major version. If there is quite a huge change in either Unity or the system webview, we have to introduce breaking changes to maintain the package usability and stability. When this occurs, we will release a new major version.

## What's the license type? Does the package contain all source code?

You can use UniWebView in all your projects with the same Unity ID exporting the final product. But if you need to use another Unity ID, you need to purchase another license.

All C# source code of the Unity side is included in the package. But the native side is only distributed in binary format. The source code (Objective-C for iOS and macOS, Java for Android) are not included in asset store package. If you need the native side source code, we provide a Source Access for our main development repository. We host this project and all its code on GitHub. With the Source Access License, your GitHub account will be added to our repository and you can access or modify the source code as you need.

You should observe the [EULA of Unity Asset Store](https://unity3d.com/company/legal/as_terms) you agreed to when you registered your Unity Asset Store account. That means you have no rights to reproduce, duplicate, copy, sell, trade or resell the package, even if you have Source Access License. But by purchasing the Source Access, you will also have a **Limited Redistribution License**. It allows you to redistribute your own package with UniWebView as a dependency to other developers (that means you are developing an SDK or something else which does not target for "end users", but for other developers). In this case, you can redistribute UniWebView in binary format to third party developers. The detail of the **Source Access License** is provided as below:

> - You are permitted to use the source code in this repository as many projects as you want, if these projects are owned by the same
>   person or organization made the purchase.
> - You are permitted to modify the source code, compile your own version and use the recompiled version in as many projects as
>   you want, if these projects are owned by the same person or organization made the purchase.
> - The source code and repository is for your own use only. You are NOT permitted to redistribute or share the repository without prior
>   authorization.
> - You are permitted to redistribute the UniWebView package which contains a built version for native code to third party developers. However, they do not
>   grant the same Source Access License. They are not permitted to redistribute the package again. Only using UniWebView in the enclosure of your product is
>   permitted.
>
> All code and assets provided in this repository are provided on an “as is” basis, without warranty of any kind, express or implied,
> including but not limited to the warranties of merchantability, fitness for a particular purpose and non-infringement. In no
> event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of
> contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.

Feel free to [contact us](https://onevcat.zendesk.com/hc/en-us/requests/new) if you have any question on it. We are glad to help.
