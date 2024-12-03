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
import SeoulMap from "../public/images/map/SeoulMap.png"
import BukchonHanokVillage from "../public/images/photos/BukchonHanokVillage/BukchonHanokVillage.webp"
import BukchonHanokVillage2 from "../public/images/photos/BukchonHanokVillage/BukchonHanokVillage2.webp"
import BukchonHanokVillage3 from "../public/images/photos/BukchonHanokVillage/BukchonHanokVillage3.webp"
import BukchonHanokVillageMap from "../public/images/map/SeoulMap.png"
import Gyeongju from "../public/images/photos/Gyeongju/Gyeongju.webp"
import Gyeongju1 from "../public/images/photos/Gyeongju/Gyeongju1.webp"
import Gyeongju2 from "../public/images/photos/Gyeongju/Gyeongju2.webp"
import GyeongjuMap from "../public/images/map/GyeongjuMap.png"
//Švajčiarsko
import ChateaudeChillon from "../public/images/photos/ChateaudeChillon/ChateaudeChillon.webp"
import ChateaudeChillon1 from "../public/images/photos/ChateaudeChillon/ChateaudeChillon1.webp"
import ChateaudeChillon2 from "../public/images/photos/ChateaudeChillon/ChateaudeChillon2.webp"
import ChateaudeChillon3 from "../public/images/photos/ChateaudeChillon/ChateaudeChillon3.webp"
import ChateaudeChillonMap from "../public/images/map/ChateaudeChillonMap.png"
import TheMatterhorn from "../public/images/photos/TheMatterhorn/TheMatterhorn.webp"
import TheMatterhorn1 from "../public/images/photos/TheMatterhorn/TheMatterhorn1.webp"
import TheMatterhorn2 from "../public/images/photos/TheMatterhorn/TheMatterhorn2.webp"
import TheMatterhorn3 from "../public/images/photos/TheMatterhorn/TheMatterhorn3.webp"
import TheMatterhornMap from "../public/images/map/TheMatterhornMap.png"
import RhineFalls from "../public/images/photos/RhineFalls/RhineFalls.webp"
import RhineFalls1 from "../public/images/photos/RhineFalls/RhineFalls1.webp"
import RhineFalls2 from "../public/images/photos/RhineFalls/RhineFalls2.webp"
import RhineFallsMap from "../public/images/map/RhineFallsMap.png"
//Kanada
import TorngatMountains from "../public/images/photos/TorngatMountains/TorngatMountains.webp"
import TorngatMountains1 from "../public/images/photos/TorngatMountains/TorngatMountains1.webp"
import TorngatMountains2 from "../public/images/photos/TorngatMountains/TorngatMountains2.webp"
import TorngatMountainsMap from "../public/images/map/TorngatMountainsMap.png"
import QuebecCity from "../public/images/photos/QuebecCity/QuebecCity.webp"
import QuebecCity1 from "../public/images/photos/QuebecCity/QuebecCity1.webp"
import QuebecCity2 from "../public/images/photos/QuebecCity/QuebecCity2.webp"
import QuebecCity3 from "../public/images/photos/QuebecCity/QuebecCity3.webp"
import QuebecCityMap from "../public/images/map/QuebecCityMap.png"
import JoffreLakesPark from "../public/images/photos/JoffreLakesPark/JoffreLakesPark.webp"
import JoffreLakesPark1 from "../public/images/photos/JoffreLakesPark/JoffreLakesPark1.webp"
import JoffreLakesPark2 from "../public/images/photos/JoffreLakesPark/JoffreLakesPark2.webp"
import JoffreLakesParkMap from "../public/images/map/JoffreLakesParkMap.png"
//Južná Afrika
import BlydeRiverCanyon from "../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon.webp"
import BlydeRiverCanyon1 from "../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon1.webp"
import BlydeRiverCanyon2 from "../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon2.webp"
import BlydeRiverCanyonMap from "../public/images/map/BlydeRiverCanyonMap.png"
import KrugerNationalPark from "../public/images/photos/KrugerNationalPark/KrugerNationalPark.webp"
import KrugerNationalPark1 from "../public/images/photos/KrugerNationalPark/KrugerNationalPark1.webp"
import KrugerNationalPark2 from "../public/images/photos/KrugerNationalPark/KrugerNationalPark2.webp"
import TableMountain from "../public/images/photos/TableMountain/TableMountain.webp"
import TableMountain1 from "../public/images/photos/TableMountain/TableMountain1.webp"
import TableMountain2 from "../public/images/photos/TableMountain/TableMountain2.webp"
import TableMountainMap from "../public/images/map/TableMountainMap.png"

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
        title: "Južná Afrika",
        description: "Južná Afrika je krajina na južnom cípe afrického kontinentu, známa svojou rozmanitou krajinou, bohatou kultúrou a históriou. Je domovom ikonických miest ako Kapské Mesto, Stolová hora a národný park Kruger, kde môžete zažiť africké safari. Južná Afrika má tri hlavné mestá - Pretóriu (administratívne), Kapské Mesto (legislatívne) a Bloemfontein (súdne). Hlavným priemyslom je ťažba, poľnohospodárstvo a cestovný ruch. Krajina sa tiež pýši jedinečnou flórou a faunou.",
        background: header4,
        marker: {
          x: "50", 
          y: "70",
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
      map: SeoulMap,
      tag: ["all", "korea", "mesto"],
    },
    {
      title: "Gyeongju",
      background: Gyeongju,
      description: "Gyeongju je nádherné historické mesto v Južnej Kórei, ktoré je pokladnicou bohatých kultúrnych a historických pokladov. Pre turistov a návštevníkov je to fascinujúce miesto, kde môžu objavovať staroveké pamiatky, krásne prírodné scenérie a jedinečnú kórejskú kultúru. Okrem svojho historického bohatstva ponúka Gyeongju aj nádherné prírodné scenérie. Navštívte úchvatný útes Toham až ktorému sa dá dostať pomocou lanovky a očarí vás panoramatickými výhľadmi na pobrežie. Ďalej môžete navštíviť národný park Namsan s nádhernou prírodou a historickými pamiatkami.",
      photo: [Gyeongju, Gyeongju1, Gyeongju2],
      map: GyeongjuMap,
      tag: ["all", "korea", "pamiatka", "mesto", "priroda"],
    },
    {
      title: "Bukchon Hanok Village",
      background: BukchonHanokVillage,
      description: "Bukchon Hanok Village je fascinujúca historická štvrť v centre mesta Seoul v Južnej Kórei, ktorá ponúka jedinečný pohľad na tradičnú kórejskú architektúru a životný štýl. Pre turistov a návštevníkov je to miesto plné kultúrneho bohatstva a historických zážitkov. Prechádzka uličkami Bukchon Hanok Village vás vtiahne do minulosti. Môžete vidieť miestnych obyvateľov, ktorí sa stále držia tradičných kórejských zvykov a remesiel. Niektoré z domov dokonca ponúkajú možnosť navštíviť vnútro a spoznať viac o tradičnom kórejskom živote.",
      photo: [BukchonHanokVillage, BukchonHanokVillage2, BukchonHanokVillage3],
      map: BukchonHanokVillageMap,
      tag: ["all", "korea", "pamiatka"], 
    },
    {
      title: "Rhine Falls",
      background: RhineFalls,
      description: "Rheinfall, známy aj ako Rhine Falls, je najväčší vodopád v Európe nachádzajúci sa na rieke Rýn v blízkosti mesta Schaffhausen v Švajčiarsku. Pre turistov a návštevníkov je Rheinfall jednou z najpopulárnejších prírodných atrakcií v krajine, ktorá ponúka úchvatné scenérie a nezabudnuteľné zážitky. Rheinfall je ohromujúci pohľad na silné vodné toky padajúce zo skaly do priepasti s hukotom a obklopené úchvatnou prírodou. Jeho impozantná veľkosť a síla robia z Rheinfall nezabudnuteľnú pamiatku pre všetkých návštevníkov.",
      photo: [RhineFalls, RhineFalls1, RhineFalls2],
      map: RhineFallsMap,
      tag: ["all", "svajciarsko", "priroda"],
    },
    {
      title: "Chateau de Chillon",
      background: ChateaudeChillon,
      description: "Château de Chillon je nádherný hrad nachádzajúci sa na brehu Ženevského jazera v blízkosti mesta Montreux vo Švajčiarsku. Pre turistov a návštevníkov je to fascinujúca historická pamiatka, ktorá ponúka jedinečný pohľad do minulosti a nádherné scenérie Alp. Château de Chillon ponúka úchvatné výhľady na Ženevské jazero a okolité Alpy. Turisti si môžu vychutnať krásne panoramatické pohľady z hradných okien a veží, čo robí návštevu tohto hradu ešte nezabudnuteľnejšou.",
      photo: [ChateaudeChillon1, ChateaudeChillon2, ChateaudeChillon3],
      map: ChateaudeChillonMap,
      tag: ["all", "svajciarsko", "pamiatka", "priroda"],
    },
    {
      title: "The Matterhorn",
      background: TheMatterhorn,
      description: "Matterhorn je majestátny vrchol nachádzajúci sa v Alpách na pomedzí Švajčiarska a Talianska, a je jedným z najznámejších a najikonickejších vrcholov na svete. Pre turistov a návštevníkov je Matterhorn fascinujúcou destináciou, ktorá ponúka nádherné prírodné scenérie, turistiku a zážitky. Okrem svojej prírodnej krásy je Matterhorn aj súčasťou bohatej kultúrnej dedičstva alpského regiónu. Návštevníci môžu objavovať tradičné horské dediny, miestne festivaly a kultúrne podujatia, ktoré odrážajú život a tradície obyvateľov Alp.",
      photo: [TheMatterhorn1, TheMatterhorn2, TheMatterhorn3],
      map: TheMatterhornMap,
      tag: ["all", "svajciarsko", "priroda", "studena"],
    },
    {
      title: "Joffre Lakes Park",
      background: JoffreLakesPark,
      description: "Joffre Lakes Provincial Park je nádherný prírodný park v pohorí Coast Mountains v Britskej Kolumbii, Kanada. Pre turistov a návštevníkov je to fascinujúca destinácia, ktorá ponúka úchvatné scenérie, turistiku, rybolov a príležitosti na relaxáciu v prírode. Hlavnou atrakciou Joffre Lakes Park sú trojica jazier s názvami Lower, Middle a Upper Joffre Lake. Tieto jazerá sú známe svojou jasnou tyrkysovou farbou, ktorá je spôsobená jemnými časticami piesku z ľadovca. Návštevníci môžu vychutnať krásne výhľady na hladinu jazier a okolité horské scenérie.",
      photo: [JoffreLakesPark, JoffreLakesPark1, JoffreLakesPark2],
      map: JoffreLakesParkMap,
      tag: ["all", "kanada", "priroda", "studena"],
    },
    {
      title: "Torngat Mountains",
      background: TorngatMountains,
      description: "Torngat Mountains sú národným parkom v severovýchodnej Kanade, ktorý sa nachádza na Labradorskom poloostrove a na ostrove Newfoundland a Labrador. Tento odľahlý a divoký park je domovom nádherných prírodných scenérií, divokých zvierat a kultúrnej dedičstva pôvodných obyvateľov. Pre turistov a návštevníkov je Torngat Mountains zážitkom, ktorý ponúka pohľad do divočiny a nezabudnuteľné prírodné a kultúrne zážitky. Torngat Mountains ponúkajú úchvatné scenérie vrátane strmých skalnatých útesov, mohutných ľadovcov, jazier, vodopádov a divokých riek. Tento odľahlý park je domovom niektorých najpozoruhodnejších prírodných krás v Kanade, ktoré návštevníkom ponúkajú možnosť objaviť jedinečnú a nedotknutú divočinu.",
      photo: [TorngatMountains, TorngatMountains1, TorngatMountains2],
      map: TorngatMountainsMap,
      tag: ["all", "kanada", "priroda", "studena"],
    },
    {
      title: "Quebec City",
      background: QuebecCity, 
      description: "Québec City je jedným z najcharakteristickejších a najkrajších historických miest v Severnej Amerike. Nachádza sa na brehu rieky sv. Vavrinca v kanadskej provincii Québec. Pre turistov a návštevníkov je to fascinujúce mesto s bohatou kultúrnou dedičstvom, úchvatnou architektúrou a jedinečnou atmosférou. Okrem svojej bohatej kultúrnej dedičstva ponúka Quebec City aj úchvatné prírodné krásy. Návštevníci môžu prejsť krásnymi parkami, ako je Plains of Abraham, alebo sa vybrať na výlet na blízke ostrovy Île d'Orléans a Île d'Orléans, kde nájdu malebné vidiecke krajiny a vinice.",
      photo: [QuebecCity1, QuebecCity2, QuebecCity3],
      map: QuebecCityMap,
      tag: ["all", "kanada", "mesto"],
    },
    {
      title: "Blyde River Canyon",
      background: BlydeRiverCanyon,
      description: "Blyde River Canyon je jedným z najkrajších prírodných útvarov v Južnej Afrike a jedným z najväčších kaňonov na svete. Pre turistov a návštevníkov je to fascinujúce miesto, ktoré ponúka úchvatné scenérie, prírodnú krásu a množstvo zážitkov. Blyde River Canyon je ideálnym miestom pre milovníkov aktívneho odpočinku v prírode. Turisti si môžu vychutnať turistiku po rôznych chodníkoch a stezkách, ktoré vedú okolo kaňonu a ponúkajú príležitosti na pozorovanie divokej fauny a flóry. Ďalej môžu návštevníci využiť možnosti rybolovu, raftingu na rieke Blyde River a horských bicyklových výletov.",
      photo: [BlydeRiverCanyon, BlydeRiverCanyon1, BlydeRiverCanyon2],
      map: BlydeRiverCanyonMap,
      tag: ["all", "afrika", "priroda", "tropicka"],
    },
    {
      title: "Kruger National Park",
      background: KrugerNationalPark,
      description: "Kruger National Park je najväčší a najznámejší národný park v Juhoafrickej republike. Nachádza sa na severovýchode krajiny a rozkladá sa na ploche vyše 19 000 km². Park je domovom Veľkej päťky (lev, slon, nosorožec, byvol a leopard), ako aj stovkám ďalších druhov zvierat a vtákov. Je ideálnym miestom na safari s dobre vybudovanou infraštruktúrou, ktorá zahŕňa cesty, ubytovanie a výlety so sprievodcami. Kruger je považovaný za jednu z najlepších lokalít na pozorovanie divokej prírody v Afrike.",
      photo: [KrugerNationalPark, KrugerNationalPark1, KrugerNationalPark2],
      map: BlydeRiverCanyonMap,
      tag: ["all", "afrika", "priroda", "tropicka"],
    },
    {
      title: "Table Mountain",
      background: TableMountain,
      description: "Table Mountain je ikonický plochý vrch týčiaci sa nad Kapským Mestom v Juhoafrickej republike. Je jedným z novodobých siedmich prírodných divov sveta a ponúka panoramatické výhľady na mesto, oceán a okolité hory. Vrchol je prístupný lanovkou alebo pešími turistickými trasami. Hora je súčasťou národného parku a je známa bohatou biodiverzitou, vrátane mnohých endemických rastlín. Table Mountain je jedným z najnavštevovanejších miest v Južnej Afrike.",
      photo: [TableMountain, TableMountain1, TableMountain2],
      map: TableMountainMap,
      tag: ["all", "afrika", "priroda", "tropicka"],
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
