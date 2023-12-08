import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SwapCurrencies } from "../components";
import { CurrencyCalculatorContext } from "../context/currency-calculator-context";

describe("Swap Currencies Component", () => {
  test("is rendering correctly", () => {
    render(<SwapCurrencies />);
    expect(true).toBeTruthy();
  });
  test("calls swapCurrencies function on click", () => {
    const mockSwapCurrencies = vi.fn();

    render(
      <CurrencyCalculatorContext.Provider
        value={{
          swapCurrencies: mockSwapCurrencies,
          inputAmount: 1,
          setInputAmount: vi.fn(),
          optionFrom: "USD",
          setOptionFrom: vi.fn(),
          optionTo: "CZK",
          setOptionTo: vi.fn(),
          rateTo: 0,
          setRateTo: vi.fn(),
          inputResult: "2000",
          setInputResult: vi.fn(),
          currencyRate: "0.45",
          setCurrencyRate: vi.fn(),
          isLoading: false,
          setIsLoading: vi.fn(),
          calculatorCurrData: {
            Cube: [],
            time: "2023-12-06",
          },
          setCalculatorCurrData: vi.fn(),
          convertCurrency: vi.fn(),
        }}
      >
        <SwapCurrencies />
      </CurrencyCalculatorContext.Provider>
    );

    fireEvent.click(screen.getByTestId("swap-currencies"));

    expect(mockSwapCurrencies).toHaveBeenCalled();
  });
});
