#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
yarn start 

echo "Deploying files to server"
# rsync -avP . egacheru@178.79.173.249:/var/www/creativezink.com/

echo "Deployment complete"