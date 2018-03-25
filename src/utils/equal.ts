export default function equal(a: any): (b: any) => boolean {
  return (b: any): boolean => a === b;
}
