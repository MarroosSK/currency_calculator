import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, describe, test } from "vitest";
import App from "../App";

describe("Main App Page", () => {
  test("is rendering correctly", () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
