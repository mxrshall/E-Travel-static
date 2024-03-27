import React, { useState } from "react";

function Vyhladavanie({ sendData }) {
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        // Update checked state for the checkbox
        setCheckedItems({ ...checkedItems, [name]: checked });
        // Pass only the name of the checkbox that is checked
        if (checked) {
            sendData(name);
        }
    };

    return (
        <form>
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
        </form>
    );
}

export default Vyhladavanie;
