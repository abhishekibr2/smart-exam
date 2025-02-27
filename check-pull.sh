#!/bin/bash

# Skip script on Windows
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    echo "Skipping pre-push hook on Windows."
    exit 0
fi


# Fetch the latest changes from the remote
git fetch origin

# Get the current branch name
branch=$(git rev-parse --abbrev-ref HEAD)

# Check if the current branch contains the latest commit from the remote dev branch
if git merge-base --is-ancestor origin/dev "$branch"; then
    echo -e "\e[32mYour branch is up to date with the dev branch.\e[0m"
else
    echo -e "\e[31mYour branch is not up to date with the dev branch. Please pull the latest changes from dev.\e[0m"
    exit 1
fi
