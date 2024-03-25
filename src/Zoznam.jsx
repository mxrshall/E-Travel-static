import Info from "./Stranky/Info"

import header1 from "./images/header/header1.jpg"
import header2 from "./images/header/header2.jpg"
import header3 from "./images/header/header3.jpg"
import header4 from "./images/header/header4.jpg"

import korea from "./images/flags/korea.png"
import svajciarsko from "./images/flags/switzerland.png"
import kanada from "./images/flags/canada.png"
import afrika from "./images/flags/africa.png"

//Južná Kórea
import Seoul from "./images/photos/Seoul/Seoul.jpg"
import Seoul1 from "./images/photos/Seoul/Seoul1.jpg"
import Seoul2 from "./images/photos/Seoul/Seoul2.jpg"
import Seoul3 from "./images/photos/Seoul/Seoul3.jpg"
import BukchonHanokVillage from "./images/photos/BukchonHanokVillage/BukchonHanokVillage.jpg"
import BukchonHanokVillage1 from "./images/photos/BukchonHanokVillage/BukchonHanokVillage1.jpg"
import BukchonHanokVillage2 from "./images/photos/BukchonHanokVillage/BukchonHanokVillage2.webp"
import BukchonHanokVillage3 from "./images/photos/BukchonHanokVillage/BukchonHanokVillage3.png"
import Gyeongju from "./images/photos/Gyeongju/Gyeongju.png"
import Gyeongju1 from "./images/photos/Gyeongju/Gyeongju1.jpg"
import Gyeongju2 from "./images/photos/Gyeongju/Gyeongju2.jpg"
import Gyeongju3 from "./images/photos/Gyeongju/Gyeongju3.jpg"
//Švajčiarsko
import ChateaudeChillon from "./images/photos/ChateaudeChillon.jpg"
import TheMatterhorn from "./images/photos/TheMatterhorn.jpg"
import RhineFalls from "./images/photos/RhineFalls.jpg"
//Kanada
import TorngatMountains from "./images/photos/TorngatMountains.jpg"
import QuebecCity from "./images/photos/QuebecCity.jpg"
import JoffreLakesPark from "./images/photos/JoffreLakesPark.png"
//Afrika
import BlydeRiverCanyon from "./images/photos/BlydeRiverCanyon.jpg"
import VictoriaFalls from "./images/photos/VictoriaFalls.jpg"
import AbuSimbel from "./images/photos/AbuSimbel.jpg"

