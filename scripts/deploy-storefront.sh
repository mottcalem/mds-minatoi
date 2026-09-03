#!/usr/bin/env bash

set -Eeuo pipefail

APP_ROOT="/opt/medusa/medusa-commerce"
STOREFRONT_ROOT="$APP_ROOT/apps/storefront"
BRANCH="${DEPLOY_BRANCH:-theme/solace}"

if [[ "${EUID}" -ne 0 ]]; then
  echo "This deploy script must be run as root." >&2
  exit 1
fi

cd "$APP_ROOT"

if [[ -n "$(runuser -u medusa -- git status --porcelain)" ]]; then
  echo "Deployment stopped: the server working tree has uncommitted changes." >&2
  exit 1
fi

runuser -u medusa -- git fetch origin "$BRANCH"
runuser -u medusa -- git merge --ff-only "origin/$BRANCH"

cd "$STOREFRONT_ROOT"
runuser -u medusa -- env HOME=/opt/medusa pnpm install --frozen-lockfile
runuser -u medusa -- env \
  HOME=/opt/medusa \
  NODE_ENV=production \
  NODE_OPTIONS=--max-old-space-size=1024 \
  pnpm build

systemctl restart medusa-storefront

for attempt in {1..15}; do
  if curl --fail --silent --show-error --head \
    https://demo.dijitalpanter.com/tr >/dev/null; then
    echo "Storefront deployment completed successfully."
    exit 0
  fi

  sleep 1
done

echo "Deployment completed, but the storefront health check failed." >&2
systemctl status medusa-storefront --no-pager >&2
exit 1
