---
sidebarDepth: 0
---

# FAQ

[[toc]]

## Can I put some Unity GUI/object above of UniWebView?

By default, the UniWebView is a layer of the system UI and is added above the whole Unity view. You can never put your
elements from Unity above the native web page.

However, you can **render the web page to a texture** and use it in your 3D world. In this way, it is possible to put Unity
elements above the web view. But it comes with some limitations, such as not interactive and no video rendering.
See the [Render as Texture](/guide/render-as-texture.md) guide for more details.

## I cannot build for Android after importing UniWebView

We prepared a [Trouble Shooting guide](./trouble-shooting.md) for this issue. Please check and follow the Android Section there to see if it helps.

## The page does not load on Android but shows "net::ERR_CLEARTEXT_NOT_PERMITTED".

From Android 9, all plain HTTP traffic is not permitted by default for security. You can find detail on this topic in this [Android documentation page](https://developer.android.com/training/articles/security-config).

Developers are encouraged to secure traffic only, such as HTTPS. Hosting all of your content under a site with HTTPS enabled is the best solution. However, if that is not possible for you yet, you can enable the **"Uses Cleartext Traffic"** option in UniWebView's preference.

You can find that option under the "UniWebView" tab of Unity's Preference Panel. Follow [the installation guide](installation.md#importing-package) if you are not sure where it is.

## I encountered "net::ERR_UNKNOWN_URL_SCHEME" when opening an app link on Android.

UniWebView is already trying to bring up an intent (trying to open a third-party app if a custom scheme URL is received) internally.
But UniWebView has to use the [`queryIntentActivities` method](https://developer.android.com/reference/kotlin/android/content/pm/PackageManager#queryintentactivities)
to check if the target app exists before opening it.

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

UniWebView supports running on:

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

## Does UniWebView collect any privacy data? How to fill out the Apple Privacy Declaration?

UniWebView does not collect any user privacy information, nor does it use any of the privacy-related APIs listed in the Apple Privacy Manifest document. Therefore, you can completely ignore the UniWebView part when filling out Apple's privacy declaration.

## Does this package support Unity Personal or does it only work in Unity Professional?

UniWebView can work well on all supported platforms with both Unity Personal and Profession.

## Is there a trial version?

No, we don't provide a trial currently. That is mainly because there is no good way to protect a Unity package without harming the experience of our customers. Instead of a trial version, we promise a no-reason refund if you decide not to use it in your project. If you purchased in Unity Asset Store, you can request a refund in your Order History. If you purchased from our Gumroad Store, just send us your invoice number and mail address and we will issue a refund for you.

## What's the license type?

You can use UniWebView in all your projects with the same Unity ID exporting the final product. But if you need to use another Unity ID, you need to purchase another license.

You should observe the [EULA of Unity Asset Store](https://unity3d.com/company/legal/as_terms) you agreed to when you registered your Unity Asset Store account. That means you have no right to reproduce, duplicate, copy, sell, trade or resell the package.

## Can I get the source code?

All C# source code for the Unity side is included in the package. However, the native side is only distributed in binary format. The source code (Objective-C for iOS and macOS, Kotlin for Android) is not included in the asset store package.

If you need access to the native side source code, we offer a **Source Access License** for our main development repository. We host this project and all its code on GitHub. With the Source Access License, your GitHub account will be added to our repository, allowing you to access or modify the source code as needed. To purchase a Source Access License, please check the [pricing on our website](https://uniwebview.com/#prices).

## How long will I get the free updates for it?

You can purchase this package from both our digital store and the Unity Asset Store. Please visit our [official site](https://uniwebview.com/#prices) for more information. While you can receive full support from either store, we recommend buying it from our digital store to receive quicker updates.

You will receive all minor and patch updates for free until the next major version (excluding the major version itself). In the event of significant changes in Unity or the system webview, we may need to introduce breaking changes and maintain (or even re-create) the package for improved usability and stability. When this happens, we will release a new major version.

The Source Access License includes free lifetime upgrades, even for major version updates.

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
