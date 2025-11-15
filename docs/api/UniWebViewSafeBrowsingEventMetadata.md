---
sidebarDepth: 0
---

## UniWebViewSafeBrowsingEventMetadata

### Summary

Strongly typed metadata emitted with every Safe Browsing callback.

Native Custom Tabs and `SFSafariViewController` events send JSON payloads describing the lifecycle transition,
including timestamps and the native source. UniWebView parses that payload into this class so you can inspect the data
without touching JSON manually.

`EventKind` indicates which stage triggered the callback:

- `Unknown`: Payload could not be parsed, or native side omitted an event name.
- `NavigationStarted`: Initial navigation began.
- `NavigationFinished`: Page load finished successfully.
- `NavigationFailed`: Page load failed. Inspect the `Raw` payload for error details.
- `TabHidden`: User dismissed the Safe Browsing tab (maps to `OnSafeBrowsingClosed` / `OnSafeBrowsingFinished`).

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#kind'><span class='return-type'>UniWebViewSafeBrowsingEventMetadata.EventKind</span> Kind { get; }</a></div></td><td><div class='simple-summary'>
<p>Event classification derived from the native payload.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#source'><span class='return-type'>string</span> Source { get; }</a></div></td><td><div class='simple-summary'>
<p>Native component that emitted the event (for example, <code>CustomTabsCallback</code> or <code>SFSafariViewController</code>).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#timestamp'><span class='return-type'>long?</span> Timestamp { get; }</a></div></td><td><div class='simple-summary'>
<p>Epoch timestamp (milliseconds) reported by the native payload, if provided.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#timestamputc'><span class='return-type'>DateTimeOffset?</span> TimestampUtc { get; }</a></div></td><td><div class='simple-summary'>
<p>UTC representation of <code>Timestamp</code>, or <code>null</code> when the payload does not include a timestamp.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#timestamplocal'><span class='return-type'>DateTime?</span> TimestampLocal { get; }</a></div></td><td><div class='simple-summary'>
<p>Local time representation of <code>TimestampUtc</code>, convenient for logging in the player&#39;s timezone.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#isvalid'><span class='return-type'>bool</span> IsValid { get; }</a></div></td><td><div class='simple-summary'>
<p>Indicates whether the JSON payload was parsed successfully.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#raw'><span class='return-type'>string</span> Raw { get; }</a></div></td><td><div class='simple-summary'>
<p>Original JSON payload from native side, useful for diagnostics.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='kind'></div><div class='api-heading' data-id='kind'><a href='#kind'><span class='return-type'>UniWebViewSafeBrowsingEventMetadata.EventKind</span> Kind { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Event classification derived from the native payload.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='source'></div><div class='api-heading' data-id='source'><a href='#source'><span class='return-type'>string</span> Source { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Native component that emitted the event (for example, <code>CustomTabsCallback</code> or <code>SFSafariViewController</code>).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='timestamp'></div><div class='api-heading' data-id='timestamp'><a href='#timestamp'><span class='return-type'>long?</span> Timestamp { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Epoch timestamp (milliseconds) reported by the native payload, if provided.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='timestamputc'></div><div class='api-heading' data-id='timestamputc'><a href='#timestamputc'><span class='return-type'>DateTimeOffset?</span> TimestampUtc { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>UTC representation of <code>Timestamp</code>, or <code>null</code> when the payload does not include a timestamp.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='timestamplocal'></div><div class='api-heading' data-id='timestamplocal'><a href='#timestamplocal'><span class='return-type'>DateTime?</span> TimestampLocal { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Local time representation of <code>TimestampUtc</code>, convenient for logging in the player&#39;s timezone.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='isvalid'></div><div class='api-heading' data-id='isvalid'><a href='#isvalid'><span class='return-type'>bool</span> IsValid { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Indicates whether the JSON payload was parsed successfully.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='raw'></div><div class='api-heading' data-id='raw'><a href='#raw'><span class='return-type'>string</span> Raw { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Original JSON payload from native side, useful for diagnostics.</p>
</div>
                </div>
  </div>
</div>

