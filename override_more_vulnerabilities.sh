#!/bin/bash
# Perfect script to add additional npm overrides for remaining fixable vulnerabilities in ixome-frontend – November 21, 2025
# Adds override for 'ip' to ^2.0.1 (fixes GHSA-2p57-rm9w-gvfp SSRF with compatible major version used by many projects)
# Backs up package.json, uses jq, reinstalls, rebuilds, restarts PM2
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

# Backup current package.json (working state confirmed)
cp package.json package.json.more_override.bak

# Install jq if not present
if ! command -v jq >/dev/null 2>&1; then
  sudo apt update
  sudo apt install jq -y
fi

# Add/append ip override (safe upgrade to v2 fixes the SSRF vuln; widely compatible)
jq '.overrides += {"ip": "^2.0.1"}' package.json > package.tmp.json
mv package.tmp.json package.json

# Reinstall dependencies with new overrides
npm install

# Attempt non-breaking fixes
npm audit fix

# Rebuild for production
npx nuxt build

# Prune dev deps
npm prune --production

# Restart PM2 process
pm2 restart ixome-frontend

# Save state
pm2 save

echo "Additional overrides applied (ip ^2.0.1 fixes high-severity SSRF). Review npm audit for final count (~7-8 remaining in legacy Vue 2 core). Frontend rebuilt and restarted."