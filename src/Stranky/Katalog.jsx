import React, { useState } from "react";
import Karta from "../KatalogComponents/Karta";
import Vyhladavanie from "../KatalogComponents/Vyhladavanie";
import Navbar from "../Navbar/Navbar";

function Katalog({ slider }) {
    const [filter, setFilter] = useState(["all"]);

    const sendData = (data) => {
        if (data.length === 0) {
            setFilter(["all"]);
        } else {
            console.log(data);
            setFilter(data);
        }
    };

    const filteredSlider = slider.filter(item => {
        for (let key in item.tag) {
            for (let tag in filter) {
                if (item.tag[key].includes(filter[tag])) {
                    return true;
                }
            }
        }
        return false;
    });

    return (
        <>
            <Navbar />
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="w-full h-2/5 flex justify-center items-center">
                    <Vyhladavanie sendData={sendData} />
                </div>
                <div className="bg-black flex flex-wrap">
                    {filteredSlider.map((item, index) => (
                        <Karta
                            key={index}
                            title={item.title}
                            background={item.background}
                            description={item.description}
                            photo={item.photo}
                            time={0.1 * index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Katalog;
