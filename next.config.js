/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.mixmc.com.br", "media.graphassets.com"],
  },
  env: {
    PUSHER_KEY: process.env.PUSHER_KEY,
  },
};

module.exports = nextConfig;
