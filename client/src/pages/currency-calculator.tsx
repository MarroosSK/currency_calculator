import {
  InputComponent,
  RateInfo,
  ResultComponent,
  SwapCurrencies,
} from "../components";

const CurrencyCalculator = () => {
  return (
    <div
      className=" bg-white p-10 "
      style={{ boxShadow: "  0px 10px 0px 0px black", borderRadius: "25px" }}
    >
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-3">
          <InputComponent />
          <SwapCurrencies />
          <ResultComponent />
        </div>
        <RateInfo />
      </div>
    </div>
  );
};

export default CurrencyCalculator;
