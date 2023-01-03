import { gql } from 'graphql-tag';

const typeDefs = gql`
  type Query {
    products: [Product]
  }

  type Product {
    id: ID!
    title: String!
    description: String!
    price: String!
    images: [Image]
  }

  type Image {
    src: String!
  }
`;

const resolvers = {
  Query: {
    products: () => {
      // Fetch products from the Shopify Storefront API
      return fetch('https://{store}.myshopify.com/api/products')
        .then((res) => res.json())
        .then((data) => data.products);
    },
  },
};

export default { typeDefs, resolvers };
