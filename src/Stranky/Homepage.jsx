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
        <Test link={link}/>
    )
  }
  
  export default Homepage