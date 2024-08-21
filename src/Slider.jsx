import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const sliderSettings = {
    initial: (direction) => ({
        x: direction > 0 ? 100 : -100,
        opacity: 0,
    }),
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
    exit: (direction) => ({
        x: direction > 0 ? -100 : 100,
        opacity: 0,
        transition: {
            duration: 0.4,
        },
    }),
};

const Slider = ({slider, tag, onClick}) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [hovered, setHovered] = useState(false);

    const filteredSlider = slider.filter(item => {
        for (let key in item.tag) {
            if (item.tag[key].includes(tag)) {
                return true;
            }
        }
        return false;
    });

    const [data, setData] = useState({
        title: filteredSlider[index].title,
        background: filteredSlider[index].background,
        description: filteredSlider[index].description,
        photo: filteredSlider[index].photo,
    });

    const next = () => {
        setDirection(1);
        const nextIndex = (index + 1) % filteredSlider.length;
        setIndex(nextIndex);
        setData({
            title: filteredSlider[nextIndex].title,
            background: filteredSlider[nextIndex].background,
            description: filteredSlider[nextIndex].description,
            photo: filteredSlider[nextIndex].photo,
        });
    };
    
    const prev = () => {
        setDirection(-1);
        const prevIndex = (index - 1 + filteredSlider.length) % filteredSlider.length;
        setIndex(prevIndex);
        setData({
            title: filteredSlider[prevIndex].title,
            background: filteredSlider[prevIndex].background,
            description: filteredSlider[prevIndex].description,
            photo: filteredSlider[prevIndex].photo,
        });
    };

    const handleClick = () => {
        onClick(data);
    };

    return (
        <div className="w-5/12 h-[50vh] flex">
            <motion.button
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.8 }}
                onClick={prev}
                className="w-1/12"
            >
                <MdKeyboardArrowLeft size="20" color="white"/>
            </motion.button>
            <div className="w-full h-[50vh] bg-cover">
                <motion.div
                    className="w-full h-[50vh] rounded-xl bg-cover px-5 py-5 text-xl text-white font-bold font-mont shadow-2xl shadow-black"
                    variants={sliderSettings}
                    animate="animate"
                    initial="initial"
                    exit="exit"
                    key={filteredSlider[index].background}
                    custom={direction}
                    style={{
                        backgroundImage: `url(${filteredSlider[index].background})`,
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={handleClick}
                >
                    <div className="w-full h-1/2">
                        {filteredSlider[index].title}
                    </div>
                    {hovered && (
                        <div className="w-full h-1/2 flex justify-end items-end hover:none">
                            <IoIosArrowUp size="30" color="white"/>
                        </div>
                    )}
                </motion.div>
            </div>
            <motion.button
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.8 }}
                onClick={next}
                className="w-1/12"
            >
                <MdKeyboardArrowRight size="20" color="white"/>
            </motion.button>
        </div>
    );
};

export default Slider;
