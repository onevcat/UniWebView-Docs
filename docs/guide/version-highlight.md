# Version Highlight

::: tip Upgrade Pricing
If you have purchased UniWebView 2 before, we offer a discount on upgrade. For users purchased 
UniWebView 2 from UniWebView Store, please visit our [home page](https://uniwebview.com/#prices) for more information.
For Unity Asset Store users, you could login with your Asset Store and visit [our product page](https://www.assetstore.unity3d.com/#!/content/92605) 
to find the Upgrade Price.
:::

UniWebView 3 is rewritten from scratch. It contains more than 150 major and minor improvements 
compared to its predecessor UniWebView 2. Here we will list a few of them to help you to 
get an overview about what is improved.

### Main Activity Free

On Android, UniWebView 2 requires its activity to be the main activity of your game, to get a workaround 
for some internal Unity focus bugs. It could be quite hard to modify your existing "AndroidManifest.xml" 
file, especially when you are already using some other third party activity as your main one. In UniWebView 3, 
we worked really hard to adopt to a new mechanism to avoid it. At the same time, we ensured the web view keeps 
fully functional.

UniWebView 3 is now a non-invasion solution on Android. The integration is never easier. There are no steps like 
resetting your main activity or recomping anymore. See our [Installation Guide](/latest/installation) to know how simple it could be!

### Modern Web View Component

UniWebView 3 is using the latest web view technology on both iOS and Android. 

On iOS, we are providing you a fast and clean browsing experience powered by `WKWebView`. 
The original `UIWebView` used in UniWebView 2 is marked as deprecated from iOS 8, which always takes more memory it needed
and has some annoying shortcomings. The new `WKWebView` will use its own process so it is much easier to keep everything 
in order. Additionally, the JavaScript underhood is mush faster and more powerful than it was.

On Andriod, the Chrome based `WebView` is adopted. It shares the same rendering engine and JavaScript engine with Chrome browser. 
It supports remote debugging, vibration API and even more in the new version of web view.

### Setting Position and Size based on Unity UI

In UniWebView, you need to set the positon and size of web view by calculating a set of inset from four sides of screen. 
It was useful but sometimes, it is hard to get the correct value, especially when you were dealing with multiple resolutions.

In UniWebView 3, we introduced a more intuitite way to set the position and size. It follows most popular mobile platforms to 
define a rect for the web view's frame. Now you do not have to calculate the insets anymore, but set the value directly.

The better thing is, multiple resulutions are supported now. If you are using Unity UI to create a responsive UI for your game, 
you are almost done. UniWebView now can refer to a UI element, get its position and size and then update its frame with the 
reference UI.

### API Redesigned

UniWebView 2 provided you a set of flexible APIs. In UniWebView 3, we did much better on API accuracy and naming convention 
stability.

In the previous version, some JavaScript APIs are not easy to use. After you execute a JavaScript, you have to wait for the event be 
raised and identify the invocation yourself. In UniWebView 3, all the JavaScript related APIs come with an `Action` parameter for 
callback. That means you could use a lambda expressions and interact with these APIs with no effort. We also added more events to APIs like 
`Show` or `Hide`, to help you take more accurate and refined control for your web view.

### Better Editor Support

Currently, we pop up a standalone web view in macOS Unity Editor. Back to the age of UniWebView 2, we only support to render the web view in 
the player tab. The old way is slow and difficult to interact with. Quite a few JavaScript features were not avaliable due to lack of web 
view aniamtion.

In UniWebView 3, by poping up a real web view, you now get a fully functional component when developing in Editor. It should improve your workflow and reduce the verifying effort drastically.

### Much More

As we mentioned at start, we have more than 150 improvements and fixes in the new version. You can check our guides and 
[API Documentation](/latest/api/overview) to know more. We strongly suggest you to upgrade to version 3 for a more 
stable web view. We believe it would be good to free you from the detail of web page browsing and focus to your game 
content. Hope you like UniWebView and it would be great if it could help you!
