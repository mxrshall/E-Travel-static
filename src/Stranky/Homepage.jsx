import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import image1 from "../../public/images/Background.png";
import image2 from "../../public/images/Vrstva1.png";
import image3 from "../../public/images/Vrstva2.png";
import backgroundVideo from "../../public/images/backgroundVideo.mp4";
import map from "../../public/images/map.png";

function Homepage() {
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
            <div className='w-full h-[25%]'>
            </div>
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
                  background: "radial-gradient(circle, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 1) 90%), linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)"
                }}
              />
              <div className="w-2/3 flex justify-center items-center">
                <span className="text-base text-white font-normal font-mont text-center z-10">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                </span>
              </div>
            </div>
            <div className='w-full h-[25%] flex justify-center items-center'>
              <div
                className="w-1/2 h-2/3 overflow-hidden bg-cover bg-center flex justify-center items-center relative"
                style={{ backgroundImage: `url(${map})` }}
              >
              </div>
            </div>
          </Parallax>
    );
};

export default Homepage;
