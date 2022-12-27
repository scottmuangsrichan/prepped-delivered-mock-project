import { useState } from "react";

export default function Cart(){
    const [toggleCart , setToggleCart] = useState(false);
    const [customersMeal , setCustomersMeal] = useState(["meal1" , "meal2" , "meal3", "meal4", "meal5"]);
    return(
    <div 
        onClick={()=>setToggleCart(!toggleCart)}
        className="bg-yellow-500 w-1/2 h-1/2">
        {toggleCart ? 
            <div>
                <h1>Cart</h1>
                    <div>
                        <ul>
                            <li className="text-red-500 text-2xl">
                                {customersMeal.map((meal)=>{
                                    return(
                                    <div key={meal}>
                                        <h1>{meal}</h1>
                                    </div>
                                    );
                                })}
                            </li>
                        </ul>
                    </div>
            </div> : "Cart"}
    </div>
    )
}
