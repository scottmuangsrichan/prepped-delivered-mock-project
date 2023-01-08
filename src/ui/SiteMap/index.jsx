import Link from "next/link"

export default function SiteMap(){
    return (
      <footer className='bg-slate-100 md:p-20 border-t-2 border-solid w-screen'>
        <div className='md:flex md:justify-evenly md:items-top md:max-w-[1440px] md:w-[1200px] md:mx-auto p-10'>
          <div className="flex-col items-center flex md:place-items-start">
            <h1 className='pb-2 font-semibold'>Modern Phase</h1>
            <p>Copyright 2022</p>
          </div>
          <ListOfLinks 
            category='Company'
            links={['Careers', 'Contact Us', 'Terms', 'Privacy']}
          />
          <ListOfLinks
            category='Learn More'
            links={['Plans & Menu', 'Why Freshly', 'Gifts', 'FAQs']}
          />
          <ListOfLinks 
            category='Social Media'
            links={['Facebook', 'Twitter', 'Instagram']}
          />
        </div>
      </footer>
    )
  }

  function ListOfLinks({category , links = []}){
    return ( 
      <div>
      <ul className='flex flex-col gap-1 items-center md:place-items-start'>
        <li><h6 className='pb-2 font-semibold'>{category}</h6></li>
        {links.map((link) => ( 
         <li key={link}>
          <Link href={`/${link}`}>
            <a className='hover:text-slate-500'>{link}</a>
          </Link>
         </li>
         ))}
      </ul>
    </div>
    )
  }