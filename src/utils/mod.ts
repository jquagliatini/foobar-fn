export default function mod(a: number): (b: number) => number {
  return (b: number): number => b % a;
}
