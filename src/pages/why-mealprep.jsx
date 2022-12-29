import Navigation from "../ui/Navigation";
import VisitPage from "../ui/VisitPage";
import MenuItemCard from "../ui/MenuItem";
import BlogPost from "../ui/BlogPost";
import Styling from "../ui/Styling/index";
import SiteMap from "../ui/SiteMap";
import CommonQuestions from "../ui/CommonQuestions";

const headingStyle = Styling().heading;
const paragraphStyle = Styling().paragraphText;


export default function AboutMealPrepPage(){
    return (
        <div>
            <Navigation />
            <AboutHeroHeader />
            <AboutVideo />
            <FoodPhilosophy />
            <WhyChooseUs />
            <LatestBlogSection />
            <VisitPage 
                heading="Ready to Meal Prep"
                link="Get Started"
            />
            <CommonQuestions />
            <SiteMap />
        </div>
    )
}

function WhyChooseUs(){
    return ( 
        <div>
            <h1 className={headingStyle}>Why Choose Meal Prep</h1>
        </div>
    )
}


function HowMealPrepWorks(){
    return(
        <div>
            <h1 className={headingStyle}>How Meal Prep Works</h1>
            <p className={paragraphStyle}>We’re always hard at work making the Meal Prep experience easier for our customers.</p>
        </div>
    )
}

function CallToActionBanner(){
    return(
        <div className="bg-menuBackground p-32 items-center flex justify-center">
            <button className="w-100 bg-blue-500 px-4 py-2 text-md text-white font-semibold hover:bg-blue-900">See Our Plans & Menu</button>
        </div>
    )
}

function AboutHeroHeader(){
    return (
        <div className="md:max-w-[1440px] md:w-[1200px] m-auto p-20">
            <h1 className="font-bold text-5xl text-center m-auto">About Meal Prep</h1>
        </div>
    )
}

function AboutVideo(){
    return(
        <div className="md:max-w-[1440px] md:w-[1200px] m-auto p-10 flex justify-center items-center flex-col gap-4">
            <h1 className="font-bold text-4xl text-center m-auto">Heat-and-eat in 3 minutes or less</h1>
            <p className="text-sm">See just how easy it is to prepare a chef-cooked Freshly meal</p>
            <div className="w-92 h-100">
                <iframe src="https://youtu.be/W4UhNo3HAMw"></iframe>
            </div>
        </div>
    )
}

function FoodPhilosophy(){
    return ( 
        <div className="md:max-w-[1440px] md:w-[1200px] flex flex-col items-center justify-center m-auto gap-4 p-20">
            <h1 className="font-bold text-4xl text-center m-auto">Our Food Philosophy</h1>
            <p className="text-sm text-center">Our meals aren’t just ready in minutes... or just delicious... or just nutritious. They’re all three.</p>
            <div className="flex flex-col md:flex-row md:max-w-[1440px] md:w-[1200px] items-center justify-center">
                <MenuItemCard 
                    img="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f0020df16335dbda1b6_gp-less-sugar-nocopy%402x.png"
                    title="Less Sugar"
                    description="Sweet, naturally"
                />
                <MenuItemCard 
                    img="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f00f6ed944c5e2f02a3_gp-less-processed-nocopy%402x.png"
                    title="Less Processed"
                    description="Only thoughtful ingredients"
                />
                <MenuItemCard 
                    img="https://assets-global.website-files.com/5d03b4e130118314af624b20/5ec28f00a02e38947ec7759a_gp-more-nutrients-nocopy%402x.png"
                    title="More Nutrients"
                    description="Simple swaps and sneaky veggies"
                />
            </div>
            <button>Learn More</button>
        </div>
    )
}

function LatestBlogSection(){
    return ( 
        <div className="md:max-w-[1440px] md:w-[1200px] mx-auto">
            <div className="m-auto flex flex-col justify-center items-center p-20 gap-12">
                <BlogPost
                    img = "https://assets-global.website-files.com/5d03b4e130118314af624b20/61f12967e9b288185149d2ae_22_About_DeliciousGlutenFree_448x278.jpg"
                    title="Delicious Gluten-Free Options"
                    previewText="Freshly offers a host of gluten-free meals, so you can avoid gluten without skimping on variety or great taste."
                    link="Learn More"

                />
                <BlogPost 
                    img = "https://assets-global.website-files.com/5d03b4e130118314af624b20/61f12967e9b288185149d2ae_22_About_DeliciousGlutenFree_448x278.jpg"
                    title="Delicious Gluten-Free Options"
                    previewText="Freshly offers a host of gluten-free meals, so you can avoid gluten without skimping on variety or great taste."
                    link="Learn More"

                />
                <BlogPost 
                    img = "https://assets-global.website-files.com/5d03b4e130118314af624b20/61f12967e9b288185149d2ae_22_About_DeliciousGlutenFree_448x278.jpg"
                    title="Delicious Gluten-Free Options"
                    previewText="Freshly offers a host of gluten-free meals, so you can avoid gluten without skimping on variety or great taste."
                    link="Learn More"
                />
            </div>
        </div>
    )
}
