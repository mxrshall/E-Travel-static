function InfoDescription({description}) {

    return (
        <div className="w-10/12 h-[50vh] mt-[4%] overflow-y-auto scroll-container">
            <span className="text-base text-white font-normal font-mont">
                {description}
            </span>
        </div>
    )
  }
  
  export default InfoDescription