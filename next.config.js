/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable dynamic features like API routes
  trailingSlash: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    // Keep unoptimized: true if you're deploying to a static host that doesn't support Next.js Image Optimization
    unoptimized: true,
  },
}

module.exports = nextConfig 