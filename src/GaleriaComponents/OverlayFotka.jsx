function OverlayFotka({fotka}) {

    return (
        <div className="w-full h-[100vh] bg-black opacity-60 absolute z-60 flex justify-center items-center">
            <img className="w-[18%] h-[25vh] bg-contain bg-no-repeat bg-center" src={fotka}/>
        </div>
    )
  }
  
  export default OverlayFotka
  