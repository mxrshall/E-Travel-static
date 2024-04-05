import React from 'react';

function OverlayFotka({ fotka, sendData }) {

  const handleClick = () => {
    sendData(false);
  };

  return (
    <div className="w-full h-full bg-black bg-opacity-80 fixed z-50 flex justify-center items-center" onClick={handleClick}>
      <img className="w-1/2 bg-contain bg-no-repeat bg-center" src={fotka} alt="Fotka" />
    </div>
  );
}

export default OverlayFotka;
