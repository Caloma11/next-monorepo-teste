/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/login/:path*/',
        destination: `https://login-app-ricardo-fnd.vercel.app/login/:path*/`,
      },
    ]
  },
}

module.exports = nextConfig;