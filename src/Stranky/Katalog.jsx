import Karta from "../KatalogComponents/Karta"
import Navbar from "../Navbar/Navbar"

function Katalog({karta}) {

    return (
        <>
            <Navbar/>
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="f-full h-1/4 bg-red-600"></div>
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
