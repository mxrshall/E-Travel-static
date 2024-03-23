import { useState } from "react";
import { motion } from "framer-motion";

import header1 from "./images/header/header1.jpg"
import header2 from "./images/header/header2.jpg"
import header3 from "./images/header/header3.jpg"
import header4 from "./images/header/header4.jpg"

const sliderimages = [
    {
        logo: header1,
        title: "MakyGarage",
        link: "https://www.makygarage.sk/",
    },
    {
        logo: header2,
        title: "Bánczi Roman",
        link: "https://www.lexanga.sk/",
    },
    {
        logo: header3,
        title: "Aikido Vsetin",
        link: "https://aikidovsetin.cz/",
    },
    {
        logo: header4,
        title: "Prepravy",
        link: "https://nadrozmerneprepravy.sk/",
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
                onClick={prev}
                className="w-1/12"
            >
                ᐊ
            </motion.button>
            <div className="w-full h-[50vh] bg-cover">
                <a href={sliderimages[index].link} target="_blank">
                    <motion.div
                        className="w-full h-[50vh] bg-blue-600 rounded-xl bg-cover px-5 py-3 text-xl text-white font-bold font-mont"
                        variants={slidersettings}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        key={sliderimages[index].logo}
                        custom={direction}
                        style={{
                            backgroundImage: `url(${sliderimages[index].logo})`,
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
                onClick={next}
                className="w-1/12"
            >
                ᐅ
            </motion.button>
        </div>
    );
};

export default Slider;