---
sidebarDepth: 0
---

# FAQ

[[toc]]

## Can I put some Unity GUI/object above of UniWebView?

No, you can't.

UniWebView is a layer of the system UI and is added above of the whole Unity view. That means it is always floating over your Unity scene. You can never put your elements from Unity above of the web page. However, you can organize the layout of your Unity elements and the web view to make them look good together. With the help of `ReferenceRectTransform`, it should be quite easy. Please check the [Position and Size](./position-and-size.md) guide for detail.

## Can I render web view as an in-game texture?

A typical use of UniWebView is to show something like a game FAQ page, events notification or release note. You can set the size of webview, so you can decide if the Unity game scene can be seen or not, meanwhile keeping interaction on the web view (links or buttons).

Although it is not designed as an in-game texture render solution, if you do not require your web view to be able to interact with, but just for a purely display purpose, you can use the [`CaptureSnapshot`](/api/#capturesnapshot) method to get a static image of the web view, then render it as a Unity texture on your game object.

## I cannot build for Android after importing UniWebView

In most cases, it might be some errors saying "duplicate class" when exporting for Android. It happens if you have another package already adding the same package UniWebView requires.

UniWebView needs Kotlin and Android X Browser packages as dependencies. By default, UniWebView will detect the Gradle file and add them automatically.
However, if any other package in your project is already adding the same libraries in an undetectable way (such as embedding them as a part of the library file, or downloading the duplicated package into "Plugins/Android" folder), UniWebView will fail to detect them and
add duplicated packages.

You can try:

1. If you have an error saying "duplicate class ... androidx.browser", turn off "Adds Android Browser" option in the Preference Panel, to let UniWebView skip adding it again and use the one already in your project.
2. If you have an error related to "jetified-androidx" packages, turn off "Enable Jetifier".
3. If you have an error related to "kotlin", turn off "Adds Kotlin".
4. Then do a Clean Build to make sure the old packages and settings are removed. You can find the Clean Build action in the drop-down Build button in Unity's Build Settings panel.

For more detail, please check the [Installation - Optional Steps](installation.md#importing-package).

## The page does not load on Android but shows "net::ERR_CLEARTEXT_NOT_PERMITTED".

From Android 9, all plain HTTP traffic is not permitted by default for security. You can find detail on this topic in this [Android documentation page](https://developer.android.com/training/articles/security-config).

Developers are encouraged to secure traffic only, such as HTTPS. Hosting all of your content under a site with HTTPS enabled is the best solution. However, if that is not possible for you yet, you can enable the **"Uses Cleartext Traffic"** option in UniWebView's preference.

You can find that option under the "UniWebView" tab of Unity's Preference Panel. Follow [the installation guide](installation.md#importing-package) if you are not sure where it is.

## I encountered "net::ERR_UNKNOWN_URL_SCHEME" when opening an app link on Android.

UniWebView is already trying to bring up an intent (trying to open a third-party app if a custom scheme URL is received) internally.
But UniWebView has to use the [`queryIntentActivities` method](https://developer.android.com/reference/kotlin/android/content/pm/PackageManager#queryintentactivities)
to check if the target app is existing before opening it.

It worked perfectly without any modification if you are using a Target API Level before Android 11 (Level 31) or on devices with lower system versions.
But from API Level 31, you have to add the related query to the Android manifest file to allow this querying work. For more details, I suggest you check
the [Package visibility filtering on Android](https://developer.android.com/training/basics/intents/package-visibility) documentation and try to add the
target package names you need to open to the `<queries>` tag to your Android Manifest file, then try again to see if it goes fine.

## I encountered "could not reparse object file in bitcode bundle: 'Invalid bitcode version" when archiving the iOS app in Xcode.

Please try to disable the BitCode in your Xcode project. In your exported project, select "Unity-iPhone" project file in the left Project navigator panel.
In the editor area on right, select "Unity-iPhone" under the "PROJECT" section (be noted, do not select the "Unity-iPhone" under "TARGETS" section),
then in the "Build Settings" tab, search for "Enable Bitcode" item and change its value to "No".

> From Xcode 14, BitCode is no longer required or supported. UniWebView will also remove the support of BitCode eventually.

## Which platforms could UniWebView work on?

UniWebView v4 supports running on:

- **Unity 2020.1** or above
- **iOS 9.0** or above
- **Android 5.0** (API Level 21) or above

UniWebView also contains Unity Editor support on macOS for debug purposes. If you are working on a Windows PC, you can still build and use UniWebView on mobile devices, but you cannot see the result directly in the Windows Unity Editor.

## Sometimes the web page session is not kept on iOS.

On iOS, the web view is running in another self-managed process. It always takes some time (typically several seconds) to synchronize your cookie/session to the cookie storage. So if you destroy the web view too soon before the storage could be synced, the cookie/session information might be lost. This behavior is more likely a limitation of `WKWebView` on the iOS system.

## I have a performance issue, the page is loading/running laggy.

UniWebView is a wrapper of the web view components on iOS or Android. So you can expect similar performance for your page when they are running with UniWebView against when running with `WKWebView` on iOS or `WebView` on Android. However, please remember you are displaying the web content inside Unity, which is also taking a lot of resources to run.

Due to these facts, it is not surprising that your web page might be slower than normal, especially if you have heavy tasks running in your Unity game. If you hit a performance issue in the web view, we suggest you can try below:

1. Turn off all cameras in your game whenever possible (for example, if the game scene is below the web view and invisible). It reduces a lot of rendering pressure and the system can focus on rendering the web content instead.
2. Stop all unnecessary scripts in your scene, especially those contain heavy logic inside `Update`, `FixedUpdate` or `LateUpdate`.
3. Unload and release the unused resource as much as possible.
4. If possible, try to create a clean and new scene to display the web view.
5. If possible, choose to use [Safe Browsing Mode](./safe-browsing.md) instead of a general-purpose web view.

Usually, the performance of the web view component shipped on the system is also improving with the new system version. For example, we can observe about 50% boost from a web view on Android 9.0, compared to Android 5.0. Changing the deploy target of your app is also an important way to improve the performance.

## Does this package support Unity Personal or does it only work in Unity Professional?

UniWebView can work well on all supported platforms with both Unity Personal and Profession.

## Is there a trial version?

No, we don't provide a trial currently. That is mainly because there is no good way to protect a Unity package without harming the experience of our customers. Instead of a trial version, we promise a no-reason refund if you decide not to use it in your project. Just send us your invoice number and mail address and we will issue a refund for you.

## What's the license type?

You can use UniWebView in all your projects with the same Unity ID exporting the final product. But if you need to use another Unity ID, you need to purchase another license.

You should observe the [EULA of Unity Asset Store](https://unity3d.com/company/legal/as_terms) you agreed to when you registered your Unity Asset Store account. That means you have no right to reproduce, duplicate, copy, sell, trade or resell the package.

## Can I get the source code?

All C# source code of the Unity side is included in the package. But the native side is only distributed in binary format. The source code (Objective-C for iOS and macOS, Kotlin for Android) are not included in the asset store package.

If you need the native side source code, we provide a **Source Access License** for our main development repository. We host this project and all its code on GitHub. With the Source Access License, your GitHub account will be added to our repository and you can access or modify the source code as you need. To purchase a Source Access License, check the [price on our website](https://uniwebview.com/#prices).

## How long will I get the free updates for it?

You can buy this package in both our digital store and the Unity Asset Store. Please see our [official site](https://uniwebview.com/#prices) for more. Although you can get full support from either store, we suggest you purchase it from our digital store to get updated versions more quickly.

You get all minor and patch updates for free until (but not including) the next major version. If there is huge changes in either Unity or the system webview, we might have to introduce breaking changes and maintain (or even re-create) the package for usability and stability. When this occurs, we will release a new major version.

The Source Access License life-time upgrades for free, even for major version upgrades.

## Can I embed UniWebView in my own assets?

You cannot do that under the standard [EULA of Unity Asset Store](https://unity3d.com/company/legal/as_terms) term. But by purchasing the Source Access License, you also get a so-called **Limited Redistribution License**. It allows you to redistribute your own package with UniWebView as a dependency to other developers (or say, you are developing an SDK or something else which does not target to the "end users", but to other developers). In this case, you can redistribute UniWebView in **binary format** to third-party developers.

The detail of the **Source Access License** is provided as below:

> - You are permitted to use the source code in this repository as many projects as you want. But these projects should be owned by the same
>   person or organization made the purchase.
> - You are permitted to modify the source code, compile your own version and use the recompiled version in as many projects as
>   you want, if these projects are owned by the same person or organization made the purchase.
> - The source code and repository is for your own use only. You are NOT permitted to redistribute or share the repository without prior
>   authorization.
> - You are permitted to redistribute the UniWebView package which contains a built version for native code to third-party developers. However, they do not
>   grant the same Source Access License. They are not permitted to redistribute the package again. Only using UniWebView in the enclosure of your product is
>   permitted.
>
> All code and assets provided in this repository are provided on an “as is” basis, without warranty of any kind, express or implied,
> including but not limited to the warranties of merchantability, fitness for a particular purpose and non-infringement. In no
> event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of
> contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.

Feel free to [contact us](https://onevcat.atlassian.net/servicedesk/customer/portal/2/group/2/create/10011) if you have any question on it. We are glad to help.
