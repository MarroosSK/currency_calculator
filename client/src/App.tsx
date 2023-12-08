import { useContext } from "react";
import Heading from "./components/heading";
import CurrencyCalculator from "./pages/currency-calculator";
import "currency-flags/dist/currency-flags.min.css";
import { CurrencyCalculatorContext } from "./context/currency-calculator-context";
//spinner
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  const { isLoading } = useContext(CurrencyCalculatorContext);
  return (
    <main className="h-screen flex justify-center">
      {/* main */}
      <div className=" flex flex-col justify-center items-start gap-y-6">
        <Heading title="Menová kalkulačka" />
        {isLoading ? (
          <div className="flex items-center  gap-x-2">
            <p className="text-[#36d7b7] text-4xl font-bold">Loading</p>
            <BeatLoader loading={isLoading} color="#36d7b7" />
          </div>
        ) : (
          <CurrencyCalculator />
        )}
      </div>
    </main>
  );
}

export default App;
