import Image from "next/image";
import Button from "../Button";


function LearnMoreSection(){
  return (
    <div className='md:max-w-[1440px] md:w-[1200px] m-auto flex flex-col md:flex-row justify-between md:p-16 items-center'>
      <div className='flex flex-col gap-6 bg-white relative md:left-[2rem] md:max-w-[50rem] md:w-2/3 z-[2]'>
        <h1 className='font-bold text-4xl text-left px-10 pt-10'>We believe eating right should be easy for everyone.</h1>
        <p className="px-10">Each Prepped Delivered meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.</p>
        <div className="px-10 pb-10">
          <Button 
            url="/why-mealprep"
            displayText="Learn More"
          />
        </div>
      </div>
      <div className='w-screen px-10 hidden sm:block'>
        <Image
          src='https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' 
          alt="food"
          layout='responsive'
          width={100}
          height={90}
          />
      </div>
    </div>
  )
}

export default LearnMoreSection;