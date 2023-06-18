import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import {useState} from 'react';

export default function CommonQuestions(){
    const [showMore , setShowMore] = useState(false);
    
    function Question({title , description}){
    return (
        <div className='md:px-40 px-10 py-3 m-auto md:w-[1200px]'>
            <div 
                className='flex flex-row justify-between pb-3'
                onClick={()=> setShowMore(!showMore)}
                >
                <h1 className="font-bold hover:text-blue-500">{title}</h1>
                {
                    showMore ? 
                    <IoIosArrowUp 
                        className="text-blue-500 text-3xl"
                    /> : 
                    <IoIosArrowDown 
                        className="text-blue-500 text-3xl"
                    />

                }
            </div>
            {showMore ? <p className='pb-6'>{description}</p> : null }
            <hr></hr>
        </div>
    )
}

return (
    <div className='py-12 m-auto md:w-[1200px]'>
        <h1 className='font-bold text-5xl text-center pb-12'>Common Questions</h1>
        <Question 
            title="How many servings are your meals?"
            description="The majority of our meals are single serving and meant to feed an average adult. 
                We also offer multi-serve proteins and sides, which are designed to feed multiple people for extra mealtime flexibility. 
                These delicious, ready-to-heat options can help you bulk up existing meals, simplify home cooking, or even build an entire meal—the choice is yours!
                Our 6-meal plan is perfect for a person looking for 6 dinners (or lunches!) a week. 
                On average, our meals weigh in at about 13 ounces and range from 300 to 650 calories. 
                If you have a larger household, we do offer a 12 meal per week subscription (it’s perfect for couples or a family of 4 looking for 3 meals per week). 
                Plus, you can always order multiple subscriptions."
            />
        <Question
            title="Do you accommodate dietary preferences?"
            description="We accommodate a variety of dietary preferences, including plenty of gluten-free, dairy-free, peanut-free, plant-based, low-calorie, and carb-conscious options. As a customer, you can set your own dietary preferences and easily find the meals that work for you. You can also check out individual ingredient lists for each dish if you have specific concerns, or contact us at support@freshly.com for help making selections. If you’re unable to place an order that fits your preferences now, be sure to check back frequently as we’re always adding new and exciting dishes."
        />
        <Question 
            title="How long do the meals last?"
            description="The majority of our meals are single serving and meant to feed an average adult. We also offer multi-serve proteins and sides, which are designed to feed multiple people for extra mealtime flexibility. These delicious, ready-to-heat options can help you bulk up existing meals, simplify home cooking, or even build an entire meal—the choice is yours!

            Our 6-meal plan is perfect for a person looking for 6 dinners (or lunches!) a week. On average, our meals weigh in at about 13 ounces and range from 300 to 650 calories. If you have a larger household, we do offer a 12 meal per week subscription (it’s perfect for couples or a family of 4 looking for 3 meals per week). Plus, you can always order multiple subscriptions."
        />
        <Question 
            title="How do I heat up my meal?"
            description="Your meals will come to you fully prepared so you just have to heat ‘em up in the microwave. On the back of each meal, you’ll find our easy steps for heating, but generally, the meals heat up in about 3 minutes (depending on your microwave). If you’re unsure, start at 2 minutes and heat in 30–second increments until the meal reaches an inner temperature of 165° F. Our meals are packaged to be heated in the microwave (for the ultimate convenience), but you can heat them in the oven if you’d like. Just so you know, our current meal containers aren’t safe for the oven or stovetop, so you’ll have to transfer your food to heat it up. You can check out the full oven reheat directions in our FAQ."
        />
        <Question 
            title="How does shipping work?"
            description="To help guarantee your meals arrive in the freshest condition, there is a small shipping fee associated with your order. We deliver to all states within the continental U.S., and our shipping partners offer delivery every day of the week. The exact days that we can reach you will depend on your ZIP code and the carrier delivering your Freshly meals. Whether you're signing up or updating your typical delivery day, we'll show you all the days available to you so you can choose what's best for you."
        />
        <Question 
            title="How does the subscription work?"
            description="Every week you get to pick your selection of meals from our weekly rotation of 35+ options. Choose any number of meals between 4 and 12 per week, with meals as low as $9.58 each. You'll pick the most convenient delivery day for you, and we'll ship your chef-cooked meals right to your doorstep! If you ever need to skip or cancel a week, or size your order up or down, it's easy to make changes to your upcoming delivery before the weekly deadline."
        />
    </div>
)
}