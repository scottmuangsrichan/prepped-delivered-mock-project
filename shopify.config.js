import '@shopify/shopify-api/adapters/node';
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';
const dotenv = require('dotenv');

dotenv.config();

const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET_KEY,
  scopes: [process.env.SCOPES],
  hostName: process.env.HOST || 'ngrok-tunnel-address',
  privateAppStorefrontAccessToken: process.env.STOREFRONT_API_ACCESS_TOKEN,
  ...
});

export default shopify;





