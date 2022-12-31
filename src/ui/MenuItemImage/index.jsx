import Image from "next/image";
import { useEffect } from "react";

function getServerSideProps(){
  const uri = "";
}

function MenuItemImage({alt , imgUrl}){
  return (
  <div className="w-[35%]">
    <Image
      src={imgUrl}
      alt={alt}
      layout="responsive"
      width={100}
      height={100}
    />
  </div>
  )
}

export default MenuItemImage;