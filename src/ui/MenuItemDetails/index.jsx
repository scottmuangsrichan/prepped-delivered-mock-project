import Image from "next/image";
import Tag from "../Tag";

export default function MenuItemDetails({imgUrl , menuItemName, calorieCount, alt}){
  return( 
    <div className="flex">
      <div className="w-1/2">
        <Image
          src={imgUrl}
          alt={alt}
          layout="responsive"
          width={10}
          height={10}
        />
      </div>
      <div>
        <div className="flex md:flex-col">
          <p className="text-red-600">Protein +</p>
          <h1 className="text-black font-bold text-3xl">{menuItemName}</h1>
          <div className="flex md:flex-row">
            <Tag 
              nameOfTag="High Protein"
            />
            <Tag 
              nameOfTag="> 300 Calories"
            />
            <Tag 
              nameOfTag="Nut-Free"
            />
          </div>
        </div>
        <hr></hr>
        <div>
          <div className="flex">
            <h1 className="text-3xl text-red-500 font-bold">{calorieCount}<h4 className="text-black">calories</h4></h1>
            <div></div>
            <p>Premium Protein</p>
          </div>
        </div>
      </div>
    </div>
  )
}