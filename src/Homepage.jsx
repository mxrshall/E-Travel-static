import header2 from "./images/header/header2.jpg"

function Homepage() {

    return (
        <>
            <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
            <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${header2})`}}></div>
        </>
    )
  }
  
  export default Homepage