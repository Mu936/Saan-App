#!/bin/bash

# SAAN App Deployment Script
echo "🚀 Deploying SAAN App..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the SAAN app directory."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build
echo "🔨 Building the app..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Check the errors above."
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📁 Your built app is in the 'dist' folder"
echo ""
echo "🌐 Deploy options:"
echo "1. Vercel: Push to GitHub, then import at vercel.com"
echo "2. Netlify: Drag 'dist' folder to netlify.com"
echo "3. Firebase: Run 'firebase deploy' (requires setup)"
echo ""
echo "🔗 See DEPLOYMENT_GUIDE.md for detailed instructions"
