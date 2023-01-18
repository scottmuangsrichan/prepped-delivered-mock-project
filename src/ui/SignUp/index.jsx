import Link from "next/link"
import { useEffect, useState, useRef } from "react"

export default function SignUp(){
    const inputStyling = "border-solid border-2 rounded-md p-2"
    const formStyling = "flex flex-col gap-4 pb-5"
    const buttonStyling = "bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-900"
    const textStyling = "text-xs"
    
    const [email, setEmail] = useState("");
    const [zipCode, setZipCode] = useState("");
    const ref = useRef();
    
    useEffect(() => {
       ref.current = navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
        })
    }, []);
        
    return (
        <div className="bg-heroBackground bg-cover p-12">
            <div className="bg-slate-100 p-8 flex flex-col">
                <div>Prepped Delivered</div>
                <h1 className="text-3xl font-bold pb-3 text-center">{"Dinner's ready!"}</h1>
                <h2 className="text-md text-center pb-3">Chef-prepared, healthy meals delivered weekly </h2>
                <form 
                    className={formStyling}
                    method="POST"
                    action="/join-now/plan"
                    >
                    <input 
                        className={inputStyling} 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                    />
                    <input 
                        className={inputStyling} 
                        placeholder="Zip Code" 
                        value={ref.current}
                        onChange={(e) => setZipCode(e.target.value)}
                        name="zipCode"
                    />
                    <button className={buttonStyling}>Continue</button>
                </form>
                <p className="text-sm pb-3">Already have an account? <Link href='/login'><a className="underline underline-offset-1 text-blue-500">Log In</a></Link></p>
                <p className={textStyling}>By continuing, you agree to our <a>Terms</a> and <a>Privacy Policy</a> & will receive emails from Prepped Delivered.</p>
            </div>
        </div>
    )
}