import MenuItemImage from "../MenuItemImage";
import MacroDisplay from "../MacroDisplay";
import Tag from "../Tag";

export default function MenuItemDetails({menuItemName, calorieCount, category}){
  return( 
    <div className="fixed z-10 top-[50%] left-[50%] max-h-[500px] w-[100%] bg-transparent translate-x-[-50%] translate-y-[-40%]">
      <div className="w-[100%] flex md:flex-row flex-col mx-auto justify-center">
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
             <MacroDisplay 
              macroType = "Protein"
              macroAmount = "26"
             />
             <MacroDisplay 
              macroType = "Carb"
              macroAmount = "35"
             />
             <MacroDisplay 
              macroType ="Fat"
              macroAmount = "10"
             />
            </div>
            <hr></hr>
            <div>
              <button className="border border-solid-1 border-red-100 p-10">View Plan</button>
            </div>
            <div>
              <button className="bg-red-100 p-10">Claim Offer Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}