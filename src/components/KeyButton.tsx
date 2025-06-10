type Props = {
  label: string;
  onClick: (label: string) => void;
};
export default function KeyButton({ label, onClick }: Props) {
  return (
    <button onClick={() => onClick(label)} data-testid={`btn-${label}`}>
      {label}
    </button>
  )
}
