function LandmarkPhoto({background, sendFotka}) {
    
    const handleClick = () => {
        sendFotka(background);
    };

    return (
        <>
            <div className="w-full h-[25vh] bg-contain bg-no-repeat bg-center mb-5" style={{ backgroundImage: `url(${background})`}} onClick={handleClick}></div>
        </>
    )
  }
  
  export default LandmarkPhoto;