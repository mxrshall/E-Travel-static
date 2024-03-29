import Button from "../Button"

function HomepageButton({link1, link2, link3}) {

    return (
        <div className="w-full flex pt-[3%]">
            <Button text="O nás" link={link1}/>
            <Button text="Prejsť na katalóg" link={link2}/>
            <Button text="Zobraziť lokácie" link={link3}/>
        </div>
    )
  }
  
  export default HomepageButton