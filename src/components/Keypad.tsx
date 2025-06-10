import React from "react";
import KeypadButton from "./KeypadButton";

interface KeypadProps {
  onButtonClick: (value: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onButtonClick }) => {
  const buttons = [
    "C",
    "/",
    "*",
    "-",
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
    "=",
  ];
  const getButtonStyle = (button: string): React.CSSProperties => ({
    padding: "20px",
    fontSize: "1.2rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    backgroundColor:
      button === "C"
        ? "#e74c3c"
        : ["+", "-", "*", "/", "="].includes(button)
        ? "#3498db"
        : "#ecf0f1",
    color:
      button === "C" || ["+", "-", "*", "/", "="].includes(button)
        ? "white"
        : "#2c3e50",
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
      }}
    >
      {buttons.map((button, index) => (
        <KeypadButton
          key={`${button}-${index}`}
          value={button}
          onClick={onButtonClick}
          style={getButtonStyle(button)}
        />
      ))}
    </div>
  );
};

export default Keypad;
