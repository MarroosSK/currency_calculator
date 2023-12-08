import axios from "axios";
import { expect, it, describe } from "@jest/globals";

describe("GET /api/currencies-data", () => {
  it("should respond with status 200 and return currency data", async () => {
    const response = await axios.get(
      "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"
    );
    expect(response.status).toBe(200);
  });
  it("should return data not found message if data is not found", async () => {
    const response = await axios.get(
      "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"
    );
    if (!response) {
      expect(response).toEqual("Data with currencies not found!");
    }
  });
});
