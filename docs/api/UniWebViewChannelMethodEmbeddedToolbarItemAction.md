---
sidebarDepth: 0
---

## UniWebViewChannelMethodEmbeddedToolbarItemAction

### Summary

Represents an embedded toolbar item action request from the native side.

This object is passed to the handler registered via `UniWebView.RegisterOnEmbeddedToolbarItemAction`. It contains
the identifier of the toolbar item that was tapped or long-pressed, the gesture type, and optional toast text for
title copy interactions.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#identifier'><span class='return-type'>string</span> <span class='member-name'>Identifier</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The toolbar item identifier.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#gesture'><span class='return-type'>UniWebViewChannelMethodEmbeddedToolbarItemAction.GestureType</span> <span class='member-name'>Gesture</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The gesture type that triggered this action.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#copytoasttext'><span class='return-type'>string</span> <span class='member-name'>CopyToastText</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Optional toast text from the title item&#39;s long-press copy interaction config.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#gesturetype.tap'><span class='return-type'>UniWebViewChannelMethodEmbeddedToolbarItemAction.GestureType</span> <span class='member-name'>GestureType.Tap</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>A tap gesture.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#gesturetype.longpress'><span class='return-type'>UniWebViewChannelMethodEmbeddedToolbarItemAction.GestureType</span> <span class='member-name'>GestureType.LongPress</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>A long-press gesture.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='identifier'></div><div class='api-heading' data-id='identifier'><a href='#identifier'><span class='return-type'>string</span> <span class='member-name'>Identifier</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The toolbar item identifier.</p>
<p>Built-in identifiers are prefixed with <code>&quot;uwv.toolbar.&quot;</code> (e.g., <code>&quot;uwv.toolbar.back&quot;</code>, <code>&quot;uwv.toolbar.done&quot;</code>).
Custom items use the identifier provided when creating the item via <code>Item.Custom</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='gesture'></div><div class='api-heading' data-id='gesture'><a href='#gesture'><span class='return-type'>UniWebViewChannelMethodEmbeddedToolbarItemAction.GestureType</span> <span class='member-name'>Gesture</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The gesture type that triggered this action.</p>
<p>For most toolbar items, this is <code>Tap</code>. For the title item with <code>OnLongPress</code> configured, it can be <code>LongPress</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='copytoasttext'></div><div class='api-heading' data-id='copytoasttext'><a href='#copytoasttext'><span class='return-type'>string</span> <span class='member-name'>CopyToastText</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Optional toast text from the title item&#39;s long-press copy interaction config.</p>
<p>This is <code>null</code> unless the action was triggered by a title long-press with <code>CopyUrl</code> configured.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='gesturetype.tap'></div><div class='api-heading' data-id='gesturetype.tap'><a href='#gesturetype.tap'><span class='return-type'>UniWebViewChannelMethodEmbeddedToolbarItemAction.GestureType</span> <span class='member-name'>GestureType.Tap</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>A tap gesture.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='gesturetype.longpress'></div><div class='api-heading' data-id='gesturetype.longpress'><a href='#gesturetype.longpress'><span class='return-type'>UniWebViewChannelMethodEmbeddedToolbarItemAction.GestureType</span> <span class='member-name'>GestureType.LongPress</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>A long-press gesture. Only used by the title item when <code>OnLongPress</code> is configured.</p>
</div>
                </div>
  </div>
</div>

