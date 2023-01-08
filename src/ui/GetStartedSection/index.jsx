import Image from "next/image";
import Link from "next/link";

function GetStartedSection(){
  return (
    <div className='md:max-w-[1440px] md:w-[1200px] m-auto flex flex-col md:flex-row justify-between md:p-24 items-center h-4/5'>
      <div className='w-1/2'>
        <Image
          src='https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' 
          alt="food"
          layout='responsive'
          width={100}
          height={90}
          />
      </div>
    <div className='md:p-12 flex flex-col bg-white relative left-[2rem] max-w-[50rem] w-2/3 z-[2]'>
      <h1 className='font-bold text-5xl'>Healthy Meals Delivered Weekly</h1>
      <form className='flex flex-col gap-4 py-2'>
        <input 
          className='border-solid border-2 rounded-md p-2'
          placeholder='meal@prepped.com'></input>
        <input 
          className='border-solid border-2 rounded-md p-2'
          placeholder='zip'></input>
      </form>
      <div>
        <button className='w-1/2 bg-blue-500 px-4 py-2 text-white hover:bg-blue-900'>Get Started</button>
      </div>
      <p className='pt-8 text-sm'>Already have an account? <Link className='text-blue-700 underline underline-offset-2' href='/login'><a>Log in</a></Link></p>
      <p className='text-sm'>By continuing, you agree to our <a className='text-slate-300 hover:text-blue-700 underline underline-offset-2'>Terms</a> and <a className='text-slate-300 hover:text-blue-700 underline underline-offset-2'>Privacy Policy</a> & will receive emails from Freshly.</p>
    </div>
    </div>
  )
}

export default GetStartedSection;