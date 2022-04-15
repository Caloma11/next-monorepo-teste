/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/login/:path*',
        destination: `http://localhost:3001/login/:path*`,
      },
    ]
  },
}

module.exports = nextConfig;