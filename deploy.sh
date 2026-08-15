#! /bin/sh
set -eu

cp ../UniWebView/Assets/UniWebView/CHANGELOG.md ./docs/release-note/README.md
yarn build

# EdgeOne deploys automatically after the generated docs are committed and pushed to master.