#!/bin/bash
echo "==============================="
echo "Building dependencies.."
echo "==============================="

npm i

# Navigate to src directory
cd src

# Loop through all subdirectories
for d in */ ; do
    # Navigate to subdirectory
    cd "$d"
    
    # Check if package.json exists
    if [ -f package.json ]; then
        echo "Building dependencies in $d..."
        npm run build
    fi
    
    # Navigate back to parent directory
    cd ..
done