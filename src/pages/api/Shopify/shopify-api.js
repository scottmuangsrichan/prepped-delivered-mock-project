import '@shopify/shopify-api/adapters/node';
import {shopifyApi , LATEST_API_VERSION} from '@shopify/shopify-api';
const accessToken = process.env.FRESHLY_MOCK_PROJECT_KEY;
const shopify = shopifyApi({
  // The next 4 values are typically read from environment variables for added security
  apiKey: 'APIKeyFromPartnersDashboard',
  apiSecretKey: 'APISecretFromPartnersDashboard',
  scopes: ['read_products'],
  hostName: 'ngrok-tunnel-address',
  ...
});


const client = new shopify.clients.Rest({session});
const response = client.get({path: 'shop'});


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

  / Load the access token as per instructions above
const storefrontAccessToken = '<my token>';
// Shop from which we're fetching data
const shop = 'my-shop.myshopify.com';
// StorefrontClient takes in the shop url and the Storefront Access Token for that shop.
const storefrontClient = new shopify.clients.Storefront({
  domain: shop,
  storefrontAccessToken,
});
// Use client.query and pass your query as `data`
const products = await storefrontClient.query({
  data: `{
    products (first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }`,
});
