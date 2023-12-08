import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, describe, test } from "vitest";
import { CalculatorButton } from "../components";

describe("Calculator Button", () => {
  test("is rendering correctly", () => {
    render(<CalculatorButton />);
    expect(true).toBeTruthy();
  });
  test("has button element", () => {
    render(<CalculatorButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
