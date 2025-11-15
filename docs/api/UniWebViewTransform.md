---
sidebarDepth: 0
---

## UniWebViewTransform

### Summary

Represents a transformation that can be applied to a UniWebView, including rotation and scaling.

The transformation includes:

- **Rotation**: The angle (in degrees) by which the web view should be rotated. Positive values rotate the web
view clockwise, while negative values rotate it counterclockwise.
- **Scaling**: The scale factors for the X and Y axes. A scale factor of 1.0 means no scaling, while values
greater than 1.0 enlarge the web view and values less than 1.0 shrink it.

This transformation is typically used in conjunction with the `SetTransform` method in `UniWebView` to apply visual
transformations to the web view.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#rotation'><span class='return-type'>float</span> <span class='member-name'>Rotation</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The rotation of the web view in degrees.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#scalex'><span class='return-type'>float</span> <span class='member-name'>ScaleX</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The scaling factor applied to the X-axis of the web view.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#scaley'><span class='return-type'>float</span> <span class='member-name'>ScaleY</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The scaling factor applied to the Y-axis of the web view.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='rotation'></div><div class='api-heading' data-id='rotation'><a href='#rotation'><span class='return-type'>float</span> <span class='member-name'>Rotation</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The rotation of the web view in degrees.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='scalex'></div><div class='api-heading' data-id='scalex'><a href='#scalex'><span class='return-type'>float</span> <span class='member-name'>ScaleX</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The scaling factor applied to the X-axis of the web view.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='scaley'></div><div class='api-heading' data-id='scaley'><a href='#scaley'><span class='return-type'>float</span> <span class='member-name'>ScaleY</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The scaling factor applied to the Y-axis of the web view.</p>
</div>
                </div>
  </div>
</div>

