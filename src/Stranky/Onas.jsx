import onas from "../images/header/onas.png"
import Navbar from "../Navbar/Navbar"

function Onas() {

    return (
        <>
            <Navbar/>
            <div className="w-9/12 h-[100vh] pt-[12%] pl-[5%] flex flex-col absolute z-10">
    
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${onas})`}}></div>
        </>
    )
  }
  
  export default Onas