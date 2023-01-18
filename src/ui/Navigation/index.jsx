import Link from "next/link";
import { useState, useEffect } from "react";
import AnnouncementBar from "../AnnouncementBar";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [width , setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  
  return (
      <div className='bg-white sticky top-0 z-10 w-screen'> 
      <AnnouncementBar />
        <nav className="flex flex-row justify-between py-6 px-8 items-center font-medium text-xl">
          <div><Link href="/">Modern Phase</Link></div>
          <div>
            {width <= 475 ? 
              <div onClick={() => setIsOpen(!isOpen)}>
                <h1>Menu</h1>
                  { isOpen ?
                    <div>
                      <div className='m-auto px-1'>
                        <ul className='flex flex-col gap-6 text-base justify-center items-center'>
                          <li><Link href="/plans-and-menu"><a className='text-sm hover:text-blue-500 font-semibold'>Plans & Menu</a></Link></li>
                          <li><Link href="/why-mealprep"><a className="text-sm hover:text-blue-500 font-semibold">How it Works</a></Link></li>
                          <li><Link href="/gift-cards"><a className="text-sm hover:text-blue-500 font-semibold">Gifts</a></Link></li>
                          <li><Link href="/"><a className="text-sm hover:text-blue-500 font-semibold">Refer A Friend</a></Link></li>
                          <li><Link href="/"><a className="text-sm hover:text-blue-500 font-semibold">Help</a></Link></li>
                        </ul>
                      </div>
                      <div className='flex items-center justify-center gap-3'>
                        <Link href="/login" className='text-sm hover:text-blue-500 font-semibold'><a>Login</a></Link>
                        <div>
                          <button className='text-sm w-100 bg-blue-500 px-4 py-2 text-white hover:bg-blue-900 font-semibold'><Link href="/join-now">Sign Up</Link></button>
                        </div>
                      </div>
                    </div> : null 
                  }
              </div>
              : <div className="w-screen">
                  <ul className="flex flex-row justify-evenly">
                    <li><Link href="/plans-and-menu"><a className='text-sm hover:text-blue-500 font-semibold'>Plans & Menu</a></Link></li>
                    <li><Link href="/why-mealprep"><a className="text-sm hover:text-blue-500 font-semibold">How it Works</a></Link></li>
                    <li><Link href="/gift-cards"><a className="text-sm hover:text-blue-500 font-semibold">Gifts</a></Link></li>
                    <li><Link href="/"><a className="text-sm hover:text-blue-500 font-semibold">Refer A Friend</a></Link></li>
                    <li><Link href="/"><a className="text-sm hover:text-blue-500 font-semibold">Help</a></Link></li>
                  </ul>
                </div>}
              </div>
        </nav>
      </div>
    )
  }