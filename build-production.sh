#!/bin/bash
# Production build script that includes static files

echo "Building application..."
npm run build

echo "Copying static files to production build..."
cp server/public/robots.txt server/public/sitemap.xml server/public/llms.txt dist/public/
cp -r server/public/images dist/public/

echo "✅ Production build complete with static files!"
echo "Files available at:"
echo "- dist/public/robots.txt"
echo "- dist/public/sitemap.xml" 
echo "- dist/public/llms.txt"
echo "- dist/public/images/"