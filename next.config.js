/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "cdn.mixmc.com.br",
      "media.graphassets.com",
      "avatars.githubusercontent.com",
      "s1.googleusercontent.com",
      "s2.googleusercontent.com",
      "s3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
