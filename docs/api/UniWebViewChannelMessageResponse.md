---
sidebarDepth: 0
---

## UniWebViewChannelMessageResponse

### Summary

Represents a response for a channel message.

This class is used to send structured responses back to JavaScript from Unity.
It supports both success and error responses, with flexible data formats.
Response objects are typically created using the static factory methods `Success()` and `Error()`.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#data'><span class='return-type'>object</span> <span class='member-name'>data</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Response data for successful responses.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#haserror'><span class='return-type'>bool</span> <span class='member-name'>hasError</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Whether this response represents an error.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#errordata'><span class='return-type'>object</span> <span class='member-name'>errorData</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Error data if hasError is true.</p>
</div>
</td></tr></table>

#### Methods Summary

<table class='api-summary-table api-summary-table--methods'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#success'><span class='return-type'>UniWebViewChannelMessageResponse</span> <span class='member-name'>Success</span>(object data)</a></div></td><td><div class='simple-summary'>
<p>Static factory method for success responses.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#error'><span class='return-type'>UniWebViewChannelMessageResponse</span> <span class='member-name'>Error</span>(object errorData)</a></div></td><td><div class='simple-summary'>
<p>Static factory method for error responses.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='data'></div><div class='api-heading' data-id='data'><a href='#data'><span class='return-type'>object</span> <span class='member-name'>data</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Response data for successful responses.</p>
<p>This property contains the data that will be sent back to JavaScript when the response represents success.
For error responses, this property is null.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='haserror'></div><div class='api-heading' data-id='haserror'><a href='#haserror'><span class='return-type'>bool</span> <span class='member-name'>hasError</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Whether this response represents an error.</p>
<p>When true, the response will be delivered to JavaScript as a Promise rejection or error.
When false, the response will be delivered as a successful result.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='errordata'></div><div class='api-heading' data-id='errordata'><a href='#errordata'><span class='return-type'>object</span> <span class='member-name'>errorData</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Error data if hasError is true.</p>
<p>This property contains the error information that will be sent back to JavaScript when the response represents an error.
For success responses, this property is null. Supports any JSON-compatible type.</p>
</div>
                </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='success'></div><div class='api-heading' data-id='success'><a href='#success'><span class='return-type'>UniWebViewChannelMessageResponse</span> <span class='member-name'>Success</span>(object data)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Static factory method for success responses.</p>
<p>Creates a response object that represents a successful operation.
The provided data will be serialized to JSON and sent back to JavaScript.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>object</span> <span class='parameter-item-name'>data</span></div>
    <div class='parameter-item-desc'><p>The data to include in the response. Can be any JSON-serializable type.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnChannelMessageReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>action <span class="token operator">==</span> <span class="token string">"getUserInfo"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> userInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token punctuation">{</span>
            userId <span class="token operator">=</span> <span class="token number">12345</span><span class="token punctuation">,</span>
            userName <span class="token operator">=</span> <span class="token string">"Player1"</span><span class="token punctuation">,</span>
            level <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">,</span>
            score <span class="token operator">=</span> <span class="token number">150000</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span />
        <span class="token comment">// Create success response</span>
        <span class="token keyword">return</span> UniWebViewChannelMessageResponse<span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span>userInfo<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span />
    <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>action <span class="token operator">==</span> <span class="token string">"getSimpleValue"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Success with simple value</span>
        <span class="token keyword">return</span> UniWebViewChannelMessageResponse<span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span><span class="token string">"Hello from Unity!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span />
    <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>action <span class="token operator">==</span> <span class="token string">"getNumberValue"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Success with numeric value</span>
        <span class="token keyword">return</span> UniWebViewChannelMessageResponse<span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span />
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='error'></div><div class='api-heading' data-id='error'><a href='#error'><span class='return-type'>UniWebViewChannelMessageResponse</span> <span class='member-name'>Error</span>(object errorData)</a><div class='api-badge api-badge-blue'>static</div></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Static factory method for error responses.</p>
<p>Creates a response object that represents an error condition.
The provided error data will be serialized to JSON and sent back to JavaScript as a rejection.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>object</span> <span class='parameter-item-name'>errorData</span></div>
    <div class='parameter-item-desc'><p>The error data (supports any JSON-compatible type). Can be a string, object, or any serializable data.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnChannelMessageReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>action <span class="token operator">==</span> <span class="token string">"processPayment"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>message<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">TryGetData</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>PaymentData<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> paymentData<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Return error for invalid data</span>
            <span class="token keyword">return</span> UniWebViewChannelMessageResponse<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token punctuation">{</span>
                code <span class="token operator">=</span> <span class="token string">"INVALID_DATA"</span><span class="token punctuation">,</span>
                message <span class="token operator">=</span> <span class="token string">"Payment data is malformed"</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span />
        <span class="token keyword">if</span> <span class="token punctuation">(</span>paymentData<span class="token punctuation">.</span>amount <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Return error for invalid amount</span>
            <span class="token keyword">return</span> UniWebViewChannelMessageResponse<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token punctuation">{</span>
                code <span class="token operator">=</span> <span class="token string">"INVALID_AMOUNT"</span><span class="token punctuation">,</span>
                message <span class="token operator">=</span> <span class="token string">"Payment amount must be greater than zero"</span><span class="token punctuation">,</span>
                providedAmount <span class="token operator">=</span> paymentData<span class="token punctuation">.</span>amount
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span />
        <span class="token comment">// Return error with simple string</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">IsPaymentMethodValid</span><span class="token punctuation">(</span>paymentData<span class="token punctuation">.</span>method<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> UniWebViewChannelMessageResponse<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">"Invalid payment method"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span />
        <span class="token comment">// Process payment...</span>
        <span class="token keyword">return</span> UniWebViewChannelMessageResponse<span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span><span class="token string">"Payment processed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span />
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

