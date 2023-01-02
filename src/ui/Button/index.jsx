import Link from "next/link"

function Button({url , variant, displayText}){
  const chooseVariant = () => {
    const variantOption = {
      primary: "w-1/3 bg-blue-500 px-4 py-2 text-white hover:bg-blue-900", 
      danger: "w-1/3 bg-red-500 px-4 py-2 text-white hover:bg-blue-900"
    }
    return variantOption;
  }

  const {primary , danger} = chooseVariant();

  
  return(
    <div>
    <Link href={url}>
      <button className="w-fit bg-blue-500 px-4 py-2 text-white hover:bg-blue-900">
        <a>{displayText}</a>
      </button> 
    </Link>  
  </div>
  )
}

export default Button;