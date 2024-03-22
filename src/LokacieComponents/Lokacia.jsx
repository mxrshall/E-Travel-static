import LokaciaButton from "./LokaciaButton";
import LokaciaDescription from "./LokaciaDescription";
import LokaciaTitle from "./LokaciaTitle";

function Lokacia({title, description, background}) {

    return (
      <>
        <div className="w-1/2 h-[100vh] pt-[12%] pl-[5%] flex flex-col absolute z-10">
          <LokaciaTitle title={title}/>
          <LokaciaDescription description={description}/>
          <LokaciaButton/>
        </div>
        <div className="w-full h-[100vh] bg-black opacity-60 absolute"></div>
        <div className="w-full h-[100vh] bg-cover bg-center" style={{ backgroundImage: `url(${background})`}}></div>
      </>
    )
  }
  
  export default Lokacia