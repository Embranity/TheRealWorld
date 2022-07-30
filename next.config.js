/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://hu2.io/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
