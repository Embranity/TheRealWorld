/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://therealworld.ai/?a=h8k77brcqd',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
