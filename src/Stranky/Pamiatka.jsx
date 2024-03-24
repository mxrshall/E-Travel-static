import Navbar from "../Navbar/Navbar"
import PamiatkaInfo from "../PamiatkaComponents/PamiatkaInfo"
import PamiatkaTitle from "../PamiatkaComponents/PamiatkaTitle"
import header3 from "../images/header/header3.jpg"

function Pamiatka() {

    return (
        <>
            <Navbar/>
            <div className="w-full h-[100vh] flex justify-center items-center absolute z-10">
                <PamiatkaTitle title="text"/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${header3})`}}></div>
            <div className="w-full h-[100vh] flex justify-center items-center bg-black absolute z-20">
                <PamiatkaInfo title="text"/>
            </div>
        </>
    )
  }
  
  export default Pamiatka
