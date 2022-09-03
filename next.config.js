/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "cdn.mixmc.com.br",
      "media.graphassets.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "tailwindui.com",
    ],
  },
};

module.exports = nextConfig;
