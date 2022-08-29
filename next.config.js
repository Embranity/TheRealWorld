/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://hu3.app/?a=h8k77brcqd&gtm=G-9YNLXP1M2C&live=sjomeipsgyrzo5rmuwakuytufwymcxn5',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
