import pipe from '../pipe';

test('pipe', () => {

  const double = (a: number): number => a * 2;
  const square = (a: number): number => a * a;

  expect(
    pipe([square, double])(3),
  ).toBe(18);
});
