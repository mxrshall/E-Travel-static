function GaleriaFotka({background, sendFotka}) {
    const handleClick = () => {
        sendFotka(background);
      };

    return (
        <>
            <div className="w-[18%] h-[25vh] bg-contain bg-no-repeat bg-center my-1 mx-[1%]" style={{ backgroundImage: `url(${background})`}} onClick={handleClick}></div>
        </>
    )
  }
  
  export default GaleriaFotka