import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ slider, tag, onClick }) => {
    const [hovered, setHovered] = useState(null);

    // Filter slides based on the tag
    const filteredSlider = slider.filter((item) =>
        item.tag.some((t) => t.includes(tag))
    );

    const handleClick = (item) => {
        onClick(item);
    };

    const swiperStyles = {
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#269DFF',
        '--swiper-navigation-size': '10px',
      }

    return (
        <Swiper
            style={swiperStyles}
            className="w-5/12 h-[60vh] flex justify-center items-center"
            modules={[Navigation]}
            slidesPerView={1}
            loop={true}
            speed={500}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
        >
            {filteredSlider.map((item, idx) => (
                <SwiperSlide
                    key={item.id}
                    className="w-full h-full flex justify-center items-center"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full my-5 rounded-xl relative cursor-pointer"
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => handleClick(item)}
                    >
                        <div
                            className="w-full h-full flex flex-col bg-cover bg-center rounded-xl"
                            style={{ backgroundImage: `url(${item.background})` }}
                        >
                            <AnimatePresence>
                                {hovered === idx && (
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end p-5 rounded-xl"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="w-full h-full flex flex-col justify-center items-center text-center">
                                            <p className="text-3xl text-white font-bold font-mont cursor-default">
                                                {item.title}
                                            </p>
                                            <IoIosArrowUp
                                                size="25"
                                                color="white"
                                                className="absolute bottom-4 right-4 cursor-pointer"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </SwiperSlide>
            ))}
            <div className="swiper-button-prev p-4 cursor-pointer" />
            <div className="swiper-button-next p-4 cursor-pointer" />
        </Swiper>
    );
};

export default Slider;
