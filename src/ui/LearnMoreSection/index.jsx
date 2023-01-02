import Image from "next/image";
import Button from "../Button";


function LearnMoreSection(){
  return (
    <div className='md:max-w-[1440px] md:w-[1200px] m-auto flex flex-col md:flex-row justify-between md:p-16 items-center'>
      <div className='md:p-12 flex flex-col gap-6 bg-white relative left-[2rem] md:max-w-[50rem] md:w-2/3 z-[2]'>
        <h1 className='font-bold text-4xl md:text-left text-center'>We believe eating right should be easy for everyone.</h1>
        <p>Each Freshly meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.
        </p>
        <Button 
          url="/why-mealprep"
          displayText="Learn More"
        />
      </div>
      <div className='md:w-1/2 w-1/4'>
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