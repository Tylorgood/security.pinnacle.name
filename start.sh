#!/bin/bash

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)

# Next.js requires Node.js >=20.9.0
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "Error: Node.js 20.9.0 or higher is required for Next.js."
    echo "Your version: $(node --version)"
    echo ""
    echo "Please update Node.js or use the following command:"
    echo ""
    echo "npm run dev"
    exit 1
fi

# Start development server
npm run dev