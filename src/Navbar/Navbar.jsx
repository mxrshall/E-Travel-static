import Logo from "./NavbarComponents/Logo"
import Navigacia from "./NavbarComponents/Navigacia"

function Navbar() {

    return (
      <div className="w-full h-[12vh] flex absolute z-50">
        <Logo/>
        <Navigacia/>
      </div>
    )
  }
  
  export default Navbar
  