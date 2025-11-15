---
sidebarDepth: 0
---

## UniWebViewShadow

### Summary

Represents the drop shadow styling applied to the UniWebView container.

The values are expressed in Unity pixel units (points on iOS, pixels on Android) and map to the native shadow APIs.
`UniWebViewShadow` is typically used with `UniWebView.SetShadow` to apply or remove a shadow that follows the same
corner radii as the web view.

#### Properties Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#radius'><span class='return-type'>float</span> Radius { get; }</a></div></td><td><div class='simple-summary'>
<p>Blur radius of the shadow in pixels.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#opacity'><span class='return-type'>float</span> Opacity { get; }</a></div></td><td><div class='simple-summary'>
<p>Shadow opacity, clamped between `0.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#offsetx'><span class='return-type'>float</span> OffsetX { get; }</a></div></td><td><div class='simple-summary'>
<p>Horizontal offset of the shadow relative to the container.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#offsety'><span class='return-type'>float</span> OffsetY { get; }</a></div></td><td><div class='simple-summary'>
<p>Vertical offset of the shadow relative to the container.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#spread'><span class='return-type'>float</span> Spread { get; }</a></div></td><td><div class='simple-summary'>
<p>Extra expansion distance applied to the shadow outline.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#color'><span class='return-type'>Color</span> Color { get; }</a></div></td><td><div class='simple-summary'>
<p>Color tint of the shadow.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#isvisible'><span class='return-type'>bool</span> IsVisible { get; }</a></div></td><td><div class='simple-summary'>
<p>Returns <code>true</code> when the shadow will be rendered (opacity greater than zero and radius/spread greater than zero).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#none'><span class='return-type'>UniWebViewShadow</span> None { get; }</a></div></td><td><div class='simple-summary'>
<p>Returns a predefined shadow definition that disables rendering (no blur, zero opacity).</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='radius'></div><div class='api-heading' data-id='radius'><a href='#radius'><span class='return-type'>float</span> Radius { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Blur radius of the shadow in pixels.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='opacity'></div><div class='api-heading' data-id='opacity'><a href='#opacity'><span class='return-type'>float</span> Opacity { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Shadow opacity, clamped between <code>0.0</code> and <code>1.0</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='offsetx'></div><div class='api-heading' data-id='offsetx'><a href='#offsetx'><span class='return-type'>float</span> OffsetX { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Horizontal offset of the shadow relative to the container.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='offsety'></div><div class='api-heading' data-id='offsety'><a href='#offsety'><span class='return-type'>float</span> OffsetY { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Vertical offset of the shadow relative to the container.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='spread'></div><div class='api-heading' data-id='spread'><a href='#spread'><span class='return-type'>float</span> Spread { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Extra expansion distance applied to the shadow outline.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='color'></div><div class='api-heading' data-id='color'><a href='#color'><span class='return-type'>Color</span> Color { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Color tint of the shadow. The alpha channel multiplies with <code>Opacity</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='isvisible'></div><div class='api-heading' data-id='isvisible'><a href='#isvisible'><span class='return-type'>bool</span> IsVisible { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Returns <code>true</code> when the shadow will be rendered (opacity greater than zero and radius/spread greater than zero).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='none'></div><div class='api-heading' data-id='none'><a href='#none'><span class='return-type'>UniWebViewShadow</span> None { get; }</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Returns a predefined shadow definition that disables rendering (no blur, zero opacity).</p>
</div>
                </div>
  </div>
</div>

