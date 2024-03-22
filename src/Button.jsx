import { Link } from "react-router-dom";

function Button({text, link}) {

    return (
        <Link to={"/" + link}>
            <button className="font-mont text-base px-2 mr-5 text-white border-2 border-white">{text}</button>
        </Link>
    )
  }
  
  export default Button