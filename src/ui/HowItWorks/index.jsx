import HowItWorksCard from "../HowItWorksCard"

export default function HowItWorks() {
    return (
      <div className="w-screen">
        <div className='sm:max-w-[1440px] sm:w-[1200px] m-auto py-16'>
          <h1 className='text-center font-bold text-5xl pb-10'>How it works</h1>
          <div className='sm:flex sm:gap-10 sm:justify-center sm:items-center sm:text-center'>
            <HowItWorksCard
              title="Choose Your Meals"
              description="Rotating menu of 50+ balance dishes."
              img="https://assets-global.website-files.com/5d03b4e130118314af624b20/62b0b19dbc5f55c4206158f7_choose-your-meals%20(1).svg"
            />
            <HowItWorksCard
              title="We Cook & Deliver"
              description="Fully-cooked meals sent fresh, not frozen."
              img="https://assets-global.website-files.com/5d03b4e130118314af624b20/62b0b19b358b954d12f769ba_we-cook-deliver%20(1).svg"
            />
            <HowItWorksCard
              title="Chill & Reheat"
              description="Refrigerate meals & reheat in 3 minutes."
              img="https://assets-global.website-files.com/5d03b4e130118314af624b20/62b0b19b53e85f79fe3374c5_chill-reheat.svg"
            />
            <HowItWorksCard
              title="Eat & Repeat"
              description="Change meals, skip a week, or cancel any time."
              img="https://assets-global.website-files.com/5d03b4e130118314af624b20/62f258373288e30c31c265b2_Group%2023.svg"
            />
          </div>
        </div>
      </div>
    )
  }
  
