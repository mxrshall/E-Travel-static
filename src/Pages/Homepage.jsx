import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import image1 from "../../public/images/Background.png";
import image2 from "../../public/images/Vrstva1.png";
import image3 from "../../public/images/Vrstva2.png";
import image4 from "../../public/images/Vrstva3.png";
import backgroundVideo from "../../public/images/backgroundVideo.mp4";
import map from "../../public/images/map.png";
import MapMarker from './MapMarker';
import Navbar from '../Navbar/Navbar';

function Homepage({ slider, list }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const parallaxRef = useRef(null); // Ref for controlling the Parallax instance
  const [currentPage, setCurrentPage] = useState(0); // Track the current page index

  const handleHover = (data) => {
    setTitle(data.title);
    setDescription(data.description);
  };

  const scrollToPage = (page) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(page);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault(); // Prevent default scrolling behavior
    const delta = e.deltaY;
    
    if (delta > 0 && currentPage < 4) {
      setCurrentPage((prevPage) => prevPage + 1); // Scroll down
    } else if (delta < 0 && currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1); // Scroll up
    }
  };

  useEffect(() => {
    if (parallaxRef.current) {
      scrollToPage(currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false }); // Attach wheel listener

    return () => {
      window.removeEventListener('wheel', handleWheel); // Clean up listener on unmount
    };
  }, [currentPage]);

  return (
    <>
      <Navbar />
          <Parallax pages={4} className="relative" ref={parallaxRef}>
            {/* Background Layers */}
            <ParallaxLayer offset={0} speed={0.2}>
              <div 
                className="w-full h-full bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${image1})` }}
              ></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
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
            <div className="w-full h-[25%] overflow-hidden bg-cover bg-center flex justify-center items-center relative" >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                style={{ zIndex: -1 }}
              >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                className="absolute inset-0 z-0 flex justify-center items-center"
                style={{
                  background: "radial-gradient(circle, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1) 90%), linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)"
                }}
              />
              <motion.div 
                className="w-1/2 flex justify-center items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-lg text-white font-normal font-mont text-center z-10">
                  Vitajte v mojom cestovnom katalógu. Preskúmajte najfascinujúcejšie destinácie z celého sveta, ktoré som pre vás pripravil. 
                  V katalógu nájdete informácie o miestach, ktoré stoja za to navštíviť, spolu s nádhernými fotografiami, ktoré vás prenesú priamo do cieľa. 
                  Nechajte sa inšpirovať a začnite plánovať svoje ďalšie dobrodružstvo.
                </span>
              </motion.div>
            </div>
            <div className='w-full h-[25%] flex'>
              <div className="w-1/4 py-10 pl-10">
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
                      marker={item.marker}
                      slider={slider}
                      list={list[item.id]}
                      onHover={handleHover}
                    />
                  ))}
                </div>
              </div>
              <div className="w-1/4 flex items-end py-10 px-5">
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
      </Parallax>
    </>
  );
};

export default Homepage;
