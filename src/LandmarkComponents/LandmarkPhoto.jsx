function LandmarkPhoto({background, sendFotka}) {
    
    const handleClick = () => {
        sendFotka(background);
    };

    return (
        <>
            <img
                src={background}
                loading="lazy"
                alt="Landmark"
                className="w-full h-[25vh] object-contain mb-5 cursor-pointer"
                onClick={handleClick}
            />
        </>
    )
  }
  
  export default LandmarkPhoto;