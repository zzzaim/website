#!/bin/bash

if [ -z "$npm_package_config_deploy" ]; then
  echo "\$npm_config_deploy not set."
  exit 1
fi

echo "Deploying to: $npm_package_config_deploy"

gh-pages -d public -b master -r "$npm_package_config_deploy"
