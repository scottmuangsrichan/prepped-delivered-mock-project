import Image from "next/image";
import { useEffect, useState } from "react";

function MenuItemImage({alt}){
  const [isLoading , setIsLoading] = useState(false);
  const [imgError , setImgError] = useState(null);
  const [imageUrl , setImageUrl] = useState("");
  
  useEffect(()=>{
    async function getImage(){
      Authorization: "Client-ID z0dSExKXpC8evj1HpvJgCEP4sOt4SioASG3rZpfxb2g";
      setIsLoading(true);
      await fetch("https://api.unsplash.com/photos/?`${Authorization}`&query=`$Client-ID}`")
        .then(res => {
          if(res.ok){
            setImageUrl(res.url);
            setIsLoading(false);
          } else {
            throw Error("Image not found");
          }
        })
        .catch(err => {
          setImgError(err.message);
          setIsLoading(false);
        })
    }
    getImage();
  },[])
  if(isLoading) return <p>Loading...</p>
  if(imgError) return <p>Image not found</p>

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