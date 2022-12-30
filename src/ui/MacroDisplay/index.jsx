function MacroDisplay({macroType , macroAmount}){
  return(
    <div className="bg-red-100">
      <h3>{macroAmount}</h3>
      <h4>{macroType}</h4>
    </div>
  )
}

export default MacroDisplay;