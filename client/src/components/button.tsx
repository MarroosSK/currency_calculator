import { useContext } from "react";
import { CurrencyCalculatorContext } from "../context/currency-calculator-context";

const CalculatorButton = () => {
  const { convertCurrency } = useContext(CurrencyCalculatorContext);

  return (
    <div>
      <button
        className="mt-2 bg-[#173261] hover:bg-[#0801FF] text-white  rounded-2xl p-1 w-40 text-center transition-colors ease-in-out"
        type="submit"
        onClick={() => convertCurrency()}
      >
        Prepočítať
      </button>
    </div>
  );
};

export default CalculatorButton;
