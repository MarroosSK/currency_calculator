import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { InputComponent } from "../components";

describe("Input Component", () => {
  test("is rendering correctly", () => {
    render(<InputComponent />);
    expect(true).toBeTruthy();
  });
  test("contains suma input with value 1", () => {
    render(<InputComponent />);

    expect(screen.getByPlaceholderText("Suma")).toHaveValue(1);
  });
});
