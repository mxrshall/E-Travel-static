import Navbar from "../Navbar/Navbar"
import Lokacia from "../InfoComponents/Lokacia"

import header1 from "../images/header/header1.jpg"
import header2 from "../images/header/header2.jpg"
import header3 from "../images/header/header3.jpg"
import header4 from "../images/header/header4.jpg"

import korea from "../images/flags/korea.png"
import svajciarsko from "../images/flags/switzerland.png"
import kanada from "../images/flags/canada.png"
import afrika from "../images/flags/africa.png"

//Južná Kórea
import Seoul from "../images/photos/Seoul.jpg"
import BukchonHanokVillage from "../images/photos/BukchonHanokVillage.jpg"
import Gyeongju from "../images/photos/Gyeongju.png"
//Švajčiarsko
import ChateaudeChillon from "../images/photos/ChateaudeChillon.jpg"
import TheMatterhorn from "../images/photos/TheMatterhorn.jpg"
import RhineFalls from "../images/photos/RhineFalls.jpg"
//Kanada
import TorngatMountains from "../images/photos/TorngatMountains.jpg"
import QuebecCity from "../images/photos/QuebecCity.jpg"
import JoffreLakesPark from "../images/photos/JoffreLakesPark.png"
//Afrika
import BlydeRiverCanyon from "../images/photos/BlydeRiverCanyon.jpg"
import VictoriaFalls from "../images/photos/VictoriaFalls.jpg"
import AbuSimbel from "../images/photos/AbuSimbel.jpg"

function Info() {
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
        },
        {
            title: ["Chateau de Chillon", "The Matterhorn", "Rhine Falls"],
            background: [ChateaudeChillon, TheMatterhorn, RhineFalls],
        },
        {
            title: ["Torngat Mountains", "Quebec City", "Joffre Lakes Park"],
            background: [TorngatMountains, QuebecCity, JoffreLakesPark],
        },
        {
            title: ["Blyde River Canyon", "Victoria Falls", "Abu Simbel"],
            background: [BlydeRiverCanyon, VictoriaFalls, AbuSimbel],
        },
    ];

    return (
        <>
            <Navbar/>
            {list.map((item) => (
                <Lokacia
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    background={item.background}
                    flag={item.flag}
                    slider={slider[item.id]}
                />
            ))}
        </>
    )
  }
  
  export default Info