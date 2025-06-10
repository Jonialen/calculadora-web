import { renderHook, act } from "vitest";
import useCalculator from "../hooks/useCalculator";

describe("useCalculator Hook", () => {
  it("handles number input", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleButtonClick("5");
      result.current.handleButtonClick("3");
    });
    expect(result.current.display).toBe("53");
  });

  it("handles addition", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleButtonClick("5");
      result.current.handleButtonClick("+");
      result.current.handleButtonClick("3");
      result.current.handleButtonClick("=");
    });
    expect(result.current.display).toBe("8");
  });

  it("handles division by zero", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleButtonClick("5");
      result.current.handleButtonClick("/");
      result.current.handleButtonClick("0");
      result.current.handleButtonClick("=");
    });
    expect(result.current.display).toBe("ERROR");
  });
});
