import onas from "../../public/images/header/onas.png"
import Navbar from "../Navbar/Navbar"
import Title from "../UniversalComponents/Title"
import Description from "../UniversalComponents/Description"
import ButtonContainer from "../UniversalComponents/ButtonContainer"
import { motion } from "framer-motion";

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
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1 }}
                className="w-7/12 h-[100vh] pt-[8%] px-[5%] flex flex-col bg-black absolute z-10"
            >
                <Title title="E-Travel"/>
                <Description description="Vitajte v Cestovnej agentúre E-Travel Vaša brána do sveta nezabudnuteľných dobrodružstiev a relaxu. Sme tu, aby sme vám pomohli naplniť vaše cestovateľské sny, či už túžite po dobrodružstve v exotických destináciách alebo po relaxácii na najkrajších horách sveta. S nami môžete jednoducho a rýchlo rezervovať svoju dovolenku z pohodlia vášho domova alebo kancelárie.
                    Nech už túžite po výlete do prírody, alebo po objavovaní kultúrnych skvostov, ponúkame vám široký výber destinácií po celom svete, aby sme uspokojili vaše cestovateľské túžby."
                />
                <ButtonContainer link={link}/>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-full h-[100vh] bg-cover bg-center" 
                style={{ backgroundImage: `url(${onas})`}}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
            </motion.div>
        </>
    )
  }
  
  export default Onas