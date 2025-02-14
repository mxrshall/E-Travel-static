import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

function Card({ title, background, description, photo, map, time, onClick }) {
    const [data, setData] = useState({
        title: title,
        background: background,
        description: description,
        photo: photo,
        map: map,
    });

    const handleClick = () => {
        onClick(data);
    };

    return (
        <div
            className="w-[29%] h-[25vh] my-2 mx-[2%] rounded-xl md:w-[18%] md:h-[50vh] md:mx-[1%] md:my-5"
            onClick={handleClick}
        >
            <div className="w-full h-full flex flex-col bg-cover bg-center rounded-xl relative" style={{ backgroundImage: `url(${background})` }}>
                <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-30 rounded-xl md:hidden text-center">
                    <p className="text-base text-white font-bold font-mont cursor-default">
                        {title}
                    </p>
                </div>
                <div className="w-full h-full bg-black bg-opacity-60 hidden flex-col justify-end p-5 rounded-xl md:flex relative">
                    <div className="w-full h-full flex flex-col justify-center items-center text-center">
                        <p className="text-2xl text-white font-bold font-mont cursor-default">
                            {title}
                        </p>
                    </div>
                    <IoIosArrowUp
                        size="25"
                        color="white"
                        className="absolute bottom-4 right-4 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;