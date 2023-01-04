const dotenv = require('dotenv');
dotenv.config();

const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;
const shop = process.env.SHOPIFY_SHOP;
const apiVersion = '2021-01';

const shopify = new Shopify({
  shopName: shop,
  accessToken: accessToken, 
  apiVersion: apiVersion,
});

const products = await shopify.product.list();
console.log(products);