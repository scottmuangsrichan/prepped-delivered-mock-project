import Styling from "../Styling";

export default function OnTheMenu(){
    return (
        <div className="md:flex flex-col gap-10 p-10 m-auto justify-center items-center">
            <div>
                <h1 className={Styling().heading}>On the Menu</h1>
            </div>
            <div className="w-1/2 py-10 text-center">
                <p>
                    Whatever your lifestyle, Freshly’s got you covered—with gluten-free, dairy-free, plant-based, carb-smart, and calorie-conscious meal options! Our heat-&-eat breakfasts, low-lift lunches, and done-for-you dinners provide an effortless alternative to everyday cooking, with nutritious prepared meals delivered fresh to your door. Explore this week’s dishes and start eating better:
                </p>
            </div>
            <div className="flex gap-5">
                <p className="text-gray-500">Menu category:</p>
                <select className="border-black border-solid border text-sm">
                    <option>All Meals</option>
                    <option>Purely Plants</option>
                    <option>Signature Collection</option>
                    <option>FreshlyFit</option>
                    <option>Proteins & Sides</option>
                </select>
            </div>
        </div>
    )
}