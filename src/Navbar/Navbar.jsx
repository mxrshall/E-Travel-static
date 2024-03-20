import Logo from "./NavbarComponents/Logo"
import Navigacia from "./NavbarComponents/Navigacia"

function Navbar() {

    return (
      <div className="w-full h-[10vh] bg-red-600">
        <Logo/>
        <Navigacia/>
      </div>
    )
  }
  
  export default Navbar
  