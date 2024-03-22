import Navbar from "../Navbar/Navbar"
import InfoTitle from "../InfoComponents/InfoTitle"
import InfoDescription from "../InfoComponents/InfoDescription"
import InfoButton from "../InfoComponents/InfoButton"
import header1 from "../images/header/header1.jpg"

function Info() {

    return (
        <>
            <Navbar/>
            <div className="w-7/12 h-[100vh] pt-[8%] pl-[5%] flex flex-col bg-black absolute z-10">
                <InfoTitle title="Južná Kórea"/>
                <InfoDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "/>
                <InfoButton/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${header1})`}}></div>
        </>
    )
  }
  
  export default Info