import express from "express";
import { getCurrenciesData } from "../controllers/currency-calculator-controller";

const currencyCalculatorRoute = express.Router();

currencyCalculatorRoute.get("/api/currencies-data", getCurrenciesData);

export default currencyCalculatorRoute;
