import Navbar from "../Navbar/Navbar"
import Title from "../UniversalComponents/Title";
import PamiatkaInfo from "../PamiatkaComponents/PamiatkaInfo"

import { useLocation } from "react-router-dom";

function Pamiatka() {
    const location = useLocation();
    const data = location.state.data;

    return (
        <>
            <Navbar/>
            <div className="w-full h-[100vh] flex justify-center items-center absolute z-10">
                <Title title={data.title}/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${data.background})`}}></div>
            <div className="w-full h-[100vh] flex justify-center items-center bg-black relative z-20">
                <PamiatkaInfo description={data.description} photo={data.photo}/>
            </div>
        </>
    )
  }
  
  export default Pamiatka
