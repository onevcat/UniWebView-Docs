#!/bin/sh
set -e

# Ensure CHANGELOG exists before attempting to copy
if [ -f "../UniWebView/Assets/UniWebView/CHANGELOG.md" ]; then
    cp ../UniWebView/Assets/UniWebView/CHANGELOG.md ./docs/release-note/README.md
else
    echo "Warning: CHANGELOG.md not found, skipping copy."
fi

# Run build
yarn build

# Deploy contents of dist directory
rsync -auv dist/ onevcat@uniwebview.com:/home/onevcat/www/uniwebview-docs/