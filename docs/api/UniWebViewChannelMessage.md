---
sidebarDepth: 0
---

## UniWebViewChannelMessage

### Summary

A channel message received from the web view's JavaScript Bridge.

Channel messages provide structured, bidirectional communication between web content and Unity.
They support three communication patterns: Send (fire-and-forget), Call (synchronous), and Request (asynchronous).
Each message contains an action identifier, optional JSON data, and metadata for proper routing and response handling.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#id'><span class='return-type'>string</span> <span class='member-name'>id</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Unique identifier for this message.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#timestamp'><span class='return-type'>long</span> <span class='member-name'>timestamp</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Timestamp when the message was created (Unix milliseconds).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#action'><span class='return-type'>string</span> <span class='member-name'>action</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The action type for this message (required).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#data'><span class='return-type'>string</span> <span class='member-name'>data</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The message data as a JSON string (optional).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#messagetype'><span class='return-type'>int</span> <span class='member-name'>messageType</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>The type of this channel message as an integer.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#messagetype'><span class='return-type'>UniWebViewChannelMessageType</span> <span class='member-name'>MessageType</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the strongly-typed message type.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#isfireandforget'><span class='return-type'>bool</span> <span class='member-name'>isFireAndForget</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>True if this is a fire-and-forget message (Send).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#issynccall'><span class='return-type'>bool</span> <span class='member-name'>isSyncCall</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>True if this is a synchronous call (Call).</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#isasyncrequest'><span class='return-type'>bool</span> <span class='member-name'>isAsyncRequest</span> { get; }</a></div></td><td><div class='simple-summary'>
<p>True if this is an asynchronous request (Request).</p>
</div>
</td></tr></table>

#### Methods Summary

<table class='api-summary-table api-summary-table--methods'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#getdata'><span class='return-type'>T</span> <span class='member-name'>GetData</span>&lt;T&gt;()</a></div></td><td><div class='simple-summary'>
<p>Parses the message data as the specified type.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#trygetdata'><span class='return-type'>bool</span> <span class='member-name'>TryGetData</span>&lt;T&gt;(out T result)</a></div></td><td><div class='simple-summary'>
<p>Safely parses the message data as the specified type.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#respond'><span class='return-type'>void</span> <span class='member-name'>Respond</span>(UniWebViewChannelMessageResponse response)</a></div></td><td><div class='simple-summary'>
<p>Sends an async response for this message.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#respond'><span class='return-type'>void</span> <span class='member-name'>Respond</span>(object data)</a></div></td><td><div class='simple-summary'>
<p>Convenience method for success responses.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#responderror'><span class='return-type'>void</span> <span class='member-name'>RespondError</span>(object errorData)</a></div></td><td><div class='simple-summary'>
<p>Convenience method for error responses.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='id'></div><div class='api-heading' data-id='id'><a href='#id'><span class='return-type'>string</span> <span class='member-name'>id</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Unique identifier for this message.</p>
<p>This ID is automatically generated when the message is created and is used internally for response routing.
For asynchronous Request messages, this ID links the original message to its response.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='timestamp'></div><div class='api-heading' data-id='timestamp'><a href='#timestamp'><span class='return-type'>long</span> <span class='member-name'>timestamp</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Timestamp when the message was created (Unix milliseconds).</p>
<p>This value represents the time when the message was created on the JavaScript side,
measured in milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='action'></div><div class='api-heading' data-id='action'><a href='#action'><span class='return-type'>string</span> <span class='member-name'>action</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The action type for this message (required).</p>
<p>This is the primary identifier for determining how to handle the message.
Action names should follow a consistent naming convention in your application.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnChannelMessageReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">"getUserInfo"</span><span class="token punctuation">:</span>
            <span class="token comment">// Handle user info request</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">"saveScore"</span><span class="token punctuation">:</span>
            <span class="token comment">// Handle score saving</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token punctuation">:</span>
            Debug<span class="token punctuation">.</span><span class="token function">LogWarning</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$"Unknown action: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">message<span class="token punctuation">.</span>action</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='data'></div><div class='api-heading' data-id='data'><a href='#data'><span class='return-type'>string</span> <span class='member-name'>data</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The message data as a JSON string (optional).</p>
