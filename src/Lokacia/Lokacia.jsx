import LokaciaDescription from "./LokaciaComponents/LokaciaDescription";
import LokaciaTitle from "./LokaciaComponents/LokaciaTitle";

function Lokacia({title, description, background}) {

    return (
      <>
        <div className="w-9/12 h-[100vh] pt-[10%] pl-[5%] flex flex-col absolute z-10">
          <LokaciaTitle title={title}/>
          <LokaciaDescription description={description}/>
        </div>
        <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
        <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${background})`}}></div>
      </>
    )
  }
  
  export default Lokacia