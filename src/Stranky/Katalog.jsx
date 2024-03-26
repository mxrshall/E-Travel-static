import Karta from "../KatalogComponents/Karta"
import Vyhladavanie from "../KatalogComponents/Vyhladavanie"
import Navbar from "../Navbar/Navbar"

function Katalog({karta, slider}) {

    return (
        <>
            <Navbar/>
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="f-full h-1/4 bg-red-600 flex justify-center items-center">
                    <Vyhladavanie/>
                </div>
                <div className="bg-black flex flex-wrap">
                    {karta.map((item) => (
                    <Karta
                        key={item.id}
                        title={item.title}
                        background={item.background}
                    />
                    ))}
                </div>
            </div>
        </>
    )
  }
  
  export default Katalog
