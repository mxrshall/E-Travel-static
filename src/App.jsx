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
        title: "South Korea",
        description: "South Korea is a country where modern technology meets rich tradition. The capital, Seoul, is filled with innovative architecture, bustling markets, and historical landmarks, while cities like Busan offer stunning beaches and breathtaking scenery. South Korea is known for its unique culture, delicious cuisine, and beautiful temples nestled in the mountains. An ideal destination for those who want to experience the perfect blend of tradition and modernity.",
        background: header1,
        flag: korea,
        tag: "korea",
    },
    {
        id: 1,
        title: "Switzerland",
        description: "Switzerland is a picturesque country in the heart of Europe, known for its stunning Alps, pristine lakes, and charming villages. Cities like Zurich, Geneva, and Bern blend modern elegance with rich history and an exceptional quality of life. Switzerland is a paradise for skiers, hikers, and nature lovers who appreciate its peaceful environment and breathtaking views.",
        background: header2,
        flag: svajciarsko,
        tag: "svajciarsko",
    },
    {
        id: 2,
        title: "Canada",
        description: "Canada is a vast country with stunning nature and diverse culture. It offers breathtaking landscapes, from majestic Rocky Mountains to picturesque lakes and endless forests. Canada is the ideal destination for nature lovers, winter sports enthusiasts, hikers, and those seeking cultural experiences.",
        background: header3,
        flag: kanada,
        tag: "kanada",
    },
    {
        id: 3,
        title: "South Africa",
        description: "South Africa is a country at the southern tip of the African continent, known for its diverse landscapes, rich culture, and history. It is home to iconic places like Cape Town, Table Mountain, and Kruger National Park, where you can experience an African safari. South Africa has three main capitals—Pretoria (administrative), Cape Town (legislative), and Bloemfontein (judicial). The country's main industries are mining, agriculture, and tourism. South Africa also boasts a unique flora and fauna.",
        background: header4,
        flag: afrika,
        tag: "afrika",
    },
  ]

  const slider = [
    {
      title: "Seoul",
      background: Seoul,
      description: "Seoul is a vibrant city that blends rich history with modern urban life. As the capital of South Korea, it is a breathtaking metropolis offering countless experiences for visitors from around the world. Seoul is home to a rich Korean culture and arts scene. Enjoy traditional Korean tea in one of the many teahouses or try authentic Korean dishes like kimchi, bulgogi, or bibimbap in local restaurants. Additionally, you can visit stunning theaters and galleries that showcase the country’s rich cultural heritage.",
      photo: [Seoul1, Seoul2, Seoul3],
      map: SeoulMap,
      tag: ["all", "korea", "mesto"],
    },
    {
      title: "Gyeongju",
      background: Gyeongju,
      description: "Gyeongju is a beautiful historic city in South Korea, a treasure trove of cultural and historical gems, offering ancient landmarks, stunning natural scenery, and unique Korean culture, including Toham Cliff with panoramic views and Namsan National Park with historical sites.",
      photo: [Gyeongju, Gyeongju1, Gyeongju2],
      map: GyeongjuMap,
      tag: ["all", "korea", "pamiatka", "mesto", "priroda"],
    },
    {
      title: "Bukchon Hanok Village",
      background: BukchonHanokVillage,
      description: "Bukchon Hanok Village is a fascinating historic district in the heart of Seoul, South Korea, offering a unique glimpse into traditional Korean architecture and lifestyle. It is a place rich in culture and history, where walking through its narrow streets feels like stepping back in time. Visitors can see locals preserving traditional Korean customs and crafts, and some houses even offer the opportunity to explore their interiors and learn more about traditional Korean life.",
      photo: [BukchonHanokVillage, BukchonHanokVillage2, BukchonHanokVillage3],
      map: BukchonHanokVillageMap,
      tag: ["all", "korea", "pamiatka"], 
    },
    {
      title: "Rhine Falls",
      background: RhineFalls,
      description: "Rheinfall, also known as Rhine Falls, is the largest waterfall in Europe, located on the Rhine River near Schaffhausen, Switzerland. It is one of the country's most popular natural attractions, offering breathtaking scenery and unforgettable experiences. Rheinfall is a stunning sight, with powerful waters crashing down into the gorge with a thunderous roar, surrounded by magnificent nature. Its impressive size and force make it an unforgettable landmark for all visitors.",
      photo: [RhineFalls, RhineFalls1, RhineFalls2],
      map: RhineFallsMap,
      tag: ["all", "svajciarsko", "priroda"],
    },
    {
      title: "Chateau de Chillon",
      background: ChateaudeChillon,
      description: "Château de Chillon is a stunning castle located on the shores of Lake Geneva near Montreux, Switzerland. It is a fascinating historical landmark that offers a unique glimpse into the past and breathtaking views of the Alps. Château de Chillon provides magnificent panoramas of Lake Geneva and the surrounding mountains, allowing visitors to enjoy spectacular views from its windows and towers, making the visit truly unforgettable.",
      photo: [ChateaudeChillon1, ChateaudeChillon2, ChateaudeChillon3],
      map: ChateaudeChillonMap,
      tag: ["all", "svajciarsko", "pamiatka", "priroda"],
    },
    {
      title: "The Matterhorn",
      background: TheMatterhorn,
      description: "Matterhorn is a majestic peak located in the Alps on the border between Switzerland and Italy, and it is one of the most famous and iconic mountains in the world. It is a fascinating destination for tourists and visitors, offering breathtaking natural scenery, hiking, and unforgettable experiences. Beyond its natural beauty, Matterhorn is also part of the rich cultural heritage of the Alpine region. Visitors can explore traditional mountain villages, local festivals, and cultural events that reflect the life and traditions of the Alpine people.",
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
