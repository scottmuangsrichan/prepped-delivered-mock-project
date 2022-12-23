export default function HomeHero(){
    return (
      <div className="border border-solid-3">
        <div>
          <h1 className='text-5xl font-bold pb-10'>Balanced meals for busy lives.</h1>
          <button className='font-weight-500 text-blue-500 px-4 py-2 bg-white border-solid border-blue-500 border-2 hover:bg-blue-900'>Explore Meals</button> 
          <p className='pt-10 pb-5 text-lg font-bold'>See meals available in your area!</p>
        <form className='flex flex-row gap-5 pb-5'>
          <div className='flex flex-col'>
            <label className='pb-3'>Email Address</label>
            <input 
              placeholder='food@mealprep.com'
              className='p-2'
              ></input>
          </div>
          <div className='flex flex-col'>
            <label className='pb-3'>Zip Code</label>
            <input 
              placeholder='11111'
              className='p-2'
              ></input>
          </div>
        </form>
          <button className='bg-blue-500 px-4 py-2 text-white hover:bg-blue-900'>Get Started</button> 
          <p className='pt-5'>By continuing, you agree to ourTermsandPrivacy Policy& will receive emails from Freshly.</p> 
        </div>
        <div>
          <h1 className="text-3xl text-white font-bold">Delivered to you fresh , not frozen.</h1>
        </div>
      </div>    
    )
  
  
  }
  