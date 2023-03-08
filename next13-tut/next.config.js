/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  headers: [
    {
      key: 'Cache-Control',
      value: 'no-store'
    }
  ]
}

module.exports = nextConfig
