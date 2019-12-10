---
sidebarDepth: 0
---

## UniWebViewMessage

### Summary

Represents a message sent from web content back to Unity. Whenever you want to send some information from web view and handle it in Unity script, you can navigate the user with a link started with "uniwebview://". `OnMessageReceived` event will be fired for the web view with a `UniWebViewMessage` object. You can get the URL path and arguments from this message object.

#### Properties Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#rawmessage'><span class='return-type'>string</span> RawMessage { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the raw message.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#scheme'><span class='return-type'>string</span> Scheme { get; }</a></div></td><td><div class='simple-summary'>
<p>The url scheme of this UniWebViewMessage.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#path'><span class='return-type'>string</span> Path { get; }</a></div></td><td><div class='simple-summary'>
<p>The path of this UniWebViewMessage.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#args'><span class='return-type'>Dictionary&lt;string, string&gt;</span> Args { get; }</a></div></td><td><div class='simple-summary'>
<p>The arguments of this UniWebViewMessage.</p>
</div>
</td></tr></table>

#### Methods Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#uniwebviewmessage'><span class='return-type'></span> UniWebViewMessage(string rawMessage)</a></div></td><td><div class='simple-summary'>
<p>Initializes a new instance of the <code>UniWebViewMessage</code> struct.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='rawmessage'></div><div class='api-heading' data-id='rawmessage'><a href='#rawmessage'><span class='return-type'>string</span> RawMessage { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the raw message. It is the original url which initialized this message.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp">webView<span class="token punctuation">.</span>OnMessageReceived <span class="token operator">+</span><span class="token operator">=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>RawMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"uniwebview://action?key=value&amp;anotherKey=value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment" spellcheck="true">// => "uniwebview://action?key=value&amp;anotherKey=value"</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='scheme'></div><div class='api-heading' data-id='scheme'><a href='#scheme'><span class='return-type'>string</span> Scheme { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The url scheme of this UniWebViewMessage. &quot;uniwebview&quot; was added to message scheme list
by default. You can add your own scheme by using <code>UniWebView.AddUrlScheme</code>.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp">webView<span class="token punctuation">.</span>OnMessageReceived <span class="token operator">+</span><span class="token operator">=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Scheme<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"uniwebview://action?key=value&amp;anotherKey=value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment" spellcheck="true">// => "uniwebview"</span>
<span />
<span class="token comment" spellcheck="true">// Use a customized scheme.</span>
anotherWebView<span class="token punctuation">.</span><span class="token function">AddUrlScheme</span><span class="token punctuation">(</span><span class="token string">"myscheme"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
anotherWebView<span class="token punctuation">.</span>OnMessageReceived <span class="token operator">+</span><span class="token operator">=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Scheme<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
anotherWebView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"myscheme://action"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
<span class="token comment" spellcheck="true">// => "myscheme"</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='path'></div><div class='api-heading' data-id='path'><a href='#path'><span class='return-type'>string</span> Path { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The path of this UniWebViewMessage.</p>
</div>
      <div class='warning custom-block'>
  <p class="custom-block-title">NOTICE</p>
  <p>
        This will be the decoded value for the path of original url.
  </p>
</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp">webView<span class="token punctuation">.</span>OnMessageReceived <span class="token operator">+</span><span class="token operator">=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Scheme<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"uniwebview://action?key=value&amp;anotherKey=value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment" spellcheck="true">// => "action"</span>
<span />
<span class="token comment" spellcheck="true">// Encoded path</span>
webView<span class="token punctuation">.</span>OnMessageReceived <span class="token operator">+</span><span class="token operator">=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Scheme<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"uniwebview://%e8%b7%af%e5%be%84?key=value&amp;anotherKey=value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment" spellcheck="true">// => "路径"</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='args'></div><div class='api-heading' data-id='args'><a href='#args'><span class='return-type'>Dictionary&lt;string, string&gt;</span> Args { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The arguments of this UniWebViewMessage. UniWebView will try to parse the url query into 
a dictionary. </p>
<p>When received url &quot;uniwebview://yourPath?param1=value1&amp;param2=value2&quot;, 
the args is a <code>Dictionary</code> with: Args[&quot;param1&quot;] = value1, Args[&quot;param2&quot;] = value2</p>
</div>
      <div class='warning custom-block'>
  <p class="custom-block-title">NOTICE</p>
  <p>
        Both the key and value will be url decoded from the original url.
  </p>
</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp"><span class="token comment" spellcheck="true">// Basic key-value args</span>
webView<span class="token punctuation">.</span>OnMessageReceived <span class="token operator">+</span><span class="token operator">=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token string">"key"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token string">"anotherKey"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"uniwebview://action?key=value&amp;anotherKey=anotherValue"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment" spellcheck="true">// => "value"</span>
<span class="token comment" spellcheck="true">// => "anotherValue"</span>
<span />
<span class="token comment" spellcheck="true">// With the same key</span>
webView<span class="token punctuation">.</span>OnMessageReceived <span class="token operator">+</span><span class="token operator">=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token string">"key"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UniWebViewMessage</span><span class="token punctuation">(</span><span class="token string">"uniwebview://sample_message?key=1&amp;key=2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment" spellcheck="true">// => "1,2"</span>
<span />
<span class="token comment" spellcheck="true">// With encoded key and value</span>
webView<span class="token punctuation">.</span>OnMessageReceived <span class="token operator">+</span><span class="token operator">=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span>Args<span class="token punctuation">[</span><span class="token string">"键"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UniWebViewMessage</span><span class="token punctuation">(</span>"uniwebview<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>sample_message<span class="token operator">?</span><span class="token operator">%</span>E9<span class="token operator">%</span><span class="token number">94</span><span class="token operator">%</span>AE<span class="token operator">=</span><span class="token operator">%</span>E5<span class="token operator">%</span><span class="token number">80</span><span class="token operator">%</span>BC<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment" spellcheck="true">// => "值"</span>
</code></pre>
</div>
    </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='uniwebviewmessage'></div><div class='api-heading' data-id='uniwebviewmessage'><a href='#uniwebviewmessage'><span class='return-type'></span> UniWebViewMessage(string rawMessage)</a><div class='api-badge api-badge-blue'>constructor</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Initializes a new instance of the <code>UniWebViewMessage</code> struct.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>rawMessage</span></div>
    <div class='parameter-item-desc'><p>Raw message which will be parsed to a <code>UniWebViewMessage</code>.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>

