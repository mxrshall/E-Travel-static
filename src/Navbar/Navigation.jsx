function Navigation({ onClick }) {
  
  const handleClick = (data) => {
    onClick(data);
  };

  return (
      <div className="w-1/2 flex justify-end items-center text-base text-white font-bold font-mont pr-5 md:w-11/12 md:pr-12">
        <p className="mx-3 cursor-pointer md:mx-6" onClick={() => handleClick("katalog")}>
          Katalóg
        </p>
        <p className="mx-3 cursor-pointer md:mx-6" onClick={() => handleClick("galeria")}>
          Galéria
        </p>
      </div>
  )
}
  
export default Navigation