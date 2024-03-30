import React from "react";
import { useState } from "react";
import GaleriaFotka from "../GaleriaComponents/GaleriaFotka";
import Navbar from "../Navbar/Navbar";
import OverlayFotka from "../GaleriaComponents/OverlayFotka";

import fotka from "../images/photos/Seoul/Seoul1.jpg";

function Galeria({ slider }) {
    const [open, setOpen] = useState(true);

    const sendDataClose = (data) => {
        setOpen(data);
    };

    const sendDataOpen = (data) => {
        setOpen(data);
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="w-full h-1/4 flex justify-center items-center bg-orange-700">
                    <p>Test</p>
                </div>
                <div className="bg-black flex flex-wrap">
                    {slider.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.photo.map((photo, photoIndex) => (
                                <GaleriaFotka
                                    key={photoIndex}
                                    background={photo}
                                    sendDataOpen={sendDataOpen}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            {open && (
                <OverlayFotka fotka={fotka} sendDataClose={sendDataClose}/>
            )}
        </>
    );
}

export default Galeria;
