import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "currency-flags/dist/currency-flags.min.css";
import { CurrencyCalculatorContextProvider } from "./context/currency-calculator-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CurrencyCalculatorContextProvider>
    <App />
  </CurrencyCalculatorContextProvider>
);
