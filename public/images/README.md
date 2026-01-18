# Images Directory

This directory contains all static images for the website.

## Hero Image

The hero section uses a background image located at:
- **Path:** `/public/images/hero-windows.jpg`
- **Recommended specs:**
  - Dimensions: 1920x1080px or larger
  - Format: JPEG or WebP
  - Content: Beautiful home with large, clean, sparkling windows
  - Quality: High resolution for full-screen display

## Adding Your Hero Image

1. Find or create a high-quality image of a home with clean windows
2. Name it `hero-windows.jpg`
3. Place it in this directory: `public/images/hero-windows.jpg`
4. The Hero component will automatically use it

## Fallback

If the image is not found, the hero section will display a gradient background automatically.

## Image Optimization

Next.js automatically optimizes images. For best performance:
- Use WebP format when possible
- Keep file size reasonable (under 500KB if possible)
- Ensure images are properly compressed
