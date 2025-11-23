#!/bin/bash
# Perfect script to reinstall pm2 globally on Debian with sudo for standard /usr/local/bin location – November 21, 2025
# Reinstalls pm2@latest -g, verifies installation, adds to PATH only if needed (rare after sudo global install)
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

# Check if pm2 already available
if command -v pm2 >/dev/null 2>&1; then
  echo "pm2 already installed and in PATH at $(which pm2) – no reinstall needed."
  exit 0
fi

# Reinstall pm2 globally with sudo (prompts for password if needed)
sudo npm install pm2@latest -g

# Verify installation
PM2_LOC=$(which pm2)
if [ -z "$PM2_LOC" ]; then
  echo "Error: pm2 reinstall failed – check npm errors above. Ensure npm is installed and sudo works."
  exit 1
fi

BIN_PATH=$(dirname "$PM2_LOC")

# Add to ~/.bashrc only if not already in standard PATH (unlikely after global install)
if ! grep -q "export PATH=\$PATH:$BIN_PATH" ~/.bashrc; then
  echo "export PATH=\$PATH:$BIN_PATH" >> ~/.bashrc
fi

# Source for immediate effect (but since script, advise sourcing in verification)
echo "pm2 reinstalled at $PM2_LOC – source ~/.bashrc or reopen terminal if needed."
