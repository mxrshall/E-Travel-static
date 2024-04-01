import React, { useState } from "react";

function Vyhladavanie({ sendData }) {
    const [selectedNames, setSelectedNames] = useState([]);

    const handleCheckboxChange = (e) => {
        const name = e.target.name;
        if (e.target.checked) {
            setSelectedNames([...selectedNames, name]); //pridat
        } else {
            setSelectedNames(selectedNames.filter(item => item !== name)); //odstranit
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(selectedNames);
    };

    return (
        <form onSubmit={handleSubmit} className="w-1/3 flex flex-wrap mt-10">
            <div className="my-2">
                <input name="korea" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2 ml-2" />
                <label className="text-base text-white font-normal font-mont">Južná Kórea</label>
            </div>
            <div className="my-2">
                <input name="svajciarsko" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2 ml-2" />
                <label className="text-base text-white font-normal font-mont">Švajčiarsko</label>
            </div>
            <div className="my-2">
                <input name="kanada" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2 ml-2" />
                <label className="text-base text-white font-normal font-mont" >Kanada</label>
            </div>
            <div className="my-2">
                <input name="afrika" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2 ml-2" />
                <label className="text-base text-white font-normal font-mont" >Afrika</label>
            </div>
            <div className="my-2">
                <input name="tropicka" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2 ml-2" />
                <label className="text-base text-white font-normal font-mont" >Tropické</label>
            </div>
            <div className="my-2">
                <input name="studena" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2 ml-2" />
                <label className="text-base text-white font-normal font-mont" >Studené</label>
            </div>
            <div className="my-2">
                <input name="priroda" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2 ml-2" />
                <label className="text-base text-white font-normal font-mont" >Príroda</label>
            </div>
            <div className="my-2">
                <input name="pamiatka" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2 ml-2" />
                <label className="text-base text-white font-normal font-mont" >Pamiatky</label>
            </div>
            <div className="my-2">
                <input name="mesto" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2 ml-2" />
                <label className="text-base text-white font-normal font-mont" >Mesto</label>
            </div>
            <input type="submit" value="Vyhľadať" className="text-base text-white font-normal font-mont ml-5 my-2" />
        </form>
    );
}

export default Vyhladavanie;
