# API Documentation

## UniWebView

#### Properties

<div class='api-box property'>
  <div class='api-heading' id='Frame' data-id='Frame'><a href='#/latest/api?id=Frame'><span class='return-type'>Rect</span> Frame { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Get or Set the frame of current web view. The value is based on current <code>Screen.width</code> and <code>Screen.height</code>.
The first two values of <code>Rect</code> is <code>x</code> and <code>y</code> position and the followed two <code>width</code> and <code>height</code>. The original point is top left corner:</p>
<p><img src="https://docs.unity3d.com/StaticFiles/ScriptRefImages/RectXY.svg" alt=""></p>
</div>
      <p class='tip'>`Frame` will be ignored if `ReferenceRectTransform` is set.</p>
      <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp"><span class="token comment" spellcheck="true">// Make the web view full screen:</span>
webView<span class="token punctuation">.</span>Frame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>width<span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// Make the web view center in the screen with size 500x500:</span>
<span class="token keyword">var</span> side <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">(</span>Screen<span class="token punctuation">.</span>width <span class="token operator">-</span> side<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2.0f</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token punctuation">(</span>Screen<span class="token punctuation">.</span>height <span class="token operator">-</span> side<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2.0f</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span>Frame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rect</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> side<span class="token punctuation">,</span> side<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class='api-heading' id='ReferenceRectTransform' data-id='ReferenceRectTransform'><a href='#/latest/api?id=ReferenceRectTransform'><span class='return-type'>RectTransform</span> ReferenceRectTransform { get; set; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>A reference rect transform which the web view should change its position and size to.</p>
<p>Set it to a Unity UI element (which contains a <code>RectTransform</code>) under a canvas to determine 
the web view frame by a certain UI element. </p>
<p>By using this, you could get benefit from <a href="https://docs.unity3d.com/Manual/HOWTO-UIMultiResolution.html">Multiple Resolutions UI</a>.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp"><span class="token comment" spellcheck="true">// Some panel</span>
RectTransform panel <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

<span class="token comment" spellcheck="true">// Set the web view position and size to match panel</span>
webView<span class="token punctuation">.</span>ReferenceRectTransform <span class="token operator">=</span> panel<span class="token punctuation">;</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class='api-heading' id='Url' data-id='Url'><a href='#/latest/api?id=Url'><span class='return-type'>string</span> Url { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>The url of current loaded web page.</p>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp">webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://example.com/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// Some time later or in "OnPageFinished":</span>
<span class="token function">print</span><span class="token punctuation">(</span>webView<span class="token punctuation">.</span>Url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment" spellcheck="true">// => "https://example.com/"</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box property'>
  <div class='api-heading' id='CanGoBack' data-id='CanGoBack'><a href='#/latest/api?id=CanGoBack'><span class='return-type'>bool</span> CanGoBack { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets whether there is a back page in the back-forward list that can be navigated to.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class='api-heading' id='CanGoForward' data-id='CanGoForward'><a href='#/latest/api?id=CanGoForward'><span class='return-type'>bool</span> CanGoForward { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets whether there is a forward page in the back-forward list that can be navigated to.</p>
</div>
                </div>
  </div>
</div>

#### Methods

<div class='api-box method'>
  <div class='api-heading' id='Load' data-id='Load'><a href='#/latest/api?id=Load'><span class='return-type'>void</span> Load(string url)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Load a url in current web view.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div parameter-item><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>url</span></div>
    <div class='parameter-item-desc'><p>The url to be loaded. This url should start with <code>http://</code> or <code>https://</code> scheme. You could even load a non-ascii url text if it is valid.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp">webView<span class="token punctuation">.</span><span class="token function">Load</span><span class="token punctuation">(</span><span class="token string">"https://example.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class='api-heading' id='LoadHTMLString' data-id='LoadHTMLString'><a href='#/latest/api?id=LoadHTMLString'><span class='return-type'>void</span> LoadHTMLString(string htmlString, string baseUrl)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Load an HTML string in current web view.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div parameter-item><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>htmlString</span></div>
    <div class='parameter-item-desc'><p>The HTML string to use as the contents of the webpage.</p>
</div>
  </li>
  <li>
    <div parameter-item><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>baseUrl</span></div>
    <div class='parameter-item-desc'><p>The url to use as the page&#39;s base url.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp">webView<span class="token punctuation">.</span><span class="token function">LoadHTMLString</span><span class="token punctuation">(</span><span class="token string">"&lt;p>Hello World&lt;/p>"</span><span class="token punctuation">,</span> <span class="token string">"https://domain.com"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class='api-heading' id='Reload' data-id='Reload'><a href='#/latest/api?id=Reload'><span class='return-type'>void</span> Reload()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Reloads the current page.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class='api-heading' id='Stop' data-id='Stop'><a href='#/latest/api?id=Stop'><span class='return-type'>void</span> Stop()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Stops loading all resources on the current page.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class='api-heading' id='GoBack' data-id='GoBack'><a href='#/latest/api?id=GoBack'><span class='return-type'>void</span> GoBack()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Navigates to the back item in the back-forward list.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp"><span class="token keyword">if</span> <span class="token punctuation">(</span>webView<span class="token punctuation">.</span>CanGoBack<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    webView<span class="token punctuation">.</span><span class="token function">GoBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class='api-heading' id='GoForward' data-id='GoForward'><a href='#/latest/api?id=GoForward'><span class='return-type'>void</span> GoForward()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Navigates to the forward item in the back-forward list.</p>
</div>
                        <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp"><span class="token keyword">if</span> <span class="token punctuation">(</span>webView<span class="token punctuation">.</span>CanGoForward<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    webView<span class="token punctuation">.</span><span class="token function">GoForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class='api-heading' id='SetOpenLinksInExternalBrowser' data-id='SetOpenLinksInExternalBrowser'><a href='#/latest/api?id=SetOpenLinksInExternalBrowser'><span class='return-type'>void</span> SetOpenLinksInExternalBrowser(bool flag)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets whether the link clicking in the web view should open the page in an external browser.</p>
<p>By default, when user clicks a link, it will be opened in the same web view. After setting this with <code>true</code>, 
the user will be navigated to an external native browser.</p>
<p>On iOS, the mobile Safari; on Android, the default browser like Chrome; on macOS Editor, the default browser of your system will be used.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div parameter-item><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>flag</span></div>
    <div class='parameter-item-desc'><p>The flag indicates whether a link should be opened externally.</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp"><span class="token comment" spellcheck="true">// You may want to set it in OnPageFinished event, </span>
<span class="token comment" spellcheck="true">// otherwise the original page will be also opened externally</span>
webView<span class="token punctuation">.</span>OnPageFinished <span class="token operator">+</span><span class="token operator">=</span> <span class="token punctuation">(</span>view<span class="token punctuation">,</span> statusCode<span class="token punctuation">,</span> url<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    webView<span class="token punctuation">.</span><span class="token function">SetOpenLinksInExternalBrowser</span><span class="token punctuation">(</span><span class="token keyword">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class='api-heading' id='Show' data-id='Show'><a href='#/latest/api?id=Show'><span class='return-type'>bool</span> Show(bool fade, UniWebViewTransitionEdge edge, float duration, Action completionHandler)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the web view visible on screen.</p>
<p>If you pass <code>false</code> and <code>UniWebViewTransitionEdge.None</code> to the first two parameters, it means no animation 
will be applied when showing. So the <code>duration</code> parameter will not be taken into account. Otherwise, when 
either or both <code>fade</code> and <code>edge</code> set, the showing operation will be animated.</p>
<p>Regardless of there is an animation or not, the <code>completionHandler</code> will be called if not <code>null</code> when the web view
showing finishes.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div parameter-item><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>fade</span></div>
    <div class='parameter-item-desc'><p>Whether show with a fade in animation. Default is <code>false</code>.</p>
</div>
  </li>
  <li>
    <div parameter-item><span class='parameter-item-type'>UniWebViewTransitionEdge</span> <span class='parameter-item-name'>edge</span></div>
    <div class='parameter-item-desc'><p>The edge from which the web view showing. It simulates a modal effect when showing a web view. Default is <code>UniWebViewTransitionEdge.None</code>.</p>
</div>
  </li>
  <li>
    <div parameter-item><span class='parameter-item-type'>float</span> <span class='parameter-item-name'>duration</span></div>
    <div class='parameter-item-desc'><p>Duration of showing animation. Default is <code>0.4f</code>.</p>
</div>
  </li>
  <li>
    <div parameter-item><span class='parameter-item-type'>Action</span> <span class='parameter-item-name'>completionHandler</span></div>
    <div class='parameter-item-desc'><p>Completion handler which will be called when showing finishes. Default is <code>null</code>.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'>A `bool` value indicates whether the showing operation started.</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp"><span class="token comment" spellcheck="true">// Show the web view without animation</span>
webView<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// Show the web view with a fade animation</span>
webView<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token keyword">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// Show the web view with a modal presenting animation from screen bottom</span>
webView<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token keyword">false</span><span class="token punctuation">,</span> UniWebViewTransitionEdge<span class="token punctuation">.</span>Bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// Print a message after the web view shown with animation</span>
webView<span class="token punctuation">.</span><span class="token function">Show</span><span class="token punctuation">(</span><span class="token keyword">true</span><span class="token punctuation">,</span> UniWebViewTransitionEdge<span class="token punctuation">.</span>Top<span class="token punctuation">,</span> <span class="token number">0.25f</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Show transition finished!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class='api-heading' id='Hide' data-id='Hide'><a href='#/latest/api?id=Hide'><span class='return-type'>bool</span> Hide(bool fade, UniWebViewTransitionEdge edge, float duration, Action completionHandler)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the web view invisible from screen.</p>
<p>If you pass <code>false</code> and <code>UniWebViewTransitionEdge.None</code> to the first two parameters, it means no animation 
will be applied when hiding. So the <code>duration</code> parameter will not be taken into account. Otherwise, when 
either or both <code>fade</code> and <code>edge</code> set, the hiding operation will be animated.</p>
<p>Regardless there is an animation or not, the <code>completionHandler</code> will be called if not <code>null</code> when the web view
hiding finishes.</p>
</div>
      <p class='tip'>Hiding the web view does not destroy or release it. You could always call `Show` on the web view again to make it visible.

To release a web view and its resource, pass the web view component as the parameter of `Destroy`.
</p>
      <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div parameter-item><span class='parameter-item-type'>bool</span> <span class='parameter-item-name'>fade</span></div>
    <div class='parameter-item-desc'><p>Whether hide with a fade in animation. Default is <code>false</code>.</p>
</div>
  </li>
  <li>
    <div parameter-item><span class='parameter-item-type'>UniWebViewTransitionEdge</span> <span class='parameter-item-name'>edge</span></div>
    <div class='parameter-item-desc'><p>The edge from which the web view hiding. It simulates a modal effect when hiding a web view. Default is <code>UniWebViewTransitionEdge.None</code>.</p>
</div>
  </li>
  <li>
    <div parameter-item><span class='parameter-item-type'>float</span> <span class='parameter-item-name'>duration</span></div>
    <div class='parameter-item-desc'><p>Duration of hiding animation. Default is <code>0.4f</code>.</p>
</div>
  </li>
  <li>
    <div parameter-item><span class='parameter-item-type'>Action</span> <span class='parameter-item-name'>completionHandler</span></div>
    <div class='parameter-item-desc'><p>Completion handler which will be called when hiding finishes. Default is <code>null</code>.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'>A `bool` value indicates whether the hiding operation started.</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp"><span class="token comment" spellcheck="true">// Hide the web view without animation</span>
webView<span class="token punctuation">.</span><span class="token function">Hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// Hide the web view with a fade animation</span>
webView<span class="token punctuation">.</span><span class="token function">Hide</span><span class="token punctuation">(</span><span class="token keyword">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// Hide the web view with a modal presenting animation from screen bottom</span>
webView<span class="token punctuation">.</span><span class="token function">Hide</span><span class="token punctuation">(</span><span class="token keyword">false</span><span class="token punctuation">,</span> UniWebViewTransitionEdge<span class="token punctuation">.</span>Bottom<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment" spellcheck="true">// Print a message after the web view hidden with animation</span>
webView<span class="token punctuation">.</span><span class="token function">Hide</span><span class="token punctuation">(</span><span class="token keyword">true</span><span class="token punctuation">,</span> UniWebViewTransitionEdge<span class="token punctuation">.</span>Top<span class="token punctuation">,</span> <span class="token number">0.25f</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Hide transition finished!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class='api-heading' id='AnimateTo' data-id='AnimateTo'><a href='#/latest/api?id=AnimateTo'><span class='return-type'>bool</span> AnimateTo(Rect frame, float duration, float delay, Action completionHandler)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Animates the web view from current <code>Frame</code> (position and size) to another <code>Frame</code> (position and size) within <code>duration</code>.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div parameter-item><span class='parameter-item-type'>Rect</span> <span class='parameter-item-name'>frame</span></div>
    <div class='parameter-item-desc'><p>The new <code>Frame</code> which the web view should be.</p>
</div>
  </li>
  <li>
    <div parameter-item><span class='parameter-item-type'>float</span> <span class='parameter-item-name'>duration</span></div>
    <div class='parameter-item-desc'><p>Duration of the animation.</p>
</div>
  </li>
  <li>
    <div parameter-item><span class='parameter-item-type'>float</span> <span class='parameter-item-name'>delay</span></div>
    <div class='parameter-item-desc'><p>Delay before the animation begins. Default is <code>0.0f</code>, which means the animation will start immediately.</p>
</div>
  </li>
  <li>
    <div parameter-item><span class='parameter-item-type'>Action</span> <span class='parameter-item-name'>completionHandler</span></div>
    <div class='parameter-item-desc'><p>Completion handler which will be called when animation finishes. Default is <code>null</code>.</p>
</div>
  </li>
</ul></div>
</div>
      <div class='section-title'>Return Value</div>
<div class='method-return'>A `bool` value indicates whether the animation started.</div>
      <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp"><span class="token comment" spellcheck="true">// Animate current web view to cover half of the screen.</span>
<span class="token keyword">var</span> halfScreen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> Screen<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
webView<span class="token punctuation">.</span><span class="token function">AnimateTo</span><span class="token punctuation">(</span>halfScreen<span class="token punctuation">,</span> <span class="token number">0.4f</span><span class="token punctuation">,</span> <span class="token number">0.1f</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"Aniamtion finished!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
    </div>
  </div>
</div>
<div class='api-box method'>
  <div class='api-heading' id='AddJavaScript' data-id='AddJavaScript'><a href='#/latest/api?id=AddJavaScript'><span class='return-type'>void</span> AddJavaScript(string jsString, Action&lt;UniWebViewNativeResultPayload&gt; completionHandler)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Adds a JavaScript to current page. Normally, you add a JavaScript function with this method.</p>
<p>The input <code>jsString</code> will be executed by current web view. If succeeded, the input JavaScript code will &quot;inject&quot; 
to the web view and a <code>UniWebViewNativeResultPayload</code> with <code>resultCode</code> being &quot;0&quot; will passed to the <code>completionHandler</code>.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div parameter-item><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>jsString</span></div>
    <div class='parameter-item-desc'><p>The JavaScript code be added. It should be a valid JavaScript statement.</p>
</div>
  </li>
  <li>
    <div parameter-item><span class='parameter-item-type'>Action&lt;UniWebViewNativeResultPayload&gt;</span> <span class='parameter-item-name'>completionHandler</span></div>
    <div class='parameter-item-desc'><p>An action with a payload which indicates the adding result. If everything goes fine and the <code>jsString</code> added to current web view, <code>resultCode</code> would be &quot;0&quot;</p>
</div>
  </li>
</ul></div>
</div>
            <div class='example'>
    <p class='example-title'>Example</p>
<pre v-pre="" data-lang="csharp"><code class="lang-csharp">webView<span class="token punctuation">.</span><span class="token function">AddJavaScript</span><span class="token punctuation">(</span><span class="token string">"function add() { return 1 + 2; }"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token operator">=</span><span class="token operator">></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>resultCode<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span><span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">"JavaScript adding finished without problem."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
</div>
    </div>
  </div>
</div>

