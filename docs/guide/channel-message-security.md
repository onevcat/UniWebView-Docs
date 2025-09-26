# Channel Message Security

Channel Messages provide a communication bridge between web content and Unity. Meanwhile, it exposes another layer that the attackers might use. This guide covers security considerations and best practices for production applications.

## Security Overview

While the Channel Messaging System provides a flexible communication bridge, implementing proper security measures is your responsibility and it depends on how secure you'd like the system becomes.

This guide recommends the following security practices:

- **Origin Validation**: Implement checks to verify message sources and prevent unauthorized communication
- **Input Sanitization**: Always validate and sanitize incoming data to protect against injection attacks
- **Message Authentication**: Consider using cryptographic signatures for sensitive operations
- **Replay Protection**: Implement nonce-based systems when replay attacks are a concern
- **Safe Data Handling**: Follow secure coding practices to prevent XSS and other vulnerabilities

It is not a must at all to use the Channel Messaging System. However, if your implementation involves sensitive information such as user personal data or payment details, or if it must meet higher security compliance standards, the default configuration may not provide sufficient protection.

In the following section, we have listed some common practices that can enhance security for your reference.

## Basic Security Principles

### 1. Validate All Input

Never trust data from web content. Always validate and sanitize incoming messages:

```csharp
webView.OnChannelMessageReceived += (view, message) => {
    // Validate action names
    if (string.IsNullOrEmpty(message.action)) {
        Debug.LogWarning("Received message with empty action");
        return UniWebViewChannelMessageResponse.Error("Invalid action");
    }

    // Whitelist allowed actions
    var allowedActions = new HashSet<string> {
        "saveProgress", "loadGameData", "updateSettings"
    };

    if (!allowedActions.Contains(message.action)) {
        Debug.LogWarning($"Unauthorized action attempted: {message.action}");
        return UniWebViewChannelMessageResponse.Error("Action not allowed");
    }

    // Validate data structure
    if (message.action == "saveProgress") {
        if (!message.TryGetData<SaveProgressData>(out var data)) {
            return UniWebViewChannelMessageResponse.Error("Invalid data format");
        }

        if (data.playerId <= 0 || string.IsNullOrEmpty(data.levelName)) {
            return UniWebViewChannelMessageResponse.Error("Missing required fields");
        }

        // Process validated data...
    }

    return null;
};
```

### 2. Implement URL Validation

For sensitive operations, verify that messages come from trusted origins. Also, always use HTTPs to ensure the connection is safe:

```csharp
public class SecureChannelHandler {
    private readonly HashSet<string> trustedOrigins = new HashSet<string> {
        "https://yourgame.com",
        "https://cdn.yourgame.com",
        "https://api.yourgame.com"
    };

    public UniWebViewChannelMessageResponse HandleMessage(UniWebView webView, UniWebViewChannelMessage message) {
        // Get current URL
        string currentUrl = webView.Url;

        if (!IsOriginTrusted(currentUrl)) {
            Debug.LogWarning($"Message from untrusted origin: {currentUrl}");
            return UniWebViewChannelMessageResponse.Error("Untrusted origin");
        }

        // Handle trusted message...
        return ProcessTrustedMessage(message);
    }

    private bool IsOriginTrusted(string url) {
        if (string.IsNullOrEmpty(url)) return false;

        try {
            var uri = new System.Uri(url);
            var origin = $"{uri.Scheme}://{uri.Host}";
            return trustedOrigins.Contains(origin);
        } catch {
            return false;
        }
    }
}
```

### 3. Secure Sensitive Data

Never expose sensitive information unnecessarily:

```csharp
webView.OnChannelMessageReceived += (view, message) => {
    if (message.action == "getUserInfo") {
        var userInfo = GetUserInfo();

        // Return only safe, public information
        var safeUserInfo = new {
            displayName = userInfo.displayName,
            level = userInfo.level,
            publicAchievements = userInfo.publicAchievements
            // DON'T include: passwords, tokens, private data
        };

        return UniWebViewChannelMessageResponse.Success(safeUserInfo);
    }

    return null;
};
```

