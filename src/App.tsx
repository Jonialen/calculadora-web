import { useCalculator } from "./hooks/useCalculator"
import Display from "./components/Display"
import Keypad from "./components/Keypad"
import "./App.css"
import { useState } from "react"

type Operator = "+" | "-" | "*" | "/" | "%";

function getRandomPosition() {
  const w = window.innerWidth
  const h = window.innerHeight
  const calcW = 320
  const calcH = 420
  const left = Math.random() * (w - calcW)
  const top = Math.random() * (h - calcH)
  return { left, top }
}

export default function App() {
  const calc = useCalculator()
  const [pos, setPos] = useState(() => getRandomPosition())

  function handleKey(label: string) {
    if (/\d/.test(label)) calc.inputDigit(label)
    else if (label === ".") calc.inputDot()
    else if (["+", "-", "*", "/", "%"].includes(label)) {
      calc.inputOperator(label as Operator)
    } else if (label === "=") calc.equal()
    else if (label === "C") calc.clear()
    else if (label === "+/-") calc.plusMinus()
  }

  function moveCalculator() {
    setPos(getRandomPosition())
  }

  return (
    <div
      className="center-root"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #232526 0%, #414345 100%)",
      }}
    >
      <div
        className="calculator"
        style={{
          position: "absolute",
          left: pos.left,
          top: pos.top,
          transition: "left 0.3s, top 0.3s",
          cursor: "pointer",
        }}
        onClick={moveCalculator}
      >
        <Display value={calc.display} />
        <Keypad onKey={handleKey} />
      </div>
    </div>
  )
}