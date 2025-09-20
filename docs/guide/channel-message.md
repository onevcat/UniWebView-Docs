# Channel Message System

The Channel Message system provides a modern, efficient way for web pages to communicate with Unity. It offers three distinct communication patterns designed for different use cases.

## Overview

While UniWebView's traditional `uniwebview://` URL scheme messaging continues to work perfectly for simple scenarios, the Channel Message system introduces enhanced capabilities:

- **Better Performance**: Direct bridge communication without URL scheme overhead
- **Bidirectional Communication**: Unity can respond with data back to JavaScript
- **Structured Data**: Native JSON support for complex data types
- **Multiple Patterns**: Choose between fire-and-forget, synchronous, and asynchronous communication

## Communication Patterns

### Send (Fire-and-Forget)

Use `send` when you want to notify Unity about something but don't need a response.

**JavaScript**
```javascript
// Send a simple string
window.uniwebview.send('playerDied', 'Player fell into lava');

// Send structured data
window.uniwebview.send('updateScore', {
    score: 1500,
    level: 3,
    bonus: true
});
```

**Unity**
```csharp
webView.OnChannelMessageReceived += (view, message) => {
    if (message.action == "playerDied") {
        var reason = message.GetData<string>();
        Debug.Log($"Player died: {reason}");

        // For send messages, always return null
        return null;
    }

    if (message.action == "updateScore") {
        var scoreData = message.GetData<ScoreData>();
        UpdateGameScore(scoreData.score, scoreData.level);
        return null;
    }

    return null;
};
```

In the example above, `GetData<T>` is used to extract a strong typed data from the `message`. It requires the data type being a valid `Serializable` with the correct fields:

```csharp
[System.Serializable]
public class ScoreData {
    public int score;
    public int level;
    public bool bonus;
}
```

### Call (Synchronous)

Use `call` when you need immediate data from Unity. The JavaScript execution waits for Unity's response.

**JavaScript**
```javascript
// Get user information synchronously
const userInfo = window.uniwebview.call('getUserInfo', {
    userId: '12345'
});

console.log(`Welcome ${userInfo.userName}!`);

// Get a simple value
const isVipUser = window.uniwebview.call('checkVipStatus');
if (isVipUser) {
    showVipFeatures();
}
```

**Unity**
```csharp
webView.OnChannelMessageReceived += (view, message) => {
    if (message.action == "getUserInfo") {
        var request = message.GetData<UserInfoRequest>();
        var user = GetUserById(request.userId);

        // Return data immediately
        return UniWebViewChannelMessageResponse.Success(user);
    }

    if (message.action == "checkVipStatus") {
        bool isVip = PlayerPrefs.GetInt("isVip", 0) == 1;
        return UniWebViewChannelMessageResponse.Success(isVip);
    }

    return null;
};

[System.Serializable]
public class UserInfoRequest {
    public string userId;
}

[System.Serializable]
public class UserInfo {
    public string userName;
    public int userId;
    public string[] permissions;
}
```

