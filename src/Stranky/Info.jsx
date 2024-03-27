import Navbar from "../Navbar/Navbar"
import Lokacia from "../InfoComponents/Lokacia"

function Info({slider, list}) {

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
                    tag={item.tag}
                    slider={slider}
                />
            ))}
        </>
    )
  }
  
  export default Info