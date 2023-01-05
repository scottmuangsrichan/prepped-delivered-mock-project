import sendStorefrontApiRequest from 
'@shopify/app-bridge-utils/send-storefront-api-request';

const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const accessToken = 'your-storefront-access-token';
    const query = `
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          title
          description
          price
        }
      }
    `;
    const variables = { id: productId };
    sendStorefrontApiRequest(accessToken, query, variables).then((data) => {
      setProduct(data.product);
    });
  }, [productId]);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default Product;
