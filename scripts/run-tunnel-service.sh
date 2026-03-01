#!/bin/zsh
set -euo pipefail

CLOUDFLARED_BIN="/opt/homebrew/bin/cloudflared"
TUNNEL_CRED="/Users/ourhome/.cloudflared/07fda85f-2f95-4fbe-a628-2762a63156d8.json"
SITE_PORT="3090"

export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

exec "$CLOUDFLARED_BIN" tunnel --no-autoupdate --protocol http2 run --url "http://127.0.0.1:${SITE_PORT}" --credentials-file "$TUNNEL_CRED" openanthropic-web
