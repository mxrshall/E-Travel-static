import Button from "../Button"

function InfoButton({link}) {

    return (
        <div className="w-full flex pt-[3%]">
            <Button text="Prejsť na katalóg" link={link}/>
        </div>
    )
  }
  
  export default InfoButton