In a sync calling, you need to return either a `UniWebViewChannelMessageResponse.Success` or a `UniWebViewChannelMessageResponse.Error` immediately. When an error is returned, the JavaScript side will have an exception and the web page can `try catch` it. See the [Error Handling](#error-handling) section below to know more about it.

### Request (Asynchronous)

Use `request` when the operation takes time (network calls, file operations, etc.). JavaScript receives a Promise that resolves when Unity responds.

**JavaScript**
```javascript
// Load game data asynchronously
window.uniwebview.request('loadGameData', {
    saveSlot: 1
}).then(gameData => {
    console.log(`Loaded level ${gameData.level} with score ${gameData.score}`);
    initializeGame(gameData);
}).catch(error => {
    console.error('Failed to load game:', error);
    showErrorMessage(error);
});

// With timeout (5 seconds)
window.uniwebview.request('syncToCloud', playerData, 5000)
    .then(() => console.log('Sync successful'))
    .catch(error => console.log('Sync failed:', error));
```

**Unity**
```csharp
webView.OnChannelMessageReceived += (view, message) => {
    if (message.action == "loadGameData") {
        var request = message.GetData<LoadGameRequest>();

        // Start async operation
        StartCoroutine(LoadGameDataAsync(message, request.saveSlot));

        // Return null immediately for async requests
        return null;
    }

    if (message.action == "syncToCloud") {
        var playerData = message.GetData<PlayerData>();
        StartCoroutine(SyncToCloudAsync(message, playerData));
        return null;
    }

    return null;
};

private IEnumerator LoadGameDataAsync(UniWebViewChannelMessage message, int saveSlot) {
    // Simulate loading delay
    yield return new WaitForSeconds(1f);

    var gameData = LoadGameFromSlot(saveSlot);

    if (gameData != null) {
        // Respond with success
        message.Respond(gameData);
    } else {
        // Respond with error
        message.RespondError("Save slot not found");
    }
}

private IEnumerator SyncToCloudAsync(UniWebViewChannelMessage message, PlayerData data) {
    // Attempt cloud sync
    bool success = yield return StartCoroutine(PerformCloudSync(data));

    if (success) {
        message.Respond("Sync completed successfully");
    } else {
        message.RespondError("Network connection failed");
    }
}
```

## Error Handling

### JavaScript Error Handling

An error raised in Unity side will result in a catchable error in JavaScript:

```javascript
// For Request messages (Promise-based)
window.uniwebview.request('riskyOperation')
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
        // error contains the object passed to RespondError()
    });

// Call messages return data directly (no Promise)
try {
    const result = window.uniwebview.call('getData');
    processData(result);
} catch (error) {
    // Handle synchronous errors
    console.error('Call failed:', error);
}
```

### Unity Error Handling

When using either `UniWebViewChannelMessageResponse.Error` or `message.RespondError`, you can choose the error to be a plain string or an object. If you call these methods with a string, a JavaScript [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) object will be thrown in JavaScript; if you call with an object, the object will be thrown:

```csharp
webView.OnChannelMessageReceived += (view, message) => {

    // Sync Call
    return UniWebViewChannelMessageResponse.Error(new {
        reason = "Processing failed",
        details = e.Message
    });
    // JavaScript:
    catch (error) {
        error.reason // "Processing failed"
        error.details // $e.Message
    }

    // Async Request
    message.RespondError("A perfect error reason.")
    // JavaScript:
    .catch(error => {
        error // type is Error
        error.message // A perfect error reason.
    });
};
```

## Best Practices

### Choose the Right Pattern

- **Send**: User interactions, analytics events, simple notifications
- **Call**: Getting current state, validation checks, immediate data retrieval
- **Request**: File operations, network requests, database queries, any time-consuming operations

### Data Validation

```csharp
webView.OnChannelMessageReceived += (view, message) => {
    // Always validate action names
    switch (message.action) {
        case "saveGame":
            if (!message.TryGetData<SaveGameData>(out var saveData)) {
                return UniWebViewChannelMessageResponse.Error("Invalid save data format");
            }

            if (string.IsNullOrEmpty(saveData.playerName)) {
                return UniWebViewChannelMessageResponse.Error("Player name is required");
            }

            // Process valid data...
            break;

        default:
            Debug.LogWarning($"Unknown action: {message.action}");
            break;
    }

    return null;
};
```

### Performance Considerations

```csharp
// Use message type properties to optimize handling
webView.OnChannelMessageReceived += (view, message) => {
    if (message.isFireAndForget) {
        // Handle fire-and-forget messages quickly
        ProcessQuickly(message);
        return null;
    }

    if (message.isSyncCall) {
        // Return immediately for sync calls
        return GetImmediateResponse(message);
    }

    if (message.isAsyncRequest) {
        // Start async processing
        StartAsyncOperation(message);
        return null;
    }

    return null;
};
```

### Calling Thread

To achieve better performance, UniWebView does not change the thread that the OS uses to call the JavaScript. That means, on iOS, the `OnChannelMessageReceived` is called on the main thread; but on Android, it is called in a background thread. If you are trying to access any Unity GameObject or its properties on Android, you may encounter this error:

> <UniWebView> Error in channel message handler: get_isActiveAndEnabled can only be called from the main thread.
>
> Constructors and field initializers will be executed from the loading thread when loading a scene.
>                                                                               > Don't use this function in the constructor or field initializers, instead move initialization code to the Awake or Start function.

To solve this, you can choose either:

1. You can choose to use the `UniWebViewMainThreadDispatcher` to dispatch the method to main thread.

```csharp
Text label;

webView.OnChannelMessageReceived += (view, message) => {
    // This causes thread issue on Android
    // label.text = message.action;
    
    // Wrap it in a dispatcher.
    UniWebViewMainThreadDispatcher.Instance.ExecuteOnMainThread(
        () => label.text = message.action
    );
}
```

2. Or, if you do not want to introduce the dispatcher, you can separate the data and the UI or GameObject actions, only accessing the data in `Update`:

```csharp
string action = ""
Text label;

webView.OnChannelMessageReceived += (view, message) => {
    // This causes thread issue on Android
    // label.text = message.action;
    
    // Instead, just set `action` string and update it later.
    action = message.action;

    // ...
};

void Update() {
    label.text = action
}
```

### Debugging

Enable verbose logging to see all channel message activity:

```csharp
void Start() {
    // Enable detailed logging
    UniWebViewLogger.Instance.LogLevel = UniWebViewLogger.Level.Verbose;
}
```

The logger will output information about:
- Message types and actions received
- Response validation
- Error conditions
- Performance warnings

### Consider Security

If your implementation involves sensitive information such as user personal data or payment details, or if it must meet higher security compliance standards, the default configuration may not provide sufficient protection. 

We strongly recommend reviewing the [Security Consideration](./channel-message-security.md) guide for best practices and advanced topics regarding validation, message signing and key management.