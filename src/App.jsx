import Homepage from "./Pages/Homepage";
import Location from "./Pages/Location";
import Catalog from "./Pages/Catalog";
import Landmark from "./Pages/Landmark";
import Gallery from "./Pages/Gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import header1 from "../public/images/header/header1.jpg"
import header2 from "../public/images/header/header2.jpg"
import header3 from "../public/images/header/header3.jpg"
import header4 from "../public/images/header/header4.jpg"

import korea from "../public/images/flags/korea.png";
import svajciarsko from "../public/images/flags/switzerland.png";
import kanada from "../public/images/flags/canada.png";
import afrika from "../public/images/flags/africa.png";

//Južná Kórea
import Seoul from "../public/images/photos/Seoul/Seoul.webp";
import Seoul1 from "../public/images/photos/Seoul/Seoul1.webp"
import Seoul2 from "../public/images/photos/Seoul/Seoul2.webp"
import Seoul3 from "../public/images/photos/Seoul/Seoul3.webp"
import BukchonHanokVillage from "../public/images/photos/BukchonHanokVillage/BukchonHanokVillage.webp"
import BukchonHanokVillage2 from "../public/images/photos/BukchonHanokVillage/BukchonHanokVillage2.webp"
import BukchonHanokVillage3 from "../public/images/photos/BukchonHanokVillage/BukchonHanokVillage3.webp"
import Gyeongju from "../public/images/photos/Gyeongju/Gyeongju.webp"
import Gyeongju1 from "../public/images/photos/Gyeongju/Gyeongju1.webp"
import Gyeongju2 from "../public/images/photos/Gyeongju/Gyeongju2.webp"
//Švajčiarsko
import ChateaudeChillon from "../public/images/photos/ChateaudeChillon/ChateaudeChillon.webp"
import ChateaudeChillon1 from "../public/images/photos/ChateaudeChillon/ChateaudeChillon1.webp"
import ChateaudeChillon2 from "../public/images/photos/ChateaudeChillon/ChateaudeChillon2.webp"
import ChateaudeChillon3 from "../public/images/photos/ChateaudeChillon/ChateaudeChillon3.webp"
import TheMatterhorn from "../public/images/photos/TheMatterhorn/TheMatterhorn.webp"
import TheMatterhorn1 from "../public/images/photos/TheMatterhorn/TheMatterhorn1.webp"
import TheMatterhorn2 from "../public/images/photos/TheMatterhorn/TheMatterhorn2.webp"
import TheMatterhorn3 from "../public/images/photos/TheMatterhorn/TheMatterhorn3.webp"
import RhineFalls from "../public/images/photos/RhineFalls/RhineFalls.webp"
import RhineFalls1 from "../public/images/photos/RhineFalls/RhineFalls1.webp"
import RhineFalls2 from "../public/images/photos/RhineFalls/RhineFalls2.webp"
//Kanada
import TorngatMountains from "../public/images/photos/TorngatMountains/TorngatMountains.webp"
import TorngatMountains1 from "../public/images/photos/TorngatMountains/TorngatMountains1.webp"
import TorngatMountains2 from "../public/images/photos/TorngatMountains/TorngatMountains2.webp"
import QuebecCity from "../public/images/photos/QuebecCity/QuebecCity.webp"
import QuebecCity1 from "../public/images/photos/QuebecCity/QuebecCity1.webp"
import QuebecCity2 from "../public/images/photos/QuebecCity/QuebecCity2.webp"
import QuebecCity3 from "../public/images/photos/QuebecCity/QuebecCity3.webp"
import JoffreLakesPark from "../public/images/photos/JoffreLakesPark/JoffreLakesPark.webp"
import JoffreLakesPark1 from "../public/images/photos/JoffreLakesPark/JoffreLakesPark1.webp"
import JoffreLakesPark2 from "../public/images/photos/JoffreLakesPark/JoffreLakesPark2.webp"
//Afrika
import BlydeRiverCanyon from "../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon.webp"
import BlydeRiverCanyon1 from "../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon1.webp"
import BlydeRiverCanyon2 from "../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon2.webp"
import VictoriaFalls from "../public/images/photos/VictoriaFalls/VictoriaFalls.webp"
import VictoriaFalls1 from "../public/images/photos/VictoriaFalls/VictoriaFalls1.webp"
import VictoriaFalls2 from "../public/images/photos/VictoriaFalls/VictoriaFalls2.webp"
import VictoriaFalls3 from "../public/images/photos/VictoriaFalls/VictoriaFalls3.webp"
import AbuSimbel from "../public/images/photos/AbuSimbel/AbuSimbel.webp"
import AbuSimbel1 from "../public/images/photos/AbuSimbel/AbuSimbel1.webp"
import AbuSimbel2 from "../public/images/photos/AbuSimbel/AbuSimbel2.webp"
import AbuSimbel3 from "../public/images/photos/AbuSimbel/AbuSimbel3.webp"
import { delay } from "framer-motion";

