import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import image1 from "../../public/images/Background.webp";
import image2 from "../../public/images/Vrstva1.webp";
import image3 from "../../public/images/Vrstva2.webp";
import image4 from "../../public/images/Vrstva3.webp";
import Navbar from '../Navbar/Navbar';
import background1 from "../../public/images/photos/TableMountain/TableMountain.webp";
import background2 from "../../public/images/photos/QuebecCity/QuebecCity.webp";
import background3 from "../../public/images/photos/ChateaudeChillon/ChateaudeChillon2.webp";
import backgroundFull from "../../public/images/backgroundFull.webp";
import Footer from '../Footer/Footer';

import swiperImage1 from "../../public/images/photos/TableMountain/TableMountain.webp";
import swiperImage2 from "../../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon1.webp";
import swiperImage3 from "../../public/images/photos/Seoul/Seoul3.webp";
import swiperImage4 from "../../public/images/photos/Gyeongju/Gyeongju2.webp";
import swiperImage5 from "../../public/images/photos/KrugerNationalPark/KrugerNationalPark2.webp";
import swiperImage6 from "../../public/images/photos/QuebecCity/QuebecCity2.webp";
import swiperImage7 from "../../public/images/photos/TheMatterhorn/TheMatterhorn1.webp";
import swiperImage8 from "../../public/images/photos/ChateaudeChillon/ChateaudeChillon2.webp";
import Map from '../HomepageComponents/Map';

