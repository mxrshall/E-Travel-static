import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import header1 from "../../public/images/header/header1.jpg";
import header2 from "../../public/images/header/header2.jpg";
import header3 from "../../public/images/header/header3.jpg";
import header4 from "../../public/images/header/header4.jpg";
import image1 from "../../public/images/Background.png";
import image2 from "../../public/images/Vrstva1.png";
import image3 from "../../public/images/Vrstva2.png";

function Homepage() {
    return (
        <div className="h-screen overflow-hidden">
          <Parallax pages={2} className="relative">
            {/* Background Layers */}
            <ParallaxLayer offset={0} speed={0.2}>
              <div 
                className="w-full h-full bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: `url(${image1})` }}
              ></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.3}>
              <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-white text-8xl font-bold">E-Travel</h1>
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
              <div className='w-screen h-[40vh] bg-black'></div>
            </ParallaxLayer>
            
            {/* Gradient Overlay */}
            <ParallaxLayer offset={0} speed={0.7}>
              <div className="w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
            </ParallaxLayer>
          </Parallax>
          <div className='w-screen h-screen bg-black'></div>
        </div>
    );
};

export default Homepage;
