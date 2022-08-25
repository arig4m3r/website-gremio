/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['http2.mlstatic.com', 'media.istockphoto.com', 'static.vecteezy.com']
  }
};

module.exports = nextConfig;
