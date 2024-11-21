import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <footer className="w-full h-10 flex px-10">
        <div className="w-1/6"/>
        <div className="w-4/6 h-full flex justify-center items-center text-white font-light">
            <h1>
                ©2025 Martin Krajčovič All rights reserved.
            </h1>
        </div>
        <div className="w-1/6 h-full flex justify-end items-center">
            <CiMail color="white" size={24} />
        </div>
    </footer>
  );
}

export default Footer;
