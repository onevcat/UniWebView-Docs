# Certificate Pinning

> UniWebView 6.2 replaces the legacy SSL exception list with explicit SHA-256 certificate pinning. Pinning lets you trust self-signed or private CA certificates without disabling TLS checks globally.

## Why the Old API Is Gone

`AddSslExceptionDomain` and `RemoveSslExceptionDomain` are now compile-time errors. They no longer bypass TLS failures on iOS, macOS, or Android. Allow-listing whole domains made it too easy to ship builds that silently ignored man-in-the-middle attacks, so the new release enforces strict checks unless you pin certificates.

Google also tightened its Play Store policy in 2025: domain-only SSL exception lists are now flagged as “unsafe certificate handling.” Submissions that still rely on the old whitelist trigger Play Console security warnings and may be suspended or removed. Switch to fingerprint pinning before shipping updates to avoid review blockers.

## Collecting a SHA-256 Fingerprint

Use OpenSSL (or your certificate management tool of choice) to grab the SHA-256 fingerprint of the server certificate that should be accepted:

```bash
echo | openssl s_client -connect self-signed.badssl.com:443 -servername self-signed.badssl.com \
  | openssl x509 -fingerprint -sha256 -noout
```

Copy the hex string (colons are optional). Repeat this for every certificate you expect to serve—production, staging, or CDN endpoints each need their own fingerprint.

## Registering Fingerprints in Unity

Call `AddSslPinnedFingerprint` for every host before loading pages. The API normalizes casing and ignores colons, so you can paste fingerprints exactly as OpenSSL prints them.

```csharp
public class WebViewBootstrapper : MonoBehaviour {
    [SerializeField] UniWebView webView;

    void Awake() {
        // Accept the self-signed cert served by https://self-signed.badssl.com
        // The fingerprint used here is just a sample. In action, replace it
        // with the value you get in the previous step.
        webView.AddSslPinnedFingerprint(
            "self-signed.badssl.com",
            "62:F1:B6:F8:B2:4B:29:CB:F3:18:BD:8A:E9:82:E0:60:03:97:89:6C:3C:DD:F8:E5:BE:6F:68:46:9E:B9:21:62"
        );
    }
}
```

- Pin each hostname you contact (subdomains do **not** inherit each other).
- Call the method multiple times to allow a chain of certificates (for example, live and backup certificates during rotation).
- The comparison runs on both Apple and Android implementations whenever an SSL error occurs. Loading succeeds only when the certificate matches one of the pinned fingerprints.

## Updating or Removing a Fingerprint

When you rotate certificates, add the new fingerprint **before** retiring the old one. Once all clients receive the update, remove the stale fingerprint:

```csharp
webView.RemoveSslPinnedFingerprint("api.example.com", oldFingerprint);
```

Pin data is kept per `UniWebView` instance. If you keep long-lived web views, remove fingerprints when they are no longer valid to avoid trusting unused certificates indefinitely.

## Troubleshooting

- **`OnLoadingErrorReceived` with code -1202 / `SslError.SSL_UNTRUSTED`:** No fingerprint was pinned for that host, or the TLS endpoint presented a different certificate. Verify the domain you passed exactly matches `URI.Host` and that the fingerprint matches the currently deployed cert.
- **"Cannot pin SSL fingerprint" logs:** The fingerprint string contains non-hex characters. Strip any spaces and ensure the string only uses `[0-9A-F]`.
- **Legacy code still compiles?** Search your project for `AddSslExceptionDomain`/`RemoveSslExceptionDomain`. They now throw build errors; remove the calls and replace them with pinning APIs.
- **Multiple environments:** Guard `AddSslPinnedFingerprint` calls with build symbols to load different certificates for QA, staging, or production servers.

## Migration Checklist

1. Remove every call to `AddSslExceptionDomain`/`RemoveSslExceptionDomain`.
2. Generate SHA-256 fingerprints for every HTTPS host your game uses.
3. Register the fingerprints at startup via `AddSslPinnedFingerprint`.
4. Add monitoring or logging inside `OnLoadingErrorReceived` so you can spot mismatches early.
5. Document the fingerprint sources so rotating certificates in the future is straightforward.
