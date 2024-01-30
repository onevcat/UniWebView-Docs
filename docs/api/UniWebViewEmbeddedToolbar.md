---
sidebarDepth: 0
---

## UniWebViewEmbeddedToolbar

### Summary

Represents the embedded toolbar in a web view.

You do not create an instance of this class directly. Instead, use the `EmbeddedWebView` property in `UniWebView` to
get the current embedded toolbar in the web view and interact with it.

The embedded toolbar of a web view expands its width to match the web view's frame width. It is displayed at either
top or bottom of the web view, based on the setting received through `SetPosition`. By default, the toolbar contains
a main title, a back button, a forward button and a done button to close the web view. You can use methods in this
class to customize the toolbar to match your app's style. 

#### Methods Summary

<table>
<tr><td><div class='api-summary-heading'><a href='#setposition'><span class='return-type'>void</span> SetPosition(UniWebViewToolbarPosition position)</a></div></td><td><div class='simple-summary'>
<p>Sets the position of the embedded toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#show'><span class='return-type'>void</span> Show()</a></div></td><td><div class='simple-summary'>
<p>Shows the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#hide'><span class='return-type'>void</span> Hide()</a></div></td><td><div class='simple-summary'>
<p>Hides the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setdonebuttontext'><span class='return-type'>void</span> SetDoneButtonText(string text)</a></div></td><td><div class='simple-summary'>
<p>Sets the text of the done button.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setgobackbuttontext'><span class='return-type'>void</span> SetGoBackButtonText(string text)</a></div></td><td><div class='simple-summary'>
<p>Sets the text of the back button.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setgoforwardbuttontext'><span class='return-type'>void</span> SetGoForwardButtonText(string text)</a></div></td><td><div class='simple-summary'>
<p>Sets the text of the forward button.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settitletext'><span class='return-type'>void</span> SetTitleText(string text)</a></div></td><td><div class='simple-summary'>
<p>Sets the text of toolbar title.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setbackgroundcolor'><span class='return-type'>void</span> SetBackgroundColor(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the background color of the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#setbuttontextcolor'><span class='return-type'>void</span> SetButtonTextColor(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the buttons color of the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#settitletextcolor'><span class='return-type'>void</span> SetTitleTextColor(Color color)</a></div></td><td><div class='simple-summary'>
<p>Sets the text color of the toolbar title.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#hidenavigationbuttons'><span class='return-type'>void</span> HideNavigationButtons()</a></div></td><td><div class='simple-summary'>
<p>Hides the navigation buttons on the toolbar.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#shownavigationbuttons'><span class='return-type'>void</span> ShowNavigationButtons()</a></div></td><td><div class='simple-summary'>
<p>Shows the navigation buttons on the toolbar.</p>
</div>
</td></tr></table>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='setposition'></div><div class='api-heading' data-id='setposition'><a href='#setposition'><span class='return-type'>void</span> SetPosition(UniWebViewToolbarPosition position)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the position of the embedded toolbar. You can put the toolbar at either top or bottom of your web view.</p>
<p>The default position is <code>Top</code>.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>UniWebViewToolbarPosition</span> <span class='parameter-item-name'>position</span></div>
    <div class='parameter-item-desc'><p>The desired position of the toolbar.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='show'></div><div class='api-heading' data-id='show'><a href='#show'><span class='return-type'>void</span> Show()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Shows the toolbar.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='hide'></div><div class='api-heading' data-id='hide'><a href='#hide'><span class='return-type'>void</span> Hide()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Hides the toolbar.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setdonebuttontext'></div><div class='api-heading' data-id='setdonebuttontext'><a href='#setdonebuttontext'><span class='return-type'>void</span> SetDoneButtonText(string text)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the text of the done button. </p>
<p>The default text is &quot;Done&quot;.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>text</span></div>
    <div class='parameter-item-desc'><p>The desired text to display as the done button.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setgobackbuttontext'></div><div class='api-heading' data-id='setgobackbuttontext'><a href='#setgobackbuttontext'><span class='return-type'>void</span> SetGoBackButtonText(string text)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the text of the back button. </p>
<p>The default text is &quot;❮&quot; (&quot;❮&quot;).</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>text</span></div>
    <div class='parameter-item-desc'><p>The desired text to display as the back button.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setgoforwardbuttontext'></div><div class='api-heading' data-id='setgoforwardbuttontext'><a href='#setgoforwardbuttontext'><span class='return-type'>void</span> SetGoForwardButtonText(string text)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the text of the forward button.</p>
<p>The default text is &quot;❯&quot; (&quot;❯&quot;).</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>text</span></div>
    <div class='parameter-item-desc'><p>The desired text to display as the forward button.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settitletext'></div><div class='api-heading' data-id='settitletext'><a href='#settitletext'><span class='return-type'>void</span> SetTitleText(string text)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the text of toolbar title. </p>
<p>The default is empty. The space is limited, setting a long text as title might
not fit in the space.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>string</span> <span class='parameter-item-name'>text</span></div>
    <div class='parameter-item-desc'><p>The desired text to display as the title in the toolbar.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setbackgroundcolor'></div><div class='api-heading' data-id='setbackgroundcolor'><a href='#setbackgroundcolor'><span class='return-type'>void</span> SetBackgroundColor(Color color)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the background color of the toolbar.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>The desired color of toolbar&#39;s background.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='setbuttontextcolor'></div><div class='api-heading' data-id='setbuttontextcolor'><a href='#setbuttontextcolor'><span class='return-type'>void</span> SetButtonTextColor(Color color)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the buttons color of the toolbar. </p>
<p>This color affects the back, forward and done button.</p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>The desired color of toolbar&#39;s buttons.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='settitletextcolor'></div><div class='api-heading' data-id='settitletextcolor'><a href='#settitletextcolor'><span class='return-type'>void</span> SetTitleTextColor(Color color)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Sets the text color of the toolbar title. </p>
</div>
            <div class='parameters'>
<div class='section-title'>Parameters</div>
<div class='parameter-item-list'><ul>
  <li>
    <div class='parameter-item'><span class='parameter-item-type'>Color</span> <span class='parameter-item-name'>color</span></div>
    <div class='parameter-item-desc'><p>The desired color of the toolbar&#39;s title.</p>
</div>
  </li>
</ul></div>
</div>
                </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='hidenavigationbuttons'></div><div class='api-heading' data-id='hidenavigationbuttons'><a href='#hidenavigationbuttons'><span class='return-type'>void</span> HideNavigationButtons()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Hides the navigation buttons on the toolbar. </p>
<p>When called, the back button and forward button will not be shown. 
By default, the navigation buttons are shown.</p>
</div>
                            </div>
  </div>
</div>
<div class='api-box method'>
  <div class="api-anchor" id='shownavigationbuttons'></div><div class='api-heading' data-id='shownavigationbuttons'><a href='#shownavigationbuttons'><span class='return-type'>void</span> ShowNavigationButtons()</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Shows the navigation buttons on the toolbar. </p>
<p>When called, the back button and forward button will be shown.
By default, the navigation buttons are shown.</p>
</div>
                            </div>
  </div>
</div>