function Homepage({ slider, list }) {
  const [title, setTitle] = useState("");
  const [short_description, setDescription] = useState("");
  const [background, setBackground] = useState(null);
  const [isExit, setIsExit] = useState(false);
  const [signal, setSignal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasAnimated1, setHasAnimated1] = useState(false);
  const [hasAnimated3, setHasAnimated3] = useState(false);
  const sectionRefs = useRef([]); // Array to hold references to sections
  const containerRef = useRef(null); // Reference to the scroll container
  const navigate = useNavigate();

  const swipeSlider1 = [
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

  const swipeSlider2 = [
    {
      id: 0,
      image: swiperImage6,
    },
    {
      id: 1,
      image: swiperImage7,
    },
    {
      id: 2,
      image: swiperImage8,
    },
  ];

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  if (currentPage === 1 && !hasAnimated1) {
    setHasAnimated1(true);
  }else if (currentPage === 3 && !hasAnimated3) {
    setHasAnimated3(true);
  }

  const handleHover = (data) => {
    setTitle(data.title);
    setDescription(data.short_description);
    setBackground(data.background);
  };

  const handleButtonClick = (value) => {
    setIsExit(true);
    setSignal(true);
    setTimeout(() => {
        navigate(`/${value}`);
        window.scrollTo(0, 0);
    }, 0);
  };

  // Add sections dynamically to the refs array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!lenis) return; // Safeguard if lenis is undefined
  
    const updateCurrentPage = () => {
      const scrollPosition = lenis.scroll + window.innerHeight / 2; // Use Lenis's scroll position
  
      const sectionOffsets = sectionRefs.current.map((section) =>
        section?.getBoundingClientRect().top + lenis.scroll // Use Lenis's position
      );
  
      const activeIndex = sectionOffsets.findIndex(
        (offset, index) =>
          scrollPosition >= offset &&
          (index === sectionOffsets.length - 1 || scrollPosition < sectionOffsets[index + 1])
      );
  
      if (activeIndex !== currentPage) {
        setCurrentPage(activeIndex);
      }
    };
  
    lenis.on('scroll', updateCurrentPage); // Attach Lenis scroll event listener
    return () => lenis.off('scroll', updateCurrentPage); // Cleanup on unmount
  }, [currentPage, lenis]);
  

  const handlePageClick = (index) => {
    if (sectionRefs.current[index]) {
      const section = sectionRefs.current[index];
      lenis.scrollTo(section, { offset: -50 }); // Adjust offset as needed
    }
  };

  return (
    <>
      <Navbar onClick={() => setIsExit(true)} signal={signal} />
      <div 
        className="fixed top-[50%] left-3 z-50 flex flex-col gap-4 items-center transform -translate-y-1/2 md:left-5"
      >
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
      <ReactLenis root options={{ 
        duration: 1,
        smoothWheel: false,
        smoothTouch: false,
      }}>
      <div className='w-full h-[400vh] flex flex-col'>
        <div className='w-full h-[100vh] relative' ref={addToRefs}>
          <img 
            className="w-full h-full object-cover absolute z-[1]"
            src={backgroundFull}
            loading="eager"
          />
          <div 
            className="w-full h-full flex justify-center items-center absolute z-[2]"
          >
            <h1 className="text-white text-8xl font-bold mb-32 md:text-9xl">
              E-Travel
            </h1>
          </div>
          <img 
            className="w-full h-full object-cover absolute z-[3]"
            src={image2}
            loading="eager"
          />
          <div 
            className="w-full h-full bg-gradient-to-t from-black/90 via-black/10 to-transparent bg-gradient-[20%] absolute z-[4]"
          />
        </div>

        <div className="w-full h-[100vh] overflow-hidden bg-cover bg-center flex justify-center items-center p-10" ref={addToRefs}>
              <div 
                className='w-full h-5/6 flex justify-center items-right gap-10 md:w-2/3 md:h-full'
                style={{
                  clipPath: 'polygon(0% 25%, 100% 0%, 100% 100%, 0% 80%)'
                }}
              >
                <div 
                  className='w-1/4 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background1})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"/>
                </div>
                <div 
                  className='w-2/6 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background2})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"/>
                </div>
                <div
                  className='w-3/6 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background3})` }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"/>
                </div>
              </div>
              <div 
                className='absolute w-3/4 flex flex-col z-10 md:w-2/3'
              >
                <h1 className="text-white text-6xl font-bold md:text-8xl">
                  Travel catalog
                </h1>
                <span className="w-full text-base text-white font-normal font-mont my-5 md:w-1/2">
                  Welcome to my travel catalog. Explore the most fascinating destinations from around the world that I have prepared for you.
                  In the catalog, you will find information about places worth visiting, along with stunning photographs that will transport you straight to the destination.
                  Let yourself be inspired and start planning your next adventure.
                </span>
                <button
                  onClick={() => handleButtonClick("katalog")}
                  className="w-2/3 font-mont text-base font-medium px-2 text-white border-2 border-white md:w-1/5"
                >
                  Go to catalog
                </button>
              </div>
            </div>
            <div className='w-full h-[100vh] flex items-center overflow-hidden bg-cover bg-center relative md:items-stretch' ref={addToRefs}>
              {background && !isExit && (
                <div
                  className="hidden inset-0 absolute w-full h-full object-cover md:inline"
                  style={{ backgroundImage: `url(${background})` }}
                />
              )}
              <div
                className="absolute inset-0 z-0 hidden justify-center items-center md:flex"
                style={{
                  background: "radial-gradient(circle, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1) 90%), linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)"
                }}
              />
              <div className="w-1/4 hidden pl-10 z-10 md:flex">
                {!isExit && (
                  <h1 
                    key={title}
                    className="text-white text-8xl font-bold"
                  >
                    {title}
                  </h1>
                )}
              </div>
              <Map slider={slider} isExit={isExit} currentPage={currentPage} list={list} onHover={handleHover} onClick={() => {setIsExit(true); setSignal(true);}}/>
              <div className="w-1/4 md:flex items-end pb-20 px-8 z-10 hidden">
              {!isExit && ( 
                <span 
                  key={short_description}
                  className="text-base text-white font-normal font-mont"
                >
                  {short_description}
                </span>
              )}
              </div>
            </div>
            <div className="w-full h-[100vh] relative flex justify-center items-center" ref={addToRefs}>
            <div className='w-full h-full flex justify-center items-center absolute z-40 md:w-2/5 md:relative'>
              <div
                className='w-3/4 flex flex-col justify-center items-start md:w-2/3'
              >
                <h1 className="text-white text-6xl font-bold md:text-8xl">
                  Gallery
                </h1>
                <span className="text-base text-white font-normal font-mont my-5">
                  Enter the gallery and be inspired by the stunning places waiting to be discovered. Whether you're looking for serene beaches, vibrant cities, or breathtaking nature, the gallery offers a unique glimpse into destinations worth visiting. Browse through photos that capture the atmosphere and beauty of the world, and let your imagination take you on your next travel adventure.
                </span>
                <button 
                  className="font-mont text-base font-medium px-2 text-white border-2 border-white"
                  onClick={() => handleButtonClick("galeria")}
                >
                  Go to gallery
                </button>
              </div>
            </div>
            <div className='w-full h-full flex flex-col relative md:w-3/5'>
            <div
                className="absolute inset-0 z-30 flex justify-center items-center"
                style={{
                  background: "radial-gradient(circle, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 1) 90%), linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)"
                }}
              />
              <Swiper
                className="w-full h-1/2 flex flex-col justify-center items-center custom-swiper pb-2"
                slidesPerView={3}
              >
                {swipeSlider1.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="w-1/4 h-full flex justify-center items-center px-2"
                  >
                    <div className="w-full h-full overflow-hidden flex justify-center items-center">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className="w-full h-1/2 flex flex-col justify-center items-center custom-swiper pt-2"
                slidesPerView={2}
              >
                {swipeSlider2.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="w-1/4 h-full flex justify-center items-center px-2"
                  >
                    <div className="w-full h-full overflow-hidden flex justify-center items-center">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Footer />
          </div>
        </div>
        </ReactLenis>
    </>
  );
};

export default Homepage;