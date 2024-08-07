import Logo from "./NavbarComponents/Logo"
import Navigacia from "./NavbarComponents/Navigacia"
import { motion } from "framer-motion";

function Navbar() {

    return (
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 , delay: 1 }} className="w-full h-[12vh] flex absolute z-50">
        <Logo/>
        <Navigacia/>
      </motion.div>
    )
  }
  
  export default Navbar
  