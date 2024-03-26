import Karta from "../KatalogComponents/Karta"
import Vyhladavanie from "../KatalogComponents/Vyhladavanie"
import Navbar from "../Navbar/Navbar"

function Katalog({slider}) {

    return (
        <>
            <Navbar/>
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="f-full h-1/4 bg-red-600 flex justify-center items-center">
                    <Vyhladavanie/>
                </div>
                <div className="bg-black flex flex-wrap">
                {slider.map((item, index) => (
                    <div key={index}>
                        {item.title.map((title, innerIndex) => (
                            <Karta
                                key={innerIndex}
                                title={title}
                                background={item.background[innerIndex]}
                                description={item.description[innerIndex]}
                                photo={item.photo[innerIndex]}
                            />
                        ))}
                    </div>
                ))}
                </div>
            </div>
        </>
    )
  }
  
  export default Katalog
