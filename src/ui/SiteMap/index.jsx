import Link from "next/link"

export default function SiteMap(){
    return (
      <footer className='bg-slate-100 md:p-10 border-t-2 border-solid w-screen'>
        <div className='md:flex md:justify-evenly md:items-top md:max-w-[1440px] md:w-[1200px] md:mx-auto p-5'>
          <div className="flex-col flex md:place-items-start text-left">
            <h1 className='pb-1 font-semibold'>Modern Phase</h1>
            <p>&#169; 2023</p>
          </div>
          <div className="pt-5 gap-5 flex flex-col">
            <div>
              <ListOfLinks 
                category='Company'
                links={['Careers', 'Contact Us', 'Terms', 'Privacy']}
              />
            </div>
            <div>
              <ListOfLinks
                category='Learn More'
                links={['Plans & Menu', 'Why Freshly', 'Gifts', 'FAQs']}
              />
            </div>
            <div>
              <ListOfLinks 
                category='Social Media'
                links={['Facebook', 'Twitter', 'Instagram']}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center">Developed by Modern Phase</h1>
        </div>
      </footer>
    )
  }

  function ListOfLinks({category , links = []}){
    return ( 
      <div>
      <ul className='flex flex-col gap-1'>
        <li><h6 className='font-bold underline underline-offset-1'>{category}</h6></li>
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