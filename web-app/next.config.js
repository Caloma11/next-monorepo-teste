/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/login/:path*',
        destination: `https://login-app-steel.vercel.app/login/:path*`,
      },
    ]
  },
}

module.exports = nextConfig;