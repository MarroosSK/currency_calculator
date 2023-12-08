import express from "express";
import cors from "cors";
import currencyCalculatorRoute from "./routes/currency-calculator-route";

const port: number = 3001;
export const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3001"],
  })
);

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/", currencyCalculatorRoute);

app.listen(port, () => console.log(`Server is running at port: ${port}`));
