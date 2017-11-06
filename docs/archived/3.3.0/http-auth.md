# HTTP Authentication

UniWebView supports HTTP authentication by prompting user to provide a username and password in a native way.
You could use either HTTP Basic or HTTP Digest to setup the authentication flow. For more information about 
HTTP authentication on server side and to get a general idea, please refer to [this documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication).

### HTTP Authentication in UniWebView

UniWebView has a built in support for HTTP authentication. When receiving a challenge of HTTP Basic or HTTP 
Digest, it will pop up a native alert to ask users for user name and password.

Once the authentication gets passed, the user name and password will be stored in a local database. These 
information is bound with host and realm from the requested protection space, which in all stored as a credential. 
The persistence of stored credential is permanent, so your user will not be prompted again to re-authenticate 
until your server returns code 401.

!> On macOS, the credentials are stored in system Keychain. Depending on your settings of corresponding item, there 
might be a chance that you cannot access Keychain item directly from Unity Editor. You need to change the Access Control 
of the keychain item to "Allow all applications to access this item". See this [support article](https://support.apple.com/kb/PH18682) for more.

### Clear Stored Credentials

If the default permanent store strategy is not what you what, you could clear certain credential as you need. 
Call the `ClearHttpAuthUsernamePassword` static method on `UniWebView` and pass the host and realm. Be caution, 
on iOS, it will clear the credentials immediately and completely from both disk and network cache. 
While on Android, it only clears from disk database, the authentication might be still cached in the network stack 
and will not be removed until next session (app restarting). 

See [documentation](/archived/3.3.0/api/uniwebview.html?id=clearhttpauthusernamepassword) of `ClearHttpAuthUsernamePassword` for more.
