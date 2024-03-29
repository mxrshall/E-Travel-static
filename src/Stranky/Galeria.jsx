import React from "react";
import GaleriaFotka from "../GaleriaComponents/GaleriaFotka";
import Navbar from "../Navbar/Navbar";

function Galeria({ slider }) {

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
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Galeria;
