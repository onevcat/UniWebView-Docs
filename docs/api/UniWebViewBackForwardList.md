---
sidebarDepth: 0
---

## UniWebViewBackForwardList

### Summary

Represents the back-forward navigation history list of a UniWebView instance.
This class manages the browsing history and provides access to previous and next pages.

You do not create an instance of this class directly. Instead, you get an instance of this class to represent the
back-forward list of a UniWebView instance by calling the `CopyBackForwardList` method of the `UniWebView` class.

The content of this class is read-only and fixed when the instance is created. It does not get updated with the
web view's navigation history automatically. If you need the latest navigation history, you should call the method
`CopyBackForwardList` again to get a new instance of this class.

#### Properties Summary

<table class='api-summary-table api-summary-table--properties'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#allitems'><span class='return-type'>List&lt;UniWebViewBackForwardItem&gt;</span> AllItems { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets all items in the back-forward navigation history list.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#currentitem'><span class='return-type'>UniWebViewBackForwardItem</span> CurrentItem { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the current page item in the navigation history.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#backitem'><span class='return-type'>UniWebViewBackForwardItem</span> BackItem { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the previous (back) page item in the navigation history.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#forwarditem'><span class='return-type'>UniWebViewBackForwardItem</span> ForwardItem { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the next (forward) page item in the navigation history.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#currentindex'><span class='return-type'>int</span> CurrentIndex { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the index of current page in the navigation history.</p>
</div>
</td></tr><tr><td><div class='api-summary-heading'><a href='#size'><span class='return-type'>int</span> Size { get; }</a></div></td><td><div class='simple-summary'>
<p>Gets the total number of items in the navigation history.</p>
</div>
</td></tr></table>

#### Methods Summary

<table class='api-summary-table api-summary-table--methods'>
<colgroup><col class='api-summary-table__signature' /><col class='api-summary-table__description' /></colgroup>
<tr><td><div class='api-summary-heading'><a href='#itematindex'><span class='return-type'>UniWebViewBackForwardItem</span> ItemAtIndex(int index)</a></div></td><td><div class='simple-summary'>
<p>Gets the item at the specified index in the navigation history.</p>
</div>
</td></tr></table>

### Properties

<div class='api-box property'>
  <div class="api-anchor" id='allitems'></div><div class='api-heading' data-id='allitems'><a href='#allitems'><span class='return-type'>List&lt;UniWebViewBackForwardItem&gt;</span> AllItems { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets all items in the back-forward navigation history list.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='currentitem'></div><div class='api-heading' data-id='currentitem'><a href='#currentitem'><span class='return-type'>UniWebViewBackForwardItem</span> CurrentItem { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the current page item in the navigation history.</p>
<p>It is the page that is currently displayed in the list. If there is no item in the list, it will return null.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='backitem'></div><div class='api-heading' data-id='backitem'><a href='#backitem'><span class='return-type'>UniWebViewBackForwardItem</span> BackItem { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the previous (back) page item in the navigation history.</p>
<p>Returns null if there is no previous page.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='forwarditem'></div><div class='api-heading' data-id='forwarditem'><a href='#forwarditem'><span class='return-type'>UniWebViewBackForwardItem</span> ForwardItem { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the next (forward) page item in the navigation history.</p>
<p>Returns null if there is no next page.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='currentindex'></div><div class='api-heading' data-id='currentindex'><a href='#currentindex'><span class='return-type'>int</span> CurrentIndex { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the index of current page in the navigation history.</p>
<p>The index is zero-based in the list. If there is no item in the list, it will return -1.</p>
</div>
                </div>
  </div>
</div>
<div class='api-box property'>
  <div class="api-anchor" id='size'></div><div class='api-heading' data-id='size'><a href='#size'><span class='return-type'>int</span> Size { get; }</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the total number of items in the navigation history.</p>
</div>
                </div>
  </div>
</div>

### Methods

<div class='api-box method'>
  <div class="api-anchor" id='itematindex'></div><div class='api-heading' data-id='itematindex'><a href='#itematindex'><span class='return-type'>UniWebViewBackForwardItem</span> ItemAtIndex(int index)</a></div>
  <div class='api-body'>
    <div class='desc'>
      <div class='summary'>
<p>Gets the item at the specified index in the navigation history.</p>
</div>
                  <div class='section-title'>Return Value</div>
<div class='method-return'><p>The navigation item at the specified index, or null if the index is out of range.</p>
</div>
          </div>
  </div>
</div>

