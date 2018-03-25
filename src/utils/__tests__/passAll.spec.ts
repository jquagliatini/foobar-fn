import passAll from '../passAll';

const isEven: (a: number) => boolean =
  (a: number): boolean => a % 2 === 0;
const isLessThan10: (a: number) => boolean =
  (a: number): boolean => a < 10;

test('passAll', () => {

  expect(
    passAll(
      isEven,
      isLessThan10,
    )(8),
  ).toBe(true);
});

test('passAll returns false', () => {
  expect(passAll(
    isEven,
    isLessThan10,
  )(11)).toBe(false);
});
