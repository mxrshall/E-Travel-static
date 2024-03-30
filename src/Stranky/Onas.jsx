import onas from "../images/header/onas.png"
import Navbar from "../Navbar/Navbar"
import Title from "../UniversalComponents/Title"
import Description from "../UniversalComponents/Description"
import ButtonContainer from "../UniversalComponents/ButtonContainer"

const link = [
    {
        title: "Prejsť na katalóg",
        link: "katalog",
    },
    {
        title: "Zobraziť lokácie",
        link: "info",
    },
]

function Onas() {

    return (
        <>
            <Navbar/>
            <div className="w-7/12 h-[100vh] pt-[8%] px-[5%] flex flex-col bg-black absolute z-10">
                <Title title="E-Travel"/>
                <Description description="Sme cestovná kancelária, ktorá sa zameriava na poskytovanie nezabudnuteľných zážitkov a dobrodružstiev pre našich klientov po celom svete. S našou vášňou pre cestovanie a odborným know-howom sme pripravení vám pomôcť plniť vaše cestovateľské sny. V našom cestovnom katalógu nájdete širokú škálu destinácií, zájazdov a dobrodružstiev, ktoré spĺňajú rôzne záujmy a preferencie. Od exotických pláží a dobrodružných expedícií až po kultúrne výlety a romantické úniky, máme niečo pre každého."/>
                <ButtonContainer link={link}/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${onas})`}}></div>
        </>
    )
  }
  
  export default Onas