#! /bin/sh
cp ../UniWebView/Assets/UniWebView/CHANGELOG.md ./docs/release-note/README.md
yarn build
rsync -auv dist onevcat@160.16.135.145:/home/onevcat/www/uniwebview-docs/