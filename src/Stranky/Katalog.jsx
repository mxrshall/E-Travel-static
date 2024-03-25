import Karta from "../KatalogComponents/Karta"
import Navbar from "../Navbar/Navbar"

function Katalog({slider, list}) {

    return (
        <>
            <Navbar/>
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="f-full h-1/4 bg-red-600"></div>
                <div className="bg-black flex flex-wrap">
                    <Karta/>
                    <Karta/>
                    <Karta/>
                    <Karta/>
                    <Karta/>
                    <Karta/>
                    <Karta/>
                    <Karta/>
                    <Karta/>
                    <Karta/>
                </div>
            </div>
        </>
    )
  }
  
  export default Katalog
