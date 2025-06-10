import React from "react";

interface KeypadButtonProps {
  value: string;
  onClick: (value: string) => void;
  style: React.CSSProperties;
}

const KeypadButton: React.FC<KeypadButtonProps> = ({
  value,
  onClick,
  style,
}) => (
  <button onClick={() => onClick(value)} style={style}>
    {value}
  </button>
);

export default KeypadButton;
