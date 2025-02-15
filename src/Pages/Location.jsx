import Title from "../UniversalComponents/Title"
import Description from "../UniversalComponents/Description"
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import InfoFlag from "../LocationComponents/LocationFlag"
import Slider from "../UniversalComponents/Slider"

import { useState } from "react"
import Navbar from "../Navbar/Navbar";


function Location() {
    const [isExit, setIsExit] = useState(false);
    const [signal, setSignal] = useState(false);
    const location = useLocation();
    const { state1, state2 } = location.state || {};
    const navigate = useNavigate();

    const handleClick = (value) => () => {
      setIsExit(true);
      setSignal(true);
      setTimeout(() => {
          navigate(`/${value}`);
          window.scrollTo(0, 0);
      }, 0);
    };
    
    const handleSliderClick = (data) => {
      setIsExit(true);
      setSignal(true);
      setTimeout(() => {
          navigate("/pamiatka", { state: data });
          window.scrollTo(0, 0);
      }, 0);
    };
  
    return (
      <>
        <Navbar onClick={() => setIsExit(true)} signal={signal} />
        <div className="w-full h-[100vh] hidden md:flex">
          <div
            className="w-full h-[100vh] bg-cover bg-center absolute"
            style={{ backgroundImage: `url(${state1.background})` }}
          >
            <div className="w-full h-[100vh] bg-black opacity-50"></div>
          </div>
          <div className="flex absolute z-10">
            <div className="w-7/12 h-screen pt-[8%] px-[5%] flex flex-col bg-black">
              <div className="flex">
                <Title title={state1.title}/>
                <InfoFlag flag={state1.flag}/>
              </div>
              <Description description={state1.description}/>
              <div className="w-full flex pt-[3%]">
                <button 
                  onClick={handleClick("katalog")} 
                  className="font-mont text-base font-medium px-2 text-white border-2 border-white"
                >
                  Go to catalog
                </button>
              </div>
            </div>
            <div className="w-5/12 h-screen flex justify-center items-center">
              <Slider slider={state2} tag={state1.tag} onClick={handleSliderClick}/>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:hidden">
          <div className="w-full h-screen pt-36 px-[5%] flex flex-col">
            <div className="flex">
              <div className="text-5xl text-white font-bold font-mont text-center">
                {state1.title}
              </div>
              <InfoFlag flag={state1.flag}/>
            </div>
            <Description description={state1.description}/>
            <div className="w-full flex pt-[3%]">
              <button 
                onClick={handleClick("katalog")} 
                className="font-mont text-base font-medium px-2 text-white border-2 border-white"
              >
                Go to catalog
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center items-center mb-10">
            <Slider slider={state2} tag={state1.tag} onClick={handleSliderClick}/>
          </div>
        </div>
      </>
    )
  }
  
  export default Location