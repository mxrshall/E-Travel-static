import React, { useState } from "react";
import Navbar from "../Navbar/Navbar"
import Title from "../UniversalComponents/Title";
import PamiatkaInfo from "../PamiatkaComponents/PamiatkaInfo"
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
            <Navbar/>
            <div className="w-full h-[100vh] flex justify-center items-center absolute z-10">
                <Title title={data.title}/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${data.background})`}}></div>
            <div className="w-full h-[100vh] flex justify-center items-center bg-black relative z-20">
                <PamiatkaInfo description={data.description} photo={data.photo} sendFotka={sendFotka}/>
            </div>
            {open && (
                <OverlayFotka
                    fotka={selectedFotka}
                    sendData={sendData}
                />
            )}
        </>
    )
  }
  
  export default Pamiatka
