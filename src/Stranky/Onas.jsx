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
                <Description description="Vitajte v Cestovnej agentúre E-Travel Vaša brána do sveta nezabudnuteľných dobrodružstiev a relaxu. Sme tu, aby sme vám pomohli naplniť vaše cestovateľské sny, či už túžite po dobrodružstve v exotických destináciách alebo po relaxácii na najkrajších horách sveta. Jednoduchosť a pohodlie: S nami môžete jednoducho a rýchlo rezervovať svoju dovolenku z pohodlia vášho domova alebo kancelárie. S našou intuitívnou webovou stránkou a mobilnou aplikáciou je cestovanie jednoduché ako nikdy predtým.
                    Široká ponuka destinácií: Nech už túžite po dovolenke na pláži, dobrodružnom výlete do prírody, alebo po objavovaní kultúrnych skvostov, ponúkame vám široký výber destinácií po celom svete, aby sme uspokojili vaše cestovateľské túžby.
                    Skúsení cestovní poradcovia: Naši skúsení a odborní cestovní poradcovia sú tu, aby vám poskytli osobnú podporu a poradenstvo pri plánovaní vašej dovolenky. Sme tu pre vás od začiatku až do konca, aby sme zabezpečili vašu maximálnu spokojnosť.
                    Výhodné ceny a špeciálne ponuky: Snažíme sa poskytnúť vám najlepšie ceny a špeciálne ponuky, aby ste si mohli užiť svoju dovolenku bez toho, aby ste museli míňať veľa peňazí. Vďaka našim partnerstvám s poprednými leteckými spoločnosťami, hotelmi a zážitkovými organizátormi vám môžeme ponúknuť jedinečné cestovné zážitky za výhodné ceny.
                    Bezpečnosť a dôvera: Vaša bezpečnosť a spokojnosť sú pre nás prioritou. Sme licencovaní a poistení, a naši partneri sú starostlivo vybraní, aby sme vám poskytli len tie najvyššie štandardy služieb."/>
                <ButtonContainer link={link}/>
            </div>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${onas})`}}></div>
        </>
    )
  }
  
  export default Onas