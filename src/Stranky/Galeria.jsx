import React, { useState, useEffect } from "react";
import GaleriaFotka from "../GaleriaComponents/GaleriaFotka";
import Navbar from "../Navbar/Navbar";
import OverlayFotka from "../GaleriaComponents/OverlayFotka";

function Galeria({ slider }) {
    const [open, setOpen] = useState(false);
    const [selectedFotka, setSelectedFotka] = useState(null);
    const [allPhotos, setAllPhotos] = useState([]);

    useEffect(() => {
        if (slider) {
            const photos = slider.reduce((acc, curr) => {
                return acc.concat(curr.photo);
            }, []);
            shuffleArray(photos); // Shuffle the array
            setAllPhotos(photos);
        }
    }, [slider]);

    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
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
            <Navbar />
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="w-full h-1/4 flex justify-center items-center"></div>
                <div className="bg-black flex flex-wrap">
                    {allPhotos.map((photo, index) => (
                        <GaleriaFotka
                            key={index}
                            background={photo}
                            sendFotka={sendFotka}
                        />
                    ))}
                </div>
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

export default Galeria;
