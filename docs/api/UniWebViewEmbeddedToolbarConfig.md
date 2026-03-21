---
sidebarDepth: 0
---

## UniWebViewEmbeddedToolbarConfig

### Summary

Represents the configuration for the embedded toolbar.

A config object describes the full toolbar layout: which items appear (back, forward, done, reload, title, or
custom buttons), how they are arranged (left, center, right sections), their colors, and title interaction
behaviors.

Use `UniWebViewEmbeddedToolbarConfig.Default` for the standard layout (back + forward on the left, title in the
center, done on the right), or construct your own config. Apply the config by calling
`UniWebViewEmbeddedToolbar.ApplyConfig`.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#currentversion'><span class='return-type'>int</span> <span class='member-name'>CurrentVersion</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The current config version.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#builtinidentifierprefix'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifierPrefix</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The prefix used for all built-in item identifiers (`&quot;uwv.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#builtinidentifier.back'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifier.Back</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Identifier for the back navigation button (`&quot;uwv.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#builtinidentifier.forward'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifier.Forward</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Identifier for the forward navigation button (`&quot;uwv.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#builtinidentifier.done'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifier.Done</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Identifier for the done (close) button (`&quot;uwv.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#builtinidentifier.reload'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifier.Reload</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Identifier for the reload button (`&quot;uwv.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#builtinidentifier.title'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifier.Title</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Identifier for the title item (`&quot;uwv.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#itemtype.builtin'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ItemType</span> <span class='member-name'>ItemType.BuiltIn</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>A built-in item with predefined behavior (back, forward, done, reload, title).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#itemtype.custom'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ItemType</span> <span class='member-name'>ItemType.Custom</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>A custom button defined by the user.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#builtinitemkind.back'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='member-name'>BuiltInItemKind.Back</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Back navigation button.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#builtinitemkind.forward'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='member-name'>BuiltInItemKind.Forward</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Forward navigation button.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#builtinitemkind.done'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='member-name'>BuiltInItemKind.Done</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Done (close) button.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#builtinitemkind.reload'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='member-name'>BuiltInItemKind.Reload</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Reload button.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#builtinitemkind.title'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='member-name'>BuiltInItemKind.Title</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Title label displayed in the center section.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#default'><span class='return-type'>UniWebViewEmbeddedToolbarConfig</span> <span class='member-name'>Default</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the default toolbar config.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#defaultjson'><span class='return-type'>string</span> <span class='member-name'>DefaultJson</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the JSON string representation of the default config.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#version'><span class='return-type'>int</span> <span class='member-name'>Version</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The config version.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#visible'><span class='return-type'>bool</span> <span class='member-name'>Visible</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Whether the toolbar is visible.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#position'><span class='return-type'>UniWebViewToolbarPosition</span> <span class='member-name'>Position</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The position of the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#maxheight'><span class='return-type'>float?</span> <span class='member-name'>MaxHeight</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The maximum height of the toolbar in points.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#backgroundcolor'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ColorValue</span> <span class='member-name'>BackgroundColor</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The background color of the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#buttontextcolor'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ColorValue</span> <span class='member-name'>ButtonTextColor</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The default text color for toolbar buttons (back, forward, done, reload, custom).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#titletextcolor'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ColorValue</span> <span class='member-name'>TitleTextColor</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The text color for the title item.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#left'><span class='return-type'>List&lt;UniWebViewEmbeddedToolbarConfig.Item&gt;</span> <span class='member-name'>Left</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The list of items to display on the left section of the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#center'><span class='return-type'>List&lt;UniWebViewEmbeddedToolbarConfig.Item&gt;</span> <span class='member-name'>Center</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The list of items to display in the center section of the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#right'><span class='return-type'>List&lt;UniWebViewEmbeddedToolbarConfig.Item&gt;</span> <span class='member-name'>Right</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The list of items to display on the right section of the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#colorvalue.r'><span class='return-type'>float</span> <span class='member-name'>ColorValue.r</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Red component, in the range [0, 1].</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#colorvalue.g'><span class='return-type'>float</span> <span class='member-name'>ColorValue.g</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Green component, in the range [0, 1].</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#colorvalue.b'><span class='return-type'>float</span> <span class='member-name'>ColorValue.b</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Blue component, in the range [0, 1].</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#colorvalue.a'><span class='return-type'>float</span> <span class='member-name'>ColorValue.a</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Alpha component, in the range [0, 1].</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#itemstyle.textcolor'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ColorValue</span> <span class='member-name'>ItemStyle.TextColor</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The text color of this item.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#titleinteraction.tapaction.none'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.TapAction</span> <span class='member-name'>TitleInteraction.TapAction.None</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>No action on tap.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#titleinteraction.tapaction.scrolltotop'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.TapAction</span> <span class='member-name'>TitleInteraction.TapAction.ScrollToTop</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Scroll the web view content to the top of the page.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#titleinteraction.longpressaction.none'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.LongPressAction</span> <span class='member-name'>TitleInteraction.LongPressAction.None</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>No action on long press.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#titleinteraction.longpressaction.copyurl'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.LongPressAction</span> <span class='member-name'>TitleInteraction.LongPressAction.CopyUrl</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Copy the current page URL to the system clipboard and show a toast.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#titleinteraction.ontap'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.TapAction</span> <span class='member-name'>TitleInteraction.OnTap</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The action to perform when the title is tapped.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#titleinteraction.onlongpress'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.LongPressAction</span> <span class='member-name'>TitleInteraction.OnLongPress</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The action to perform when the title is long-pressed.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#titleinteraction.copytoasttext'><span class='return-type'>string</span> <span class='member-name'>TitleInteraction.CopyToastText</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The toast message text shown after copying the URL.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#item.type'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ItemType</span> <span class='member-name'>Item.Type</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The type of this item (built-in or custom).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#item.identifier'><span class='return-type'>string</span> <span class='member-name'>Item.Identifier</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>A unique identifier for this item.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#item.style'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ItemStyle</span> <span class='member-name'>Item.Style</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Optional per-item visual style.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#item.kind'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind?</span> <span class='member-name'>Item.Kind</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The kind of built-in item.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#item.title'><span class='return-type'>string</span> <span class='member-name'>Item.Title</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>The display text for this item.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#item.visible'><span class='return-type'>bool?</span> <span class='member-name'>Item.Visible</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Whether this item is visible.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#item.titleinteraction'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction</span> <span class='member-name'>Item.TitleInteraction</span> { get; set; }</a></div></td><td><div class='simple-summary'>
<p>Interaction config for the built-in Title item.</p>
</div>
</td></tr></table>

