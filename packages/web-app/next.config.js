/** @type {import('next').NextConfig} */
const development = process.env.NODE_ENV === 'development'
const LOGIN_URL = development ? process.env.LOGIN_URL : `https://login-gaf1p3uj6-gianlucaperrone-ubbuio.vercel.app`
const WEBAPP_URL = development ? process.env.WEBAPP_URL : `https://webapp-nww52185y-gianlucaperrone-ubbuio.vercel.app`
const { UBBU_URL } = process.env
const withTM = require('next-transpile-modules')(['shared']);

console.log(WEBAPP_URL)
console.log(99999)

const nextConfig = withTM({
  reactStrictMode: true,
  basePath: '/webapp',
  async rewrites() {
    return [
        {
          source: '/login',
          destination: `${LOGIN_URL}/login`,
        },
        {
          source: '/login/:path*',
          destination: `${LOGIN_URL}/login/:path*`
        },
        // {
        //   source: '/',
        //   destination: `${WEBAPP_URL}`,
        // },
        {
          source: '/webapp/:path*',
          destination: `${WEBAPP_URL}/:path*`
        },
        {
          source: '/',
          destination: `${UBBU_URL}`,
          basePath: false
        },
        {
          source: '/:path*',
          destination: `${UBBU_URL}/:path*`
        }
    ]
  },
    compiler: {
      styledComponents: true,
    }
});

module.exports = nextConfig;