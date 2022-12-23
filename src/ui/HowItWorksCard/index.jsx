import Image from "next/image";

export default function HowItWorksCard({ title , description, subheading , subparagraph, img }){
  const _img = img;  
  return (
        <div className='p-4'>
          <Image src={_img} className='m-auto rounded-md' alt="" layout="fill"/>
          <h1 className='text-lg font-bold pt-5'>{title}</h1>
          <h6 className="text-2xl font-bold">{subheading}</h6>
          <p className='text-sm pt-1'>{description}</p>
          <p className="text-sm pt-1">{subparagraph}</p>
        </div>
    )
  }