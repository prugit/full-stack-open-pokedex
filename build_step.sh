#!/bin/bash

echo "Build script"

# Preparing build
echo "installing dependencies"
npm install 

# Build 
echo "Build project"
npm run build

# Prepare CI enviroment
echo "Prepare for CI"
npm ci --omit=dev