## Advanced Security Features

### Message Authentication with Digital Signatures

For high-security applications, implement cryptographic message verification. Using a private key on your server to sign the message, and verify it in Unity side with the public key.

Here is some basic concept and pseudo code about how to perform it.

```csharp
using System.Security.Cryptography;
using System.Text;

public class SignedMessageHandler {
    private RSA publicKey;

    public void Initialize() {
        // Load your public key (private key stays on your server)
        publicKey = LoadPublicKey();
    }

    public UniWebViewChannelMessageResponse HandleSignedMessage(UniWebView webView, UniWebViewChannelMessage message) {
        if (message.action == "secureTransaction") {
            if (!message.TryGetData<SignedMessage>(out var signedData)) {
                return UniWebViewChannelMessageResponse.Error("Invalid message format");
            }

            // Verify signature
            if (!VerifySignature(signedData.payload, signedData.signature)) {
                Debug.LogWarning("Message signature verification failed");
                return UniWebViewChannelMessageResponse.Error("Invalid signature");
            }

            // Process verified message
            return ProcessSecureTransaction(signedData.payload);
        }

        return null;
    }

    private bool VerifySignature(string payload, string signature) {
        try {
            byte[] payloadBytes = Encoding.UTF8.GetBytes(payload);
            byte[] signatureBytes = System.Convert.FromBase64String(signature);

            return publicKey.VerifyData(payloadBytes, signatureBytes, HashAlgorithmName.SHA256, RSASignaturePadding.Pkcs1);
        } catch {
            return false;
        }
    }
}

[System.Serializable]
public class SignedMessage {
    public string payload;    // The actual message data
    public string signature;  // Base64-encoded signature
    public long timestamp;    // Message timestamp
    public string nonce;      // Unique nonce to prevent replay
}
```

### Nonce-Based Replay Protection

Prevent replay attacks by tracking used nonces:

```csharp
public class ReplayProtectionHandler {
    private readonly HashSet<string> usedNonces = new HashSet<string>();
    private readonly Queue<(string nonce, DateTime timestamp)> nonceHistory = new Queue<(string, DateTime)>();
    private readonly TimeSpan nonceLifetime = TimeSpan.FromMinutes(10);

    public UniWebViewChannelMessageResponse HandleMessage(UniWebView webView, UniWebViewChannelMessage message) {
        if (message.TryGetData<NonceMessage>(out var nonceData)) {
            // Clean expired nonces
            CleanExpiredNonces();

            // Check for replay
            if (usedNonces.Contains(nonceData.nonce)) {
                Debug.LogWarning($"Replay attack detected: nonce {nonceData.nonce} already used");
                return UniWebViewChannelMessageResponse.Error("Message replay detected");
            }

            // Validate timestamp (prevent very old messages)
            var messageTime = DateTimeOffset.FromUnixTimeMilliseconds(message.timestamp).DateTime;
            if (DateTime.UtcNow - messageTime > nonceLifetime) {
                Debug.LogWarning("Message too old, rejecting");
                return UniWebViewChannelMessageResponse.Error("Message expired");
            }

            // Record nonce
            usedNonces.Add(nonceData.nonce);
            nonceHistory.Enqueue((nonceData.nonce, DateTime.UtcNow));

            // Process unique message
            return ProcessUniqueMessage(nonceData);
        }

        return null;
    }

    private void CleanExpiredNonces() {
        var cutoffTime = DateTime.UtcNow - nonceLifetime;

        while (nonceHistory.Count > 0 && nonceHistory.Peek().timestamp < cutoffTime) {
            var expired = nonceHistory.Dequeue();
            usedNonces.Remove(expired.nonce);
        }
    }
}

[System.Serializable]
public class NonceMessage {
    public string nonce;      // Unique identifier (UUID recommended)
    public string action;     // The actual action
    public object data;       // Message payload
}
```

## JavaScript Security Best Practices

### 1. Generate Secure Nonces

