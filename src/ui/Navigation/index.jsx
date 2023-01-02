import Link from "next/link";
import NavigationMobile from "../NavigationMobile";
import AnnouncementBar from "../AnnouncementBar";

export default function Navigation() {
  const navBarStyle = {
    variant1: {
      width: 400,
      style: "flex flex-col justify-between py-6 items-center font-medium sm:w-[1300px] sm:mx-auto sm:flex-row",
    },
    variant2: "bg-yellow-500 flex flex-col"
  };

  const navLinkStyle = {
    variant1: "text-sm hover:text-blue-500 font-semibold"
  }
  
    return (
      <div className='bg-white sticky top-0 z-10 w-screen'> 
      <AnnouncementBar />
      { navBarStyle.variant1.width >= 400 ?  
        <nav className="flex flex-col justify-between py-6 items-center font-medium sm:w-[1300px] sm:mx-auto sm:flex-row">
          <div>
            <Link href="/">Modern Phase</Link>
          </div>
          <div className='m-auto px-1'>
            <ul className='flex gap-6 text-base justify-center items-center'>
              <li><Link href="/plans-and-menu"><a className='text-sm hover:text-blue-500 font-semibold'>Plans & Menu</a></Link></li>
              <li><Link href="/why-mealprep"><a className={`${navLinkStyle}`}>How it Works</a></Link></li>
              <li><Link href="/gift-cards"><a className={`${navLinkStyle}`}>Gifts</a></Link></li>
              <li><Link href="/"><a className={`${navLinkStyle}`}>Refer A Friend</a></Link></li>
              <li><Link href="/"><a className={`${navLinkStyle}`}>Help</a></Link></li>
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
        </nav> : <NavigationMobile /> }
      </div>
    )
  }