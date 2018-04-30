# Debugging

### UniWebView Logger

UniWebView could provide detail logs for you, it will help you to understand what happens in UniWWebView

There are 5 log levels, following the order of verbosity, they are:

- Verbose: The most detailed logging level. It prints out almost all events.
- Debug: Good for general debugging purpose. It prints most of events.
- Info: Less logs than Debug level, but will cover quite a few important events.
- Critical: This is the **default value** for built in logger. It only prints out error messages you need to notice.
- Off: Turning off the logger.

`UniWebViewLogger` class takes the resposibility to print log out to console in all platforms. You can set the log level by the code below:

```csharp
// Set the log level to Verbose
UniWebViewLogger.Instance.LogLevel = UniWebViewLogger.Level.Verbose;
```

The log message from UniWebView will start with a tag for each platform: `<UniWebView>`, `<UniWebView-iOS>`, `<UniWebView-Android>`, `<UniWebView-macOS>`. It would be helpful if you want to search in your logs.

For more information on `UniWebViewLogger`, please refer to its [documentation]((/archived/3.2/api/uniwebviewlogger.html).

### Inspecting Web Page

Sometimes, you need to inspect your web page, to modify some DOM, stylesheets, or watching a JavaScript. UniWebView supports to inspect your page in a browser dev tool in Chrome or Safari.

#### iOS

There is no additional step for inspecting pages on iOS. You could just run and show your web page in UniWebView on an iOS device or simulator, then follow the [Safari Web Inspector Guide](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/GettingStarted/GettingStarted.html) to setup your inspector.

#### Android

On Android, you need to call the [`SetWebContentsDebuggingEnabled`](/archived/3.2/api/uniwebview.html?id=setwindowuserresizeenabled) method first. It will allow Chrome to discover and connect to the web view on Android. Follow the [Remote Debugging WebViews](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/webviews) topic to know how to use Chrome DevTools with UniWebView.

#### macOS

On macOS you need to call the [`SetWebContentsDebuggingEnabled`](/archived/3.2/api/uniwebview.html?id=setwindowuserresizeenabled) method first. Then you are able to right click on the web view in macOS editor to bring up the context menu. Select the "Inspect Element" in that menu.

!> Due to a memory bug under WebKit and Unity, it might crash your macOS Editor when you stop playing with an inspector showing embeded in a web view. You could close the inspector first or use it as a standalone window to avoid this. It will only happen in editor and never affect real devices. Please remember to disable this in your product build. This should be only used while development.