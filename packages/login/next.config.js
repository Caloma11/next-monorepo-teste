/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/login',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
        basePath: false
      },
    ]
  },
}

module.exports = nextConfig
