import { useContext } from "react";
import { CurrencyCalculatorContext } from "../context/currency-calculator-context";
import CalculatorButton from "./button";

const ResultComponent = () => {
  const { optionTo, setOptionTo, inputResult, calculatorCurrData } = useContext(
    CurrencyCalculatorContext
  );

  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor="prepočet" className="text-slate-500">
        Prepočet
      </label>
      <div className="flex items-center border  p-2 rounded-md">
        <input
          type="text"
          placeholder="Prepočet"
          name="prepočet"
          value={inputResult}
          disabled
          className="bg-white text-[#0F100E] outline-none"
        />
        <span
          className={`mr-2 rounded-full w-4 currency-flag currency-flag-${optionTo.toLowerCase()}`}
        />
        <select
          name="optionTo"
          value={optionTo}
          onChange={(e) => setOptionTo(e.target.value)}
          className="text-[#233E0A] font-bold outline-none"
        >
          {calculatorCurrData &&
            calculatorCurrData.Cube.reverse().map((curr, index) => (
              <option key={index} value={curr.currency}>
                {curr.currency}
              </option>
            ))}
        </select>
      </div>
      <CalculatorButton />
    </div>
  );
};

export default ResultComponent;
