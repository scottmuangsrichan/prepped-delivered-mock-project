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
  },
  env: {
    SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    SHOPIFY_STORE_DOMAIN: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_DOMAIN,
  },
}

module.exports = nextConfig
