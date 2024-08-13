import React, { useState } from "react";
import { motion } from "framer-motion";
import Karta from "../KatalogComponents/Karta";
import Vyhladavanie from "../KatalogComponents/Vyhladavanie";
import Navbar from "../Navbar/Navbar";

function Katalog({ slider }) {
    const [filter, setFilter] = useState(["all"]);
    const [resetIndex, setResetIndex] = useState(0);

    const sendData = (data) => {
        if (data.length === 0) {
            setFilter(["all"]);
        } else {
            setFilter(data);
        }
        setResetIndex(prev => prev + 1);
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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="w-full h-2/5 flex justify-center items-center"
                >
                    <Vyhladavanie sendData={sendData} />
                </motion.div>
                <div className="bg-black flex flex-wrap">
                    {filteredSlider.map((item, index) => (
                        <Karta
                            key={`${resetIndex}-${index}`}
                            title={item.title}
                            background={item.background}
                            description={item.description}
                            photo={item.photo}
                            time={0.5 + 0.1 * index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Katalog;
