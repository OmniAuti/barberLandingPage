import { useState, useRef } from "react";

const Payments = () => {
  const [zellePopUp, setZellePopUp] = useState(false);
  const [copied, setCopied] = useState(false);
  const emailCopy = useRef(null);

  const handlePopUp = () => {
    setZellePopUp(!zellePopUp);
  };

  const handleCopy = () => {
    emailCopy.current.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => {
        setZellePopUp(false)
        setCopied(false);
    }, 2500)
  };

  return (
    <div className="relative group payments overflow-hidden border-solid border-2 w-auto md:w-full mx-2 text-center h-full flex flex-col items-center justify-around shadow hover:shadow-lg hover:-translate-y-0.5 transition-shadow">
      <h3 className="group-hover:underline underline-offset-1 transition-all font-semibold my-5">
        Pay For Your Haircut:
      </h3>
      <a
        className="flex justify-center my-10"
        href="https://account.venmo.com/u/the_hoppy_barber"
        target="_blank"
      >
        <img
          className="w-1/3 transition-all hover:w-2/5"
          alt="Venmo Logo"
          src="./imgs/Venmo_Logo.png"
        />
      </a>
      <img
        onClick={() => handlePopUp()}
        className="cursor-pointer w-1/3 transition-all hover:w-2/5 mb-5"
        alt="Zelle Logo"
        src="./imgs/Zelle_Logo.png"
      />
      <div
        onClick={() => handleCopy()}
        className={
          zellePopUp
            ? "absolute w-3/4 shadow-md transition bottom-5 border-solid border-2 p-2 rounded-md border-gray-900 bg-white h-2/3 flex flex-col items-center justify-center cursor-pointer"
            : "absolute w-3/4 h-2/3 bg-white bottom-0 transition translate-y-96 back border-solid border-2 p-2 rounded-md flex flex-col items-center justify-center border-gray-900"
        }
      >
          {copied && <p>Copied!</p>}
        <input
          ref={emailCopy}
          readOnly
          className="w-full text-center my-5 outline-offset-4 outline-blue-500"
          value="Bo.culkeen.89@gmail.com"
        />
        <img className="w-10 h-10" src="./imgs/copy.svg" />
      </div>
    </div>
  );
};

export default Payments;
