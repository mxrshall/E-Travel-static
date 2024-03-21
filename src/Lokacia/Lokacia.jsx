import header1 from "./images/header/header1.jpg";

function Lokacia({list}) {

    return (
      <>
        <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
        <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${header1})`}}></div>
      </>
    )
  }
  
  export default Lokacia