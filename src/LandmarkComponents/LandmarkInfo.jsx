import LandmarkPhoto from "./LandmarkPhoto"
import { ReactLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";

function LandInfo({ description, photo, map, sendFotka, onClick }) {
    const veta = description.split('. ');

    const handleClick = () => {
        onClick("katalog");
    };

    const odstavec = [];
    for (let i = 0; i < veta.length; i += 3) {
        odstavec.push(veta.slice(i, i + 3).join('. '));
    }

    return (
        <ReactLenis root>
            <div className="w-full h-[100vh] flex bg-black absolute z-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="w-7/12 h-[100vh] pl-16 py-16"
                >
                    {odstavec.map((odstavec, index) => (
                        <span key={index} className="text-base text-white font-normal font-mont">
                            {odstavec}
                            <br/>
                            <br/>
                        </span>
                    ))}
                    <div 
                        className="w-1/2 h-[30vh] bg-contain bg-no-repeat bg-center my-10"
                        style={{ backgroundImage: `url(${map})`}}
                    />
                    <button onClick={handleClick} className="font-mont text-base font-medium px-2 text-white border-2 border-white hover:bg-white hover:text-black">
                        Prejsť na katalóg
                    </button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="w-5/12 h-[100vh] p-16 flex flex-col justify-center items-center"
                >
                    {photo.map((item) => (
                        <LandmarkPhoto
                            key={item}
                            background={item}
                            sendFotka={sendFotka}
                        />
                    ))}
                </motion.div>
            </div>
        </ReactLenis>
    )
  }
  
  export default LandInfo