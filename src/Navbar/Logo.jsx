import logo from "../../public/images/logo.png";

function Logo({ onClick }) {

  const handleClick = () => {
    onClick("");
  };

  return (
    <div className="w-1/12 flex items-center">
        <img src={logo} className="w-[4rem] ml-5" onClick={handleClick}/>
    </div>
  )
}
  
export default Logo