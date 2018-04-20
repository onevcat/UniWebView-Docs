# Transition

Transition effect in UniWebView is easy. We provide several visual transition effect you could use to show/hide your web view. You can also animate the position and size of web view on the screen.


## Show / Hide Transition

When you need to show or hide the web view, you call `Show()` or `Hide()` on it. These two methods accepts several parameters to define a better visual effect and natural transition experience. The full signatures of these methods are:

```csharp
bool Show(bool fade = false, UniWebViewTransitionEdge edge = UniWebViewTransitionEdge.None, 
          float duration = 0.4f, Action completionHandler = null)

bool Hide(bool fade = false, UniWebViewTransitionEdge edge = UniWebViewTransitionEdge.None,
          float duration = 0.4f, Action completionHandler = null)
```

By default, the transition is disabled and the `duration` is ignored. If you set either the `fade` to `true` or `edge` to a non-`UniWebViewTransitionEdge.None` value, the operation will happen with a transition animation.

`fade` will fade in or fade out the web view while show or hide, while `edge` will define the **from** or **to** edge while show or hide respectively. The edge transition is a modal presenting or dismissing animation. See the example below:

```csharp
webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
webView.Show(true, UniWebViewTransitionEdge.Bottom, 0.35f);

// Some time later
webView.Hide(true, UniWebViewTransitionEdge.Bottom, 0.35f);
```

The result of above code is:

<div>
<video class="video-player" src="/images/transition.mp4" controls="controls"></video>
</div>

::: warning NOTICE
You may noticed that there is a `bool` as return value of `Show` and `Hide` method. Only one transition is allowed at a time, if you are trying to initialize another transition while the previous is on, the new one will not start and the return value would be `false`.
:::

## Web View Animation

UniWebView also support to animate the web view freely when it is displayed. Use `AnimateTo` method and you could specify a frame as the destination frame. By using this method, you can also set `duration` and `delay` to the animation for a fine control.

```csharp
// Animate the web view from full screen to half screen:
webView.Frame = new Rect(0, 0, Screen.width, Screen.height);

var halfScreen = new Rect(0, 0, Screen.width, Screen.height / 2.0);

// The animation will last for 400ms and with 100ms delay:
webView.AnimateTo(halfScreen, 0.4f, 0.1f, ()=>{
    print("Animation finished!");
});
```

For more about transition and animation, read the [documentation for UniWebView](./api/uniwebview.md).