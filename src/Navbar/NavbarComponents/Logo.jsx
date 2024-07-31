import logo from "../../../public/images/logo.png";
import { Link } from "react-router-dom";

function Logo() {

    return (
      <div className="w-1/12 flex items-center">
        <Link to="/home">
          <img src={logo} className="w-[4rem] ml-5"/>
        </Link>
      </div>
    )
  }
  
  export default Logo