#!/bin/bash
# Perfect role-gating test script – November 21, 2025
# Tests frontend role-gating by simulating Basic, Pro, Enterprise roles via Strapi API updates, then checks access in browser
set -e

if [ ! -d "/home/vincent/IxomeAI" ]; then
  echo "Error: /home/vincent/IxomeAI directory not found."
  exit 1
fi

if [ ! -f "/home/vincent/IxomeAI/.env" ]; then
  echo "Error: .env file not found."
  exit 1
fi

if [ ! -d "/home/vincent/IxomeAI/venv" ]; then
  echo "Error: venv directory not found."
  exit 1
fi

source /home/vincent/IxomeAI/venv/bin/activate

# Assume Strapi running; update test user role via curl (replace USER_ID with actual from Strapi, e.g., 1 for test@ixome.ai)
STRAPI_URL="http://localhost:1337"
STRAPI_TOKEN=$(grep STRAPI_API_TOKEN /home/vincent/IxomeAI/.env | cut -d '=' -f2)  # From .env
USER_ID=1  # Adjust to actual test user ID

echo "Testing Basic role..."
curl -X PUT -H "Authorization: Bearer $STRAPI_TOKEN" -H "Content-Type: application/json" -d '{"role": "Basic"}' $STRAPI_URL/users/$USER_ID
xdg-open http://localhost:3000/control-panels # Check paywall in incognito (no advanced panels)
xdg-open http://localhost:3000/agent-creator # Try creating >1 agent, expect quota error

echo "Testing Pro role..."
curl -X PUT -H "Authorization: Bearer $STRAPI_TOKEN" -H "Content-Type: application/json" -d '{"role": "Pro"}' $STRAPI_URL/users/$USER_ID
xdg-open http://localhost:3000/control-panels # Check advanced panels visible
xdg-open http://localhost:3000/agent-creator # Try creating >5 agents, expect quota error on 6th

echo "Testing Enterprise role..."
curl -X PUT -H "Authorization: Bearer $STRAPI_TOKEN" -H "Content-Type: application/json" -d '{"role": "Enterprise"}' $STRAPI_URL/users/$USER_ID
xdg-open http://localhost:3000/control-panels # Check advanced panels visible
xdg-open http://localhost:3000/agent-creator # Create multiple agents, no quota error

echo "Role-gating tests complete – review browser for access/quota enforcement."