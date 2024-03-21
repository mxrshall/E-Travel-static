import Lokacia from "../Lokacia/Lokacia"
import Navbar from "../Navbar/Navbar"

import header1 from "../images/header/header1.jpg"
import header2 from "../images/header/header2.jpg"
import header3 from "../images/header/header3.jpg"
import header4 from "../images/header/header4.jpg"


function Lokacie() {
    const list = [
        {
            id: 1,
            title: "Dobrodružstvo v Južnej Kórei",
            description: "Južná Kórea je fascinujúca destinácia pre turistov z celého sveta. Svojim návštevníkom ponúka bohatú kombináciu histórie, kultúry, moderného mestského života a prírodných krás. Od živých metropol a historických pamiatok po úchvatné prírodné scenérie, Južná Kórea má čo ponúknuť každému typu cestovateľa. V neposlednom rade stojí za zmienku, že v Kórei existuje aj bohatý nočný život, športové podujatia a moderné zábavné parky, ktoré zabezpečia, že si turisti užijú každý moment svojej návštevy v Južnej Kórei.",
            background: header1,
        },
        {
            id: 2,
            title: "Dobrodružstvo v Švajčiarsku",
            description: "Švajčiarsko, malá krajina uprostred Európy, je synonymom nádherných alpských scenérií, historických miest, kultúrneho bohatstva a špičkových zimných športových destinácií. Pre turistov a návštevníkov ponúka nezabudnuteľné zážitky v každom ročnom období. Celkovo je Švajčiarsko krajinou, ktorá ponúka širokú škálu zážitkov - od horských dobrodružstiev po kultúrne objavy a relaxáciu pri jazerách. Je to destinácia, ktorá nikdy neznechutí a kde si návštevníci vychutnajú nezabudnuteľné okamihy v prírode i v meste.",
            background: header2,
        },
        {
            id: 3,
            title: "Dobrodružstvo v Kanade",
            description: "Kanada, druhá najväčšia krajina na svete, je pôsobivá destinácia pre turistov a návštevníkov z celého sveta. Svojim rozsiahlou prírodnou krásou, pestrou kultúrou a pohostinným duchom ponúka nezabudnuteľné zážitky. Je to teda krajina, ktorá ponúka široké spektrum zážitkov pre každého návštevníka. Od prírodných dobrodružstiev až po kultúrne objavy, Kanada je miestom, kde sa snúbi jedinečná krása s pohostinným prostredím.",
            background: header3,
        },
        {
            id: 4,
            title: "Dobrodružstvo v Afrike",
            description: "Afrika, kontinent plný divokej krásy a fascinujúcich kontrastov, láka dobrodruhov, dobrodružky a cestovateľov z celého sveta. Tento pozemský raj je domovom rozmanitej fauny a flóry, ohromujúcich krajín a bohatého kultúrneho dedičstva. Afrika je tiež miestom bohatých kultúr a histórie, zhmotnených v monumentálnych pamiatkach ako sú pyramidy v Egypte, starobylé osady Maasai v Keni a tajomné skalné maľby v Namíbii. Každá krajina má svoj vlastný jedinečný príbeh, ktorý čaká, kým ho turisti objavia.",
            background: header4,
        },
    ]

    return (
      <>
        <Navbar/>
        {list.map((list) => (
        <Lokacia
          key={list.id}
          title={list.title}
          description={list.description}
          background={list.background}
        />
        ))}
      </>
    )
  }
  
  export default Lokacie