import Button from "../Button"
import PamiatkaFotka from "./PamiatkaFotka"

import AbuSimbel from "../images/photos/AbuSimbel.jpg"

function PamiatkaInfo({ description }) {
    const veta = description.split('. ');

    const odstavec = [];
    for (let i = 0; i < veta.length; i += 3) {
        odstavec.push(veta.slice(i, i + 3).join('. '));
    }

    return (
        <div className="w-full h-[100vh] flex bg-black absolute z-20">
            <div className="w-7/12 h-[100vh] pl-16 py-16">
                {odstavec.map((odstavec, index) => (
                    <span key={index} className="text-base text-white font-normal font-mont">
                        {odstavec}
                        <br/>
                        <br/>
                    </span>
                ))}
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