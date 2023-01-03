import Image from "next/image";
import { useEffect, useState } from "react";

function MenuItemImage({alt = "", imageUrl = ""}){
  return (
  <div className="w-[35%]">
    <Image
      src={imageUrl}
      alt={alt}
      layout="responsive"
      width={100}
      height={100}
    />
  </div>
  )
}

export default MenuItemImage;