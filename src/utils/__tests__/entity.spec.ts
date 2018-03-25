import entity from '../entity';

test('entity', () => {
  expect(
    entity('foobar')(),
  ).toBe('foobar');
});
