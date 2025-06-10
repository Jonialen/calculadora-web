import { render, screen } from "@testing-library/react";
import Display from "../components/Display";
import { describe, expect, it } from "vitest";

describe("Display Component", () => {
  it("renders the value passed as a prop", () => {
    render(<Display value="123" />);
    const displayElement = screen.getByText("123");
    expect(displayElement).toBeInTheDocument();
  });

  it("renders ERROR when passed as a prop", () => {
    render(<Display value="ERROR" />);
    const displayElement = screen.getByText("ERROR");
    expect(displayElement).toBeInTheDocument();
  });
});
