import range from '../range';

test('range', () => {
  expect(range(10)(2))
    .toEqual([
      2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
});

test('range with default value', () => {
  expect(range(3)())
    .toEqual([0, 1, 2, 3]);
});
