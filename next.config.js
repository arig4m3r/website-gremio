/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['sm.ign.com', 'media.istockphoto.com', 'static.vecteezy.com']
  }
};

module.exports = nextConfig;
