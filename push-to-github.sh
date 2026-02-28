#!/bin/bash

echo "🚀 GitHub Push Helper Script"
echo "=========================="
echo ""

# Check if we're in the right directory
if [ ! -d ".git" ]; then
    echo "Error: This doesn't look like a git repository"
    echo "Please run this script from your project directory"
    exit 1
fi

# Check if we have a remote origin
echo "Checking git configuration..."
if ! git remote -v | grep -q "origin"; then
    echo "Adding GitHub remote..."
    git remote add origin https://github.com/Tylorgood/security.pinnacle.name.git
fi

echo ""
echo "📝 Ready to push to GitHub!"
echo "📋 Steps:"
echo "1. You'll be prompted for your GitHub username and password"
echo "2. If you have 2FA enabled, use a Personal Access Token"
echo "3. After successful push, your code will be live on GitHub"
echo ""
echo "🚀 Starting push..."
echo ""

# Push to GitHub
git push -u origin main

echo ""
echo "✅ Push completed! Your code is now on GitHub: https://github.com/Tylorgood/security.pinnacle.name"
echo ""
echo "🙏 Thank you for using this script!"