#!/bin/zsh
set -euo pipefail

REPO_DIR="/Users/ourhome/workstation/opencode-home/openanthropic"
NODE_BIN_DIR="/Users/ourhome/.nvm/versions/node/v24.12.0/bin"
SITE_PORT="3090"

export PATH="$NODE_BIN_DIR:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

cd "$REPO_DIR"

if [ ! -f ".next/BUILD_ID" ] || [ ! -f ".next/standalone/server.js" ]; then
  npm run build
fi

exec "$REPO_DIR/node_modules/.bin/next" start --hostname 127.0.0.1 --port "$SITE_PORT"
