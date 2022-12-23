import Link from "next/link"

export default function Navigation() {
    return (
      <div className='bg-white w-100 sticky top-0 z-10'> 
        <nav className='flex justify-between px-10 py-6 items-center font-medium w-1440 m-auto'>
          <div>
            <Link href="/">Modern Phase</Link>
          </div>
          <div className='m-auto px-1'>
            <ul className='flex gap-6 text-base justify-center items-center'>
              <li><Link href="/plans-and-menu" className='text-sm hover:text-blue-500 font-semibold '>Plans & Menu</Link></li>
              <li><Link href="/why-mealprep"className='text-sm hover:text-blue-500 font-semibold'>How it Works</Link></li>
              <li><Link href="/gift-cards" className='text-sm hover:text-blue-500 font-semibold'>Gifts</Link></li>
              <li><Link href="/" className='text-sm hover:text-blue-500 font-semibold'>Refer A Friend</Link></li>
              <li><Link href="/" className='text-sm hover:text-blue-500 font-semibold'>Help</Link></li>
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