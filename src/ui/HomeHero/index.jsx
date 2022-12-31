import Link from "next/link";
import EmailInputField from "../EmailInputField";
import ZipCodeInputField from "../ZipCodeInputField";

export default function HomeHero(){  
  return (
      <div className="md:flex flex-row justify-between bg-heroBackground bg-cover">
        <div className="translate-y-3/4">
          <p className="text-white text-3xl font-bold translate-x-full">
            Delivered fresh <br/>to your door.
          </p>
        </div>
        <div className="bg-yellow-400 p-12 sm:w-[50%]">
          <h1 className='text-5xl font-bold pb-10'>Balanced meals for busy lives.</h1>
          <button className='font-weight-500 text-blue-500 px-4 py-2 bg-white border-solid border-blue-500 border-2 hover:bg-blue-900'>Explore Meals</button> 
          <p className='pt-10 pb-5 text-lg font-bold'>See meals available in your area!</p>
        <form className='flex flex-col md:flex-row gap-5 pb-5'>
          <EmailInputField />
          <ZipCodeInputField />
        </form>
          <button className='bg-blue-500 px-4 py-2 text-white hover:bg-blue-900'>Get Started</button> 
          <p className='pt-5'>
            By continuing, you agree to our 
              <Link href="/"><a className="underline underline-offset-1 text-blue-500">Terms</a></Link> and <Link href="/"><a className="underline underline-offset-1 text-blue-500">Privacy Policy</a></Link> & will receive emails from Freshly.
          </p> 
        </div>
      </div>    
    )
  
  
  }
  