import React from "react";

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#333",
        color: "#fff",
        fontSize: "2rem",
        textAlign: "right",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "inset 0 2px 5px rgba(0,0,0,0.3)",
        marginBottom: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        fontFamily: "monospace",
        border: "2px solid #444",
      }}
    >
      {value}
    </div>
  );
};

export default Display;
