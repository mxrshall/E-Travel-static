import Navbar from "../Navbar/Navbar"
import PamiatkaInfo from "../PamiatkaComponents/PamiatkaInfo"
import PamiatkaTitle from "../PamiatkaComponents/PamiatkaTitle"
import header3 from "../images/header/header3.jpg"

import { useLocation } from "react-router-dom";

function Pamiatka() {
    const location = useLocation();
    const data = location.state.data;
    console.log(data);

    return (
        <>
            <Navbar/>
            <div className="w-full h-[100vh] flex justify-center items-center absolute z-10">
                <PamiatkaTitle title={data.title}/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${data.background})`}}></div>
            <div className="w-full h-[100vh] flex justify-center items-center bg-black absolute z-20">
            </div>
        </>
    )
  }
  
  export default Pamiatka
