/** @type {import('next').NextConfig} */
const LOGIN_URL = process.env.NODE_ENV === 'development' ? process.env.LOGIN_URL : process.env.NEXT_PUBLIC_VERCEL_URL
const { UBBU_URL } = process.env
const withTM = require('next-transpile-modules')(['shared']);

const nextConfig = withTM({
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/login',
        destination: `${LOGIN_URL}/login`,
      },
      {
        source: '/login/:path*',
        destination: `${LOGIN_URL}/login/:path*`,
      },
      {
        source: '/ubbu',
        destination: `${UBBU_URL}`,
        basePath: false,
      },
      {
        source: '/ubbu/:path*',
        destination: `${UBBU_URL}/:path*`,
      },
    ]
  },
  compiler: {
    styledComponents: true,
  }
});

module.exports = nextConfig;