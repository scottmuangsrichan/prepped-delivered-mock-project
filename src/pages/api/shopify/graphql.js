import { NextApiRequest, NextApiResponse } from 'next';
import { ApiVersion } from '@shopify/koa-shopify-graphql-proxy';
import { verifyRequest } from '@shopify/koa-shopify-auth';
import { createServer } from '@shopify/koa-shopify-graphql-proxy';
import shopify from '../../libs/shopify.config';
import { getSession } from 'next-auth/client';

export default async function graphqlProxy({
  req: NextApiRequest,
  res: NextApiResponse
}) {
  if (req.method === 'GET') {
    const { shop, accessToken } = await getSession(req, res);
    const server = createServer({
      shop,
      accessToken,
      apiVersion: ApiVersion.October20,
    });
    return server(req, res);
  } else {
    const { shop, accessToken } = await verifyRequest(req);
    const server = createServer({
      shop,
      accessToken,
      apiVersion: ApiVersion.October20,
    });
    return server(req, res);
  }
}