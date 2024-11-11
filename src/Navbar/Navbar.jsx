import Logo from "./NavbarComponents/Logo"
import Navigation from "./NavbarComponents/Navigation"
import { motion } from "framer-motion";

function Navbar() {

    return (
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 , delay: 1.5 }} className="w-full h-[12vh] flex absolute z-50">
        <Logo/>
        <Navigation/>
      </motion.div>
    )
  }
  
  export default Navbar
  