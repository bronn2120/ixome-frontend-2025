#!/bin/bash
# Perfect script to fix npm vulnerabilities in ixome-frontend without breaking changes – November 21, 2025
# Backs up package.json and package-lock.json, runs npm audit fix (non-force), rebuilds, restarts PM2 if needed
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

# Backup working package files before changes
cp package.json package.json.bak
cp package-lock.json package-lock.json.bak

# Run audit fix to address fixable vulnerabilities without breaking changes
npm audit fix

# Rebuild for production
npx nuxt build

# Prune dev deps again post-fix
npm prune --production

# Restart PM2 process
pm2 restart ixome-frontend

echo "Vulnerabilities fixed where possible; review npm audit for remaining. Rebuilt and restarted ixome-frontend."