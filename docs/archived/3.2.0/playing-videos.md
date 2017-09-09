# Playing Videos

UniWebView supports playing HTML5 videos. You could embed your videos in 
the [`<video>` tag](https://www.w3schools.com/html/html5_video.asp) to play 
it in HTML. 

?> On Android, you need `android:hardwareAccelerated` set for the main activity 
to play videos. Please check the [Installation Guide](/archived/3.2.0/installation) if 
you have not done with it.

Autoplay is not enabled by default, even you contain an 
"**autoplay**" attribute in the video tag. To enable autoplay, you need to 
call `UniWebView.SetAllowAutoPlay(true)` before you create a web view.

By default, videos will be played full screen on iPhone or iPod devices. On Android 
or iPad devices with larger display, you could choose a inline way to play your videos.
But this behavior could also be changed by calling `UniWebView.SetAllowInlinePlay(true)`.

These settings (and some other similar static setup methods of `UniWebView`) works in a 
"pre-configuration" way. That is, the setting will not be applied to previous 
created web views.

UniWebView also supports to play videos from major video providing sites
 (such as YouTube and Vimeo) seamlessly. Some of the video providers also 
 provide JavaScript SDK/Tools to give to more control on the video playing. 
 Since UniWebView supports JavaScript, you should also be able to take use 
 of them to control your playback.

!> Note: Legacy flash-based videos are not and will nerver be supported in UniWebView.
