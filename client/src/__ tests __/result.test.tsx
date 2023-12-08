import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ResultComponent } from "../components";

describe("Result Component", () => {
  test("is rendering correctly", () => {
    render(<ResultComponent />);
    expect(true).toBeTruthy();
  });
  test("contains prepočet input", () => {
    render(<ResultComponent />);
    expect(screen.getByPlaceholderText("Prepočet")).toBeInTheDocument();
  });
});
