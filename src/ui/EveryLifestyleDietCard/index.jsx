import Image from "next/image";

export default function EveryLifestyleDietCard({img , title , description}){
    const _img = img;
    return (
        <div className="w-1/2 m-auto flex items-center flex-col">
            <div className="w-1/2">
                <Image 
                    src={_img} 
                    alt="" 
                    layout="responsive" 
                    width={100}
                    height={100}
                />
            </div>
            <h6>{title}</h6>
            <p>{description}</p>
            <a className="py-3 underline underline-offset-2 text-blue-500">Learn More</a>
        </div>
    )
}

