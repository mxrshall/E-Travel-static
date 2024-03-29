import Navbar from "../Navbar/Navbar";

function Katalog({ slider }) {

    return (
        <>
            <Navbar />
            <div className="w-full h-[100vh] bg-black absolute">
                <div className="w-full h-1/4 flex justify-center items-center bg-orange-700">
                    <p>Test</p>
                </div>
                <div className="bg-black flex flex-wrap">
                    
                </div>
            </div>
        </>
    );
}

export default Katalog;
