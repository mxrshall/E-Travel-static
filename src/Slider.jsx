import React, { useState } from "react";
import { motion } from "framer-motion";

const slidersettings = {
    initial: (direction) => {
        return {
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        };
    },
    animate: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            x: direction > 0 ? -100 : 100,
            opacity: 0,
        };
    },
};

const Slider = ({slider}) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setIndex((index + 1) % slider.title.length);
    };

    const prev = () => {
        setDirection(-1);
        setIndex((index - 1 + slider.title.length) % slider.title.length);
    };

    return (
        <div className="w-5/12 h-[50vh] flex">
            <motion.button
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ delay: 0.8 }}
                onClick={next}
                className="w-1/12"
            >
                ᐊ
            </motion.button>
            <div className="w-full h-[50vh] bg-cover">
                    <motion.div
                        className="w-full h-[50vh] rounded-xl bg-cover pl-5 py-5 text-xl text-white font-bold font-mont shadow-2xl shadow-black"
                        variants={slidersettings}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        key={slider.background[index]}
                        custom={direction}
                        style={{
                            backgroundImage: `url(${slider.background[index]})`,
                        }}
                    >
                        {slider.title[index]}
                    </motion.div>
            </div>
            <motion.button
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ delay: 0.8 }}
                onClick={prev}
                className="w-1/12"
            >
                ᐅ
            </motion.button>
        </div>
    );
};

export default Slider;
