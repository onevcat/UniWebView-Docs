#! /bin/sh
npm run build-api
cp ../UniWebView/Assets/UniWebView/CHANGELOG.md ./docs
rsync -auv docs onevcat@104.236.137.50:/home/onevcat/uniwebview-docs/