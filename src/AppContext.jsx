import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({
  bill: 0,
  tip: 0,
  person: 0,
  customTip: 0,
  handleBillInput: () => {},
  results: {},
});

export const AppContextProvider = ({ children }) => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [person, setPerson] = useState("1");
  const [results, setResults] = useState({
    tipAmount: "0.00",
    total: "0.00",
  });

  const checkInput = (e) => {
    if (isNaN(e)) {
      return false;
    } else {
      return true;
    }
  };

  const handleBillInput = (e) => {
    let val = e.target.value;
    if (checkInput(val)) {
      setBill(val);
    }
  };
  const handlePersonInput = (e) => {
    let val = e.target.value;
    if (checkInput(val)) {
      val > 0 ? setPerson(Math.floor(val)) : setPerson(val);
    }
  };
  const handleTipInput = (e, type = "") => {
    if (checkInput(e)) {
      if (type === "btn") {
        setTip(e);
        setCustomTip("");
      } else {
        setCustomTip(e);
        setTip("");
      }
    }
  };

  const handleCalculation = () => {
    let billVal = Number(bill.trim());
    let personVal = Number(person);
    let tipVal = Number(tip || customTip);
    let n1 = (tipVal / 100) * billVal;
    let n2 = billVal + n1;
    if (personVal > 0) {
      setResults({
        tipAmount: parseFloat(n1 / personVal).toFixed(2),
        total: parseFloat(n2 / personVal).toFixed(2),
      });
    } else {
      setResults({
        tipAmount: "0.00",
        total: "0.00",
      });
    }
  };

  const handleReset = () => {
    setBill("");
    setPerson(1);
    setTip("");
    setCustomTip("");
    setResults({ tipAmount: "0.00", total: "0.00" });
  };

  useEffect(() => {
    handleCalculation();
  }, [bill, tip, customTip, person]);

  return (
    <AppContext.Provider
      value={{
        bill,
        tip,
        person,
        handleBillInput,
        handlePersonInput,
        handleTipInput,
        customTip,
        results,
        handleReset,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
