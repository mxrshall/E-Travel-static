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
        <form onSubmit={handleSubmit}>
            <input name="korea" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
            <label className="text-base text-white font-normal font-mont">Južná Kórea</label>
            <input name="svajciarsko" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
            <label className="text-base text-white font-normal font-mont">Švajčiarsko</label>
            <input name="kanada" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
            <label className="text-base text-white font-normal font-mont" >Kanada</label>
            <input name="afrika" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
            <label className="text-base text-white font-normal font-mont" >Afrika</label>
            <input name="tropicka" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
            <label className="text-base text-white font-normal font-mont" >Tropické</label>
            <input name="studena" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
            <label className="text-base text-white font-normal font-mont" >Studené</label>
            <input name="priroda" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
            <label className="text-base text-white font-normal font-mont" >Príroda</label>
            <input name="pamiatka" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
            <label className="text-base text-white font-normal font-mont" >Pamiatky</label>
            <input name="mesto" type="checkbox" onChange={handleCheckboxChange} className="before:content[''] peer relative h-3 w-3 cursor-pointer appearance-none border-2 border-white transition-all checked:border-white checked:bg-white mr-2" />
            <label className="text-base text-white font-normal font-mont" >Mesto</label>
            <input type="submit" value="Submit" className="text-base text-white font-normal font-mont" />
        </form>
    );
}

export default Vyhladavanie;
