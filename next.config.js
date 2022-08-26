/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "blog.sympla.com.br",
      "media.istockphoto.com",
      "static.vecteezy.com",
      "media.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
