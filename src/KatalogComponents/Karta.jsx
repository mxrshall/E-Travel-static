import { useState } from "react"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import arrow from "../images/icons/arrow_up.svg";

function Karta({title, background, description, photo}) {
    const [hovered, setHovered] = useState(false);
    const [data, setData] = useState({
        title: title,
        background: background,
        description: description,
        photo: photo,
    });

    return (
        <div className="w-[18%] h-[50vh] my-5 mx-[1%] rounded-xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Link to="/pamiatka" state={{ data: data }}>
                <motion.div initial={{ y: 0 }} animate={{ y: hovered ? -20 : 0 }} transition={{ duration: 0.3 }} className="w-full h-full flex flex-col bg-cover bg-center rounded-xl p-5" style={{ backgroundImage: `url(${background})`}}>
                    <div className="w-full h-1/2 hover:none">
                        <p className="text-xl text-white font-bold font-mont">{title}</p>
                    </div>
                    {hovered && (
                        <div className="w-full h-1/2 flex justify-end items-end hover:none">
                            <img src={arrow} className="w-[1.7rem]"></img>
                        </div>
                    )}
                </motion.div>
            </Link>
        </div>
    )
  }
  
  export default Karta