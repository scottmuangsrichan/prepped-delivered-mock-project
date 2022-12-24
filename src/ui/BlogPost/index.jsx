import Image from "next/image";

export default function BlogPost({img , title , previewText , link}){
    return (
        <div className="flex gap-10 items-center">
            <div className="w-[100%]">
                <Image 
                    src={img}
                    alt="" 
                    layout="responsive"
                    width={100}
                    height={100}    
                />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="pb-4">{previewText}</p>
                <a className="text-blue-500 underline-offset-2 underline">{link}</a>
            </div>
        </div>
    )
}