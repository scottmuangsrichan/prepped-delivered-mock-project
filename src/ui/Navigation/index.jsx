export default function Navigation() {
    return (
      <div className='bg-white w-100 sticky top-0 z-10 bg-freshly-white-2'> 
        <nav className='flex justify-between px-10 py-6 items-center font-medium w-1440 m-auto'>
          <div>
            <a href="/">Modern Phase</a>
          </div>
          <div className='m-auto px-1'>
            <ul className='flex gap-6 text-base justify-center items-center'>
              <li><a href="/plans-and-menu" className='text-sm hover:text-blue-500 font-semibold '>Plans & Menu</a></li>
              <li><a href="/why-mealprep"className='text-sm hover:text-blue-500 font-semibold'>How it Works</a></li>
              <li><a href="/gift-cards" className='text-sm hover:text-blue-500 font-semibold'>Gifts</a></li>
              <li><a className='text-sm hover:text-blue-500 font-semibold'>Refer a Friend</a></li>
              <li><a className='text-sm hover:text-blue-500 font-semibold'>Help</a></li>
            </ul>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <a href="/login" className='text-sm hover:text-blue-500 font-semibold'>Login</a>
            <button className='text-sm w-100 bg-blue-500 px-4 py-2 text-white hover:bg-blue-900 font-semibold'><a href="/join-now">Sign Up</a></button>
          </div>
        </nav>
      </div>
    )
  }