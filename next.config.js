module.exports = {
  images: {
    domains: ['github.com'],
  },
  async rewrites() {
    return [
      {
        source: '/og-image.png',
        destination: '/api/og-image',
        has: [{ type: 'query', key: 'title' }],
      },
    ]
  },
}
