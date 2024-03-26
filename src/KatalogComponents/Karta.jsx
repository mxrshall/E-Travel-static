import { useState } from "react"
import { Link } from "react-router-dom";

function Karta({title, background, description, photo}) {
    const [data, setData] = useState({
        title: title,
        background: background,
        description: description,
        photo: photo,
    });

    return (
        <div className="w-[18%] h-[50vh] my-5 mx-[1%] rounded-xl">
            <Link to="/pamiatka" state={{ data: data }}>
                <div className="w-full h-full flex bg-cover bg-center rounded-xl p-5" style={{ backgroundImage: `url(${background})`}}>
                    <p className="text-xl text-white font-bold font-mont">{title}</p>
                </div>
            </Link>
        </div>
    )
  }
  
  export default Karta