import Head from "next/head";
import Image from "next/image";
import Navigation from "../ui/Navigation";
import MealPlansSubscriptions from "../ui/MealPlansSubscription";
import SiteMap from "../ui/SiteMap";
import CommonQuestions from "../ui/CommonQuestions";
import HowItWorksCard from "../ui/HowItWorksCard";

export default function GiftCardsPage(){
    return( 
        <div>
            <Head>
                <title>Enjoy the Gift of Effortless Meals</title>
            </Head>
            <Navigation />
            {/* <GiftCardHero /> */}
            <GCHowItWorks />
            <MealPlansSubscriptions />
            <CommonQuestions />
            <SiteMap />
        </div>
    )
}

export function GCHowItWorks(){
    return (
        <div className="max-w-[1440px] w-[1200px] m-auto">
            <div className="flex flex-col items-center justify-center text-center p-20 gap-3">
                <div>
                    <h1 className='font-bold text-5xl pb-3'>Give The Greatest Gift Ever</h1>
                    <p className="font-bold">(Yes its freshly)</p>
                </div>
                <div className="flex flex-row items-center justify-between w-1440">
                    <div>
                        <HowItWorksCard
                            title="Step 1"
                            subheading="You'll Choose the Amount"
                            subparagraph="purchase a gift card for someone special and we'll send it to them."
                            img="https://assets-global.website-files.com/5d03b4e130118314af624b20/6268348095d1df7966f8012b_Gift_Illo_1.png"
                        />
                    </div>
                    <div>
                        <HowItWorksCard 
                            title="Step 2"
                            subheading="They'll Select Their Meals"
                            subparagraph="Your gift card's recipient will choose their meals and select their delivery day."
                            img="https://assets-global.website-files.com/5d03b4e130118314af624b20/62683490d492cfe9d90dbd7a_Gift_Illo_2.png"
                        />
                    </div>
                    <div>
                        <HowItWorksCard 
                            className="bg-black"
                            title="Step 3"
                            subheading="We’ll Cook & Deliver"
                            subparagraph="We’ll prepare their meals and deliver them fresh—right to their door."
                            img="https://assets-global.website-files.com/5d03b4e130118314af624b20/6268349f5f123b16a40855f7_Gift_Illo_3.png"
                        />
                    </div>
                </div>
                <div>
                    <p className="pb-8 font-semibold text-xl text-center"><i>Quick Tip: a $50 gift card = 4 meals!</i><br />(on a 6-meal plan)</p>
                    <button className="w-100 bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-900">Buy a gift card</button>
                </div>
            </div>
        </div>
    )
}

// function GiftCardHero(){
//     return (
//         // <div className="m-auto w-1440">
//         //     <div className="flex items-center justify-center m-auto">
//         //         <div className="flex flex-col gap-3 items-left my-auto bg-white w-1/2">
//         //             <h1 className="font-bold text-5xl pb-3">Enjoy the Gift of <br /> Effortless Meals</h1>
//         //             <button className="w-fit bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-900">Buy Gift Card</button>
//         //             <button className="w-fit text-blue-500 px-4 py-2 bg-white font-semibold border border-solid border-blue-500 hover:bg-blue-900">Redeem Gift Card</button>
//         //         </div>
//         //         <div className="w-1/2">
//         //             {/* <Image 
//         //                 src="https://assets-global.website-files.com/5d03b4e130118314af624b20/62683001aedd80475a0b4dfb_Gifts_Img_1%20(1).jpg" 
//         //                 alt="" 
//         //                 layout="fill"
//         //                 /> */}
//         //         </div>
//         //     </div>
//         // </div>
//     )
// }

