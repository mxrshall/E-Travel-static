import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Title from "../UniversalComponents/Title";
import PamiatkaInfo from "../PamiatkaComponents/PamiatkaInfo";
import OverlayFotka from "../GaleriaComponents/OverlayFotka";

import { useLocation } from "react-router-dom";

function Pamiatka() {
    const location = useLocation();
    const data = location.state.data;

    const [open, setOpen] = useState(false);
    const [selectedFotka, setSelectedFotka] = useState(null);

    const sendData = (data) => {
        setOpen(data);
    };

    const sendFotka = (data) => {
        setSelectedFotka(data);
        setOpen(true);
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-[100vh] flex justify-center items-center relative z-20">
                <Title title={data.title} />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-[100vh] absolute top-0 left-0 bg-cover bg-center z-10"
                style={{ backgroundImage: `url(${data.background})` }}
            >
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            </motion.div>
            <div className="w-full h-[100vh] flex justify-center items-center bg-black relative z-30">
                <PamiatkaInfo description={data.description} photo={data.photo} sendFotka={sendFotka} />
            </div>
            {open && (
                <OverlayFotka
                    fotka={selectedFotka}
                    sendData={sendData}
                />
            )}
        </>
    );
}

export default Pamiatka;

