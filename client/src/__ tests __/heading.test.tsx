import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, describe, test } from "vitest";
import { Heading } from "../components";

describe("Heading", () => {
  test("is rendering correctly", () => {
    render(<Heading title="Menová kalkulačka" />);
    expect(true).toBeTruthy();
  });
  test("is called Menová kalkulačka", () => {
    render(<Heading title="Menová kalkulačka" />);
    const headingElement = screen.getByText(/Menová kalkulačka/i);
    expect(headingElement).toBeInTheDocument();
  });
});
