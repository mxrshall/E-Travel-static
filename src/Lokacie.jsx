import Lokacia from "./Lokacia/Lokacia"
import Navbar from "./Navbar/Navbar"

import header1 from "./images/header/header1.jpg"
import header2 from "./images/header/header2.jpg"
import header3 from "./images/header/header3.jpg"
import header4 from "./images/header/header4.jpg"


function Lokacie() {
    const list = [
        {
            id: 1,
            title: "Dobrodružstvo v Južnej Kórei",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            background: header1,
        },
        {
            id: 2,
            title: "Dobrodružstvo v Švajčiarsku",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            background: header2,
        },
        {
            id: 3,
            title: "Dobrodružstvo v Kanade",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            background: header3,
        },
        {
            id: 4,
            title: "Dobrodružstvo v Afrike",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
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