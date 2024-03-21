import header2 from "../images/header/header2.jpg"
import HomepageTitle from "./HomepageComponents/HomepageTitle"

function Homepage() {

    return (
        <>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute">
                <div className="w-9/12 h-[100vh] pt-[10%] pl-[5%]">
                    <HomepageTitle/>
                </div>
            </div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${header2})`}}></div>
        </>
    )
  }
  
  export default Homepage