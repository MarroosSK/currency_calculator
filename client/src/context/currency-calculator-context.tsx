import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { CurrencyApiDataI } from "../types/currency-calculator-types";

interface CurrencyContextI {
  inputAmount: number;
  setInputAmount: React.Dispatch<React.SetStateAction<number>>;
  optionFrom: string;
  setOptionFrom: React.Dispatch<React.SetStateAction<string>>;
  optionTo: string;
  setOptionTo: React.Dispatch<React.SetStateAction<string>>;
  rateTo: number;
  setRateTo: React.Dispatch<React.SetStateAction<number>>;
  inputResult: string;
  setInputResult: React.Dispatch<React.SetStateAction<string>>;
  currencyRate: string;
  setCurrencyRate: React.Dispatch<React.SetStateAction<string>>;
  calculatorCurrData: CurrencyApiDataI | undefined;
  setCalculatorCurrData: React.Dispatch<
    React.SetStateAction<CurrencyApiDataI | undefined>
  >;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  convertCurrency: () => void;
  swapCurrencies: () => void;
  getData?: () => void;
}

const defaultValues = {
  inputAmount: 1,
  setInputAmount: () => {},
  optionFrom: "",
  setOptionFrom: () => {},
  optionTo: "",
  setOptionTo: () => {},
  rateTo: 0,
  setRateTo: () => {},
  inputResult: "",
  setInputResult: () => {},
  currencyRate: "",
  setCurrencyRate: () => {},
  calculatorCurrData: { Cube: [], time: "" },
  setCalculatorCurrData: () => {},
  isLoading: false,
  setIsLoading: () => {},

  convertCurrency: () => {},
  swapCurrencies: () => {},
  getData: () => {},
};

export const CurrencyCalculatorContext =
  createContext<CurrencyContextI>(defaultValues);

export const CurrencyCalculatorContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //states
  const [inputAmount, setInputAmount] = useState<number>(1);
  const [optionFrom, setOptionFrom] = useState<string>("USD");
  const [optionTo, setOptionTo] = useState<string>("CZK");
  const [rateTo, setRateTo] = useState<number>(0);
  const [inputResult, setInputResult] = useState<string>("");
  const [currencyRate, setCurrencyRate] = useState<string>("");
  const [calculatorCurrData, setCalculatorCurrData] =
    useState<CurrencyApiDataI>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //functions
  const convertCurrency = () => {
    if (inputAmount === 0 || isNaN(inputAmount) || inputAmount < 0) {
      setInputResult("");
      setCurrencyRate("");

      return;
    }
    if (calculatorCurrData) {
      try {
        const currencyData = calculatorCurrData?.Cube;
        console.log("Currency Data for Conversion:", currencyData);
        const fromCurrencyRate = currencyData?.find(
          (item) => item.currency === optionFrom
        );
        const toCurrencyRate = currencyData?.find(
          (item) => item.currency === optionTo
        );

        // console.log("From Currency Rate:", fromCurrencyRate);
        // console.log("To Currency Rate:", toCurrencyRate);
        if (fromCurrencyRate && toCurrencyRate) {
          const currencyRateFor1 =
            (1 / parseFloat(fromCurrencyRate.rate)) *
            parseFloat(toCurrencyRate.rate);
          setRateTo(parseFloat(currencyRateFor1.toFixed(5)));
          const currencyResult =
            (inputAmount / parseFloat(fromCurrencyRate.rate)) *
            parseFloat(toCurrencyRate.rate);
          setInputResult(currencyResult.toFixed(2));
        } else {
          console.error("Error while converting currency: Invalid data");
        }
      } catch (error) {
        console.error("Error while converting currency:", error);
      }
    }
  };

  const swapCurrencies = () => {
    const tempCurrency = optionFrom;
    setOptionFrom(optionTo);
    setOptionTo(tempCurrency);
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      const currencyData = await axios.get(
        "http://localhost:3001/api/currencies-data"
      );

      if (currencyData) {
        // console.log("Currency Data:", currencyData.data);
        setCalculatorCurrData(currencyData.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //useEffects
  useEffect(() => {
    convertCurrency();
  }, [inputAmount, optionFrom, optionTo]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <CurrencyCalculatorContext.Provider
      value={{
        inputAmount,
        setInputAmount,
        optionFrom,
        setOptionFrom,
        optionTo,
        setOptionTo,
        rateTo,
        setRateTo,
        inputResult,
        setInputResult,
        currencyRate,
        setCurrencyRate,
        calculatorCurrData,
        setCalculatorCurrData,
        convertCurrency,
        swapCurrencies,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CurrencyCalculatorContext.Provider>
  );
};
