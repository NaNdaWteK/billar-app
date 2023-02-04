#!/bin/sh

git fetch
git checkout production
git pull origin production
docker run --rm -p 3000:3000 ghcr.io/nandawtek/billar-app:$(cat package.json | jq -r .version)
