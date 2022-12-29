import { useState } from "react";

export default function EmailInputField(){
  const [email , setEmail] = useState("");
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return(
    <div className='flex flex-col'>
      <label className='pb-3'>Email Address</label>
      <input 
        placeholder='food@mealprep.com'
        className='p-2'
        type="email"
        value={email}
        id="email"
        onChange={handleEmailChange}
      ></input>
    </div>
  )
}