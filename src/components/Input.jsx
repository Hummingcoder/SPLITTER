import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

const Input = () => {
  const [tipPersentage, setTipPersentage] = useState([5, 10, 15, 25, 50]);

  const [tpi, setTpi] = useState(null);

  const handleTipValue = (val, i, type) => {
    setTpi(i);
    handleTipInput(val, type);
  };

  const {
    bill,
    customTip,
    person,
    handleBillInput,
    handlePersonInput,
    handleTipInput,
  } = useContext(AppContext);

  return (
    <article className="font-semibold">
      <section className="w-full mb-10">
        <p className="text-[0.9rem] md:text-[1rem] mb-2 text-darkgrayishcyan ">
          Bill
        </p>
        <div className=" relative ">
          <img
            src="./images/icon-dollar.svg"
            alt="icon-dollar"
            className="h-fit absolute top-[50%] left-[20px] translate-y-[-50%]"
          />
          <input
            className="bg-verylightcyan w-full border-2 border-transparent outline-none focus:border-tealcyan text-verydarkcyan placeholder:text-grayishcyan rounded-lg text-right md:text-[1.5rem] text-[1.2rem] px-[20px] py-[8px]"
            type="text"
            placeholder="00.0"
            value={bill}
            onChange={(e) => handleBillInput(e)}
          />
        </div>
      </section>
      <section className="w-full mb-10">
        <p className="text-[0.9rem] md:text-[1rem] mb-4 text-darkgrayishcyan">
          Select Tip %
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3">
          {tipPersentage.map((amount, i) => (
            <button
              value={amount}
              onClick={() => handleTipValue(amount, i, "btn")}
              className={`${
                tpi === i
                  ? "bg-tealcyan text-verydarkcyan"
                  : "text-verylightcyan bg-verydarkcyan"
              } w-full p-2 text-[1.2rem] rounded-lg duration-200 `}
              key={amount}
            >
              {amount}%
            </button>
          ))}
          <input
            type="text"
            placeholder="Custom"
            className={`${
              tpi === "custom"
                ? "bg-verylightcyan text-verydarkcyan"
                : "text-verydarkcyan bg-verylightcyan"
            } w-full p-2 rounded-lg text-[1.2rem] text-right placeholder:text-grayishcyan placeholder:text-center  border-2 border-verylightcyan outline-none focus:border-tealcyan duration-200`}
            value={customTip}
            onChange={(e) => {
              let val = e.target.value;
              handleTipValue(val, "custom");
            }}
          />
        </div>
      </section>
      <section className="w-full">
        <div className="flex items-center justify-between w-full">
          <p className="text-[0.9rem] md:text-[1rem] mb-2 text-darkgrayishcyan">
            Number of People
          </p>
          {person <= 0 && (
            <p className="text-[0.6rem] md:text-[0.8rem] mb-2 text-red-500">
              Can't be Zero
            </p>
          )}
        </div>
        <div className=" relative ">
          <img
            src="./images/icon-person.svg"
            alt="icon-dollar"
            className="h-fit absolute top-[50%] left-[20px] translate-y-[-50%]"
          />
          <input
            className={`bg-verylightcyan w-full border-2 border-transparent outline-none focus:border-tealcyan text-verydarkcyan rounded-lg placeholder:text-grayishcyan text-right md:text-[1.5rem] text-[1.2rem] px-[20px] py-[8px] ${
              person <= 0 ? "border-red-500" : "border-transparent"
            }`}
            type="text"
            placeholder="0"
            value={person}
            onChange={(e) => handlePersonInput(e)}
          />
        </div>
      </section>
    </article>
  );
};

export default Input;
