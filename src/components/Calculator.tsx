import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";
import useCalculator from "../hooks/useCalculator";

const Calculator: React.FC = () => {
  const { display, handleButtonClick } = useCalculator();

  return (
    <div
      style={{
        width: "320px",
        margin: "50px auto",
        padding: "25px",
        borderRadius: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        border: "1px solid #bdc3c7",
      }}
    >
      <Display value={display} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
