#!/bin/bash
# Perfect PM2 installation and setup script for IxomeAI frontend on Debian via npm – November 21, 2025
# Installs pm2 globally with npm, fixes PATH if needed, builds Nuxt app, starts/restarts ixome-frontend with pm2 for production-like testing
set -e

if [ ! -d "/home/vincent/IxomeAI" ]; then
  echo "Error: /home/vincent/IxomeAI directory not found."
  exit 1
fi

if [ ! -f "/home/vincent/IxomeAI/.env" ]; then
  echo "Error: .env file not found."
  exit 1
fi

source /home/vincent/IxomeAI/.env

cd /home/vincent/IxomeAI/frontend

# Check if pm2 is installed
if ! command -v pm2 &> /dev/null; then
  echo "pm2 not found – installing globally via npm..."
  sudo npm install pm2@latest -g
  # Ensure PATH includes /usr/local/bin (common for global npm on Debian)
  export PATH=$PATH:/usr/local/bin
else
  echo "pm2 already installed."
fi

# Build Nuxt for production
npm run build

# Start/restart with pm2
pm2 start npm --name "ixome-frontend" -- run start
pm2 save  # Save process list for persistence

echo "pm2 setup complete – ixome-frontend running."