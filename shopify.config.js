const dotenv = require('dotenv');
const Shopify = require('@shopify/api-node');

dotenv.config();

const shopify = new Shopify({
  shopName: process.env.SHOP_NAME,
  apiKey: process.env.SHOPIFY_API_KEY,
  password: process.env.SHOPIFY_API_PASSWORD,
});

module.exports = shopify;
