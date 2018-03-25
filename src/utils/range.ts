type RangeReturnType =
  (b?: number) => number[];

export default function range(max: number): RangeReturnType {
  return function (min: number = 0): number[] {
    return Array.from(
      { length: max - min + 1 },
    ).map((_, i) => i + min);
  };
}
