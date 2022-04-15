/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['shared']);

const nextConfig = withTM({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "https://login-app-steel.vercel.app/login",
      }
    ]
  },
});

module.exports = nextConfig;