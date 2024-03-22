import Button from "../Button"

function HomepageButton() {

    return (
        <div className="w-full flex pt-[3%]">
            <Button text="O nás"/>
            <Button text="Prejsť na katalóg"/>
            <Button text="Zobraziť lokácie" link="lokacie"/>
        </div>
    )
  }
  
  export default HomepageButton