function Zoznam() {
    const list = [
        {
            id: 0,
            title: "Južná Kórea",
            description: "Vitajte v Južnej Kórei, fascinujúcej krajine, kde sa stretávajú pokroková technológia, bohatá kultúra a úchvatná príroda. Svojou rozmanitosťou a dynamikou ponúka návštevníkom nezabudnuteľný zážitok. Severné a južné pobrežie Kórejského polostrova vytvára pôsobivú panorámu, ktorá láka na prechádzky po plážach, výlety na lodiach a pozorovanie úchvatných západov slnka. Naopak, v centrálnych oblastiach sa nachádzajú úchvatné horské masívy, ktoré ponúkajú príležitosť na turistiku a horolezectvo. Pre milovníkov histórie a kultúry je Kórea pravým rajom. Starobylé chrámy, paláce a múzeá odkazujú na bohatú kultúrnu dedičinu tejto krajiny. Napríklad kórejské paláce, ako Gyeongbokgung a Changdeokgung v Soule, ponúkajú pohľad do histórie kórejských dynastií. Nezabudnuteľným zážitkom je tiež návšteva Demilitarizovanej zóny (DMZ), ktorá rozdeľuje Južnú a Severnú Kóreu.",
            background: header1,
            flag: korea,
        },
        {
            id: 1,
            title: "Švajčiarsko",
            description: "Vitajte v Švajčiarsku, malej krajine s obrovským zázemím prírodného a kultúrneho bohatstva. Rozprestiera sa v srdci Európy medzi majestátnymi Alpami, ktoré ponúkajú nádherné scenérie a nekonečné možnosti dobrodružstiev. Pre milovníkov prírody je Švajčiarsko ako stvorené. Alpské horské vrcholy ponúkajú zimné športy ako lyžovanie, snowboarding a turistiku v zimných mesiacoch a krásne turistické trasy, jazdu na bicykli a pohodlné prechádzky počas leta. Návštevníci môžu objavovať úchvatné jazerá, ako napríklad Ženevské jazero, Bodamské jazero a Jazero Leman, ktoré sú obklopené malebnými mestami a vynikajúcou gastronómiou. Okrem prírodného klenotu Švajčiarska ponúka aj bohatú kultúrnu scénu. Každé mesto má svoju vlastnú osobitosť a históriu. Napríklad Zürich, najväčšie mesto, je známe svojou dynamickou atmosférou, vynikajúcou kaviarňami a obchodnými uličkami, zatiaľ čo Ženeva je domovom mnohých medzinárodných organizácií a ponúka bohatý kultúrny život a luxusné nákupy.",
            background: header2,
            flag: svajciarsko,
        },
        {
            id: 2,
            title: "Kanada",
            description: "Vitajte v Kanade, krajine nekonečných prírodných krás, fascinujúcej kultúry a pohostinných ľudí. Kanada je jeden z najväčších a najrozmanitejších štátov na svete, ktorý ponúka návštevníkom nezabudnuteľné zážitky vo všetkých ročných obdobiach. Pre milovníkov prírody je Kanada ako raj na zemi. Rozsiahle národné parky, ako Banff, Jasper a Yoho v horách Skalnatých, ponúkajú úchvatné scenérie s vrcholkami hôr, ľadovcami a jazerami. Turisti môžu objavovať rozmanitosť divokej fauny a flóry pri pohode peších túr, cyklistiky, kanoe či rybolovu. V zime sa môžete tešiť na svetovo uznáme lyžiarske strediská v Alberta a Britskej Kolumbii, kde nájdete najlepšie podmienky pre lyžovanie, snowboarding a ďalšie zimné aktivity. Kanada je tiež domovom niektorých z najkrajších miest na svete. Toronto, Montreal a Vancouver sú dynamické metropoly s bohatou kultúrnou scénou, múzeami, galériami a vynikajúcimi reštauráciami. Montreal je známy svojou európskou atmosférou, krásnym starým mestom a bohatým kulinárskym životom.",
            background: header3,
            flag: kanada,
        },
        {
            id: 3,
            title: "Afrika",
            description: "Vitajte v Afrike, úchvatnej a rozmanitej krajine, ktorá ponúka nekonečné možnosti dobrodružstva, objavovania a kultúrneho bohatstva. Od rozpálených púští a bujnej džungle po slávne safari a historické pamiatky, Afrika je miesto, kde sa snúbia prírodné krásy s bohatou kultúrnou dedičinou. Prvým, čo návštevníci pocítia pri príchode do Afriky, je intenzita farieb a zvukov. Pestré trhy, živé hudobné vystúpenia a výrazné oblečenie vytvárajú atmosféru plnú energie a života. Každá krajina Afriky má svoju vlastnú osobitosť, čo znamená, že cestovatelia majú možnosť objaviť jedinečné kultúry, jazyky a tradície. Pre dobrodruhov a milovníkov prírody je Afrika bezkonkurenčným raji. Na južnej strane kontinentu sa nachádza slávne safari v oblastiach, ako je Masai Mara v Keni, Serengeti v Tanzánii a Krugerov národný park v Južnej Afrike. Návštevníci môžu sledovať veľké stáda zvierat, ako sú slony, levy, zebry a žirafy, v ich prirodzenom prostredí a vytvoriť si nezabudnuteľné zážitky z divočiny.",
            background: header4,
            flag: afrika,
        },
    ]

    const slider = [
        {
            title: ["Seoul", "Bukchon Hanok Village", "Gyeongju"],
            background: [Seoul, BukchonHanokVillage, Gyeongju],
            description: ["Seoul je pulzujúce mesto, ktoré spája bohatú históriu s modernou urbanitou. Ako hlavné mesto Južnej Kórey, je to dych berúca metropola, ktorá ponúka nespočetné množstvo zážitkov pre návštevníkov z celého sveta. Seoul je domovom bohatej kórejskej kultúry a umenia. Choďte na tradičný kórejsky čaj v jednej z mnohých čajovní alebo si vyskúšajte tradičné kórejské jedlo ako kimchi, bulgogi alebo bibimbap v miestnych reštauráciách. Okrem toho môžete navštíviť nádherné divadlá a galérie, ktoré ponúkajú pohľad na bohaté kultúrne dedičstvo.", "Bukchon Hanok Village je fascinujúca historická štvrť v centre mesta Seoul v Južnej Kórei, ktorá ponúka jedinečný pohľad na tradičnú kórejskú architektúru a životný štýl. Pre turistov a návštevníkov je to miesto plné kultúrneho bohatstva a historických zážitkov. Prechádzka uličkami Bukchon Hanok Village vás vtiahne do minulosti. Môžete vidieť miestnych obyvateľov, ktorí sa stále držia tradičných kórejských zvykov a remesiel. Niektoré z domov dokonca ponúkajú možnosť navštíviť vnútro a spoznať viac o tradičnom kórejskom živote.", "Gyeongju je nádherné historické mesto v Južnej Kórei, ktoré je pokladnicou bohatých kultúrnych a historických pokladov. Pre turistov a návštevníkov je to fascinujúce miesto, kde môžu objavovať staroveké pamiatky, krásne prírodné scenérie a jedinečnú kórejskú kultúru. Okrem svojho historického bohatstva ponúka Gyeongju aj nádherné prírodné scenérie. Navštívte úchvatný útes Toham až ktorému sa dá dostať pomocou lanovky a očarí vás panoramatickými výhľadmi na pobrežie. Ďalej môžete navštíviť národný park Namsan s nádhernou prírodou a historickými pamiatkami."],
            photo: {0: [Seoul1, Seoul2, Seoul3], 1: [BukchonHanokVillage1, BukchonHanokVillage2, BukchonHanokVillage3], 2: [Gyeongju1, Gyeongju2, Gyeongju3] },
        },
        {
            title: ["Chateau de Chillon", "The Matterhorn", "Rhine Falls"],
            background: [ChateaudeChillon, TheMatterhorn, RhineFalls],
            description: ["Château de Chillon je nádherný hrad nachádzajúci sa na brehu Ženevského jazera v blízkosti mesta Montreux vo Švajčiarsku. Pre turistov a návštevníkov je to fascinujúca historická pamiatka, ktorá ponúka jedinečný pohľad do minulosti a nádherné scenérie Alp. Château de Chillon ponúka úchvatné výhľady na Ženevské jazero a okolité Alpy. Turisti si môžu vychutnať krásne panoramatické pohľady z hradných okien a veží, čo robí návštevu tohto hradu ešte nezabudnuteľnejšou.", "Matterhorn je majestátny vrchol nachádzajúci sa v Alpách na pomedzí Švajčiarska a Talianska, a je jedným z najznámejších a najikonickejších vrcholov na svete. Pre turistov a návštevníkov je Matterhorn fascinujúcou destináciou, ktorá ponúka nádherné prírodné scenérie, turistiku a zážitky. Okrem svojej prírodnej krásy je Matterhorn aj súčasťou bohatej kultúrnej dedičstva alpského regiónu. Návštevníci môžu objavovať tradičné horské dediny, miestne festivaly a kultúrne podujatia, ktoré odrážajú život a tradície obyvateľov Alp.", "Rheinfall, známy aj ako Rhine Falls, je najväčší vodopád v Európe nachádzajúci sa na rieke Rýn v blízkosti mesta Schaffhausen v Švajčiarsku. Pre turistov a návštevníkov je Rheinfall jednou z najpopulárnejších prírodných atrakcií v krajine, ktorá ponúka úchvatné scenérie a nezabudnuteľné zážitky. Rheinfall je ohromujúci pohľad na silné vodné toky padajúce zo skaly do priepasti s hukotom a obklopené úchvatnou prírodou. Jeho impozantná veľkosť a síla robia z Rheinfall nezabudnuteľnú pamiatku pre všetkých návštevníkov."],
            photo: {0: [Seoul1, Seoul2, Seoul3], 1: [Seoul1, Seoul2, Seoul3], 2: [Seoul1, Seoul2, Seoul3] },
        },
        {
            title: ["Torngat Mountains", "Quebec City", "Joffre Lakes Park"],
            background: [TorngatMountains, QuebecCity, JoffreLakesPark],
            description: ["Torngat Mountains sú národným parkom v severovýchodnej Kanade, ktorý sa nachádza na Labradorskom poloostrove a na ostrove Newfoundland a Labrador. Tento odľahlý a divoký park je domovom nádherných prírodných scenérií, divokých zvierat a kultúrnej dedičstva pôvodných obyvateľov. Pre turistov a návštevníkov je Torngat Mountains zážitkom, ktorý ponúka pohľad do divočiny a nezabudnuteľné prírodné a kultúrne zážitky. Torngat Mountains ponúkajú úchvatné scenérie vrátane strmých skalnatých útesov, mohutných ľadovcov, jazier, vodopádov a divokých riek. Tento odľahlý park je domovom niektorých najpozoruhodnejších prírodných krás v Kanade, ktoré návštevníkom ponúkajú možnosť objaviť jedinečnú a nedotknutú divočinu.", "Québec City je jedným z najcharakteristickejších a najkrajších historických miest v Severnej Amerike. Nachádza sa na brehu rieky sv. Vavrinca v kanadskej provincii Québec. Pre turistov a návštevníkov je to fascinujúce mesto s bohatou kultúrnou dedičstvom, úchvatnou architektúrou a jedinečnou atmosférou. Okrem svojej bohatej kultúrnej dedičstva ponúka Quebec City aj úchvatné prírodné krásy. Návštevníci môžu prejsť krásnymi parkami, ako je Plains of Abraham, alebo sa vybrať na výlet na blízke ostrovy Île d'Orléans a Île d'Orléans, kde nájdu malebné vidiecke krajiny a vinice.", "Joffre Lakes Provincial Park je nádherný prírodný park v pohorí Coast Mountains v Britskej Kolumbii, Kanada. Pre turistov a návštevníkov je to fascinujúca destinácia, ktorá ponúka úchvatné scenérie, turistiku, rybolov a príležitosti na relaxáciu v prírode. Hlavnou atrakciou Joffre Lakes Park sú trojica jazier s názvami Lower, Middle a Upper Joffre Lake. Tieto jazerá sú známe svojou jasnou tyrkysovou farbou, ktorá je spôsobená jemnými časticami piesku z ľadovca. Návštevníci môžu vychutnať krásne výhľady na hladinu jazier a okolité horské scenérie."],
            photo: {0: [Seoul1, Seoul2, Seoul3], 1: [Seoul1, Seoul2, Seoul3], 2: [Seoul1, Seoul2, Seoul3] },
        },
        {
            title: ["Blyde River Canyon", "Victoria Falls", "Abu Simbel"],
            background: [BlydeRiverCanyon, VictoriaFalls, AbuSimbel],
            description: ["Blyde River Canyon je jedným z najkrajších prírodných útvarov v Južnej Afrike a jedným z najväčších kaňonov na svete. Pre turistov a návštevníkov je to fascinujúce miesto, ktoré ponúka úchvatné scenérie, prírodnú krásu a množstvo zážitkov. Blyde River Canyon je ideálnym miestom pre milovníkov aktívneho odpočinku v prírode. Turisti si môžu vychutnať turistiku po rôznych chodníkoch a stezkách, ktoré vedú okolo kaňonu a ponúkajú príležitosti na pozorovanie divokej fauny a flóry. Ďalej môžu návštevníci využiť možnosti rybolovu, raftingu na rieke Blyde River a horských bicyklových výletov.", "Victoria Falls, známe aj ako Dymy Vodopády, sú jednými z najimpresívnejších prírodných divov na svete. Tieto obrovské vodopády sa nachádzajú na rieke Zambezi na hranici medzi Zambiou a Zimbabwe. Pre turistov a návštevníkov sú Victoria Falls fascinujúcou destináciou, ktorá ponúka úchvatné scenérie, dobrodružstvo a jedinečné zážitky. Pre dobrodružne založených návštevníkov ponúkajú Victoria Falls množstvo adrenalínových aktivít. Medzi najobľúbenejšie patria zipline cez kaňon, bungee jumping zo zábradlia mosta Victoria Falls Bridge a plavba na člne po divokej rieke Zambezi.", "Abu Simbel je archeologická lokalita v Egypte, známa predovšetkým svojimi monumentálnymi skalnými chrámami, ktoré sú považované za jedny z najznamenitejších pamiatok starovekého Egypta. Pre turistov a návštevníkov je Abu Simbel fascinujúcou destináciou, ktorá ponúka pohľad do bohatých dejín egyptského kráľovstva a impozantnú architektúru. Hlavnou atrakciou Abu Simbel sú dva veľkolepé chrámy vytesané do skál pri brehoch jazera Nasser. Chrám boha Rá a chrám boha Ptah sú oba vysoké až 30 metrov a zdobené obrovskými sochami faraóna Ramesesa II., bohov a faraónskymi postavami."],
            photo: {0: [Seoul1, Seoul2, Seoul3], 1: [Seoul1, Seoul2, Seoul3], 2: [Seoul1, Seoul2, Seoul3] },
        },
    ];

    return (
        <>

        </>
    )
  }
  
  export default Zoznam