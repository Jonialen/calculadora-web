import React from "react";
import Calculator from "./components/Calculator";

const App: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2c3e50",
          marginBottom: "30px",
          fontSize: "2.5rem",
          fontWeight: "300",
        }}
      >
        Calculadora
      </h1>
      <Calculator />
    </div>
  );
};

export default App;
