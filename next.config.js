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
      "cdn.shopify.com",
    ]
  },
  env: {
    STOREFRONT_ACCESS_TOKEN: process.env.STOREFRONT_ACCESS_TOKEN,
    PUBLIC_SHOPIFY_STORE_DOMAIN: process.env.PUBLIC_SHOPIFY_STOREFRONT_DOMAIN,
  },
  experimental: {
    topLevelAwait: true,
  },
}

module.exports = nextConfig;
