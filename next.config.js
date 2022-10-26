/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://therealworld.ai/?a=h8k77brcqd&gtm=G-H76VESPKHS&live=wkqe6vjjism3cqgn9og3sndpanzp3u8s',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
