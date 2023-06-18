import SignUp from '../../ui/SignUp/index.jsx';
import Navigation from '../../ui/Navigation/index.jsx'
import CommonQuestions from '../../ui/CommonQuestions/index.jsx';
import Head from 'next/head.js';
import SiteMap from '../../ui/SiteMap/index.jsx';

export default function SignUpPage(){
    return (
        <div>
            <Head>
                <title>Meal Prep - Join Now - Get Started</title>
            </Head>
            <Navigation />
            <SignUp />
            <CommonQuestions />
            <SiteMap />
        </div>
    )
}