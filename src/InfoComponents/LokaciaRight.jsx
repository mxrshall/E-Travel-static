import InfoTitle from "./InfoTitle"
import InfoDescription from "./InfoDescription"
import InfoButton from "./InfoButton"
import InfoFlag from "./InfoFlag"
import Slider from "../Slider"

function LokaciaRight({title, description, background, flag}) {
    
    return (
      <div className="w-full h-[100vh] flex">
        <div className="flex absolute z-10">
          <div className="w-7/12 h-[100vh] pt-[8%] px-[5%] flex flex-col bg-black">
            <div className="flex">
              <InfoTitle title={title}/>
              <InfoFlag flag={flag}/>
            </div>
            <InfoDescription description={description}/>
            <InfoButton/>
          </div>
          <div className="w-5/12 h-[100vh] flex justify-center items-center">
            <Slider/>
          </div>
        </div>
        <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
        <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${background})`}}></div>
      </div>
    )
  }
  
  export default LokaciaRight