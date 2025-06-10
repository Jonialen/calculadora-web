import { useState } from "react";

const useCalculator = () => {
  const [display, setDisplay] = useState<string>("0");
  const [operation, setOperation] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    if (!isNaN(Number(value))) {
      // Si es un número
      if (display.length < 9) {
        setDisplay((prev) => (prev === "0" ? value : prev + value));
      }
    } else if (value === ".") {
      // Punto decimal
      if (!display.includes(".") && display.length < 9) {
        setDisplay((prev) => prev + value);
      }
    } else if (value === "C") {
      // Limpiar
      setDisplay("0");
      setOperation(null);
      setPreviousValue(null);
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Operaciones
      setOperation(value);
      setPreviousValue(display);
      setDisplay("0");
    } else if (value === "=") {
      // Igual
      if (operation && previousValue) {
        const result = calculate(
          Number(previousValue),
          Number(display),
          operation
        );
        setDisplay(result.toString().slice(0, 9));
        setOperation(null);
        setPreviousValue(null);
      }
    }
  };

  const calculate = (a: number, b: number, op: string): number | string => {
    switch (op) {
      case "+":
        return a + b > 999999999 ? "ERROR" : a + b;
      case "-":
        const subtraction = a - b;
        return subtraction < -999999999 ? "ERROR" : subtraction;
      case "*":
        return a * b > 999999999 ? "ERROR" : a * b;
      case "/":
        return b === 0 ? "ERROR" : a / b;
      default:
        return "ERROR";
    }
  };

  return { display, handleButtonClick };
};

export default useCalculator;
