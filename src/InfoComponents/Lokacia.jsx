import Title from "../UniversalComponents/Title"
import Description from "../UniversalComponents/Description"
import ButtonContainer from "../UniversalComponents/ButtonContainer"
import { motion } from "framer-motion";

import InfoFlag from "./InfoFlag"
import Slider from "../Slider"

import { useState } from "react"


function Lokacia({id, title, description, background, flag, tag, slider}) {
    const [left, setLeft] = useState(id % 2 === 0);

    const handleClick = (value) => () => {
      setTimeout(() => {
          window.location.href = `/${value}`;
      }, 1000);
    };
  
    return (
      <>
        {left && (
          <>
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.3, delay: 0.5 }} 
              className="w-7/12 h-[100vh] pt-[8%] px-[5%] flex flex-col bg-black absolute z-10"
            >
              <div className="flex">
                <Title title={title}/>
                <InfoFlag flag={flag}/>
              </div>
              <Description description={description}/>
              <div className="w-full flex pt-[3%]">
                    <button onClick={handleClick("katalog")} className="font-mont text-base font-medium px-2 text-white border-2 border-white hover:bg-white hover:text-black">Prejsť na katalóg</button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full h-[100vh] bg-cover bg-center" 
              style={{ backgroundImage: `url(${background})`}}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </motion.div>
          </>
        )}
        {!left && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1 }} className="w-5/12 h-[100vh] flex justify-center items-center">
              <Slider slider={slider} tag={tag}/>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.5 }} className="w-7/12 h-[100vh] pt-[8%] px-[5%] flex flex-col bg-black">
              <div className="flex">
                <Title title={title}/>
                <InfoFlag flag={flag}/>
              </div>
              <Description description={description}/>
            </motion.div>
          </>
        )}
      </>
    )
  }
  
  export default Lokacia