# Downloading Files

Normally, UniWebView will render the content of the visited page (e.g. HTML). However, if the response provided by the server is a non-renderable content like a binary file, UniWebView will try to download the file corresponding to the URL instead.

The file download should work correctly without any additional configuration. However, there are some differences in the file downloading behavior between iOS and Android due to the differences in how they handle file download requests. This document will explain this topic.

## Android

For Android, there are not many configurable options.

When accepting a resource that cannot be rendered, UniWebView will pop up a dialog asking the user for the file name they wish to use. By default, the file name will be read from the `Content-Disposition` header of the received response. After confirming the file name, the file will be stored in the app's `Download` folder. Users can find the downloaded file by accessing `Download` through the Notification Center banner or Android's File app.

## iOS

Unlike Android, Web View on iOS has a more powerful rendering engine and a more rigid file system. As a result, we need to provide more customization options for iOS.

### Inspecting URLs and MIME types

Some files can be rendered directly in the iOS web view, but not in Android. For example, a PDF document: in the Android web view, the PDF document will trigger the download behavior, while in iOS, the web view will try to load and display the content. In most cases, this is probably the result you want. However, if you want to keep the download behavior consistent between iOS and Android, you can set the URL and MIME type that needs to be downloaded on iOS.

UniWebView maintains two lists on iOS: the URL that needs to trigger a download, and the MIME type that needs to trigger a download. iOS UniWebView will determine if a download is to be performed in the following order:

1. Whether the requested URL is in the URL list.
2. Whether the MIME type of the response is in the MIME type list.
3. Whether the MIME type of the response is a type that can be rendered.

If any one of the three conditions is `true`, UniWebView will pop up a dialog asking the user for the file name and download it.

Here is an example of adding items to the lists and its result on iOS:

```csharp
// Instead of rendering the image.png in the web view, this will trigger a download of the image at this specified URL.
webView.AddDownloadURL("https://example.com/image.png");
webView.Load("https://example.com/image.png");

// Instead of rendering the PDF in web view, this will trigger a download of all PDF files,
// if the response contains a `application/pdf` content type header.
webView.AddDownloadMIMEType("application/pdf");
webView.Load("https://example.com/receipt.pdf");

// For the types that cannot be rendered, a download will be triggered without any configuration.
webView.Load("https://example.com/files.zip");
```

### Post-Downloading Action

The file permission on iOS is much stricter than on Android. Although the downloaded files are stored temporarily in your app's sandbox folder, your user cannot browse them directly before they choose to move these files to another location (eg. iCloud Disk or Dropbox) or another app (eg. File app of iOS). By default, UniWebView will show a system default share panel to let the user choose where to send the files to. Like this:

![](/images/file-share.png)

If you do not want to let user choose an action after downloading on iOS, call:

```csharp
webView.SetAllowUserChooseActionAfterDownloading(false);
```

## Download Events

UniWebView will rise some events related to the download task.

To observe the start of downloading, listen to the `OnFileDownloadStarted` event. For the finishes event, use `OnFileDownloadFinished`:

```swift
webView.OnFileDownloadStarted += (view, remoteUrl, fileName) => {
    Debug.Log(string.Format("Download Started. From '{0}', file name '{1}'", remoteUrl, fileName));
};

webView.OnFileDownloadFinished += (view, errorCode, remoteUrl, diskPath) => {
    if (errorCode == 0) { // Success
        Debug.Log(string.Format("Download Finished. From '{0}', to '{1}'", remoteUrl, diskPath));
    } else {
        Debug.LogError("Download error: " + errorCode);
    }
};
```

The `OnFileDownloadFinished` will be called when either the download succeeds or fails. When failure, a non-zero `errorCode`
will be contained in the event callback body. This code varies based on the platform. On iOS or macOS editor, it is usually
the `errorCode` of a received [`NSURLError`](https://developer.apple.com/documentation/foundation/urlerror) object.
While on Android, it is usually an error case in [`DownloadManager`](https://developer.android.com/reference/android/app/DownloadManager),
which starts with `ERROR_`. For example, [`1004` for `ERROR_HTTP_DATA_ERROR`](https://developer.android.com/reference/android/app/DownloadManager#ERROR_HTTP_DATA_ERROR).

If you need to handle these errors, write code for different cases for different platforms.

## Some Limitation

On iOS, there is no system-level web view downloading support. So UniWebView starts a new standalone GET request to the URL to start a download.
That means you have to host your downloadable content in a GET request instead of using a POST (say, downloading after submitting an HTML form with POST request).

The stored cookies for the downloading URL and [customized headers](/api/#setheaderfield) will be applied to download tasks.
So if you need to implement some authentication when downloading, use either or both to identify your users, and provide the downloadable content with a GET request.