```javascript
// Generate cryptographically secure nonces
function generateNonce() {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

// Use nonces in sensitive messages
function sendSecureMessage(action, data) {
  const message = {
    nonce: generateNonce(),
    timestamp: Date.now(),
    action: action,
    data: data,
  };

  return window.uniwebview.request("secureAction", message);
}
```

### 2. Input Validation

```javascript
// Validate data before sending
function sendUserData(userData) {
  // Client-side validation (note: always validate server-side too)
  if (!userData.username || userData.username.length < 3) {
    throw new Error("Username must be at least 3 characters");
  }

  if (!isValidEmail(userData.email)) {
    throw new Error("Invalid email format");
  }

  // Sanitize input
  const sanitizedData = {
    username: sanitizeString(userData.username),
    email: sanitizeString(userData.email),
    preferences: sanitizeObject(userData.preferences),
  };

  return window.uniwebview.send("updateUser", sanitizedData);
}

function sanitizeString(str) {
  return str.replace(/[<>\"'&]/g, "");
}
```

### 3. Handle Errors Securely

```javascript
// Don't expose sensitive information in error handling
window.uniwebview
  .request("sensitiveOperation", data)
  .then((result) => {
    processResult(result);
  })
  .catch((error) => {
    // Log detailed errors for debugging (remove in production)
    console.error("Operation failed:", error);

    // Show user-friendly error messages
    showUserError("Operation could not be completed. Please try again.");
  });
```

## Production Security Checklist

### Before Deployment

- [ ] **Input Validation**: All message data is validated and sanitized
- [ ] **Action Whitelist**: Only explicitly allowed actions are processed
- [ ] **Origin Verification**: Messages from untrusted origins are rejected
- [ ] **Error Handling**: Sensitive information is not leaked in error messages
- [ ] **Logging**: Security events are logged for monitoring
- [ ] **HTTPS Only**: All web content is served over HTTPS
- [ ] **CSP Headers**: Content Security Policy headers are configured
- [ ] **Rate Limiting**: Implement rate limiting for message processing

### For High-Security Applications

- [ ] **Message Signing**: Cryptographic signatures verify message authenticity
- [ ] **Replay Protection**: Nonce-based system prevents message replay
- [ ] **Key Management**: Secure key storage and rotation procedures
- [ ] **Audit Trail**: Comprehensive logging of all security-relevant events
- [ ] **Penetration Testing**: Security testing by qualified professionals

## Common Security Pitfalls

### 1. Trusting Client-Side Validation

```csharp
// BAD: Only client-side validation
// JavaScript: if (amount > 0) window.uniwebview.send('purchase', {amount});

// GOOD: Always validate server-side
webView.OnChannelMessageReceived += (view, message) => {
    if (message.action == "purchase") {
        var purchase = message.GetData<PurchaseData>();

        // Always validate on Unity side
        if (purchase.amount <= 0 || purchase.amount > 999.99m) {
            return UniWebViewChannelMessageResponse.Error("Invalid amount");
        }

        // Process valid purchase...
    }
    return null;
};
```

### 2. Exposing Internal APIs

```csharp
// BAD: Exposing internal system functions
if (message.action == "executeSQL") {
    // Never allow direct database access from web content!
}

// GOOD: Provide safe, specific APIs
if (message.action == "getHighScores") {
    var scores = GetTopScores(limit: 10); // Safe, limited operation
    return UniWebViewChannelMessageResponse.Success(scores);
}
```

### 3. Information Leakage in Errors

```csharp
// BAD: Detailed error messages
catch (System.Exception e) {
    return UniWebViewChannelMessageResponse.Error(e.ToString()); // Exposes stack traces!
}

// GOOD: Safe error messages
catch (System.Exception e) {
    Debug.LogError($"Channel message error: {e}"); // Log internally
    return UniWebViewChannelMessageResponse.Error("Operation failed"); // Safe public message
}
```

Remember: Security is a multi-layered approach. Implement appropriate measures based on your application's security requirements and threat model.
