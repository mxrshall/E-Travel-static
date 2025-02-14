import React, { useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../CatalogComponents/Card";
import Search from "../CatalogComponents/Search";
import Navbar from "../Navbar/Navbar";

function Catalog({ slider }) {
    const [filter, setFilter] = useState(["all"]);
    const [resetIndex, setResetIndex] = useState(0);
    const [isExit, setIsExit] = useState(false);
    const [signal, setSignal] = useState(false);
    const navigate = useNavigate();

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

    const handleCardClick = (data) => {
        setIsExit(true);
        setSignal(true);
        setTimeout(() => {
            navigate("/pamiatka", { state: data });
            window.scrollTo(0, 0);
        }, 0);
    };

    return (
        <ReactLenis root>
            <Navbar onClick={() => setIsExit(true)} signal={signal}/>
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="w-full h-2/5 flex justify-center items-center">
                    <Search sendData={sendData} />
                </div>
                <div
                    className="bg-black flex flex-wrap">
                    {filteredSlider.map((item, index) => (
                        <Card
                            key={`${resetIndex}-${index}`}
                            title={item.title}
                            background={item.background}
                            description={item.description}
                            photo={item.photo}
                            map={item.map}
                            onClick={handleCardClick}
                        />
                    ))}
                </div>
            </div>
        </ReactLenis>
    );
}

export default Catalog;
