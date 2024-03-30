import header3 from "../images/header/header3.jpg"
import HomepageTitle from "../HomepageComponents/HomepageTitle"
import HomepageDescription from "../HomepageComponents/HomepageDescription"
import Navbar from "../Navbar/Navbar"
import ButtonContainer from "../UniversalComponents/ButtonContainer"

const link = [
    {
        title: "O nás",
        link: "onas",
    },
    {
        title: "Prejsť na katalóg",
        link: "katalog",
    },
    {
        title: "Zobraziť lokácie",
        link: "info",
    },
]

function Homepage() {

    return (
        <>
            <Navbar/>
            <div className="w-9/12 h-[100vh] pt-[12%] pl-[5%] flex flex-col absolute z-10">
                <HomepageTitle/>
                <HomepageDescription/>
                <ButtonContainer link={link}/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${header3})`}}></div>
        </>
    )
  }
  
  export default Homepage