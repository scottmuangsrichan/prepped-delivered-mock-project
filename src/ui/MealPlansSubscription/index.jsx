import Image from "next/image";
import Button from "../Button";


export default function MealPlansSubscriptions() {
  const mealPlanSubscription = [
    { img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492937b0377ca6310cb0_4-5%20Meals-p-500.png", numberOfMeals: "4-5" },
    { img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492393696224964e1910_6-7%20Meals-p-500.png", numberOfMeals: "6-7" },
    { img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492cddaec74cb5161350_8-9%20Meals-p-500.png", numberOfMeals: "8-9" },
    { img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492794414230d9d0e1be_10-11%20Meals-p-500.png", numberOfMeals: "10-11" },
    { img: "https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4922b1b2e2b2e2b2b2b2_12%20Meals-p-500.png", numberOfMeals: "12" },
  ];

    return (
      <div className='bg-freshly-white pb-10 w-screen'>
        <div className="m-auto px-12 sm:flex sm:flex-col">
          <div className='text-center p-12'>Prepped Delivered</div>
          <h1 className='text-center text-4xl font-bold pb-5'>Flexible plans that fit your life</h1>
          <p className='pb-10 sm:w-1/2 sm:max-w-[1/2] m-auto text-center text-lg'>We offer anywhere from 4 - 12 meals per week, with meals as low 
            as <b>{"$9.58 each. The bigger your box, the more you'll save"}</b> 
            - and you can always pause or change your plan at any time.
          </p>
          <div className='sm:flex justify-center align-center gap-10 p-4'>
            {mealPlanSubscription.map((card) => (
              <MealPlanCard img={card.img} numberOfMeals={card.numberOfMeals} key="" />
            ))}
          </div>
            <p className='text-center pb-6 text-sm'>Shipping and tax added at checkout. Prices are rounded for your convenience.</p>
            <div className="flex justify-center">
              <Button 
                url="/join-now"
                displayText="Sign Up Now"
              />
            </div>
        </div>
      </div>
    )
  }
  
  function MealPlanCard({numberOfMeals , img }){
    const _img = img;
    return (
      <div className='flex flex-col justify-center align-center'>
        <Image
          src={_img}
          alt=""
          layout="responsive"
          height={100}
          width={100}
          />
        <h3 className='text-gray-500 m-auto pt-3 text-xl font-semibold'>{numberOfMeals} Meals</h3>
      </div>
    )
  }
  