<p>This property contains the raw JSON string sent from JavaScript.
Use <code>GetData&lt;T&gt;()</code> or <code>TryGetData&lt;T&gt;()</code> methods to parse this data into strongly-typed objects.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='messagetype'></div><div class='api-heading' data-id='messagetype'><a href='#messagetype'><span class='return-type'>int</span> <span class='member-name'>messageType</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The type of this channel message as an integer.</p>
<ul>
<li>0: Send (fire-and-forget)</li>
<li>1: Call (synchronous)</li>
<li>2: Request (asynchronous)</li>
</ul>
<p>Use the <code>MessageType</code> property for a strongly-typed enum value instead of this raw integer.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='messagetype'></div><div class='api-heading' data-id='messagetype'><a href='#messagetype'><span class='return-type'>UniWebViewChannelMessageType</span> <span class='member-name'>MessageType</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the strongly-typed message type.</p>
<p>This property converts the internal <code>messageType</code> integer to the corresponding enum value
for easier type checking and handling.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnChannelMessageReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>MessageType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> UniWebViewChannelMessageType<span class="token punctuation">.</span>Send<span class="token punctuation">:</span>
            <span class="token comment">// Handle fire-and-forget message</span>
            <span class="token function">ProcessSendMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span />
        <span class="token keyword">case</span> UniWebViewChannelMessageType<span class="token punctuation">.</span>Call<span class="token punctuation">:</span>
            <span class="token comment">// Handle synchronous call</span>
            <span class="token keyword">return</span> <span class="token function">ProcessCallMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
        <span class="token keyword">case</span> UniWebViewChannelMessageType<span class="token punctuation">.</span>Request<span class="token punctuation">:</span>
            <span class="token comment">// Handle asynchronous request</span>
            <span class="token function">ProcessRequestMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='isfireandforget'></div><div class='api-heading' data-id='isfireandforget'><a href='#isfireandforget'><span class='return-type'>bool</span> <span class='member-name'>isFireAndForget</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>True if this is a fire-and-forget message (Send).</p>
