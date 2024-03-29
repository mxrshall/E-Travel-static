import { Link } from "react-router-dom";

function Navigacia() {

    return (
      <div className="w-11/12 flex justify-end items-center text-base text-white font-bold font-mont pr-12">
        <Link to="/onas" className="mx-6">O nás</Link>
        <Link to="/info" className="mx-6">Lokácie</Link>
        <Link to="/katalog" className="mx-6">Katalóg</Link>
        <p className="mx-6">Galéria</p>
      </div>
    )
  }
  
  export default Navigacia