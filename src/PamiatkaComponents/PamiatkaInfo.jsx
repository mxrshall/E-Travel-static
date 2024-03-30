import Button from "../Button"
import PamiatkaFotka from "./PamiatkaFotka"

function PamiatkaInfo({ description, photo }) {
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
                <Button text="Prejsť na katalóg" link="katalog"/>
            </div>
            <div className="w-5/12 h-[100vh] p-16 flex flex-col justify-center items-center">
                {photo.map((item) => (
                    <PamiatkaFotka
                        key={item}
                        background={item}
                    />
                ))}
            </div>
        </div>
    )
  }
  
  export default PamiatkaInfo