import { useState } from "react";

function Vyhladavanie() {
    const [koreaChecked, setkoreaChecked] = useState(false);

    const handleChange = () => {
        setkoreaChecked(!koreaChecked);
    };

    return (
        <form>
            <input name="korea" type="checkbox" onChange={handleChange}/>
            <label>Južná Kórea</label>
            <input name="svajciarsko" type="checkbox"/>
            <label>Švajčiarsko</label>
            <input name="kanada" type="checkbox"/>
            <label>Kanada</label>
            <input name="afrika" type="checkbox"/>
            <label>Afrika</label>
            <input name="tropicka" type="checkbox"/>
            <label>Tropické</label>
            <input name="studena" type="checkbox"/>
            <label>Studené</label>
            <input name="priroda" type="checkbox"/>
            <label>Príroda</label>
            <input name="pamiatka" type="checkbox"/>
            <label>Pamiatky</label>
            <input name="mesto" type="checkbox"/>
            <label>Mesto</label>
        </form>
    )
  }
  
  export default Vyhladavanie
