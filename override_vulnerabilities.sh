#!/bin/bash
# Perfect script to add npm overrides for fixable vulnerabilities in ixome-frontend – November 21, 2025
# Backs up package.json, installs jq if needed, adds overrides for axios, cookie, http-proxy-middleware, tmp (fixable ones; vue/ip/parse-git-config/lodash no fix without migration), reinstalls, rebuilds, restarts PM2
set -e

if [ ! -d "/home/vincent/IxomeAI" ]; then
  echo "Error: /home/vincent/IxomeAI directory not found."
  exit 1
fi

if [ ! -d "/home/vincent/IxomeAI/frontend" ]; then
  echo "Error: /home/vincent/IxomeAI/frontend directory not found."
  exit 1
fi

cd /home/vincent/IxomeAI/frontend

# Backup package.json (only if working; skips if failed)
cp package.json package.json.override.bak

# Install jq if not present (Debian apt)
if ! command -v jq >/dev/null 2>&1; then
  sudo apt update
  sudo apt install jq -y
fi

# Add overrides using jq (merges if exists)
jq '.overrides = {
  "axios": "^1.7.7",
  "cookie": "^0.7.0",
  "http-proxy-middleware": "^2.0.7",
  "tmp": "^0.2.3",
  "sourcemap-codec": "@jridgewell/sourcemap-codec@^1.5.0"
} + (.overrides // {})' package.json > package.tmp.json
mv package.tmp.json package.json

# Reinstall dependencies
npm install

# Run audit fix for any additional
npm audit fix

# Rebuild for production
npx nuxt build

# Prune dev deps for production
npm prune --production

# Restart PM2 process
pm2 restart ixome-frontend

# Save PM2 state
pm2 save

echo "Overrides added for fixable vulnerabilities; review npm audit for remaining (e.g., vue requires Nuxt 3 migration). Rebuilt and restarted ixome-frontend."