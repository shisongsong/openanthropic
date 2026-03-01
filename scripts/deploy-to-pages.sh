#!/usr/bin/env bash
set -euo pipefail

# Build and publish to Cloudflare Pages using Wrangler
# Usage: ./scripts/deploy-to-pages.sh

echo "Installing dependencies..."
npm ci

echo "Building for Cloudflare Pages..."
npm run build:cloudflare

echo "Publishing with Wrangler..."
# Requires: wrangler login or CF_API_TOKEN env variable
npx wrangler pages publish ./out --project-name=openanthropic --branch=main

echo "Published to Cloudflare Pages."
