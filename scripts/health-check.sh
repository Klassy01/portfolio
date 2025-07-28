#!/bin/bash

# Portfolio Health Check Script
# This script performs basic health checks on the portfolio project

set -e

echo "🔍 Portfolio Health Check"
echo "========================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "✅ Project directory: $(pwd)"

# Check Node.js version
echo "📦 Node.js version: $(node --version)"

# Check npm version
echo "📦 npm version: $(npm --version)"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "⚠️  Warning: node_modules not found. Installing dependencies..."
    npm install
else
    echo "✅ Dependencies installed"
fi

# Run linting
echo "🔍 Running ESLint..."
npm run lint

# Test build
echo "🏗️  Testing build..."
npm run build

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build successful - dist folder created"
    echo "📊 Build size: $(du -sh dist)"
else
    echo "❌ Build failed - dist folder not found"
    exit 1
fi

# Check for security vulnerabilities
echo "🔒 Checking for security vulnerabilities..."
npm audit --audit-level=moderate || echo "⚠️  Security vulnerabilities found - please review"

# Clean up
echo "🧹 Cleaning up..."
rm -rf dist

echo ""
echo "✅ Health check completed successfully!"
echo "🚀 Your portfolio is ready for deployment!"
