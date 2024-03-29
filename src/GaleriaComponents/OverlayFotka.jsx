function OverlayFotka({fotka}) {

    return (
        <div className="w-full h-full bg-black bg-opacity-80 fixed z-50 flex justify-center items-center">
            <img className="w-1/2 bg-contain bg-no-repeat bg-center" src={fotka}/>
        </div>
    )
  }
  
  export default OverlayFotka
  