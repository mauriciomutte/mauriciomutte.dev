const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    remotePatterns: [{ hostname: 'github.com' }],
  },
}

module.exports = withContentlayer(nextConfig)
