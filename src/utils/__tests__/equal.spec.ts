import equal from '../equal';

test('equal', () => {
  expect(equal(1)(1)).toBeTruthy();
});

test('equal different types', () => {
  expect(equal(1)('1')).toBeFalsy();
});
