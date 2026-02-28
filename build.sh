#!/bin/bash

echo "🚀 Starting build process..."

# Install npm dependencies
echo "📦 Installing npm dependencies..."
npm install

# Build the Next.js app
echo "🏗️  Building Next.js app..."
npm run build

echo "✅ Build completed successfully!"