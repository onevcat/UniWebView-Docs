# UniWebView Documentation

## Build documentaiton for a version

Before you start to change the documentation for a new version, you need to archive the current version by using:

```js
npm run archive -- 3.0 3.1
```

This will archive the latest version to `3.0`, then update the documentation version to `3.1`. After that, you could modify the documentation in `latest` folder for the updated version. Basiclly, we do not support separated documentation set for a patch version like `3.0.1`. Any changes requires documentation updating should at least be a minor updatge.