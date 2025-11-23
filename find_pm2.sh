#!/bin/bash
# Perfect pm2 location finder script – November 21, 2025
# Finds pm2 binary in common directories, adds its directory to ~/.bashrc if needed, sources for immediate use
# Must be run with 'source ./find_pm2.sh' to apply PATH changes to the current shell
set -e

if [ ! -d "/home/vincent/IxomeAI" ]; then
  echo "Error: /home/vincent/IxomeAI directory not found."
  exit 1
fi

# Check if already in PATH
if command -v pm2 >/dev/null 2>&1; then
  echo "pm2 already in PATH at $(which pm2) – no changes needed."
  exit 0
fi

# Find pm2 binary (expanded to common dirs for global npm installs, ignores errors)
PM2_LOC=$(find /usr/local /usr /opt /home/vincent/.local /home/vincent/.npm-global /home/vincent/.nvm -name pm2 -type f 2>/dev/null | head -1)
if [ -z "$PM2_LOC" ]; then
  echo "Error: pm2 binary not found in common directories."
  echo "Reinstall via: mkdir -p ~/.npm-global/bin && npm config set prefix '~/.npm-global' && export PATH=~/.npm-global/bin:$PATH && npm install pm2@latest -g"
  echo "Then add 'export PATH=~/.npm-global/bin:$PATH' to ~/.bashrc and source it."
  exit 1
fi

BIN_PATH=$(dirname "$PM2_LOC")

# Add to ~/.bashrc if not already present
if ! grep -q "export PATH=\$PATH:$BIN_PATH" ~/.bashrc; then
  echo "export PATH=\$PATH:$BIN_PATH" >> ~/.bashrc
fi

# Source for immediate effect (only works if script is sourced)
source ~/.bashrc

# Verify
if command -v pm2 >/dev/null 2>&1; then
  echo "pm2 found at $PM2_LOC – PATH updated successfully. Run 'pm2 list' to confirm."
else
  echo "Warning: PATH update applied, but pm2 not detected – ensure script was run with 'source ./find_pm2.sh'."
fi