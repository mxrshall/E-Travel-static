import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import image1 from "../../public/images/Background.png";
import image2 from "../../public/images/Vrstva1.png";
import image3 from "../../public/images/Vrstva2.png";
import image4 from "../../public/images/Vrstva3.png";
import map from "../../public/images/map.png";
import MapMarker from './MapMarker';
import Navbar from '../Navbar/Navbar';
import background1 from "../../public/images/photos/AbuSimbel/AbuSimbel.webp";
import background2 from "../../public/images/photos/QuebecCity/QuebecCity.webp";
import background3 from "../../public/images/photos/ChateaudeChillon/ChateaudeChillon2.webp";
import Footer from '../Footer/Footer';

import swiperImage1 from "../../public/images/photos/QuebecCity/QuebecCity2.webp";
import swiperImage2 from "../../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon1.webp";
import swiperImage3 from "../../public/images/photos/Seoul/Seoul3.webp";
import swiperImage4 from "../../public/images/photos/VictoriaFalls/VictoriaFalls2.webp";
import swiperImage5 from "../../public/images/photos/AbuSimbel/AbuSimbel2.webp";

function Homepage({ slider, list }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [background, setBackground] = useState(null);
  const parallaxRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const swipeSlider = [
    {
      id: 0,
      image: swiperImage1,
    },
    {
      id: 1,
      image: swiperImage2,
    },
    {
      id: 2,
      image: swiperImage3,
    },
    {
      id: 3,
      image: swiperImage4,
    },
    {
      id: 4,
      image: swiperImage5,
    },
  ];

  const swiperStyles = {
    '--swiper-navigation-color': '#fff',
    '--swiper-pagination-color': '#269DFF',
    '--swiper-navigation-size': '15px',
  }

  const handleHover = (data) => {
    setTitle(data.title);
    setDescription(data.description);
    setBackground(data.background);
  };

  const handleScroll = () => {
    if (parallaxRef.current) {
      const currentOffset = parallaxRef.current.current / parallaxRef.current.space;
      setCurrentPage(Math.round(currentOffset));
    }
  };

  const handlePageClick = (page) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page);
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const parallax = parallaxRef.current;
    if (parallax) {
      parallax.container.current.addEventListener('scroll', handleScroll);
      return () => {
        parallax.container.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <Navbar />
        <div className="absolute top-[50%] left-5 z-50 flex flex-col gap-4 items-center transform -translate-y-1/2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full border-2 ${
                index === currentPage ? 'bg-white' : 'bg-transparent'
              } transition-all duration-300`}
              onClick={() => handlePageClick(index)}
            />
          ))}
        </div>
          <Parallax pages={4} ref={parallaxRef} className="relative">
            {/* Background Layers */}
            <ParallaxLayer offset={0} speed={0.2}>
              <div 
                className="w-full h-full bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${image1})` }}
              ></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
              <div 
                className="w-full h-full bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${image4})` }}
              ></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
              <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-white text-9xl font-bold mb-32">
                  E-Travel
                </h1>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
              <div 
                className="w-full h-full bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${image3})` }}
              ></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.7}>
              <div 
                className="w-full h-full bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${image2})` }}
              ></div>
              <div className='w-screen h-[20vh] bg-black'></div>
            </ParallaxLayer>
            
            {/* Gradient Overlay */}
            <ParallaxLayer offset={0} speed={0.7}>
              <div className="w-full h-full bg-gradient-to-t from-black/90 via-black/10 to-transparent bg-gradient-[20%]"></div>
            </ParallaxLayer>
            <div className='w-full h-[25%]'/>
            <div 
              className="w-full h-[25%] overflow-hidden bg-cover bg-center flex justify-center items-center p-10" 
            >
              <div 
                className='w-2/3 h-full flex justify-center items-right gap-10'
                style={{
                  clipPath: 'polygon(0% 25%, 100% 0%, 100% 100%, 0% 80%)'
                }}
              >
                <motion.div 
                  className='w-1/4 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background1})` }}
                  initial={{ opacity: 0 }}
                  animate={currentPage == 1 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </motion.div>
                <motion.div 
                  className='w-2/6 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background2})` }}
                  initial={{ opacity: 0 }}
                  animate={currentPage == 1 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </motion.div>
                <motion.div
                  className='w-3/6 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background3})` }}
                  initial={{ opacity: 0 }}
                  animate={currentPage == 1 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </motion.div>
              </div>
              <div className='absolute w-2/3 flex flex-col z-10'>
                <h1 className="text-white text-8xl font-bold mb-5">
                  Cestovný katalóg
                </h1>
                <span className="w-1/2 text-base text-white font-normal font-mont">
                  Vitajte v mojom cestovnom katalógu. Preskúmajte najfascinujúcejšie destinácie z celého sveta, ktoré som pre vás pripravil. 
                  V katalógu nájdete informácie o miestach, ktoré stoja za to navštíviť, spolu s nádhernými fotografiami, ktoré vás prenesú priamo do cieľa. 
                  Nechajte sa inšpirovať a začnite plánovať svoje ďalšie dobrodružstvo.
                </span>
              </div>
            </div>
            <div className='w-full h-[25%] flex overflow-hidden bg-cover bg-center relative'>
              {background && (
                <motion.div
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ backgroundImage: `url(${background})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
              )}
              <div
                className="absolute inset-0 z-0 flex justify-center items-center"
                style={{
                  background: "radial-gradient(circle, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1) 90%), linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)"
                }}
              />
              <div className="w-1/4 py-10 pl-10 z-10">
                  <motion.h1 
                    key={title}
                    className="text-white text-8xl font-bold"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {title}
                  </motion.h1>
              </div>
              <div className="w-2/4 flex items-center">
                <div
                  className="w-full h-2/3 overflow-hidden bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${map})` }}
                >
                  {list.map((item) => (
                    <MapMarker 
                      title={item.title}
                      description={item.description}
                      background={item.background}
                      marker={item.marker}
                      slider={slider}
                      video={item.video}
                      list={list[item.id]}
                      onHover={handleHover}
                    />
                  ))}
                </div>
              </div>
              <div className="w-1/4 flex items-end py-10 px-5 z-10">
                <motion.span 
                  key={description}
                  className="text-base text-white font-normal font-mont"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {description}
                </motion.span>
              </div>
            </div>
            <div className="w-full h-[25%] relative flex justify-center items-center">
            <Swiper
              style={swiperStyles}
              className="w-full h-full flex justify-center items-center custom-swiper"
              modules={[Autoplay]}
              slidesPerView={4}
              loop={true}
              autoplay={{ delay: 2000 }}
              speed={500}
            >
              {swipeSlider.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="w-1/4 h-full flex justify-center items-center px-2"
                >
                  <div className="w-full h-3/4 overflow-hidden flex justify-center items-center">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute top-0 w-full h-[25%] bg-black rounded-b-[50%] z-10" />
            <div className="absolute bottom-0 w-full h-[25%] bg-black rounded-t-[50%] z-10" />
            <Footer />
          </div>
      </Parallax>
    </>
  );
};

export default Homepage;