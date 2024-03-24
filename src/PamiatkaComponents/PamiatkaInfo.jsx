import Button from "../Button"
import PamiatkaFotka from "./PamiatkaFotka"

import AbuSimbel from "../images/photos/AbuSimbel.jpg"

function PamiatkaInfo() {

    return (
        <div className="w-full h-[100vh] flex bg-black absolute z-20">
            <div className="w-7/12 h-[100vh] pl-16 py-16 bg-orange-700">
                <div className="w-full h-[80vh] bg-lime-700"></div>
                <Button text="Prejsť na katalóg"/>
            </div>
            <div className="w-5/12 h-[100vh] p-16 flex flex-col justify-center items-center">
                <PamiatkaFotka background={AbuSimbel}/>
                <PamiatkaFotka background={AbuSimbel}/>
                <PamiatkaFotka background={AbuSimbel}/>
            </div>
        </div>
    )
  }
  
  export default PamiatkaInfo