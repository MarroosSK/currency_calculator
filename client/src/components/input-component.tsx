import { useContext } from "react";

import { CurrencyCalculatorContext } from "../context/currency-calculator-context";

const InputComponent = () => {
  const {
    inputAmount,
    setInputAmount,
    optionFrom,
    setOptionFrom,
    optionTo,
    rateTo,
    calculatorCurrData,
  } = useContext(CurrencyCalculatorContext);

  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor="suma" className="text-slate-500">
        Suma
      </label>
      <div className="flex items-center border p-2 rounded-md">
        <input
          type="number"
          placeholder="Suma"
          name="suma"
          min={1}
          value={inputAmount}
          onChange={(e) => setInputAmount(parseFloat(e.target.value))}
          className="bg-white text-[#0F100E] outline-none"
        />
        <span
          className={`mr-2 rounded-full w-4 currency-flag currency-flag-${optionFrom.toLowerCase()}`}
        />
        <select
          name="optionFrom"
          value={optionFrom}
          onChange={(e) => setOptionFrom(e.target.value)}
          className="text-[#233E0A] font-bold outline-none"
        >
          {calculatorCurrData &&
            calculatorCurrData.Cube.map((curr, index) => (
              <option key={index} value={curr.currency}>
                {curr.currency}
              </option>
            ))}
        </select>
      </div>
      <div className="mt-4 hidden md:flex ">
        <p className="flex-1 font-bold">
          1.0000 {optionFrom} ={" "}
          <span className="text-[#0801FF] font-bold">{rateTo}</span> {optionTo}
        </p>
      </div>
    </div>
  );
};

export default InputComponent;
