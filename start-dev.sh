#!/bin/bash

# AkBarbershop Development Setup Script

echo "🚀 Starting AkBarbershop Hair Cut Serves Website..."
echo ""
echo "📍 Location: AkBarbershop/AkBarberRRv7"
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start development server
echo "🔥 Starting development server..."
echo "🌐 The website will open at: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
