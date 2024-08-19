import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const Output = () => {
  const { results, handleReset } = useContext(AppContext);
  return (
    <article className="w-full bg-verydarkcyan p-5 pt-8   rounded-xl flex flex-col justify-between items-center gap-[1.2em]">
      <div className="w-full font-semibold flex flex-col gap-[1.2em]">
        <section className="flex items-center justify-between">
          <div>
            <p className="text-[1rem] md:text-[1.2rem] text-verylightcyan">
              Tip Amount
            </p>
            <p className="text-[0.6rem] md:text-[0.8rem] text-grayishcyan">
              / person
            </p>
          </div>
          <p className="text-[2rem] md:text-[2.5rem] text-tealcyan">
            ${results.tipAmount}
          </p>
        </section>
        <section className="flex items-center justify-between">
          <div>
            <p className="text-[1rem] md:text-[1.2rem] text-verylightcyan">
              Total
            </p>
            <p className="text-[0.6rem] md:text-[0.8rem] text-grayishcyan">
              / person
            </p>
          </div>
          <p className="text-[2rem] md:text-[2.5rem] text-tealcyan">
            ${results.total}
          </p>
        </section>
      </div>
      <button
        className="bg-tealcyan text-verydarkcyan w-full rounded-lg p-2 text-[1.2rem] font-semibold  hover:bg-lighttealcyan duration-200"
        onClick={handleReset}
      >
        RESET
      </button>
    </article>
  );
};

export default Output;
