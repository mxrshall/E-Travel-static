import Button from "../Button"

function OnasButton({link1, link2}) {

    return (
        <div className="w-full flex pt-[3%]">
            <Button text="Prejsť na katalóg" link={link1}/>
            <Button text="Zobraziť lokácie" link={link2}/>
        </div>
    )
  }
  
  export default OnasButton