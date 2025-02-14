import { useState, useEffect } from "react";
import Logo from "./Logo"
import Navigation from "./Navigation"
import { useNavigate, useLocation } from "react-router-dom";
import Banner from "../UniversalComponents/Banner";

function Navbar({ onClick, signal }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExit, setIsExit] = useState(false);

  const currentPath = location.pathname.split("/").pop();

  useEffect(() => {
    if (signal) {
      setIsExit(true);
      setTimeout(() => {
        navigate(`/${data}`);
      }, 0);
    }
  }, [signal]);

  const handleClick = (data) => {
    if (currentPath != data) {
      onClick();
      setIsExit(true);
      setTimeout(() => {
        navigate(`/${data}`);
        window.scrollTo(0, 0);
      }, 0);
    }
  };

    return (
      <>
        <div 
          className="w-full h-[12vh] fixed flex z-50"
        >
          <Logo onClick={handleClick} />
          <Navigation onClick={handleClick} />
        </div>
        <Banner isExit={isExit} />
      </>
    )
  }
  
  export default Navbar
  