function App() {
  const list = [
    {
        id: 0,
        title: "Južná Kórea",
        description: "Južná Kórea je krajina, kde sa stretáva moderná technológia s bohatou tradíciou. Hlavné mesto Soul je plné inovatívnej architektúry, rušných trhov a historických pamiatok, zatiaľ čo mestá ako Busan ponúkajú nádherné pláže a scenérie. Južná Kórea je známa svojou jedinečnou kultúrou, chutnou kuchyňou a krásnymi chrámami zasadenými do hôr. Ideálna destinácia pre tých, ktorí chcú zažiť spojenie tradície a modernosti.",
        background: header1,
        marker: {
          x: "80", 
          y: "35",
          delay: "0.3",
        },
        flag: korea,
        tag: "korea",
    },
    {
        id: 1,
        title: "Švajčiarsko",
        description: "Švajčiarsko je malebná krajina v srdci Európy, známa svojimi nádhernými Alpami, čistými jazerami a malebnými dedinkami. Mestá ako Zürich, Ženeva a Bern kombinujú modernú eleganciu s bohatou históriou a špičkovou kvalitou života. Švajčiarsko je rajom pre lyžiarov, turistov a milovníkov prírody, ktorí ocenia jeho pokojné prostredie a krásne výhľady.",
        background: header2,
        marker: {
          x: "43", 
          y: "30",
          delay: "0.8",
        },
        flag: svajciarsko,
        tag: "svajciarsko",
    },
    {
        id: 2,
        title: "Kanada",
        description: "Kanada je rozľahlá krajina s nádhernou prírodou a rozmanitou kultúrou. Ponúka úchvatné scenérie od majestátnych skalnatých hôr až po malebné jazerá a nekonečné lesy. Kanada je ideálna destinácia pre milovníkov prírody, zimných športov, turistiky aj kultúrnych zážitkov.",
        background: header3,
        marker: {
          x: "13", 
          y: "15",
          delay: "0.4",
        },
        flag: kanada,
        tag: "kanada",
    },
    {
        id: 3,
        title: "Afrika",
        description: "Afrika je kontinent plný kontrastov, kultúrneho bohatstva a rozmanitej prírody. Od púští Sahary až po bujné dažďové pralesy a savany plné divokej zveri. Afrika je ideálna pre cestovateľov, ktorí hľadajú autentické zážitky a stretnutia s krásnou a nedotknutou prírodou.",
        background: header4,
        marker: {
          x: "53", 
          y: "58",
          delay: "0.6",
        },
        flag: afrika,
        tag: "afrika",
    },
  ]

  const slider = [
    {
      title: "Seoul",
      background: Seoul,
      description: "Seoul je pulzujúce mesto, ktoré spája bohatú históriu s modernou urbanitou. Ako hlavné mesto Južnej Kórey, je to dych berúca metropola, ktorá ponúka nespočetné množstvo zážitkov pre návštevníkov z celého sveta. Seoul je domovom bohatej kórejskej kultúry a umenia. Choďte na tradičný kórejsky čaj v jednej z mnohých čajovní alebo si vyskúšajte tradičné kórejské jedlo ako kimchi, bulgogi alebo bibimbap v miestnych reštauráciách. Okrem toho môžete navštíviť nádherné divadlá a galérie, ktoré ponúkajú pohľad na bohaté kultúrne dedičstvo.",
      photo: [Seoul1, Seoul2, Seoul3],
      tag: ["all", "korea", "mesto"],
    },
    {
      title: "Gyeongju",
      background: Gyeongju,
      description: "Gyeongju je nádherné historické mesto v Južnej Kórei, ktoré je pokladnicou bohatých kultúrnych a historických pokladov. Pre turistov a návštevníkov je to fascinujúce miesto, kde môžu objavovať staroveké pamiatky, krásne prírodné scenérie a jedinečnú kórejskú kultúru. Okrem svojho historického bohatstva ponúka Gyeongju aj nádherné prírodné scenérie. Navštívte úchvatný útes Toham až ktorému sa dá dostať pomocou lanovky a očarí vás panoramatickými výhľadmi na pobrežie. Ďalej môžete navštíviť národný park Namsan s nádhernou prírodou a historickými pamiatkami.",
      photo: [Gyeongju, Gyeongju1, Gyeongju2],
      tag: ["all", "korea", "pamiatka", "mesto", "priroda"],
    },
    {
      title: "Bukchon Hanok Village",
      background: BukchonHanokVillage,
      description: "Bukchon Hanok Village je fascinujúca historická štvrť v centre mesta Seoul v Južnej Kórei, ktorá ponúka jedinečný pohľad na tradičnú kórejskú architektúru a životný štýl. Pre turistov a návštevníkov je to miesto plné kultúrneho bohatstva a historických zážitkov. Prechádzka uličkami Bukchon Hanok Village vás vtiahne do minulosti. Môžete vidieť miestnych obyvateľov, ktorí sa stále držia tradičných kórejských zvykov a remesiel. Niektoré z domov dokonca ponúkajú možnosť navštíviť vnútro a spoznať viac o tradičnom kórejskom živote.",
      photo: [BukchonHanokVillage, BukchonHanokVillage2, BukchonHanokVillage3],
      tag: ["all", "korea", "pamiatka"], 
    },
    {
      title: "Rhine Falls",
      background: RhineFalls,
      description: "Rheinfall, známy aj ako Rhine Falls, je najväčší vodopád v Európe nachádzajúci sa na rieke Rýn v blízkosti mesta Schaffhausen v Švajčiarsku. Pre turistov a návštevníkov je Rheinfall jednou z najpopulárnejších prírodných atrakcií v krajine, ktorá ponúka úchvatné scenérie a nezabudnuteľné zážitky. Rheinfall je ohromujúci pohľad na silné vodné toky padajúce zo skaly do priepasti s hukotom a obklopené úchvatnou prírodou. Jeho impozantná veľkosť a síla robia z Rheinfall nezabudnuteľnú pamiatku pre všetkých návštevníkov.",
      photo: [RhineFalls, RhineFalls1, RhineFalls2],
      tag: ["all", "svajciarsko", "priroda"],
    },
    {
      title: "Chateau de Chillon",
      background: ChateaudeChillon,
      description: "Château de Chillon je nádherný hrad nachádzajúci sa na brehu Ženevského jazera v blízkosti mesta Montreux vo Švajčiarsku. Pre turistov a návštevníkov je to fascinujúca historická pamiatka, ktorá ponúka jedinečný pohľad do minulosti a nádherné scenérie Alp. Château de Chillon ponúka úchvatné výhľady na Ženevské jazero a okolité Alpy. Turisti si môžu vychutnať krásne panoramatické pohľady z hradných okien a veží, čo robí návštevu tohto hradu ešte nezabudnuteľnejšou.",
      photo: [ChateaudeChillon1, ChateaudeChillon2, ChateaudeChillon3], 
      tag: ["all", "svajciarsko", "pamiatka", "priroda"],
    },
    {
      title: "The Matterhorn",
      background: TheMatterhorn,
      description: "Matterhorn je majestátny vrchol nachádzajúci sa v Alpách na pomedzí Švajčiarska a Talianska, a je jedným z najznámejších a najikonickejších vrcholov na svete. Pre turistov a návštevníkov je Matterhorn fascinujúcou destináciou, ktorá ponúka nádherné prírodné scenérie, turistiku a zážitky. Okrem svojej prírodnej krásy je Matterhorn aj súčasťou bohatej kultúrnej dedičstva alpského regiónu. Návštevníci môžu objavovať tradičné horské dediny, miestne festivaly a kultúrne podujatia, ktoré odrážajú život a tradície obyvateľov Alp.",
      photo: [TheMatterhorn1, TheMatterhorn2, TheMatterhorn3],
      tag: ["all", "svajciarsko", "priroda", "studena"],
    },
    {
      title: "Joffre Lakes Park",
      background: JoffreLakesPark,
      description: "Joffre Lakes Provincial Park je nádherný prírodný park v pohorí Coast Mountains v Britskej Kolumbii, Kanada. Pre turistov a návštevníkov je to fascinujúca destinácia, ktorá ponúka úchvatné scenérie, turistiku, rybolov a príležitosti na relaxáciu v prírode. Hlavnou atrakciou Joffre Lakes Park sú trojica jazier s názvami Lower, Middle a Upper Joffre Lake. Tieto jazerá sú známe svojou jasnou tyrkysovou farbou, ktorá je spôsobená jemnými časticami piesku z ľadovca. Návštevníci môžu vychutnať krásne výhľady na hladinu jazier a okolité horské scenérie.",
      photo: [JoffreLakesPark, JoffreLakesPark1, JoffreLakesPark2],
      tag: ["all", "kanada", "priroda", "studena"],
    },
    {
      title: "Torngat Mountains",
      background: TorngatMountains,
      description: "Torngat Mountains sú národným parkom v severovýchodnej Kanade, ktorý sa nachádza na Labradorskom poloostrove a na ostrove Newfoundland a Labrador. Tento odľahlý a divoký park je domovom nádherných prírodných scenérií, divokých zvierat a kultúrnej dedičstva pôvodných obyvateľov. Pre turistov a návštevníkov je Torngat Mountains zážitkom, ktorý ponúka pohľad do divočiny a nezabudnuteľné prírodné a kultúrne zážitky. Torngat Mountains ponúkajú úchvatné scenérie vrátane strmých skalnatých útesov, mohutných ľadovcov, jazier, vodopádov a divokých riek. Tento odľahlý park je domovom niektorých najpozoruhodnejších prírodných krás v Kanade, ktoré návštevníkom ponúkajú možnosť objaviť jedinečnú a nedotknutú divočinu.",
      photo: [TorngatMountains, TorngatMountains1, TorngatMountains2],
      tag: ["all", "kanada", "priroda", "studena"],
    },
    {
      title: "Quebec City",
      background: QuebecCity, 
      description: "Québec City je jedným z najcharakteristickejších a najkrajších historických miest v Severnej Amerike. Nachádza sa na brehu rieky sv. Vavrinca v kanadskej provincii Québec. Pre turistov a návštevníkov je to fascinujúce mesto s bohatou kultúrnou dedičstvom, úchvatnou architektúrou a jedinečnou atmosférou. Okrem svojej bohatej kultúrnej dedičstva ponúka Quebec City aj úchvatné prírodné krásy. Návštevníci môžu prejsť krásnymi parkami, ako je Plains of Abraham, alebo sa vybrať na výlet na blízke ostrovy Île d'Orléans a Île d'Orléans, kde nájdu malebné vidiecke krajiny a vinice.",
      photo: [QuebecCity1, QuebecCity2, QuebecCity3],
      tag: ["all", "kanada", "mesto"],
    },
    {
      title: "Blyde River Canyon",
      background: BlydeRiverCanyon,
      description: "Blyde River Canyon je jedným z najkrajších prírodných útvarov v Južnej Afrike a jedným z najväčších kaňonov na svete. Pre turistov a návštevníkov je to fascinujúce miesto, ktoré ponúka úchvatné scenérie, prírodnú krásu a množstvo zážitkov. Blyde River Canyon je ideálnym miestom pre milovníkov aktívneho odpočinku v prírode. Turisti si môžu vychutnať turistiku po rôznych chodníkoch a stezkách, ktoré vedú okolo kaňonu a ponúkajú príležitosti na pozorovanie divokej fauny a flóry. Ďalej môžu návštevníci využiť možnosti rybolovu, raftingu na rieke Blyde River a horských bicyklových výletov.",
      photo: [BlydeRiverCanyon, BlydeRiverCanyon1, BlydeRiverCanyon2],
      tag: ["all", "afrika", "priroda", "tropicka"],
    },
    {
      title: "Victoria Falls",
      background: VictoriaFalls,
      description: ["Blyde River Canyon je jedným z najkrajších prírodných útvarov v Južnej Afrike a jedným z najväčších kaňonov na svete. Pre turistov a návštevníkov je to fascinujúce miesto, ktoré ponúka úchvatné scenérie, prírodnú krásu a množstvo zážitkov. Blyde River Canyon je ideálnym miestom pre milovníkov aktívneho odpočinku v prírode. Turisti si môžu vychutnať turistiku po rôznych chodníkoch a stezkách, ktoré vedú okolo kaňonu a ponúkajú príležitosti na pozorovanie divokej fauny a flóry. Ďalej môžu návštevníci využiť možnosti rybolovu, raftingu na rieke Blyde River a horských bicyklových výletov.", "Victoria Falls, známe aj ako Dymy Vodopády, sú jednými z najimpresívnejších prírodných divov na svete. Tieto obrovské vodopády sa nachádzajú na rieke Zambezi na hranici medzi Zambiou a Zimbabwe. Pre turistov a návštevníkov sú Victoria Falls fascinujúcou destináciou, ktorá ponúka úchvatné scenérie, dobrodružstvo a jedinečné zážitky. Pre dobrodružne založených návštevníkov ponúkajú Victoria Falls množstvo adrenalínových aktivít. Medzi najobľúbenejšie patria zipline cez kaňon, bungee jumping zo zábradlia mosta Victoria Falls Bridge a plavba na člne po divokej rieke Zambezi.", "Abu Simbel je archeologická lokalita v Egypte, známa predovšetkým svojimi monumentálnymi skalnými chrámami, ktoré sú považované za jedny z najznamenitejších pamiatok starovekého Egypta. Pre turistov a návštevníkov je Abu Simbel fascinujúcou destináciou, ktorá ponúka pohľad do bohatých dejín egyptského kráľovstva a impozantnú architektúru. Hlavnou atrakciou Abu Simbel sú dva veľkolepé chrámy vytesané do skál pri brehoch jazera Nasser. Chrám boha Rá a chrám boha Ptah sú oba vysoké až 30 metrov a zdobené obrovskými sochami faraóna Ramesesa II., bohov a faraónskymi postavami."],
      photo: [VictoriaFalls1, VictoriaFalls2, VictoriaFalls3],
      tag: ["all", "afrika", "priroda", "tropicka"],
    },
    {
      title: "Abu Simbel",
      background: AbuSimbel,
      description: "Abu Simbel je archeologická lokalita v Egypte, známa predovšetkým svojimi monumentálnymi skalnými chrámami, ktoré sú považované za jedny z najznamenitejších pamiatok starovekého Egypta. Pre turistov a návštevníkov je Abu Simbel fascinujúcou destináciou, ktorá ponúka pohľad do bohatých dejín egyptského kráľovstva a impozantnú architektúru. Hlavnou atrakciou Abu Simbel sú dva veľkolepé chrámy vytesané do skál pri brehoch jazera Nasser. Chrám boha Rá a chrám boha Ptah sú oba vysoké až 30 metrov a zdobené obrovskými sochami faraóna Ramesesa II., bohov a faraónskymi postavami.",
      photo: [AbuSimbel1, AbuSimbel2, AbuSimbel3],
      tag: ["all", "afrika", "pamiatka", "tropicka"],
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage slider={slider} list={list} />} />
        <Route path="/pamiatka" element={<Landmark />} />
        <Route path="/lokacia" element={<Location />} />
        <Route path="/katalog" element={<Catalog slider={slider}/>} />
        <Route path="/galeria" element={<Gallery slider={slider}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
