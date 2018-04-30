# Playing Videos

UniWebView supports playing HTML5 videos. You could embed your videos in the [`<video>` tag](https://www.w3schools.com/html/html5_video.asp) to play it in HTML. 

::: warning IMPORTANT
On Android, you need `android:hardwareAccelerated` set for the main activity to play videos. Please check the [Installation Guide](./installation.md) if you have not done with it.
:::

### Auto Play & Inline Play

Autoplay is not enabled by default, even you contain an "**autoplay**" attribute in the video tag. To enable autoplay, you need to call `UniWebView.SetAllowAutoPlay(true)` before you create a web view.

By default, videos will be played full screen on iPhone or iPod devices. On Android or iPad devices with a larger display, you could choose an inline way to play your videos. But this behavior could also be changed by calling `UniWebView.SetAllowInlinePlay(true)`.

These settings (and some other similar static setup methods of `UniWebView`) works in a "pre-configuration" way. That is, the setting will not be applied to previously created web views.

UniWebView also supports to play videos from major video providing sites (such as YouTube and Vimeo) seamlessly. Some of the video providers also provide JavaScript SDK/Tools to give more control on the video playing. Since UniWebView supports JavaScript, you should also be able to make use of them to control your playback.

::: danger
Legacy flash-based videos are not and will never be supported in UniWebView.
:::
