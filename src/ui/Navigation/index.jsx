import Link from "next/link"

export default function Navigation() {
    return (
      <div className='bg-white sticky top-0 z-10 w-screen'> 
        <nav className='flex justify-between py-6 items-center font-medium max-w-[1440px] w-[1200px] m-auto'>
          <div>
            <Link href="/">Modern Phase</Link>
          </div>
          <div className='m-auto px-1'>
            <ul className='flex gap-6 text-base justify-center items-center'>
              <li>
                <Link href="/plans-and-menu">
                  <a className='text-sm hover:text-blue-500 font-semibold'>
                    Plans & Menu
                  </a>
                </Link>
              </li>
              <li><Link href="/why-mealprep"><a className='text-sm hover:text-blue-500 font-semibold'>How it Works</a></Link></li>
              <li><Link href="/gift-cards"><a className='text-sm hover:text-blue-500 font-semibold'>Gifts</a></Link></li>
              <li><Link href="/"><a className='text-sm hover:text-blue-500 font-semibold'>Refer A Friend</a></Link></li>
              <li><Link href="/"><a className='text-sm hover:text-blue-500 font-semibold'>Help</a></Link></li>
            </ul>
          </div>
          <div className='flex items-center justify-center gap-3'>
            <Link href="/login" className='text-sm hover:text-blue-500 font-semibold'>
              <a>Login</a>
            </Link>
            <div>
              <button className='text-sm w-100 bg-blue-500 px-4 py-2 text-white hover:bg-blue-900 font-semibold'><Link href="/join-now">Sign Up</Link></button>
            </div>
          </div>
        </nav>
      </div>
    )
  }