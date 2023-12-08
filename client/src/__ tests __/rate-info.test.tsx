import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, describe, test } from "vitest";
import { RateInfo } from "../components";

describe("RateInfo Component", () => {
  test("renders correctly with provided values", () => {
    render(<RateInfo />);

    expect(screen.getByText(/1.0000/i)).toBeInTheDocument();
  });
});
