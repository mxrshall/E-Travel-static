import React, {useState} from "react";
import Karta from "../KatalogComponents/Karta";
import Vyhladavanie from "../KatalogComponents/Vyhladavanie";
import Navbar from "../Navbar/Navbar";

function Katalog({ slider }) {
    const [filter, setFilter] = useState("all");
    
    const filteredSlider = slider.filter(item => {
        for (let key in item.tag) {
            if (item.tag[key].includes(filter)) {
                return true;
            }
        }
        return false;
    });

    return (
        <>
            <Navbar />
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="f-full h-1/4 bg-red-600 flex justify-center items-center">
                    <Vyhladavanie />
                </div>
                <div className="bg-black flex flex-wrap">
                    {filteredSlider.map((item, index) => (
                        <Karta
                            key={index}
                            title={item.title}
                            background={item.background}
                            description={item.description}
                            photo={item.photo}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Katalog;