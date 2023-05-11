import Head from "next/head";
import { useState } from "react";
import CheckoutProgressBar from "../../../ui/CheckoutProgressBar";
function PickPlanPage(){
  const [isOpen , setIsOpen] = useState(false);
  
  return(
    <div className="flex items-center flex-col container mx-auto">
      <Head>
        <title>Order Prepped Delivered Today! | Pick Plan</title>
      </Head>
      <CheckoutProgressBar /> 
      <h1 className="font-bold text-4xl text-center">How many meals would you like?</h1>
      <p>Every meal of the day - Ready in 3 minutes</p>
      <select className="border border-solid-1 border-black">
           <option value="" disabled selected hidden>Select meals</option>
           <option id="4-5">4-5</option>
           <option id="6-7">6-7</option>
           <option id="8-9">8-9</option>
           <option id="10-11">10-11</option>
           <option id="12">12</option>
         </select>
      <form 
        className="flex flex-col gap-4 items-center justify-center"
        action="/join-now/plan/plan-details"
        method="POST"
      >
      <div className="text-center">
       <h1 onClick={() => setIsOpen(!isOpen)} className="font-bold text-xl pb-10">Allergies / Preference </h1>
       {
         isOpen ?
         <div className="container flex flex-col">
         <h2 className="font-semibold text-lg">Any allergies we need to be aware of?</h2>
         <p>We are a Gluten-Free Kitchen</p>
         <select className="border border-solid-1 border-black">
           <option value="" disabled selected hidden>Select allergies</option>
           <option>Egg</option>
           <option>Sesame</option>
           <option>Dairy</option>
           <option>Shellfish</option>
           <option>Tree Nut</option>
           <option>Soy</option>
         </select>
         </div>
       : null}
       </div>
         <button className="bg-blue-500 text-white font-semibold px-4 py-2 w-fit">
           Continue
         </button>
      </form>
    </div>
  )
}

export default PickPlanPage;