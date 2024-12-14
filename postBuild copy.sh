#!/bin/bash

rm -rf ./.amplify-hosting

mkdir -p .amplify-hosting/static
mkdir -p .amplify-hosting/compute/default
cp -a deploy-manifest.json .amplify-hosting

cp -a .output/public/. .amplify-hosting/static
cp -a .output/static .amplify-hosting/static/
cp -a .output/favicon.png .amplify-hosting/static
cp -a .output/bundles .amplify-hosting/static
cp -a .output/* .amplify-hosting/compute/default

