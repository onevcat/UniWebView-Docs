# API Documentation

### [UniWebView](/latest/api/uniwebview.html)

Main class of UniWebView. Any `GameObject` instance with this script represent a webview object in system. Use this class to create, load, show and interact with a web view.

### [UniWebViewMessage](/latest/api/uniwebviewmessage.html)

A structure represents a message from webview.

### [UniWebViewNativeListener](/latest/api/uniwebviewnativelistener.html)

A listener script for message sent from native side of UniWebView. Normally this component will be attached to a sub `GameObject` under the `UniWebView` one.

It will be added automatically and destroyed as needed. So there is rarely a need for you to manipulate on this class.

### [UniWebViewNativeResultPayload](/latest/api/uniwebviewnativeresultpayload.html)

A payload reveived from native side. It contains information to identify the message sender,
as well as some necessary field to bring data from native side to Unity.

### [UniWebViewTransitionEdge](/latest/api/uniwebviewtransitionedge.html)

An enum to identify transition edge from or to when the UniWebView transition happens. You can specify an edge in Show() or Hide() methods of web view.

### [UniWebViewToolbarPosition](/latest/api/uniwebviewtoolbarposition.html)

Toolbar position of webview. You can set the snapping edge for the built-in toolbar in iOS.

### [UniWebViewLogger](/latest/api/uniwebviewlogger.html)

A leveled logger which could log UniWebView related messages in both development environment and final product.

### [UniWebViewHelper](/latest/api/uniwebviewhelper.html)

Provides some helper utility methods for UniWebView.