<p>Send messages don&#39;t expect any response and should return null from the message handler.
They are used for notifications and one-way data transfer.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='issynccall'></div><div class='api-heading' data-id='issynccall'><a href='#issynccall'><span class='return-type'>bool</span> <span class='member-name'>isSyncCall</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>True if this is a synchronous call (Call).</p>
<p>Call messages expect an immediate response that will be returned directly to the JavaScript caller.
The message handler should return a <code>UniWebViewChannelMessageResponse</code> object.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='isasyncrequest'></div><div class='api-heading' data-id='isasyncrequest'><a href='#isasyncrequest'><span class='return-type'>bool</span> <span class='member-name'>isAsyncRequest</span> { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>True if this is an asynchronous request (Request).</p>
<p>Request messages support delayed responses using the <code>Respond()</code> method.
The message handler should return null and call <code>message.Respond()</code> when the operation completes.</p>
</div>
                </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='getdata'></div><div class='api-heading' data-id='getdata'><a href='#getdata'><span class='return-type'>T</span> <span class='member-name'>GetData</span>&lt;T&gt;()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Parses the message data as the specified type.</p>
<p>This method deserializes the JSON data into the specified type using an internal UniWebView JSON utility.
If parsing fails, it returns the default value for the type and logs an error.
For safer parsing with error handling, use <code>TryGetData&lt;T&gt;()</code> instead.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnChannelMessageReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>action <span class="token operator">==</span> <span class="token string">"updateScore"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Direct parsing - may return default(T) if parsing fails</span>
        <span class="token class-name"><span class="token keyword">var</span></span> scoreData <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetData</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>ScoreData<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scoreData <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">UpdateScore</span><span class="token punctuation">(</span>scoreData<span class="token punctuation">.</span>score<span class="token punctuation">,</span> scoreData<span class="token punctuation">.</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span />
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">System<span class="token punctuation">.</span>Serializable</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScoreData</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> score<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> level<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='trygetdata'></div><div class='api-heading' data-id='trygetdata'><a href='#trygetdata'><span class='return-type'>bool</span> <span class='member-name'>TryGetData</span>&lt;T&gt;(out T result)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Safely parses the message data as the specified type.</p>
<p>This method attempts to deserialize the JSON data into the specified type.
Returns true if parsing succeeds, false otherwise. Use this method when you need
explicit error handling for data parsing.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>T</span> <span class='parameter-item-name'>result</span></div>
    <div class='parameter-item-desc'><p>The parsed data object if successful, default(T) if parsing fails.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnChannelMessageReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>action <span class="token operator">==</span> <span class="token string">"processOrder"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Safe parsing with error handling</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">TryGetData</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>OrderData<span class="token punctuation">></span></span></span><span class="token punctuation">(</span><span class="token keyword">out</span> <span class="token class-name"><span class="token keyword">var</span></span> orderData<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">ProcessOrder</span><span class="token punctuation">(</span>orderData<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> UniWebViewChannelMessageResponse<span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span><span class="token string">"Order processed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> UniWebViewChannelMessageResponse<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">"Invalid order data"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='respond'></div><div class='api-heading' data-id='respond'><a href='#respond'><span class='return-type'>void</span> <span class='member-name'>Respond</span>(UniWebViewChannelMessageResponse response)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sends an async response for this message.</p>
<p>This method can only be used with Request messages (asynchronous).
It sends the response back to the JavaScript Promise that&#39;s waiting for the result.
Calling this method on Send or Call messages will log an error and have no effect.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewChannelMessageResponse</span> <span class='parameter-item-name'>response</span></div>
    <div class='parameter-item-desc'><p>The response to send back to JavaScript.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code>webView<span class="token punctuation">.</span>OnChannelMessageReceived <span class="token operator">+=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> message<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>action <span class="token operator">==</span> <span class="token string">"loadGameData"</span> <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">.</span>isAsyncRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Start async operation</span>
        <span class="token function">StartCoroutine</span><span class="token punctuation">(</span><span class="token function">LoadGameDataAsync</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// Return null for async</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span />
<span class="token keyword">private</span> <span class="token return-type class-name">IEnumerator</span> <span class="token function">LoadGameDataAsync</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewChannelMessage</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Simulate loading delay</span>
    <span class="token keyword">yield</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WaitForSeconds</span><span class="token punctuation">(</span><span class="token number">2f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
    <span class="token class-name"><span class="token keyword">var</span></span> gameData <span class="token operator">=</span> <span class="token function">LoadGameFromFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>gameData <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Send success response</span>
        message<span class="token punctuation">.</span><span class="token function">Respond</span><span class="token punctuation">(</span>UniWebViewChannelMessageResponse<span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span>gameData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Send error response</span>
        message<span class="token punctuation">.</span><span class="token function">Respond</span><span class="token punctuation">(</span>UniWebViewChannelMessageResponse<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">"Failed to load game data"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='respond'></div><div class='api-heading' data-id='respond'><a href='#respond'><span class='return-type'>void</span> <span class='member-name'>Respond</span>(object data)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Convenience method for success responses.</p>
<p>This is a shorthand for <code>Respond(UniWebViewChannelMessageResponse.Success(data))</code>.
Use this when you want to send a successful response without explicitly creating a response object.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>object</span> <span class='parameter-item-name'>data</span></div>
    <div class='parameter-item-desc'><p>The data to send back as a successful response.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token keyword">private</span> <span class="token return-type class-name">IEnumerator</span> <span class="token function">ProcessDataAsync</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewChannelMessage</span> message<span class="token punctuation">,</span> <span class="token class-name">UserData</span> userData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Process the data</span>
    <span class="token keyword">yield</span> <span class="token keyword">return</span> <span class="token function">ProcessUserData</span><span class="token punctuation">(</span>userData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
    <span class="token comment">// Send simple success response</span>
    message<span class="token punctuation">.</span><span class="token function">Respond</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token punctuation">{</span>
        success <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        message <span class="token operator">=</span> <span class="token string">"Data processed successfully"</span><span class="token punctuation">,</span>
        userId <span class="token operator">=</span> userData<span class="token punctuation">.</span>id
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='responderror'></div><div class='api-heading' data-id='responderror'><a href='#responderror'><span class='return-type'>void</span> <span class='member-name'>RespondError</span>(object errorData)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Convenience method for error responses.</p>
<p>This is a shorthand for <code>Respond(UniWebViewChannelMessageResponse.Error(errorData))</code>.
Use this when you want to send an error response without explicitly creating a response object.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>object</span> <span class='parameter-item-name'>errorData</span></div>
    <div class='parameter-item-desc'><p>The error data to send back (supports any JSON-compatible type).</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<div class="language-csharp extra-class">
<pre class="language-csharp"><code><span class="token keyword">private</span> <span class="token return-type class-name">IEnumerator</span> <span class="token function">ValidateUserAsync</span><span class="token punctuation">(</span><span class="token class-name">UniWebViewChannelMessage</span> message<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">bool</span></span> isValid <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token keyword">return</span> <span class="token function">CheckUserValidity</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span />
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        message<span class="token punctuation">.</span><span class="token function">Respond</span><span class="token punctuation">(</span><span class="token string">"User is valid"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// Send error response</span>
        message<span class="token punctuation">.</span><span class="token function">RespondError</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token punctuation">{</span>
            code <span class="token operator">=</span> <span class="token number">404</span><span class="token punctuation">,</span>
            message <span class="token operator">=</span> <span class="token string">"User not found"</span><span class="token punctuation">,</span>
            userId <span class="token operator">=</span> userId
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
</div>
    </div>
  </div>
</div>

