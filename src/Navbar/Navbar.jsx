import { useState } from "react";
import Logo from "./Logo"
import Navigation from "./Navigation"
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Navbar({ onClick }) {
  const navigate = useNavigate();
  const [isExit, setIsExit] = useState(false);

  const handleClick = (data) => {
    onClick();
    setIsExit(true);
    setTimeout(() => {
        navigate(`/${data}`);
    }, 800);
  };

    return (
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={isExit ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={isExit ? { duration: 0.5, delay: 0.2 } : { duration: 0.5, delay: 0.8 }} 
        className="w-full h-[12vh] fixed flex z-50"
      >
        <Logo onClick={handleClick} />
        <Navigation onClick={handleClick} />
      </motion.div>
    )
  }
  
  export default Navbar
  