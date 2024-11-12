import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import image1 from "../../public/images/Background.png";
import image2 from "../../public/images/Vrstva1.png";
import image3 from "../../public/images/Vrstva2.png";
import backgroundVideo from "../../public/images/backgroundVideo.mp4";
import map from "../../public/images/map.png";
import MapMarker from './MapMarker';

function Homepage({ slider, list }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleHover = (data) => {
    setTitle(data.title);
    setDescription(data.description);
  };

    return (
          <Parallax pages={4} className="relative">
            {/* Background Layers */}
            <ParallaxLayer offset={0} speed={0.2}>
              <div 
                className="w-full h-full bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${image1})` }}
              ></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
              <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-white text-9xl font-bold">
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
            <div className="w-full h-[25%] overflow-hidden bg-cover bg-center flex justify-center items-center relative">
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
              <div className="w-1/2 flex justify-center items-center">
                <span className="text-base text-white font-normal font-mont text-center z-10">
                  Vitajte v mojom cestovnom katalógu. Preskúmajte najfascinujúcejšie destinácie z celého sveta, ktoré som pre vás pripravil. 
                  V katalógu nájdete informácie o miestach, ktoré stoja za to navštíviť, spolu s nádhernými fotografiami, ktoré vás prenesú priamo do cieľa. 
                  Nechajte sa inšpirovať a začnite plánovať svoje ďalšie dobrodružstvo.
                </span>
              </div>
            </div>
            <div className='w-full h-[25%] flex'>
              <div className="w-1/4 py-10 pl-10">
                <AnimatePresence>
                  <motion.h1 
                    key={title}
                    className="text-white text-8xl font-bold"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {title}
                  </motion.h1>
                </AnimatePresence>
              </div>
              <div className="w-2/4 flex items-center">
                <div
                  className="w-full h-2/3 overflow-hidden bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${map})` }}
                >
                  {list.map((item) => (
                    <MapMarker 
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      background={item.background}
                      x={item.x}
                      y={item.y}
                      flag={item.flag}
                      tag={item.tag}
                      slider={slider}
                      onHover={handleHover}
                    />
                  ))}
                </div>
              </div>
              <div className="w-1/4 flex items-end py-10 px-5">
                <AnimatePresence>
                  <motion.span 
                    key={description}
                    className="text-base text-white font-normal font-mont"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {description}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </Parallax>
    );
};

export default Homepage;
