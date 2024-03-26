import { useState } from "react"
import { Link } from "react-router-dom";

function Karta({title, background}) {

    return (
        <Link to="/pamiatka">
            <div className="w-[18%] h-[50vh] bg-red-600 relative flex my-5 mx-[1%] bg-cover bg-center" style={{ backgroundImage: `url(${background})`}}>
                <p className="text-xl text-white font-bold font-mont">{title}</p>
            </div>
        </Link>
    )
  }
  
  export default Karta