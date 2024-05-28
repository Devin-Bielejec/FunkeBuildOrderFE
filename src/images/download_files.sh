#!/bin/bash

# Get the Replit project's URL
REPLIT_URL=$(echo $REPLIT_URL | sed 's/\/$//') # Remove trailing slash if present

# Define the URL of the directory based on the Replit project's URL
DIRECTORY_URL="$REPLIT_URL/"

# Get a list of all files in the directory
FILE_LIST=$(curl -s $DIRECTORY_URL | grep -oP '(?<=href=")[^"]+' | grep -v '/$')
echo $FILE_LIST
# Iterate through each file and download it
for FILE in $FILE_LIST; do
    echo "Downloading $FILE..."
    curl -OJL "$DIRECTORY_URL$FILE"
done

echo "Download complete."
