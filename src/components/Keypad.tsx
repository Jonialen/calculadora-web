import React from "react";

interface KeypadProps {
  onButtonClick: (value: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onButtonClick }) => {
  const buttons: string[] = [
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
    "0",
    ".",
    "=",
  ];

  const getButtonStyle = (button: string): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      padding: "20px",
      fontSize: "1.2rem",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "all 0.2s ease",
      userSelect: "none",
    };

    if (button === "C") {
      return {
        ...baseStyle,
        backgroundColor: "#e74c3c",
        color: "white",
      };
    } else if (["+", "-", "*", "/", "="].includes(button)) {
      return {
        ...baseStyle,
        backgroundColor: "#3498db",
        color: "white",
      };
    } else {
      return {
        ...baseStyle,
        backgroundColor: "#ecf0f1",
        color: "#2c3e50",
      };
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
      }}
    >
      {buttons.map((button, index) => {
        // Manejar el botón 0 que ocupa dos columnas
        if (button === "0" && index === 16) {
          return (
            <button
              key={`${button}-${index}`}
              onClick={() => onButtonClick(button)}
              style={{
                ...getButtonStyle(button),
                gridColumn: "span 2",
              }}
            >
              {button}
            </button>
          );
        }

        // Manejar el botón = que ocupa dos filas
        if (button === "=" && index === 15) {
          return (
            <button
              key={`${button}-${index}`}
              onClick={() => onButtonClick(button)}
              style={{
                ...getButtonStyle(button),
                gridRow: "span 2",
              }}
            >
              {button}
            </button>
          );
        }

        // Saltar botones duplicados
        if (
          (button === "0" && index === 17) ||
          (button === "+" && index === 10) ||
          (button === "=" && index === 19)
        ) {
          return null;
        }

        return (
          <button
            key={`${button}-${index}`}
            onClick={() => onButtonClick(button)}
            style={getButtonStyle(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default Keypad;
