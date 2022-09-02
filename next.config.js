/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.mixmc.com.br", "media.graphassets.com"],
  },
};

module.exports = nextConfig;
