#! /bin/sh
cp ../UniWebView/Assets/UniWebView/CHANGELOG.md ./docs/release-note/README.md
yarn build
rsync -auv dist onevcat@uniwebview.com:/home/onevcat/www/uniwebview-docs/