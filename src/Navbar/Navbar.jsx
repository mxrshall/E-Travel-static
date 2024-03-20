import Logo from "./NavbarComponents/Logo"
import Navigacia from "./NavbarComponents/Navigacia"

function Navbar() {

    return (
      <div className="w-full h-[10vh] flex">
        <Logo/>
        <Navigacia/>
      </div>
    )
  }
  
  export default Navbar
  