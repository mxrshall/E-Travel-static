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
            <input name="korea" type="checkbox" onChange={handleCheckboxChange} />
            <label>Južná Kórea</label>
            <input name="svajciarsko" type="checkbox" onChange={handleCheckboxChange} />
            <label>Švajčiarsko</label>
            <input name="kanada" type="checkbox" onChange={handleCheckboxChange} />
            <label>Kanada</label>
            <input name="afrika" type="checkbox" onChange={handleCheckboxChange} />
            <label>Afrika</label>
            <input name="tropicka" type="checkbox" onChange={handleCheckboxChange} />
            <label>Tropické</label>
            <input name="studena" type="checkbox" onChange={handleCheckboxChange} />
            <label>Studené</label>
            <input name="priroda" type="checkbox" onChange={handleCheckboxChange} />
            <label>Príroda</label>
            <input name="pamiatka" type="checkbox" onChange={handleCheckboxChange} />
            <label>Pamiatky</label>
            <input name="mesto" type="checkbox" onChange={handleCheckboxChange} />
            <label>Mesto</label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Vyhladavanie;
