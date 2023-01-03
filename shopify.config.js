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

const adminApiClient = new shopify.clients.Rest({session});
const storefrontTokenResponse = await adminApiClient.post({
  path: 'storefront_access_tokens',
  type: DataType.JSON,
  data: {
    storefront_access_token: {
      title: 'This is my test access token',
    },
  },
});

const storefrontAccessToken =
  storefrontTokenResponse.body['storefront_access_token']['access_token'];

console.log(shopify);


module.exports = shopify;
