import Navigation from "../ui/Navigation";
import SiteMap from "../ui/SiteMap";
import MealPlansSubscriptions from "../ui/MealPlansSubscription";
import OnTheMenu from "../ui/OnTheMenu";
import CommonQuestions from "../ui/CommonQuestions";
import Menu from "../ui/Menu";
import VisitPage from "../ui/VisitPage";
import EveryLifestyleDietCard from "../ui/EveryLifestyleDietCard";

export default function PlansAndMenuPage(){
    return(
        <div>
            <Navigation />
            <OnTheMenu />
            <Menu />
            <EveryLifestyleDiet />
            <MealPlansSubscriptions />
            <CommonQuestions />
            <VisitPage 
                heading="Have other questions?"
                link="Visit FAQs"
                url="/faqs"
            />
            <SiteMap />
        </div>
    )
}




function EveryLifestyleDiet(){
    return (
        <div className="w-screen m-auto py-12">
            <div className="pb-8 md:max-w-[1440px] md:w-[1200px] mx-auto">
                <div className="w-fit m-auto">
                    <h1 className="text-5xl font-bold text-center pb-10">For Every Diet & Lifestyle</h1>
                    <p className="m-auto text-center md:w-1/2 pb-10">
                        We’re here to make every dish delicious and nutritious, 
                        with prepared meals that satisfy a wide range of tastes—all meticulously 
                        crafted to meet your dietary wants and needs.
                    </p>
                </div>
            
            <div className="flex m-auto text-center md:flex-row flex-col">
                <EveryLifestyleDietCard 
                    img = "https://assets-global.website-files.com/5d03b4e130118314af624b20/620001104582091be7236479_Freshly_Iconography_DietaryIcons-03-p-500.png"
                    title="Purely Plant"
                    description="Plant-based meals for everyone"
                />
                <EveryLifestyleDietCard 
                    img = "https://assets-global.website-files.com/5d03b4e130118314af624b20/6200014b6c9c4f739d8a120f_Freshly_Iconography_DietaryIcons-05-p-500.png"
                    title="Gluten Free"
                    description="Certified by the Gluten Intolerance Group"
                />
                <EveryLifestyleDietCard 
                    img = "https://assets-global.website-files.com/5d03b4e130118314af624b20/62000182acc5e0f3435178cb_Freshly_Iconography_DietaryIcons-02-p-500.png"
                    title="Dairy Free Meals"
                    description="Dairy free prepared meals for all taste"
                />
                <EveryLifestyleDietCard 
                    img = "https://assets-global.website-files.com/5d03b4e130118314af624b20/620002995a9c84ce8cc5dc3b_Freshly_Iconography_DietaryIcons-01-p-500.png"
                    title="Carb-Smart"
                    description="Chef-crafted low-carb meals"
                />
                <EveryLifestyleDietCard 
                    img = "https://assets-global.website-files.com/5d03b4e130118314af624b20/620002cf09966d7359a8b2e8_Freshly_Iconography_DietaryIcons-04-p-500.png"
                    title="Calorie-Conscious"
                    description="Low-calorie meal plan with perfect portion"
                />
            </div>
            </div>
        </div>
    )
}



