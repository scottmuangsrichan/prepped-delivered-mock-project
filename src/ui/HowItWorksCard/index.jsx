import Image from "next/image";

export default function HowItWorksCard({ title , description, subheading , subparagraph, img }){
  const _img = img;  
  return (
        <div className='p-4'>
          <div className="w-1/2 m-auto">
            <Image 
              src={_img} 
              alt="" 
              layout="responsive"
              width={50}
              height={50}
            />
          </div>
          <h1 className='text-lg font-bold pt-5'>{title}</h1>
          <h6 className="text-2xl font-bold">{subheading}</h6>
          <p className='text-sm pt-1'>{description}</p>
          <p className="text-sm pt-1">{subparagraph}</p>
        </div>
    )
  }