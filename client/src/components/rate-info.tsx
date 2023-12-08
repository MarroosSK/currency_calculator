import { useContext } from "react";
import { CurrencyCalculatorContext } from "../context/currency-calculator-context";

const RateInfo = () => {
  const { optionFrom, optionTo, rateTo } = useContext(
    CurrencyCalculatorContext
  );

  return (
    <div className="mt-4 md:hidden ">
      <p className="flex-1 font-bold">
        1.0000 {optionFrom} ={" "}
        <span className="text-[#0801FF] font-bold">{rateTo}</span> {optionTo}
      </p>
    </div>
  );
};

export default RateInfo;
