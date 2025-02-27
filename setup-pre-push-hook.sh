#!/bin/bash

# Ensure the hooks directory exists
mkdir -p .git/hooks

# Create the pre-push hook file
cat << 'EOF' > .git/hooks/pre-push
#!/bin/bash

# Skip script on Windows
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    echo "Skipping pre-push hook on Windows."
    exit 0
fi

# Fetch the latest changes from the remote
git fetch origin

# Get the current branch name
branch_name=$(git rev-parse --abbrev-ref HEAD)

# Function to check if the branch is up-to-date with the dev branch
check_branch() {
    # Compare the current branch with the dev branch
    if git merge-base --is-ancestor origin/dev "$branch_name"; then
        echo -e "\e[32mSUCCESS: Your branch is up to date with the dev branch.\e[0m"
    else
        echo -e "\e[33mWARNING: Your branch is not up to date with the dev branch. It is recommended to merge changes from dev.\e[0m"

        # Prompt the user
        read -p "Do you still want to push your changes? Type 'yes' to proceed or 'no' to cancel: " choice < /dev/tty
        if [[ "$choice" != "yes" ]]; then
            echo -e "\e[31mPush canceled.\e[0m"
            exit 1
        fi
    fi
}

# Prevent pushing to dev and main branches directly
if [[ "$branch_name" == "dev" || "$branch_name" == "main" ]]; then
    echo -e "\e[31mERROR: Direct pushing to $branch_name branch is not allowed. Please create a new branch for your changes.\e[0m"
    exit 1
fi

# Check if we are on a valid branch
if [ -z "$branch_name" ]; then
    echo -e "\e[31mERROR: Could not determine the current branch. Make sure you are in a Git repository.\e[0m"
    exit 1
fi

check_branch

# Allow pushing to the current branch
echo -e "\e[32mINFO: Pushing to $branch_name branch is allowed.\e[0m"
exit 0
EOF

# Make the pre-push hook executable
chmod +x .git/hooks/pre-push

echo "Pre-push hook has been set up and made executable."
