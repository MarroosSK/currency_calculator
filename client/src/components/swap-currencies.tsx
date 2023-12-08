import { useContext } from "react";
import { ArrowLeftRight } from "lucide-react";
import { CurrencyCalculatorContext } from "../context/currency-calculator-context";

const SwapCurrencies = () => {
  const { swapCurrencies } = useContext(CurrencyCalculatorContext);

  return (
    <ArrowLeftRight
      data-testid="swap-currencies"
      onClick={() => swapCurrencies()}
      className="md:mb-2 mt-3 md:mt-0 text-center text-slate-500 hover:text-[#0801FF] cursor-pointer transition-all ease-in-out"
      size={18}
    />
  );
};

export default SwapCurrencies;
