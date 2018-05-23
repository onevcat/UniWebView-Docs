#! /bin/sh
cp ../UniWebView/Assets/UniWebView/CHANGELOG.md ./docs/release-note/README.md
yarn build
rsync -auv dist onevcat@104.236.137.50:/home/onevcat/uniwebview-docs/