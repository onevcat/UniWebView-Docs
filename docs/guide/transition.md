# Transition

The transition effect in UniWebView is easy. We provide several built-in show/hide visual transition effects. You can also animate the position and size of web view on the screen.

## Show / Hide Transition

`Show` and `Hide` methods accept several parameters to define a better visual effect and natural transition experience. The full signatures (and their default values) of these methods are:

```csharp
bool Show(
    bool fade = false,
    UniWebViewTransitionEdge edge = UniWebViewTransitionEdge.None,
    float duration = 0.4f,
    Action completionHandler = null
)

bool Hide(
    bool fade = false,
    UniWebViewTransitionEdge edge = UniWebViewTransitionEdge.None,
    float duration = 0.4f,
    Action completionHandler = null
)
```

By default, if no parameters are given when called, the `Show` and `Hide` happens without animation. If you set either the `fade` to `true` or the `edge` to any value except for `UniWebViewTransitionEdge.None`, there will be a transition animation.

- `fade` - Fades in or out the web view while show or hide.
- `edge` - Defines the **show from** or **hide to** edge. The edge transition is a modal presenting or dismissing animation.

These sample code below:

```csharp
webView.Frame = new Rect(0, 0, Screen.width, Screen.height);
webView.Show(true, UniWebViewTransitionEdge.Bottom, 0.35f);

// Later
webView.Hide(true, UniWebViewTransitionEdge.Bottom, 0.35f);
```

produces the result in the video below:

<div>
<video class="video-player" src="/images/transition.mp4" controls="controls"></video>
</div>

::: warning NOTICE
A `bool` value is returned from `Show` or `Hide`, it represents whether the `Show` or `Hide` command is accepted and going to be executed.

Only **one transition is allowed at a time**. If you are trying to initialize another transition while the previous not finished yet, the new one will not start and the return value would be `false`.
:::

## Move Animation

UniWebView also supports to be animated to a new position and size while it is being displayed:

```csharp{5-8}
webView.Frame = new Rect(0, 0, Screen.width, Screen.height);

var halfScreen = new Rect(0, 0, Screen.width, Screen.height / 2.0);

// The animation will last for 400ms and with 100ms delay:
webView.AnimateTo(halfScreen, 0.4f, 0.1f, ()=>{
    print("Animation finished!");
});
```

For more about transition and animation, read the [API Reference](/api/).
