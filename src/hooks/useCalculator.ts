import { useState } from "react"

type Operator = "+" | "-" | "*" | "/" | "%";

const MAX_LENGTH = 9
const MAX_VALUE = 999999999

function formatDisplay(value: string | number): string {
  if (typeof value === "number") value = value.toString()
  if (value.length > MAX_LENGTH) return "ERROR"
  return value
}

export function useCalculator() {
  const [display, setDisplay] = useState("0")
  const [acc, setAcc] = useState<number | null>(null)
  const [operator, setOperator] = useState<Operator | null>(null)
  const [waiting, setWaiting] = useState(false)

  function inputDigit(digit: string) {
    if (display === "ERROR") return
    if (waiting) {
      setDisplay(digit)
      setWaiting(false)
    } else if (display.length < MAX_LENGTH) {
      setDisplay(display === "0" ? digit : display + digit)
    }
  }

  function inputDot() {
    if (display === "ERROR") return
    if (waiting) {
      setDisplay("0.")
      setWaiting(false)
    } else if (!display.includes(".") && display.length < MAX_LENGTH) {
      setDisplay(display + ".")
    }
  }

  function clear() {
    setDisplay("0")
    setAcc(null)
    setOperator(null)
    setWaiting(false)
  }

  function inputOperator(op: Operator) {
    if (display === "ERROR") return
    const current = parseFloat(display)
    if (acc !== null && operator) {
      const result = compute(acc, current, operator)
      if (result === "ERROR") {
        setDisplay("ERROR")
        setAcc(null)
        setOperator(null)
        setWaiting(false)
        return
      }
      setAcc(result)
      setDisplay(formatDisplay(result))
    } else {
      setAcc(current)
    }
    setOperator(op)
    setWaiting(true)
  }

  function compute(a: number, b: number, op: Operator): number | "ERROR" {
    let result: number
    switch (op) {
      case "+":
        result = a + b
        break
      case "-":
        result = a - b
        break
      case "*":
        result = a * b
        break
      case "/":
        if (b === 0) return "ERROR"
        result = a / b
        break
      case "%":
        if (b === 0) return 'ERROR' // <-- AGREGA ESTA LÍNEA
      result = a % b
      break
      default:
        return "ERROR"
    }
    if (result < 0 || result > MAX_VALUE) return "ERROR"
    const str = result.toString()
    if (str.replace(".", "").length > MAX_LENGTH) return "ERROR"
    return parseFloat(Number(result).toPrecision(MAX_LENGTH))
  }

  function equal() {
    if (display === "ERROR" || acc === null || operator === null) return
    const current = parseFloat(display)
    const result = compute(acc, current, operator)
    if (result === "ERROR") {
      setDisplay("ERROR")
    } else {
      setDisplay(formatDisplay(result))
      setAcc(null)
      setOperator(null)
    }
    setWaiting(true)
  }

  function plusMinus() {
    if (display === "ERROR") return
    if (display.startsWith("-")) {
      setDisplay(display.slice(1))
    } else if (display !== "0" && display.length < MAX_LENGTH) {
      setDisplay("-" + display)
    }
  }

  return {
    display: formatDisplay(display),
    inputDigit,
    inputDot,
    inputOperator,
    equal,
    clear,
    plusMinus,
  }
}
