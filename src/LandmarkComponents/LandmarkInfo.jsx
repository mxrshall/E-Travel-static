import LandmarkPhoto from "./LandmarkPhoto"

function LandInfo({ description, photo, sendFotka, onClick }) {
    const veta = description.split('. ');

    const handleClick = () => {
        onClick("katalog");
    };

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
                <button onClick={handleClick} className="font-mont text-base font-medium px-2 text-white border-2 border-white hover:bg-white hover:text-black">Prejsť na katalóg</button>
            </div>
            <div className="w-5/12 h-[100vh] p-16 flex flex-col justify-center items-center">
                {photo.map((item) => (
                    <LandmarkPhoto
                        key={item}
                        background={item}
                        sendFotka={sendFotka}
                    />
                ))}
            </div>
        </div>
    )
  }
  
  export default LandInfo