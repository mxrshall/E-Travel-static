function GalleryPhoto({background, sendFotka, time}) {
  
    const handleClick = () => {
        sendFotka(background);
    };

    return (
        <>
            <div
                className="w-[31%] h-[8vh] bg-contain bg-no-repeat bg-center my-1 mx-[1%] md:w-[18%] md:h-[25vh]" 
                style={{ backgroundImage: `url(${background})`}} 
                onClick={handleClick}
            />
        </>
    )
  }
  
  export default GalleryPhoto;