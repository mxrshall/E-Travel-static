function Navigation({ onClick }) {
  
  const handleClick = (data) => {
    onClick(data);
  };

  return (
      <div className="w-11/12 flex justify-end items-center text-base text-white font-bold font-mont pr-12">
        <p className="mx-6 cursor-pointer" onClick={() => handleClick("katalog")}>
          Katalóg
        </p>
        <p className="mx-6 cursor-pointer" onClick={() => handleClick("galeria")}>
          Galéria
        </p>
      </div>
  )
}
  
export default Navigation