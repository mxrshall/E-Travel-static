import Navbar from "../Navbar/Navbar"
import header1 from "../images/header/header1.jpg"

function Info() {

    return (
        <>
            <Navbar/>
            <div className="w-9/12 h-[100vh] pt-[12%] pl-[5%] flex flex-col absolute z-10">
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${header1})`}}></div>
        </>
    )
  }
  
  export default Info