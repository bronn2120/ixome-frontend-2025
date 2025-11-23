#!/bin/bash
# Perfect PM2 installation and setup script for IxomeAI frontend on Debian – uses full path to pm2 to avoid session PATH issues – November 21, 2025
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

PM2_PATH="/usr/local/bin/pm2"

# Check if pm2 is installed
if ! $PM2_PATH version &> /dev/null; then
  echo "pm2 not found – installing globally via npm..."
  sudo npm install pm2@latest -g
fi

# Build Nuxt for production
npm run build

# Start/restart with pm2 using full path
$PM2_PATH start npm --name "ixome-frontend" -- run start
$PM2_PATH save  # Save process list for persistence

echo "pm2 setup complete – ixome-frontend running."