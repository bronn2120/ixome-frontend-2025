#!/bin/bash

if [ ! -d "/home/vincent/IxomeAI/backend/website-backend/backend" ]; then
  echo "Error: Strapi path /home/vincent/IxomeAI/backend/website-backend/backend does not exist."
  exit 1
fi
if [ ! -d "/home/vincent/IxomeAI/frontend" ]; then
  echo "Error: Nuxt path /home/vincent/IxomeAI/frontend does not exist."
  exit 1
fi
if [ ! -d "/home/vincent/IxomeAI/backend/agents" ]; then
  echo "Error: Flask agents path /home/vincent/IxomeAI/backend/agents does not exist."
  exit 1
fi
if [ ! -f "/home/vincent/IxomeAI/.env" ]; then
  echo "Error: .env file at /home/vincent/IxomeAI/.env does not exist. Create it with required keys including XAI_API_KEY."
  exit 1
fi

mkdir -p /home/vincent/IxomeAI/backups
if [ -d "/home/vincent/IxomeAI/backend" ]; then
  cp -r /home/vincent/IxomeAI/backend /home/vincent/IxomeAI/backups/backend_$(date +%Y%m%d)
fi
if [ -d "/home/vincent/IxomeAI/frontend" ]; then
  cp -r /home/vincent/IxomeAI/frontend /home/vincent/IxomeAI/backups/frontend_$(date +%Y%m%d)
fi

cd /home/vincent/IxomeAI/backend/website-backend/backend
pkill -f strapi
npm run develop

cd /home/vincent/IxomeAI/frontend
pkill -f "node.*nuxt"
PORT=3000 npm run dev

source /home/vincent/IxomeAI/venv/bin/activate
export $(grep -v '^#' /home/vincent/IxomeAI/.env | xargs)
cd /home/vincent/IxomeAI/backend/agents
pkill -f "python chat_agent.py"
python chat_agent.py