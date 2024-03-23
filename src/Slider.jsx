import { useState } from "react";
import { motion } from "framer-motion";

import Seoul from "./images/photos/Seoul.jpg"
import BukchonHanokVillage from "./images/photos/BukchonHanokVillage.jpg"
import Gyeongju from "./images/photos/Gyeongju.png"

const sliderimages = [
    {
        title: "Seoul",
        background: Seoul,
        link: "#",
    },
    {
        title: "Bukchon Hanok Village",
        background: BukchonHanokVillage,
        link: "#",
    },
    {
        title: "Gyeongju",
        background: Gyeongju,
        link: "#",
    },
];

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

const Slider = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        if (index === sliderimages.length - 1) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    };

    const prev = () => {
        setDirection(-1);
        if (index === 0) {
            setIndex(sliderimages.length - 1);
            return;
        }
        setIndex(index - 1);
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
                <a href={sliderimages[index].link} target="_blank">
                    <motion.div
                        className="w-full h-[50vh] rounded-xl bg-cover pl-5 py-5 text-xl text-white font-bold font-mont shadow-2xl shadow-black"
                        variants={slidersettings}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        key={sliderimages[index].background}
                        custom={direction}
                        style={{
                            backgroundImage: `url(${sliderimages[index].background})`,
                        }}
                    >
                        {sliderimages[index].title}
                    </motion.div>
                </a>
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