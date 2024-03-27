import React from "react";
import Karta from "../KatalogComponents/Karta";
import Vyhladavanie from "../KatalogComponents/Vyhladavanie";
import Navbar from "../Navbar/Navbar";

function Katalog({ slider }) {
    return (
        <>
            <Navbar />
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="f-full h-1/4 bg-red-600 flex justify-center items-center">
                    <Vyhladavanie />
                </div>
                <div className="bg-black flex flex-wrap">
                    {slider.map((item, index) => (
                        <React.Fragment key={index}>
                            {item.title.map((title, innerIndex) => {
                                if (item.tag[innerIndex] === 1) {
                                    return (
                                        <Karta
                                            key={innerIndex}
                                            title={title}
                                            background={item.background[innerIndex]}
                                            description={item.description[innerIndex]}
                                            photo={item.photo[innerIndex]}
                                        />
                                    );
                                }
                                else {
                                    return (
                                        <Karta
                                            key={innerIndex}
                                            title={title}
                                            background={item.background[innerIndex]}
                                            description={item.description[innerIndex]}
                                            photo={item.photo[innerIndex]}
                                        />
                                    );
                                }
                            })}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Katalog;
