import Image from "next/image";
import { useState, useEffect } from "react";
import MenuItemDetails from "../MenuItemDetails";
import MenuItemImage from "../MenuItemImage";


export default function MenuItemCard({title , description, img }){
  const [toggleDetails , setToggleDetails] = useState(true);

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
      : <MenuItemDetails />
      }
    </div>
    )
  }