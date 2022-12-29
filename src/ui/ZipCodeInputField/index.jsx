import { useState } from "react";

function ZipCodeInputField(){
  const [zipCode , setZipCode] = useState("");
  
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return(
    <div className='flex flex-col'>
      <label className='pb-3'>Zip Code</label>
      <input 
        placeholder='111111'
        className='p-2'
        type="text"
        value={zipCode}
        id="zipCode"
        onChange={handleZipCodeChange}
      ></input>
    </div>
  )
}

export default ZipCodeInputField;