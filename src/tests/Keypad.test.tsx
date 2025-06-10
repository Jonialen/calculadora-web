import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Keypad from "../components/Keypad";

describe("Keypad Component", () => {
  it("renders all buttons", () => {
    const mockOnButtonClick = vi.fn();
    render(<Keypad onButtonClick={mockOnButtonClick} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(20); // Aseguramos que hay 20 botones
  });

  it("calls onButtonClick when a button is clicked", () => {
    const mockOnButtonClick = vi.fn();
    render(<Keypad onButtonClick={mockOnButtonClick} />);

    const button = screen.getByText("7");
    fireEvent.click(button);
    expect(mockOnButtonClick).toHaveBeenCalledWith("7");
  });
});
