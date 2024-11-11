import { motion } from "framer-motion";

function GalleryPhoto({background, sendFotka, time}) {
  
    const handleClick = () => {
        sendFotka(background);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: time }}
                className="w-[18%] h-[25vh] bg-contain bg-no-repeat bg-center my-1 mx-[1%]" 
                style={{ backgroundImage: `url(${background})`}} 
                onClick={handleClick}
            >
            </motion.div>
        </>
    )
  }
  
  export default GalleryPhoto;