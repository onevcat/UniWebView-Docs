# Playing Videos

UniWebView supports playing HTML5 videos. You could embed your videos in the [`<video>` tag](https://www.w3schools.com/html/html5_video.asp) to play it in HTML.

For most video host sites (such as YouTube or Vimeo), video playback should work out-of-the-box, including all controls and full-screen support. Some of the video providers also provide JavaScript SDK/Tools to give more control on the video playing. Since UniWebView supports JavaScript, you should also be able to make use of them to control your playback.

If you want more advanced features like auto play or inline play, you need some additional steps.

### Auto Play

When an `autoplay` attribute is in the video tag, the video is expected to be played automatically when the page is opened:

```html {1}
<video autoplay>
  <source src="movie.mp4" type="video/mp4" />
</video>
```

But in web view, the auto play is not enabled by default. To enable auto play feature, call `UniWebView.SetAllowAutoPlay(true)` before you create a web view.

### Inline Play

By default, videos will be played full screen on iPhone or iPod devices. On Android or iPad devices with a larger display, you could choose an inline way to play your videos. But this behavior could also be changed by calling `UniWebView.SetAllowInlinePlay(true)`.

These settings (and some other similar static setup methods of `UniWebView`) works in a "pre-configuration" way. That is, the setting will not be applied to previously created web views.

---

::: danger
Legacy flash-based videos are not and will never be supported in UniWebView.
:::
