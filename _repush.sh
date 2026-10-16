#!/usr/bin/env bash
# Usage: _repush.sh <PAT with repo+workflow>
set -euo pipefail
cd "$(dirname "$0")"
TOKEN="${1:?PAT required}"
NAME="BastaCheBastino"
EMAIL="341593255+BastaCheBastino@users.noreply.github.com"

rm -f _repush.sh

# Ensure single clean root commit
git checkout --orphan recreate-main
git add -A
git -c user.name="$NAME" -c user.email="$EMAIL" commit -m "Initial public site for bastachebastino.it"
git branch -M main

git remote set-url origin "https://github.com/BastaCheBastino/site.git"
git push -u "https://${NAME}:${TOKEN}@github.com/BastaCheBastino/site.git" main
git remote set-url origin "https://github.com/BastaCheBastino/site.git"
git fetch origin main
git branch -u origin/main

# Enable Pages (workflow)
curl -sS -X POST \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/BastaCheBastino/site/pages \
  -d '{"build_type":"workflow"}' || true
echo

echo "=== contributors ==="
curl -sS -H "Authorization: Bearer ${TOKEN}" -H "Accept: application/vnd.github+json" \
  "https://api.github.com/repos/BastaCheBastino/site/contributors"
echo
echo "Open: https://github.com/BastaCheBastino/site"
