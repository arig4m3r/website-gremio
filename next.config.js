/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**.googleusercontent.com",
        },
      ],
    },
  },
  images: {
    domains: [
      "cdn.mixmc.com.br",
      "media.graphassets.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
