export default function BlogPost({img , title , previewText , link}){
    const _img = img;
    return (
        <div className="flex gap-10 items-center">
            <img className="w-3/4" src={_img}></img>
            <div className="flex flex-col gap-2">
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="pb-4">{previewText}</p>
                <a className="text-blue-500 underline-offset-2 underline">{link}</a>
            </div>
        </div>
    )
}