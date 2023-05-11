function CheckoutProgressBar({stepNumber , stepTitle, url}){
  const totalSteps = [1 , 2, 3, 4, 5];
  const linkTitle = [
    "Start",
    "Choose",
    "Customize",
    "Review",
    "Checkout"
  ];
  return(
    <div>
      <ul className="flex flex-row w-screen mx-auto justify-evenly">
        {totalSteps.map((step) => (
          <li key={step} className="flex flex-col items-center">
            <p>{step}</p>
            <a href={url}>{linkTitle[step - 1]}</a>
          </li> ))} 
      </ul>
    </div>
  )
}

export default CheckoutProgressBar;