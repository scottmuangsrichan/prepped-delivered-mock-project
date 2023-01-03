/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "assets-global.website-files.com",
      "images.unsplash.com",
      "www.freshnlean.com",
      "api.unsplash.com",
    ]
  }
}

module.exports = nextConfig
