# Version Highlight

::: tip Upgrade Pricing
If you have purchased UniWebView 3 before, we offer an upgrading discount.

For users:

- Purchased from our Gumroad Store - [Submit a ticket](https://onevcat.atlassian.net/servicedesk/customer/portal/2/group/2/create/10011) with your purchasing Email and we will send a coupon back.
- Purchased from Unity Asset Store - Sign in to Asset Store and visit [our product page](https://assetstore.unity.com/packages/slug/175993)
  to find the Upgrade Price.
  :::

UniWebView 4 contains huge improvement and lots of fixes based on a rewritten structure compared to its predecessor UniWebView 3.
Here we will list a few of them to help you to get an overview about what is improved.

### Safe Browsing Mode

Safe Browsing Mode is an **out-of-the-box solution** to show the web page as it is in the browser. It
wraps [SFSafariViewController](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller) on iOS
and [Custom Tabs](https://developers.google.com/web/android/custom-tabs) on Android.

By adopting to Safe Browsing Mode, you can get a zero-configuration web browsing experience, with sharing cookies and
certain credential information with the system browsers. Some platform features, such as Apple Pay or Google Sign-In,
also require the Safe Browsing Mode to work properly.

To know more about it, check the [Safe Browsing Mode](./safe-browsing.md) guide.

### Customizable Toolbar

On iOS, the built-in toolbar is an important component for navigating. It is now fully customizable: text and color of
the buttons, background color of the toolbar, and the state of the navigating buttons. It helps you create a better style
of web browsing, matching your game design and providing a better immersive experience.

To know more about it, check the [Built-in Toolbar](./built-in-toolbar.md) guide.

### Non-injection Integration

From Unity 2020.1, Unity changed its way of handling native tap events. It causes some problems in UniWebView 3, which was
using a more invasion way to integrate to Unity on Android. In UniWebView 4, we rewrote the whole Android native part
from scratch, to achieve the least affect to the original Unity scene.

This helps us to fix a few bugs that we cannot get work around in earlier versions, including:

- The soft keyboard is not overlapping on the text fields in the web view anymore.
- Unity's setting of immersive mode and status bars is respected and no flickering.
- You can click through from the outside of web view in Unity 2020.1 now. (Everything works as expected in earlier Unity versions.)
- Focus can be switched between multiple web views now.
- ...

Besides of these, some overheads can be also removed now, which helps to boost the performance by 10%~20% when rendering
a complex page.

### Less Permissions

Android system is keeping introduces a more [reasonable](https://developer.android.com/guide/topics/permissions/overview) [permission model](https://developer.android.com/about/versions/10/privacy/changes). It gives us a chance to look back how UniWebView handles permissions.

UniWebView 3 requires the external write permission on Android to create some temporary files before uploading pictures.
With the new disk access permission model in modern Android systems, it is not necessary any more in version 4. We also
follows the best practice of permission request, to help your users start play your game as soon as possible. Now you can
feel free to use the latest Android version as the target API Level.

### Post Gradle Build

Thanks to the [Gradle build system](https://gradle.org) which Unity started to fully support from 2018.3, UniWebView now uses
it to configure your exported project. Instead of manipulating `AndroidManifest.xml` or `build.gradle` files yourself, now
you can find the "UniWebView" tab in Unity's Preference panel (`Cmd+,`) to setup necessary permissions.

UniWebView also use the post-build script to add dependencies. Integrating UniWebView to your project was never easier.

### Much More

Please check other guides in the side bar and the [API Documentation](/latest/api/overview) to know more about UniWebView.
We strongly suggest you upgrade to the latest version for a more powerful and stable web view component.

You can find other recent changes and all release logs in the [Release Note](../release-note) page.
