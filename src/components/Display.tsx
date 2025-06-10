type Props = { value: string };
export default function Display({ value }: Props) {
  return (
    <div className="display" data-testid="display">
      {value}
    </div>
  )
}
