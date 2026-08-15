# UniWebView Documentation

This is the documentation source of UniWebView. See the site here: https://docs.uniwebview.com

The documentation is built by [VuePress](https://vuepress.vuejs.org).

### Development

```bash
yarn install
yarn dev
```

### Deploy

```bash
./deploy.sh
git add docs
git commit -m "Update doc"
git push origin master
```

`deploy.sh` synchronizes the release note and builds the site. EdgeOne deploys the generated `dist` automatically after the documentation source is pushed to `master`.