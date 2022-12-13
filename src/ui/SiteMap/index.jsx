export default function SiteMap(){
    return (
      <footer className='bg-slate-100 p-20 border-t-2 border-solid'>
        <div className='m-auto w-1440 flex justify-evenly items-top px-20'>
          <div>
            <h1 className='pb-4 font-semibold'>logo</h1>
            <p>Logo Copyright</p>
          </div>
          <div>
            <h6 className='pb-4 font-semibold'>Company</h6>
            <ul className='flex flex-col gap-2'>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Press</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Careers</li>
              <li>Affiliates</li>
              <li>Partnerships</li>
            </ul>
          </div>
          <div>
            <h6 className='pb-4 font-semibold'>Learn More</h6>
            <ul className='flex flex-col gap-2'>
              <li>Plans & Menu</li>
              <li>Why Freshly</li>
              <li>Gifts</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Students</li>
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