#### Methods Summary

<table class='api-summary-table api-summary-table--methods'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#fromjson'><span class='return-type'>UniWebViewEmbeddedToolbarConfig</span> UniWebViewEmbeddedToolbarConfig.<span class='member-name'>FromJson</span>(string json)</a></div></td><td><div class='simple-summary'>
<p>Creates a config from a JSON string.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#tojson'><span class='return-type'>string</span> <span class='member-name'>ToJson</span>()</a></div></td><td><div class='simple-summary'>
<p>Serializes the config to a JSON string.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#todictionary'><span class='return-type'>Dictionary&lt;string, object&gt;</span> <span class='member-name'>ToDictionary</span>()</a></div></td><td><div class='simple-summary'>
<p>Converts the config to a dictionary representation that can be serialized to JSON.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#enumerateitems'><span class='return-type'>IEnumerable&lt;UniWebViewEmbeddedToolbarConfig.Item&gt;</span> <span class='member-name'>EnumerateItems</span>()</a></div></td><td><div class='simple-summary'>
<p>Enumerates all items across all sections (left, center, right) in order.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#findfirstbuiltinitem'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.Item</span> <span class='member-name'>FindFirstBuiltInItem</span>(UniWebViewEmbeddedToolbarConfig.BuiltInItemKind kind)</a></div></td><td><div class='simple-summary'>
<p>Finds the first built-in item matching the given kind across all sections (left, center, right).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#colorvalue.fromcolor'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ColorValue</span> UniWebViewEmbeddedToolbarConfig.<span class='member-name'>ColorValue.FromColor</span>(Color color)</a></div></td><td><div class='simple-summary'>
<p>Creates a <code>ColorValue</code> from a Unity <code>Color</code>.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#colorvalue.tocolor'><span class='return-type'>Color</span> <span class='member-name'>ColorValue.ToColor</span>()</a></div></td><td><div class='simple-summary'>
<p>Converts this <code>ColorValue</code> to a Unity <code>Color</code>.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#item.builtin'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.Item</span> UniWebViewEmbeddedToolbarConfig.<span class='member-name'>Item.BuiltIn</span>(BuiltInItemKind kind, string title = null, bool? visible = null, ItemStyle style = null, TitleInteraction titleInteraction = null, string identifier = null)</a></div></td><td><div class='simple-summary'>
<p>Creates a built-in toolbar item.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#item.custom'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.Item</span> UniWebViewEmbeddedToolbarConfig.<span class='member-name'>Item.Custom</span>(string identifier, string title, ItemStyle style = null)</a></div></td><td><div class='simple-summary'>
<p>Creates a custom toolbar button.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#item.isvisible'><span class='return-type'>bool</span> <span class='member-name'>Item.IsVisible</span>()</a></div></td><td><div class='simple-summary'>
<p>Returns whether this item is visible.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='currentversion'></div><div class='api-heading' data-id='currentversion'><a href='#currentversion'><span class='return-type'>int</span> <span class='member-name'>CurrentVersion</span> { get; }</a><div class='api-badge api-badge-blue'>const</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The current config version. Currently <code>1</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='builtinidentifierprefix'></div><div class='api-heading' data-id='builtinidentifierprefix'><a href='#builtinidentifierprefix'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifierPrefix</span> { get; }</a><div class='api-badge api-badge-blue'>const</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The prefix used for all built-in item identifiers (<code>&quot;uwv.toolbar.&quot;</code>).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='builtinidentifier.back'></div><div class='api-heading' data-id='builtinidentifier.back'><a href='#builtinidentifier.back'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifier.Back</span> { get; }</a><div class='api-badge api-badge-blue'>const</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Identifier for the back navigation button (<code>&quot;uwv.toolbar.back&quot;</code>).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='builtinidentifier.forward'></div><div class='api-heading' data-id='builtinidentifier.forward'><a href='#builtinidentifier.forward'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifier.Forward</span> { get; }</a><div class='api-badge api-badge-blue'>const</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Identifier for the forward navigation button (<code>&quot;uwv.toolbar.forward&quot;</code>).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='builtinidentifier.done'></div><div class='api-heading' data-id='builtinidentifier.done'><a href='#builtinidentifier.done'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifier.Done</span> { get; }</a><div class='api-badge api-badge-blue'>const</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Identifier for the done (close) button (<code>&quot;uwv.toolbar.done&quot;</code>).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='builtinidentifier.reload'></div><div class='api-heading' data-id='builtinidentifier.reload'><a href='#builtinidentifier.reload'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifier.Reload</span> { get; }</a><div class='api-badge api-badge-blue'>const</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Identifier for the reload button (<code>&quot;uwv.toolbar.reload&quot;</code>).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='builtinidentifier.title'></div><div class='api-heading' data-id='builtinidentifier.title'><a href='#builtinidentifier.title'><span class='return-type'>string</span> <span class='member-name'>BuiltInIdentifier.Title</span> { get; }</a><div class='api-badge api-badge-blue'>const</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Identifier for the title item (<code>&quot;uwv.toolbar.title&quot;</code>).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='itemtype.builtin'></div><div class='api-heading' data-id='itemtype.builtin'><a href='#itemtype.builtin'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ItemType</span> <span class='member-name'>ItemType.BuiltIn</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>A built-in item with predefined behavior (back, forward, done, reload, title).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='itemtype.custom'></div><div class='api-heading' data-id='itemtype.custom'><a href='#itemtype.custom'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ItemType</span> <span class='member-name'>ItemType.Custom</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>A custom button defined by the user.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='builtinitemkind.back'></div><div class='api-heading' data-id='builtinitemkind.back'><a href='#builtinitemkind.back'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='member-name'>BuiltInItemKind.Back</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Back navigation button. Default text: &quot;❮&quot;.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='builtinitemkind.forward'></div><div class='api-heading' data-id='builtinitemkind.forward'><a href='#builtinitemkind.forward'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='member-name'>BuiltInItemKind.Forward</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Forward navigation button. Default text: &quot;❯&quot;.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='builtinitemkind.done'></div><div class='api-heading' data-id='builtinitemkind.done'><a href='#builtinitemkind.done'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='member-name'>BuiltInItemKind.Done</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Done (close) button. Default text: &quot;Done&quot;.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='builtinitemkind.reload'></div><div class='api-heading' data-id='builtinitemkind.reload'><a href='#builtinitemkind.reload'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='member-name'>BuiltInItemKind.Reload</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Reload button. Default text: &quot;↻&quot;.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='builtinitemkind.title'></div><div class='api-heading' data-id='builtinitemkind.title'><a href='#builtinitemkind.title'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='member-name'>BuiltInItemKind.Title</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Title label displayed in the center section.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='default'></div><div class='api-heading' data-id='default'><a href='#default'><span class='return-type'>UniWebViewEmbeddedToolbarConfig</span> <span class='member-name'>Default</span> { get; }</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the default toolbar config.</p>
<p>The default config contains: back and forward buttons on the left, a title item in the center, and a done
button on the right. Position is <code>Top</code>, visibility is <code>true</code>, and colors use platform defaults.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='defaultjson'></div><div class='api-heading' data-id='defaultjson'><a href='#defaultjson'><span class='return-type'>string</span> <span class='member-name'>DefaultJson</span> { get; }</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the JSON string representation of the default config.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='version'></div><div class='api-heading' data-id='version'><a href='#version'><span class='return-type'>int</span> <span class='member-name'>Version</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The config version. Currently always <code>1</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='visible'></div><div class='api-heading' data-id='visible'><a href='#visible'><span class='return-type'>bool</span> <span class='member-name'>Visible</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether the toolbar is visible. Default is <code>true</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='position'></div><div class='api-heading' data-id='position'><a href='#position'><span class='return-type'>UniWebViewToolbarPosition</span> <span class='member-name'>Position</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The position of the toolbar. Either <code>Top</code> or <code>Bottom</code>. Default is <code>Top</code>.</p>
<p>This property only takes effect on iOS and Android. On macOS Unity Editor, the toolbar is always in the
window&#39;s title bar.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='maxheight'></div><div class='api-heading' data-id='maxheight'><a href='#maxheight'><span class='return-type'>float?</span> <span class='member-name'>MaxHeight</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The maximum height of the toolbar in points. If set to a value smaller than the standard height, the toolbar
will shrink to that height.</p>
<p>This property only takes effect on iOS and Android.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='backgroundcolor'></div><div class='api-heading' data-id='backgroundcolor'><a href='#backgroundcolor'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ColorValue</span> <span class='member-name'>BackgroundColor</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The background color of the toolbar. When <code>null</code>, the platform default is used.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='buttontextcolor'></div><div class='api-heading' data-id='buttontextcolor'><a href='#buttontextcolor'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ColorValue</span> <span class='member-name'>ButtonTextColor</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The default text color for toolbar buttons (back, forward, done, reload, custom). When <code>null</code>, the platform
default is used. Individual items can override this via <code>Item.Style.TextColor</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='titletextcolor'></div><div class='api-heading' data-id='titletextcolor'><a href='#titletextcolor'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ColorValue</span> <span class='member-name'>TitleTextColor</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The text color for the title item. When <code>null</code>, the platform default is used. The title item can override
this via its own <code>Item.Style.TextColor</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='left'></div><div class='api-heading' data-id='left'><a href='#left'><span class='return-type'>List&lt;UniWebViewEmbeddedToolbarConfig.Item&gt;</span> <span class='member-name'>Left</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The list of items to display on the left section of the toolbar.</p>
<p>In the default config, this contains the back and forward built-in items.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='center'></div><div class='api-heading' data-id='center'><a href='#center'><span class='return-type'>List&lt;UniWebViewEmbeddedToolbarConfig.Item&gt;</span> <span class='member-name'>Center</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The list of items to display in the center section of the toolbar.</p>
<p>In the default config, this contains the title built-in item. You can also add other built-in or custom
buttons to the center section alongside the title.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='right'></div><div class='api-heading' data-id='right'><a href='#right'><span class='return-type'>List&lt;UniWebViewEmbeddedToolbarConfig.Item&gt;</span> <span class='member-name'>Right</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The list of items to display on the right section of the toolbar.</p>
<p>In the default config, this contains the done built-in item.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='colorvalue.r'></div><div class='api-heading' data-id='colorvalue.r'><a href='#colorvalue.r'><span class='return-type'>float</span> <span class='member-name'>ColorValue.r</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Red component, in the range [0, 1].</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='colorvalue.g'></div><div class='api-heading' data-id='colorvalue.g'><a href='#colorvalue.g'><span class='return-type'>float</span> <span class='member-name'>ColorValue.g</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Green component, in the range [0, 1].</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='colorvalue.b'></div><div class='api-heading' data-id='colorvalue.b'><a href='#colorvalue.b'><span class='return-type'>float</span> <span class='member-name'>ColorValue.b</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Blue component, in the range [0, 1].</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='colorvalue.a'></div><div class='api-heading' data-id='colorvalue.a'><a href='#colorvalue.a'><span class='return-type'>float</span> <span class='member-name'>ColorValue.a</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Alpha component, in the range [0, 1].</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='itemstyle.textcolor'></div><div class='api-heading' data-id='itemstyle.textcolor'><a href='#itemstyle.textcolor'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ColorValue</span> <span class='member-name'>ItemStyle.TextColor</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The text color of this item. When set, overrides the global <code>ButtonTextColor</code> or <code>TitleTextColor</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='titleinteraction.tapaction.none'></div><div class='api-heading' data-id='titleinteraction.tapaction.none'><a href='#titleinteraction.tapaction.none'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.TapAction</span> <span class='member-name'>TitleInteraction.TapAction.None</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>No action on tap.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='titleinteraction.tapaction.scrolltotop'></div><div class='api-heading' data-id='titleinteraction.tapaction.scrolltotop'><a href='#titleinteraction.tapaction.scrolltotop'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.TapAction</span> <span class='member-name'>TitleInteraction.TapAction.ScrollToTop</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Scroll the web view content to the top of the page.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='titleinteraction.longpressaction.none'></div><div class='api-heading' data-id='titleinteraction.longpressaction.none'><a href='#titleinteraction.longpressaction.none'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.LongPressAction</span> <span class='member-name'>TitleInteraction.LongPressAction.None</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>No action on long press.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='titleinteraction.longpressaction.copyurl'></div><div class='api-heading' data-id='titleinteraction.longpressaction.copyurl'><a href='#titleinteraction.longpressaction.copyurl'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.LongPressAction</span> <span class='member-name'>TitleInteraction.LongPressAction.CopyUrl</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Copy the current page URL to the system clipboard and show a toast.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='titleinteraction.ontap'></div><div class='api-heading' data-id='titleinteraction.ontap'><a href='#titleinteraction.ontap'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.TapAction</span> <span class='member-name'>TitleInteraction.OnTap</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The action to perform when the title is tapped. Default is <code>None</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='titleinteraction.onlongpress'></div><div class='api-heading' data-id='titleinteraction.onlongpress'><a href='#titleinteraction.onlongpress'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction.LongPressAction</span> <span class='member-name'>TitleInteraction.OnLongPress</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The action to perform when the title is long-pressed. Default is <code>None</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='titleinteraction.copytoasttext'></div><div class='api-heading' data-id='titleinteraction.copytoasttext'><a href='#titleinteraction.copytoasttext'><span class='return-type'>string</span> <span class='member-name'>TitleInteraction.CopyToastText</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The toast message text shown after copying the URL. If not set, &quot;URL copied&quot; is used.
Only applicable when <code>OnLongPress</code> is <code>CopyUrl</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='item.type'></div><div class='api-heading' data-id='item.type'><a href='#item.type'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ItemType</span> <span class='member-name'>Item.Type</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The type of this item (built-in or custom).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='item.identifier'></div><div class='api-heading' data-id='item.identifier'><a href='#item.identifier'><span class='return-type'>string</span> <span class='member-name'>Item.Identifier</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>A unique identifier for this item. Built-in items use <code>uwv.toolbar.*</code> identifiers by default. Custom items
must provide their own identifier.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='item.style'></div><div class='api-heading' data-id='item.style'><a href='#item.style'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ItemStyle</span> <span class='member-name'>Item.Style</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Optional per-item visual style. When set, overrides global color settings.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='item.kind'></div><div class='api-heading' data-id='item.kind'><a href='#item.kind'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind?</span> <span class='member-name'>Item.Kind</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The kind of built-in item. Only applicable when <code>Type</code> is <code>BuiltIn</code>.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='item.title'></div><div class='api-heading' data-id='item.title'><a href='#item.title'><span class='return-type'>string</span> <span class='member-name'>Item.Title</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The display text for this item. For built-in items, if not set, a platform default is used. For custom items,
this is the button label.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='item.visible'></div><div class='api-heading' data-id='item.visible'><a href='#item.visible'><span class='return-type'>bool?</span> <span class='member-name'>Item.Visible</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether this item is visible. If <code>null</code> or <code>true</code>, the item is shown. Set to <code>false</code> to hide it.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='item.titleinteraction'></div><div class='api-heading' data-id='item.titleinteraction'><a href='#item.titleinteraction'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction</span> <span class='member-name'>Item.TitleInteraction</span> { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Interaction config for the built-in Title item. Only applicable when <code>Kind</code> is <code>Title</code>.</p>
</div>
                </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='fromjson'></div><div class='api-heading' data-id='fromjson'><a href='#fromjson'><span class='return-type'>UniWebViewEmbeddedToolbarConfig</span> UniWebViewEmbeddedToolbarConfig.<span class='member-name'>FromJson</span>(string json)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Creates a config from a JSON string. Returns <code>null</code> if the JSON is invalid or empty.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>json</span></div>
    <div class='parameter-item-desc'><p>A JSON string representing the toolbar config.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='tojson'></div><div class='api-heading' data-id='tojson'><a href='#tojson'><span class='return-type'>string</span> <span class='member-name'>ToJson</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Serializes the config to a JSON string.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='todictionary'></div><div class='api-heading' data-id='todictionary'><a href='#todictionary'><span class='return-type'>Dictionary&lt;string, object&gt;</span> <span class='member-name'>ToDictionary</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Converts the config to a dictionary representation that can be serialized to JSON.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='enumerateitems'></div><div class='api-heading' data-id='enumerateitems'><a href='#enumerateitems'><span class='return-type'>IEnumerable&lt;UniWebViewEmbeddedToolbarConfig.Item&gt;</span> <span class='member-name'>EnumerateItems</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Enumerates all items across all sections (left, center, right) in order.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='findfirstbuiltinitem'></div><div class='api-heading' data-id='findfirstbuiltinitem'><a href='#findfirstbuiltinitem'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.Item</span> <span class='member-name'>FindFirstBuiltInItem</span>(UniWebViewEmbeddedToolbarConfig.BuiltInItemKind kind)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Finds the first built-in item matching the given kind across all sections (left, center, right).</p>
<p>Returns <code>null</code> if no matching item is found.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='parameter-item-name'>kind</span></div>
    <div class='parameter-item-desc'><p>The built-in item kind to search for.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> config <span class="token operator">=</span> UniWebViewEmbeddedToolbarConfig<span class="token punctuation">.</span>Default<span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> titleItem <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">FindFirstBuiltInItem</span><span class="token punctuation">(</span>
    UniWebViewEmbeddedToolbarConfig<span class="token punctuation">.</span>BuiltInItemKind<span class="token punctuation">.</span>Title
<span class="token punctuation">)</span><span class="token punctuation">;</span>
titleItem<span class="token punctuation">.</span>Title <span class="token operator">=</span> <span class="token string">"My App"</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='colorvalue.fromcolor'></div><div class='api-heading' data-id='colorvalue.fromcolor'><a href='#colorvalue.fromcolor'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.ColorValue</span> UniWebViewEmbeddedToolbarConfig.<span class='member-name'>ColorValue.FromColor</span>(Color color)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Creates a <code>ColorValue</code> from a Unity <code>Color</code>.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>The Unity color to convert.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> color <span class="token operator">=</span> UniWebViewEmbeddedToolbarConfig<span class="token punctuation">.</span>ColorValue<span class="token punctuation">.</span><span class="token function">FromColor</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='colorvalue.tocolor'></div><div class='api-heading' data-id='colorvalue.tocolor'><a href='#colorvalue.tocolor'><span class='return-type'>Color</span> <span class='member-name'>ColorValue.ToColor</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Converts this <code>ColorValue</code> to a Unity <code>Color</code>.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='item.builtin'></div><div class='api-heading' data-id='item.builtin'><a href='#item.builtin'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.Item</span> UniWebViewEmbeddedToolbarConfig.<span class='member-name'>Item.BuiltIn</span>(BuiltInItemKind kind, string title = null, bool? visible = null, ItemStyle style = null, TitleInteraction titleInteraction = null, string identifier = null)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Creates a built-in toolbar item.</p>
<p>Built-in items are: <code>Back</code>, <code>Forward</code>, <code>Done</code>, <code>Reload</code>, and <code>Title</code>. Each has a default text and identifier.
You can override the title, visibility, style, and (for the Title item) title interaction.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewEmbeddedToolbarConfig.BuiltInItemKind</span> <span class='parameter-item-name'>kind</span></div>
    <div class='parameter-item-desc'><p>The kind of built-in item to create.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>title</span></div>
    <div class='parameter-item-desc'><p>Optional title text override. If <code>null</code>, the platform default text is used.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>bool?</span> <span class='parameter-item-name'>visible</span></div>
    <div class='parameter-item-desc'><p>Optional visibility override. If <code>null</code>, the item is visible by default.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewEmbeddedToolbarConfig.ItemStyle</span> <span class='parameter-item-name'>style</span></div>
    <div class='parameter-item-desc'><p>Optional style override for this item.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewEmbeddedToolbarConfig.TitleInteraction</span> <span class='parameter-item-name'>titleInteraction</span></div>
    <div class='parameter-item-desc'><p>Optional title interaction config. Only applicable to the <code>Title</code> built-in item.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>identifier</span></div>
    <div class='parameter-item-desc'><p>Optional identifier override. By default, built-in items use <code>uwv.toolbar.*</code> identifiers.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token comment">// Create a reload button.</span>
<span class="token class-name"><span class="token keyword">var</span></span> reload <span class="token operator">=</span> UniWebViewEmbeddedToolbarConfig<span class="token punctuation">.</span>Item<span class="token punctuation">.</span><span class="token function">BuiltIn</span><span class="token punctuation">(</span>
    UniWebViewEmbeddedToolbarConfig<span class="token punctuation">.</span>BuiltInItemKind<span class="token punctuation">.</span>Reload
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment">// Create a title with scroll-to-top interaction.</span>
<span class="token class-name"><span class="token keyword">var</span></span> title <span class="token operator">=</span> UniWebViewEmbeddedToolbarConfig<span class="token punctuation">.</span>Item<span class="token punctuation">.</span><span class="token function">BuiltIn</span><span class="token punctuation">(</span>
    UniWebViewEmbeddedToolbarConfig<span class="token punctuation">.</span>BuiltInItemKind<span class="token punctuation">.</span>Title<span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">title</span><span class="token punctuation">:</span> <span class="token string">"My App"</span><span class="token punctuation">,</span>
    <span class="token named-parameter punctuation">titleInteraction</span><span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">UniWebViewEmbeddedToolbarConfig<span class="token punctuation">.</span>TitleInteraction</span> <span class="token punctuation">{</span>
        OnTap <span class="token operator">=</span> UniWebViewEmbeddedToolbarConfig<span class="token punctuation">.</span>TitleInteraction<span class="token punctuation">.</span>TapAction<span class="token punctuation">.</span>ScrollToTop
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='item.custom'></div><div class='api-heading' data-id='item.custom'><a href='#item.custom'><span class='return-type'>UniWebViewEmbeddedToolbarConfig.Item</span> UniWebViewEmbeddedToolbarConfig.<span class='member-name'>Item.Custom</span>(string identifier, string title, ItemStyle style = null)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Creates a custom toolbar button.</p>
<p>Custom items require an identifier and a title. When tapped, the item&#39;s action is delivered through
<code>RegisterOnEmbeddedToolbarItemAction</code> on the <code>UniWebView</code> instance. Custom items have no native default
action.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>identifier</span></div>
    <div class='parameter-item-desc'><p>A unique identifier for the custom item. Used to identify the item in action callbacks.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>title</span></div>
    <div class='parameter-item-desc'><p>The button title text.</p>
</div>
  </li>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewEmbeddedToolbarConfig.ItemStyle</span> <span class='parameter-item-name'>style</span></div>
    <div class='parameter-item-desc'><p>Optional style for this item.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">var</span></span> shareButton <span class="token operator">=</span> UniWebViewEmbeddedToolbarConfig<span class="token punctuation">.</span>Item<span class="token punctuation">.</span><span class="token function">Custom</span><span class="token punctuation">(</span>
    <span class="token string">"my.share"</span><span class="token punctuation">,</span>
    <span class="token string">"Share"</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='item.isvisible'></div><div class='api-heading' data-id='item.isvisible'><a href='#item.isvisible'><span class='return-type'>bool</span> <span class='member-name'>Item.IsVisible</span>()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Returns whether this item is visible. An item is visible when <code>Visible</code> is <code>null</code> or <code>true</code>.</p>
</div>
                            </div>
  </div>
</div>

