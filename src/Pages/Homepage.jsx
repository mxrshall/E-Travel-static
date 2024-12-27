import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import image1 from "../../public/images/Background.png";
import image2 from "../../public/images/Vrstva1.png";
import image3 from "../../public/images/Vrstva2.png";
import image4 from "../../public/images/Vrstva3.png";
import Navbar from '../Navbar/Navbar';
import background1 from "../../public/images/photos/TableMountain/TableMountain.webp";
import background2 from "../../public/images/photos/QuebecCity/QuebecCity.webp";
import background3 from "../../public/images/photos/ChateaudeChillon/ChateaudeChillon2.webp";
import Footer from '../Footer/Footer';

import swiperImage1 from "../../public/images/photos/QuebecCity/QuebecCity2.webp";
import swiperImage2 from "../../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon1.webp";
import swiperImage3 from "../../public/images/photos/Seoul/Seoul3.webp";
import swiperImage4 from "../../public/images/photos/Gyeongju/Gyeongju2.webp";
import swiperImage5 from "../../public/images/photos/KrugerNationalPark/KrugerNationalPark2.webp";
import Map from '../HomepageComponents/Map';

function Homepage({ slider, list }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [background, setBackground] = useState(null);
  const [isExit, setIsExit] = useState(false);
  const [signal, setSignal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasAnimated1, setHasAnimated1] = useState(false);
  const [hasAnimated3, setHasAnimated3] = useState(false);
  const sectionRefs = useRef([]); // Array to hold references to sections
  const containerRef = useRef(null); // Reference to the scroll container

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

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Define transforms for parallax layers
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const layer4Y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const layer5Y = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

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
    setDescription(data.description);
    setBackground(data.background);
  };

  const handleButtonClick = (value) => {
    setIsExit(true);
    setSignal(true);
    setTimeout(() => {
        window.location.href = `/${value}`;
    }, 800);
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
      <div className="fixed top-[50%] left-3 z-50 flex flex-col gap-4 items-center transform -translate-y-1/2 md:left-5">
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
      <ReactLenis root>
      <div className='w-full h-[400vh] flex flex-col'>
        <div className='w-full h-[100vh] relative' ref={addToRefs}>
          <motion.div 
            className="w-full h-full bg-cover bg-center flex justify-center items-center absolute z-[1]"
            style={{ backgroundImage: `url(${image1})` }}
          />
          <motion.div 
            className="w-full h-full bg-cover bg-center flex justify-center items-center absolute z-[2]"
            style={{ backgroundImage: `url(${image4})`, y: layer2Y }}
          />
          <motion.div 
            className="w-full h-full flex justify-center items-center absolute z-[3]"
            style={{ y: layer3Y }}
          >
            <h1 className="text-white text-8xl font-bold mb-32 md:text-9xl">
              E-Travel
            </h1>
          </motion.div>
          <motion.div 
            className="w-full h-full bg-cover bg-center flex justify-center items-center absolute z-[4]"
            style={{ backgroundImage: `url(${image3})`, y: layer4Y }}
          />
          <motion.div 
            className="w-full h-full bg-cover bg-center flex justify-center items-center absolute z-[5]"
            style={{ backgroundImage: `url(${image2})`, y: layer5Y }}
          />
          <motion.div 
            className="w-full h-full bg-gradient-to-t from-black/90 via-black/10 to-transparent bg-gradient-[20%] absolute z-[6]"
            style={{ y: layer5Y }}
          />
        </div>

        <div className="w-full h-[100vh] overflow-hidden bg-cover bg-center flex justify-center items-center p-10" ref={addToRefs}>
              <div 
                className='w-full h-4/5 flex justify-center items-right gap-10 md:w-2/3 md:h-full'
                style={{
                  clipPath: 'polygon(0% 25%, 100% 0%, 100% 100%, 0% 80%)'
                }}
              >
                <motion.div 
                  className='w-1/4 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background1})` }}
                  initial={{ opacity: 0 }}
                  animate={hasAnimated1 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"/>
                </motion.div>
                <motion.div 
                  className='w-2/6 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background2})` }}
                  initial={{ opacity: 0 }}
                  animate={hasAnimated1 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"/>
                </motion.div>
                <motion.div
                  className='w-3/6 h-full bg-cover bg-center relative'
                  style={{ backgroundImage: `url(${background3})` }}
                  initial={{ opacity: 0 }}
                  animate={hasAnimated1 ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"/>
                </motion.div>
              </div>
              <motion.div 
                className='absolute w-3/4 flex flex-col z-10 md:w-2/3'
                initial={{ opacity: 0, y: 10 }}
                animate={hasAnimated1 ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h1 className="text-white text-6xl font-bold md:text-8xl">
                  Cestovný katalóg
                </h1>
                <span className="w-full text-base text-white font-normal font-mont my-5 md:w-1/2">
                  Vitajte v mojom cestovnom katalógu. Preskúmajte najfascinujúcejšie destinácie z celého sveta, ktoré som pre vás pripravil. 
                  V katalógu nájdete informácie o miestach, ktoré stoja za to navštíviť, spolu s nádhernými fotografiami, ktoré vás prenesú priamo do cieľa. 
                  Nechajte sa inšpirovať a začnite plánovať svoje ďalšie dobrodružstvo.
                </span>
                <button
                  onClick={() => handleButtonClick("katalog")}
                  className="w-2/3 font-mont text-base font-medium px-2 text-white border-2 border-white hover:bg-white hover:text-black md:w-1/5"
                >
                  Prejsť na katalóg
                </button>
              </motion.div>
            </div>
            <div className='w-full h-[100vh] flex items-center overflow-hidden bg-cover bg-center relative md:items-stretch' ref={addToRefs}>
              {background && (
                <motion.div
                  className="hidden inset-0 absolute w-full h-full object-cover md:inline"
                  style={{ backgroundImage: `url(${background})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                />
              )}
              <div
                className="absolute inset-0 z-0 hidden justify-center items-center md:flex"
                style={{
                  background: "radial-gradient(circle, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1) 90%), linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)"
                }}
              />
              <div className="w-1/4 hidden py-10 pl-10 z-10 md:flex">
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
              <Map slider={slider} list={list} />
              <div className="w-1/4 md:flex items-end py-10 px-5 z-10 hidden">
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
              <Swiper
                style={{
                  "--swiper-pagination-color": "white",
                  "--swiper-pagination-bullet-inactive-color": "#999999",
                  "--swiper-pagination-bullet-size": "16px",
                }}
                className="w-full h-2/3 flex justify-center items-center custom-swiper md:hidden"
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 2000 }}
              >
                {list.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="w-full h-full flex justify-center items-center bg-cover bg-center"
                  >
                    <div
                      className='w-2/3 h-3/5 flex justify-center items-center text-center'
                      style={{ backgroundImage: `url(${item.background})` }}
                    >
                      <h1 className="text-white text-5xl font-bold">
                        {item.title}
                      </h1>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full h-[100vh] relative flex justify-center items-center" ref={addToRefs}>
            <div className='w-full h-full flex justify-center items-center absolute z-40 md:w-2/5 md:relative'>
              <motion.div
                className='w-3/4 flex flex-col justify-center items-start md:w-2/3'
                initial={{ opacity: 0, x: -10 }}
                animate={hasAnimated3 ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <h1 className="text-white text-6xl font-bold md:text-8xl">
                  Galéria
                </h1>
                <span className="text-base text-white font-normal font-mont my-5">
                  Vstúpte do galérie a nechajte sa inšpirovať nádhernými miestami, ktoré čakajú na objavenie. Či už hľadáte pokojné pláže, pulzujúce mestá, alebo dychberúcu prírodu, galéria ponúka jedinečný pohľad na destinácie, ktoré stoja za návštevu. Prezrite si fotografie, ktoré zachytávajú atmosféru a krásu sveta, a nechajte sa unášať fantáziou na svoju ďalšiu cestovateľskú dobrodružstvo.
                </span>
                <button 
                  className="font-mont text-base font-medium px-2 text-white border-2 border-white hover:bg-white hover:text-black"
                  onClick={() => handleButtonClick("galeria")}
                >
                  Prejsť na galériu
                </button>
              </motion.div>
            </div>
            <motion.div 
              className='w-full h-full flex flex-col relative md:w-3/5'
              initial={{ opacity: 0 }}
              animate={hasAnimated3 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
            <div
                className="absolute inset-0 z-30 flex justify-center items-center"
                style={{
                  background: "radial-gradient(circle, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 1) 90%), linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 60%)"
                }}
              />
              <Swiper
                className="w-full h-1/2 flex flex-col justify-center items-center custom-swiper pb-2"
                modules={[Autoplay]}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 1500 }}
                speed={500}
              >
                {swipeSlider.map((item) => (
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
                modules={[Autoplay]}
                slidesPerView={2}
                loop={true}
                autoplay={{ delay: 2000, reverseDirection: true }}
                speed={500}
              >
                {swipeSlider.map((item) => (
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
            </motion.div>
            <Footer />
          </div>
        </div>
        </ReactLenis>
    </>
  );
};

export default Homepage;