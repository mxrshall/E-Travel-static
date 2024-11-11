import { useState } from "react"
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

function Card({title, background, description, photo, time, onClick}) {
    const [hovered, setHovered] = useState(false);
    const [data, setData] = useState({
        title: title,
        background: background,
        description: description,
        photo: photo,
    });

    const handleClick = () => {
        onClick(data);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: time }}
            className="w-[18%] h-[50vh] my-5 mx-[1%] rounded-xl" 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
        >
            <motion.div initial={{ y: 0 }} animate={{ y: hovered ? -20 : 0 }} transition={{ duration: 0.3 }} className="w-full h-full flex flex-col bg-cover bg-center rounded-xl p-5" style={{ backgroundImage: `url(${background})`}}>
                <div className="w-full h-1/2 hover:none">
                    <p className="text-xl text-white font-bold font-mont">{title}</p>
                </div>
                {hovered && (
                    <div className="w-full h-1/2 flex justify-end items-end hover:none">
                        <IoIosArrowUp size="30" color="white"/>
                    </div>
                )}
            </motion.div>
        </motion.div>
    )
  }
  
  export default Card;