import Image from "next/image";


function MenuItemImage({alt = "", imageUrl = ""}){
  useQuery = `
  
  `;

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