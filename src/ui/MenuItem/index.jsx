import { useState } from "react";
import { Query } from "urql";
import MenuItemImage from "../MenuItemImage";


export default function MenuItemCard({title , description, img }){
  const [toggleDetails , setToggleDetails] = useState(true);

  // Grahql query to get products from Shopify storefront api
  const GET_PRODUCTS = `
  query {
    products(first: 10) {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                price
                title
              }
            }
          }
        }
      }
    }
  }
  `;

  // call the query
  console.log(GET_PRODUCTS);

  return (
    <div onClick={()=> setToggleDetails(!toggleDetails)}>
      { toggleDetails ?
        <div className='text-left p-1 hover:text-gray-500 flex flex-col justify-center items-center pb-12'>
          <MenuItemImage img={img} />
            <div className="pt-2 text-center">
              <h1>{title}</h1>
              <p className='text-gray-500'>{description}</p>
            </div>
        </div>
      : null
      }
    </div>
    )
  }