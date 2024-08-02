import header3 from "../../public/images/header/header3.jpg"
import HomepageTitle from "../HomepageComponents/HomepageTitle"
import HomepageDescription from "../HomepageComponents/HomepageDescription"
import Navbar from "../Navbar/Navbar"
import ButtonContainer from "../UniversalComponents/ButtonContainer"
import Test from "../test";

const link = [
    {
        title: "O nás",
        link: "onas",
        delay: 1.4,
    },
    {
        title: "Prejsť na katalóg",
        link: "katalog",
        delay: 1.6,
    },
    {
        title: "Zobraziť lokácie",
        link: "info",
        delay: 1.8,
    },
]

function Homepage() {

    return (
        <>
            <Navbar/>
            <div className="w-9/12 h-[100vh] pt-[10%] pl-[5%] flex flex-col absolute z-10">
                <HomepageTitle/>
                <HomepageDescription/>
                <ButtonContainer link={link}/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${header3})`}}></div>
            <Test/>
        </>
    )
  }
  
  export default Homepage