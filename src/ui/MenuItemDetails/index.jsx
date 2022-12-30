import MenuItemImage from "../MenuItemImage";
import Tag from "../Tag";

export default function MenuItemDetails({imgUrl , menuItemName, calorieCount}){
  return( 
    <div className="fixed z-10 top-[50%] left-[50%] max-h-[500px] w-[100%] bg-transparent translate-x-[-50%] translate-y-[-40%]">
      <div className="w-[100%] flex mx-auto justify-center">
        <MenuItemImage />
        <div className="bg-white w-[1/2]">
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
              <h1 className="text-3xl text-red-500 font-bold">{calorieCount}<h4 className="text-black font-normal">calories</h4></h1>
              <div></div>
              <p>Premium Protein</p>
            </div>
            <div className="flex flex-row gap-10">
              <div className="bg-red-100">
                <h3>26</h3>
                <h4>Protein</h4>
              </div>
              <div className="bg-red-100">
                <h3>16</h3>
                <h4>Fats</h4>
              </div>
              <div className="bg-red-100">
                <h3>38</h3>
                <h4>Carbs</h4>
              </div>
            </div>
            <hr></hr>
            <div>
              <button>View Plan</button>
            </div>
            <div>
              <button>Claim Offer Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}