export default function SiteMap(){
    return (
      <footer className='bg-slate-100 md:p-20 border-t-2 border-solid w-screen'>
        <div className='md:flex justify-evenly items-top md:max-w-[1440px] md:w-[1200px] md:mx-auto'>
          <div>
            <h1 className='pb-4 font-semibold'>Modern Phase</h1>
            <p>Copyright 2022</p>
          </div>
          <div>
            <h6 className='pb-4 font-semibold'>Company</h6>
            <ul className='flex flex-col gap-2'>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h6 className='pb-4 font-semibold'>Learn More</h6>
            <ul className='flex flex-col gap-2'>
              <li>Plans & Menu</li>
              <li>Why Freshly</li>
              <li>Gifts</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h6 className='pb-4 font-semibold'>Join Us</h6>
            <ul className='flex flex-col gap-2'>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>TikTok</li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }