import { motion } from "framer-motion";

function PamiatkaFotka({background}) {

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1 }} className="w-full h-[25vh] bg-contain bg-no-repeat bg-center mb-5" style={{ backgroundImage: `url(${background})`}}></motion.div>
        </>
    )
  }
  
  export default PamiatkaFotka