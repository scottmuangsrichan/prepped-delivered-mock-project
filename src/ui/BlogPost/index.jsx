import Image from "next/image";

export default function BlogPost({img , title , previewText , link}){
    return (
        <div className="flex gap-10 justify-center items-center md:max-w-[1440px] md:w-[1200px] md:flex-row flex-col">
            <div className="md:w-[25%] w-[100%]">
                <Image 
                    src={img}
                    alt="" 
                    layout="responsive"
                    width={100}
                    height={100}    
                />
            </div>
            <div className="flex flex-col gap-2 md:w-[25%]">
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="pb-4">{previewText}</p>
                <a className="text-blue-500 underline-offset-2 underline">{link}</a>
            </div>
        </div>
    )
}