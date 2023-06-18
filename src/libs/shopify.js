import Client from 'shopify-buy';
export const shopifyClient = Client.buildClient({
  storefrontAccessToken: process.env.STOREFRONT_ACCESS_TOKEN,
  domain: process.env.PUBLIC_SHOPIFY_STORE_DOMAIN,
});

console.log(shopifyClient);

