import { useState } from "react"
import { Link } from "react-router-dom";
import arrow from "../images/icons/arrow_up.svg";

function Karta({title, background, description, photo}) {
    const [hovered, setHovered] = useState(false);
    const [data, setData] = useState({
        title: title,
        background: background,
        description: description,
        photo: photo,
    });

    return (
        <div className="w-[18%] h-[50vh] my-5 mx-[1%] rounded-xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Link to="/pamiatka" state={{ data: data }}>
                <div className="w-full h-full flex bg-cover bg-center rounded-xl p-5" style={{ backgroundImage: `url(${background})`}}>
                    <p className="text-xl text-white font-bold font-mont">{title}</p>
                    {hovered && (
                        <div className="w-full h-1/2 flex justify-end items-end hover:none">
                            <img src={arrow} className="w-[1.5rem]"></img>
                        </div>
                    )}
                </div>
            </Link>
        </div>
    )
  }
  
  export default Karta