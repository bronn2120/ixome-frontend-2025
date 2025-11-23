#!/bin/bash
# Perfect PM2 installation and setup script for IxomeAI frontend on Debian – dynamically detects pm2 path after global install – November 21, 2025
# Installs pm2 globally if not found, builds Nuxt app, starts/restarts ixome-frontend with pm2 for production-like testing
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

# Dynamically get global npm prefix (use sudo for consistency with install)
PREFIX=$(sudo npm config get prefix)
PM2_PATH="$PREFIX/bin/pm2"

# Check if pm2 is installed
if [ ! -f "$PM2_PATH" ]; then
  echo "pm2 not found – installing globally via npm..."
  sudo npm install pm2@latest -g
  # Re-get prefix after install in case it changes
  PREFIX=$(sudo npm config get prefix)
  PM2_PATH="$PREFIX/bin/pm2"
  if [ ! -f "$PM2_PATH" ]; then
    echo "Error: pm2 binary not found at $PM2_PATH after install."
    exit 1
  fi
else
  echo "pm2 already installed at $PM2_PATH."
fi

# Build Nuxt for production
npm run build

# Start/restart with pm2 using dynamic path
"$PM2_PATH" start npm --name "ixome-frontend" -- run start
"$PM2_PATH" save  # Save process list for persistence

echo "pm2 setup complete – ixome-frontend running."