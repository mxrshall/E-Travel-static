import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Title from "../UniversalComponents/Title";
import LandmarkInfo from "../LandmarkComponents/LandmarkInfo";
import OverlayFotka from "../GalleryComponents/OverlayFotka";
import { useLocation, useNavigate } from "react-router-dom";

function Landmark() {
    const [isExit, setIsExit] = useState(false);
    const [signal, setSignal] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = location || {};

    const [open, setOpen] = useState(false);
    const [selectedFotka, setSelectedFotka] = useState(null);

    const handleButtonClick = (value) => {
        setIsExit(true);
        setSignal(true);
        setTimeout(() => {
            navigate(`/${value}`);
            window.scrollTo(0, 0);
        }, 0);
    };

    const sendData = (data) => {
        setOpen(data);
    };

    const sendFotka = (data) => {
        setSelectedFotka(data);
        setOpen(true);
    };

    return (
        <>
            <Navbar onClick={() => setIsExit(true)} signal={signal} />
            <div
                className="w-full h-screen flex justify-center items-center bg-cover bg-center sticky top-0"
                style={{ backgroundImage: `url(${state.background})` }}
            >
                <div className="absolute inset-0 bg-black opacity-60 z-10" />
                <div className="relative z-20">
                    <Title title={state.title} />
                </div>
            </div>
            <div className="w-full flex justify-center items-center bg-black relative z-30 md:h-screen">
                <LandmarkInfo description={state.description} photo={state.photo} map={state.map} sendFotka={sendFotka} onClick={handleButtonClick}/>
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

export default Landmark;

