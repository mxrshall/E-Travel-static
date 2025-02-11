import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Banner({ isExit }) {

const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
        setIsVisible(true);
    }
}, []);
  
const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
};
  
if (!isVisible) return null;

return (
        <div 
            className="w-full h-1/5 flex flex-col justify-center items-left rounded-none bg-white fixed bottom-0 right-0 z-50 m-0 p-5 md:rounded-xl md:w-1/4 md:m-10 md:h-1/4"
        >
            <p className="text-sm font-medium font-mont">
                This website uses Google Analytics to measure the time spent on the page. The results help determine the average time users spend on this site.
            </p>
            <button 
                className="w-1/2 font-mont text-sm font-medium px-2 text-black border-2 border-black hover:bg-black hover:text-white mt-5"
                onClick={handleAccept}
            >
                I understand
            </button>
        </div>
    )
}

export default Banner