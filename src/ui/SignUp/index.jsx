import Link from "next/link"

export default function SignUp(){
    const inputStyling = "border-solid border-2 rounded-md p-2"
    const inputStyling2 = "border-solid border-2 rounded-md p-2"
    const formStyling = "flex flex-col gap-2"
    const buttonStyling = "bg-blue-500 px-4 py-2 text-white font-semibold hover:bg-blue-900"
    const textStyling = "text-xs"
    
    return (
        <div className="bg-heroBackground bg-cover p-12">
            <div className="bg-slate-100 p-10 flex flex-col">
                <div>Prepped Delivered</div>
                <h1 className="text-3xl font-bold pb-3 text-center">{"Dinner's ready!"}</h1>
                <h2 className="text-md text-center pb-3">Chef-prepared, healthy meals delivered weekly </h2>
                <form className={formStyling}>
                    <input className={inputStyling} placeholder="Email" />
                    <input className={inputStyling2} placeholder="Zip" />
                    <button className={buttonStyling}>Continue</button>
                </form>
                <p className={textStyling}>Already have an account? <Link href='/'>Log in</Link></p>
                <p className={textStyling}>By continuing, you agree to our <a>Terms</a> and <a>Privacy Policy</a> & will receive emails from Freshly.</p>
            </div>
        </div>
    )
}