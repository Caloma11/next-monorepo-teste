/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "https://login-app-steel.vercel.app/login",
      }
    ]
  },
}

module.exports = nextConfig;