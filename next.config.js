/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://hu2.io/?a=h8k77brcqd&gtm=G-9YNLXP1M2C',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
