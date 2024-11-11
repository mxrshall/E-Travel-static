import { motion } from "framer-motion";

function LandmarkPhoto({background, sendFotka}) {
    
    const handleClick = () => {
        sendFotka(background);
    };

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} className="w-full h-[25vh] bg-contain bg-no-repeat bg-center mb-5" style={{ backgroundImage: `url(${background})`}} onClick={handleClick}></motion.div>
        </>
    )
  }
  
  export default LandmarkPhoto;