#!/bin/bash
set -e

cd "$(dirname "$0")/.."

echo "=== Pulling latest code ==="
git pull origin main

echo "=== Installing dependencies ==="
npm install --legacy-peer-deps

echo "=== Running migrations ==="
export PATH="$(pwd)/node_modules/.bin:$PATH"
export PAYLOAD_CONFIG_PATH=payload.config.ts
cross-env NODE_OPTIONS=--no-deprecation npx tsx node_modules/payload/bin.js migrate

echo "=== Building ==="
npm run build

echo "=== Restarting PM2 ==="
pm2 restart domeventagency || pm2 start ecosystem.config.cjs

echo "=== Done ==="
pm2 status
