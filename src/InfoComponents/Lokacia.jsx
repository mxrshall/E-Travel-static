import Title from "../UniversalComponents/Title"
import InfoDescription from "./InfoDescription"
import InfoButton from "./InfoButton"
import InfoFlag from "./InfoFlag"
import Slider from "../Slider"

import { useState } from "react"

function Lokacia({id, title, description, background, flag, tag, slider}) {
    const [left, setLeft] = useState(id % 2 === 0);
  
    return (
      <div className="w-full h-[100vh] flex">
        <div className="flex absolute z-10">
        {left && (
          <>
            <div className="w-7/12 h-[100vh] pt-[8%] px-[5%] flex flex-col bg-black">
              <div className="flex">
                <Title title={title}/>
                <InfoFlag flag={flag}/>
              </div>
              <InfoDescription description={description}/>
              <InfoButton link="katalog"/>
            </div>
            <div className="w-5/12 h-[100vh] flex justify-center items-center">
              <Slider slider={slider} tag={tag}/>
            </div>
          </>
        )}
        {!left && (
          <>
            <div className="w-5/12 h-[100vh] flex justify-center items-center">
              <Slider slider={slider} tag={tag}/>
            </div>
            <div className="w-7/12 h-[100vh] pt-[8%] px-[5%] flex flex-col bg-black">
              <div className="flex">
                <Title title={title}/>
                <InfoFlag flag={flag}/>
              </div>
              <InfoDescription description={description}/>
              <InfoButton link="katalog"/>
            </div>
          </>
        )}
        </div>
        <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
        <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${background})`}}></div>
      </div>
    )
  }
  
  export default Lokacia