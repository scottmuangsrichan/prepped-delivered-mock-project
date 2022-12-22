import Image from "next/image";

function EveryLifestyleDietCard({img , title , description}){
    const _img = img;
    return (
        <div className="m-auto">
            <Image src={_img} />
            <h6>{title}</h6>
            <p>{description}</p>
            <a className="py-3 underline underline-offset-2 text-blue-500">Learn More</a>
        </div>
    )
}

