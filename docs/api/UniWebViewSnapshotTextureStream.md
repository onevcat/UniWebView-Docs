---
sidebarDepth: 0
---

## UniWebViewSnapshotTextureStream

### Summary

Represents a live snapshot texture stream owned by a `UniWebView`.

You do not create an instance of this class directly. Start a stream by calling `StartSnapshotTextureStream` on a
`UniWebView` instance. The stream owns one live texture and updates it in place after the first native frame is ready.
Assign the texture once, clear your Unity reference before cleanup, and call `Dispose` when the stream is no longer
needed.

If the current platform or graphics backend does not support the optimized stream, `Texture` remains `null` and
`IsReady` remains `false`. The stream API does not fall back to the legacy PNG-backed texture APIs. On Android, the
optimized stream currently requires OpenGL ES 2 or OpenGL ES 3. Vulkan is not supported yet because the current Android
native texture bridge creates and updates an OpenGL ES texture for Unity.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#texture'><span class='return-type'>Texture2D</span> <span class='member-name'>Texture</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the live texture updated in place by the stream.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#isready'><span class='return-type'>bool</span> <span class='member-name'>IsReady</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets whether the stream has received its first usable native texture frame.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#width'><span class='return-type'>int</span> <span class='member-name'>Width</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the current stream texture width in pixels.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#height'><span class='return-type'>int</span> <span class='member-name'>Height</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the current stream texture height in pixels.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#rect'><span class='return-type'>Rect</span> <span class='member-name'>Rect</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the local web view rectangle captured by this stream.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#frameindex'><span class='return-type'>long</span> <span class='member-name'>FrameIndex</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the latest uploaded frame index.</p>
</div>
</td></tr></table>

#### Methods Summary

<table class='api-summary-table api-summary-table--methods'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#stop'><span class='return-type'>void</span> <span class='member-name'>Stop</span>()</a></div></td><td><div class='simple-summary'>
<p>Stops the stream and releases the stream-owned texture.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#dispose'><span class='return-type'>void</span> <span class='member-name'>Dispose</span>()</a></div></td><td><div class='simple-summary'>
<p>Stops the stream and releases the stream-owned texture.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='texture'></div><div class='api-heading' data-id='texture'><a href='#texture'><span class='return-type'>Texture2D</span> <span class='member-name'>Texture</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the live texture updated in place by the stream.</p>
<p>The value is <code>null</code> until the first native frame is captured and uploaded. The stream owns this texture; do not destroy
it manually.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='isready'></div><div class='api-heading' data-id='isready'><a href='#isready'><span class='return-type'>bool</span> <span class='member-name'>IsReady</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets whether the stream has received its first usable native texture frame.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='width'></div><div class='api-heading' data-id='width'><a href='#width'><span class='return-type'>int</span> <span class='member-name'>Width</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the current stream texture width in pixels.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='height'></div><div class='api-heading' data-id='height'><a href='#height'><span class='return-type'>int</span> <span class='member-name'>Height</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the current stream texture height in pixels.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='rect'></div><div class='api-heading' data-id='rect'><a href='#rect'><span class='return-type'>Rect</span> <span class='member-name'>Rect</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the local web view rectangle captured by this stream.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='frameindex'></div><div class='api-heading' data-id='frameindex'><a href='#frameindex'><span class='return-type'>long</span> <span class='member-name'>FrameIndex</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the latest uploaded frame index.</p>
</div>
                </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='stop'></div><div class='api-heading' data-id='stop'><a href='#stop'><span class='return-type'>void</span> <span class='member-name'>Stop</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Stops the stream and releases the stream-owned texture.</p>
<p>Calling this method more than once is safe.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='dispose'></div><div class='api-heading' data-id='dispose'><a href='#dispose'><span class='return-type'>void</span> <span class='member-name'>Dispose</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Stops the stream and releases the stream-owned texture.</p>
<p>This is equivalent to <code>Stop</code> and is safe to call more than once.</p>
</div>
                            </div>
  </div>
</div>

