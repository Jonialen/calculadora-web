import KeyButton from "./KeyButton"
type Props = {
  onKey: (label: string) => void;
};
const keys = [
  ["7", "8", "9", "/"],
  ["4", "5", "6", "*"],
  ["1", "2", "3", "-"],
  ["0", ".", "=", "+"],
  ["C", "%", "+/-"],
]
export default function Keypad({ onKey }: Props) {
  return (
    <div className="keypad">
      {keys.flat().map((k) => (
        <KeyButton key={k} label={k} onClick={onKey} />
      ))}
    </div>
  )
}
