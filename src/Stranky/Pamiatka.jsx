import Navbar from "../Navbar/Navbar"
import PamiatkaHeader from "../PamiatkaComponents/PamiatkaHeader"
import header3 from "../images/header/header3.jpg"

function Pamiatka() {

    return (
        <>
            <Navbar/>
            <div className="w-full h-[100vh] flex justify-center items-center absolute z-10">
                <PamiatkaHeader title="text"/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${header3})`}}></div>
        </>
    )
  }
  
  export default Pamiatka
