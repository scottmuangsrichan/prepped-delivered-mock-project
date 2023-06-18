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
          <NavigationLink link="/" linkName="Prepped Delivered" />
          <div>
            {
            width <= 475 ? 
              <div onClick={() => setIsOpen(!isOpen)}>
                <h1>Menu</h1>
                  { isOpen ?
                    <div>
                      <NavigationList></NavigationList>
                      <div className='flex items-center justify-center gap-3'>
                        <NavigationLink link={"/login"} linkName={"Login"}/>
                        <div>
                          <button className='text-sm w-100 bg-blue-500 px-4 py-2 text-white hover:bg-blue-900 font-semibold'><Link href="/join-now">Sign Up</Link></button>
                        </div>
                      </div>
                    </div> : null 
                  }
              </div>
              : <NavigationList></NavigationList>
                }
              </div>
        </nav>
      </div>
    )
  }

  function NavigationLink({link, linkName}){
    return (
      <Link  href={link} legacyBehavior>
        <a className="text-sm font-semibold hover:text-blue-500">{linkName}</a>
      </Link>
    )
  }

  function NavigationList(){
    const navigationLinks = [
      { name: 'Plans & Menu', href: '/plans-and-menu' },
      { name: 'How it Works', href: '/why-mealprep' },
      { name: 'Gifts', href: '/gift-cards' },
      { name: 'Refer A Friend', href: '/refer-a-friend' },
      { name: 'Help', href: '/help' },
    ];

    return (
      <div className='m-auto px-1'>
        <ul className="md:flex md:gap-5">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <NavigationLink link={link.href} linkName={link.name}>{link.name}</NavigationLink>
            </li>
          ))}
        </ul>
    </div>
    )
  }