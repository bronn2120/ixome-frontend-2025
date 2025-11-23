#!/bin/bash
# Perfect script to fix and restart ixome-frontend with PM2 using ecosystem.config.cjs for production – November 21, 2025
# Resets node_modules and package-lock to avoid breakage; installs deps, builds, prunes dev deps, creates CommonJS ecosystem file (fixes ESM config parsing issues with PM2), restarts PM2
# Assumes pm2 is installed globally; includes debug echoes for PATH and pm2 verification to diagnose issues
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

# Check if pm2 is available (after reinstall)
if ! command -v pm2 >/dev/null 2>&1; then
  echo "Error: pm2 not found – run reinstall_pm2.sh first."
  exit 1
fi

echo "pm2 found at $(which pm2) – proceeding."

# Reset node_modules and package-lock to restore consistent state
rm -rf node_modules package-lock.json

# Install all dependencies for build (includes devDeps); ignore deprecations for now
echo "Starting npm install..."
npm install

# Build the app for production (uses Nitro for Nuxt Bridge/Nuxt 3 compatibility)
echo "Starting npx nuxt build..."
npx nuxt build

# Prune dev dependencies to optimize for production
echo "Starting npm prune --production..."
npm prune --production

# Create or overwrite ecosystem.config.cjs with CommonJS syntax (fixes 'No script path - aborting' by ensuring PM2 parses config correctly despite "type": "module" in package.json)
echo "Creating ecosystem.config.cjs..."
cat << EOF > ecosystem.config.cjs
module.exports = {
  apps: [{
    name: 'ixome-frontend',
    script: './.output/server/index.mjs',
    exec_mode: 'fork',  // Change to 'cluster' and instances: 'max' if scaling needed
    instances: 1
  }]
};
EOF

# Delete old process if exists (ignore if not found)
echo "Deleting old ixome-frontend process if exists..."
pm2 delete ixome-frontend 2>/dev/null || true

# Start with ecosystem file (uses .cjs to ensure CommonJS loading)
echo "Starting pm2 with ecosystem.config.cjs..."
pm2 start ecosystem.config.cjs

# Save PM2 state for restarts
echo "Saving pm2 state..."
pm2 save

echo "ixome-frontend rebuilt and restarted successfully with PM2 using ecosystem.config.cjs."