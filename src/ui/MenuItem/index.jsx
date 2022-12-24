import Image from "next/image";
export default function MenuItemCard({title , description, img }){
  const _img = img;  
  return (
      <div className='text-left p-1 hover:text-gray-500 flex flex-col justify-center items-center'>
        <div className="w-[45%]">
          <Image
            src={_img} 
            alt=""
            layout="responsive"
            width={100}
            height={100}
            />
        </div>
          <div className="pt-4 text-center">
            <h1>{title}</h1>
            <p className='text-gray-500'>{description}</p>
          </div>
      </div>
    )
  }