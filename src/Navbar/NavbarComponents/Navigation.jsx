import { Link } from "react-router-dom";

function Navigation() {

    return (
      <div className="w-11/12 flex justify-end items-center text-base text-white font-bold font-mont pr-12">
        <Link to="/katalog" className="mx-6">Katalóg</Link>
        <Link to="/galeria" className="mx-6">Galéria</Link>
      </div>
    )
  }
  
  export default Navigation