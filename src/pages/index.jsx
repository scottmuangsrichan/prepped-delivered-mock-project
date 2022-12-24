import Head from 'next/head';
import Navigation from '../ui/Navigation/index.jsx';
import HomeHero from '../ui/HomeHero/index.jsx';
import HowItWorks from '../ui/HowItWorks/index';
import Reviews from '../ui/Reviews/index.jsx';
import SiteMap from '../ui/SiteMap/index.jsx';
import MealPlansSubscriptions from '../ui/MealPlansSubscription/index.jsx';
import ExploreMeals from '../ui/ExploreMeals/index.jsx';
import Link from 'next/link.js';
import Image from 'next/image.js';

export default function Home() {
  return (
    <div className='overflow-x-clip'>
      <Head>
        <title>Meal Prep Ordering Service</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navigation />
      <HomeHero 
          image='https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' 
      />
      <HowItWorks />
      <MealPlansSubscriptions />
      <Reviews />
      <LearnMore />
      <GetStarted />
      <SiteMap />
    </div>
  )
}

function LearnMore(){
  return (
    <div className='max-w-[1440px] w-[1200px] m-auto flex flex-row justify-between p-16 items-center'>
      <div className='p-12 flex flex-col gap-6 bg-white relative left-[2rem] max-w-[50rem] w-2/3 z-[2]'>
        <h1 className='font-bold text-4xl'>We believe eating right should be easy for everyone.</h1>
        <p>Each Freshly meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.
        </p>
        <div>
          <button className='w-1/3 bg-blue-500 px-4 py-2 text-white hover:bg-blue-900'>Learn More</button> 
        </div>
      </div>
      <div className='w-1/2'>
        <Image
          src='https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' 
          alt="food"
          layout='responsive'
          width={100}
          height={90}
          />
      </div>
    </div>
  )
}

function GetStarted(){
  return (
    <div className='max-w-[1440px] w-[1200px] m-auto flex flex-row justify-between p-24 items-center h-4/5'>
      <div className='w-1/2'>
        <Image
          src='https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' 
          alt="food"
          layout='responsive'
          width={100}
          height={90}
          />
      </div>
    <div className='p-12 flex flex-col bg-white relative left-[2rem] max-w-[50rem] w-2/3 z-[2]'>
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

