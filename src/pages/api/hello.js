// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const productId = "11235813213455";
// // `session` is built as part of the OAuth process
// const client = new shopify.clients.Rest({session});
// const product = await client.get({
//   path: `products/${productId}`,
//   query: {id: 1, title: "title"}
// });


export default function handler(req, res) {
  res.status(200).json({ name: 'Scott Muangsrichan' })
}

