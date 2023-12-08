import X2JS from "x2js";
import axios from "axios";
import { Request, Response } from "express";
import { DocumentI } from "../types/types";

/*
Get currencies data
*/
export const getCurrenciesData = async (req: Request, res: Response) => {
  const { currency } = req.query;
  const x2js = new X2JS({ attributePrefix: "" });
  let document: DocumentI;

  try {
    const currenciesApiData = await axios(
      "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"
    );

    if (!currenciesApiData) {
      return res.status(404).json("Data with currencies not found!");
    } else {
      document = x2js.xml2js(currenciesApiData.data);
      const fullData = document.Envelope.Cube.Cube;
      const dataForFilter = document.Envelope.Cube.Cube.Cube;

      if (currency) {
        const filteredData = Array.isArray(dataForFilter)
          ? dataForFilter.filter((item) => item.currency === currency)
          : [];
        console.log(filteredData);
        return res.status(200).json(filteredData);
      }

      return res.status(200).json(fullData);
    }
  } catch (error) {
    console.log("Problem with fetching currency data!");
    return res.status(500).json(error);
  }
};
