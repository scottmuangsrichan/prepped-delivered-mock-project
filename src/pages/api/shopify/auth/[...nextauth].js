import nextauth from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiRequest, NextApiResponse } from 'next';
import { shopify } from '../../../shopify.config';

const options = {
    providers: [
      Providers.Shopify({
        clientId: shopify.apiKey,
        clientSecret: shopify.apiSecretKey,
        scope: shopify.scopes.join(','),
        callbackUrl: shopify.callbackUrl,
        domain: shopify.shop,
      }),
    ],
  };

export default (req: NextApiRequest, res: NextApiResponse) => {
    return nextauth(req, res, options);
  };