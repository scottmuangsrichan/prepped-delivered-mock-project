import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { useState } from "react";

function GetStartedSection(){
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  
  function handleSubmit(event){
    event.preventDefault();
    console.log(email, zip);
  }
  
  return (
    <div className='md:max-w-[1440px] md:w-[1200px] m-auto flex flex-col md:flex-row justify-between md:p-24 items-center pt-10'>
      <div className='w-screen px-10 pb-5'>
        <Image
          src='https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' 
          alt="food"
          layout='responsive'
          width={100}
          height={90}
          />
      </div>
    <div className='md:p-12 flex flex-col bg-white relative md:left-[2rem] max-w-[50rem] md:w-2/3 z-[2]'>
      <h1 className='text-4xl font-bold px-10'>Healthy Meals Delivered Weekly</h1>
      <form className='flex flex-col gap-4 py-2 px-10 pt-5'>
        <input 
          className='border-solid border-2 rounded-md p-2'
          placeholder='meal@prepped.com'
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ></input>
        <input 
          className='border-solid border-2 rounded-md p-2'
          placeholder='zip'
          id="zipCode"
          name="zipCode"
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          ></input>
        <Button 
          url="/join-now"
          displayText="Get Started"
          onClick={handleSubmit}
        />
      </form>
      <div className="px-10 pb-10">
        <p className='pt-4 text-sm pb-2'>Already have an account? <Link className='text-blue-700 underline underline-offset-2' href='/login'><a>Log in</a></Link></p>
        <p className='text-sm'>By continuing, you agree to our <a className='text-slate-300 hover:text-blue-700 underline underline-offset-2'>Terms</a> and <a className='text-slate-300 hover:text-blue-700 underline underline-offset-2'>Privacy Policy</a> & will receive emails from Prepped Delivered.</p>
      </div>
    </div>
    </div>
  )
}

export default GetStartedSection;