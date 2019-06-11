#! /bin/sh
cp ../UniWebView/Assets/UniWebView/CHANGELOG.md ./docs/release-note/README.md
yarn build
rsync -auv dist onevcat@47.52.223.44:/home/onevcat/www/uniwebview-docs/