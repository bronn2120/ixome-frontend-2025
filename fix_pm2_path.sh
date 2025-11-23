#!/bin/bash
# Perfect PM2 PATH fix script – November 21, 2025
# Adds correct global npm bin to ~/.bashrc for pm2 access, sources it for immediate effect; uses sudo for prefix to match install context
set -e

if [ ! -d "/home/vincent/IxomeAI" ]; then
  echo "Error: /home/vincent/IxomeAI directory not found."
  exit 1
fi

# Dynamically get global npm prefix with sudo (matches sudo install context)
PREFIX=$(sudo npm config get prefix)
BIN_PATH="$PREFIX/bin"

# Add to ~/.bashrc if not already present
if ! grep -q "export PATH=\$PATH:$BIN_PATH" ~/.bashrc; then
  echo "export PATH=\$PATH:$BIN_PATH" >> ~/.bashrc
fi

# Source for immediate effect
source ~/.bashrc

echo "PM2 PATH fixed – run 'pm2 list' to confirm."