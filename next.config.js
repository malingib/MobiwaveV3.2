/** @type {import('next').NextConfig} */
const nextConfig = {
  // Canonical URL format: https://mobiwave.co.ke/path (no trailing slash).
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path+/",
        destination: "/:path*",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
