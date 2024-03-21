import header3 from "../images/header/header3.jpg"
import HomepageTitle from "./HomepageComponents/HomepageTitle"
import HomepageDescription from "./HomepageComponents/HomepageDescription"
import HomepageButton from "./HomepageComponents/HomepageButton"

function Homepage() {

    return (
        <>
            <div className="w-9/12 h-[100vh] pt-[10%] pl-[5%] flex flex-col absolute z-10">
                <HomepageTitle/>
                <HomepageDescription/>
                <HomepageButton/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${header3})`}}></div>
        </>
    )
  }
  
  export default Homepage