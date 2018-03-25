import foobar from '../foobar';

describe('foobar', () => {
  it('should return the value by default', () => {
    expect(foobar(1)).toBe(1);
  });

  it('should return "foo" when mod 3 is 0', () => {
    expect(
      foobar(3),
    ).toBe('foo');
  });

  it.skip('should return "bar" when mod 5 is 0', () => {
    expect(
      foobar(5),
    ).toBe('bar');
  });

  it.skip('should return "foobar" when mod 3 AND mod 5 is 0', () => {
    expect(
      foobar(15),
    ).toBe('foobar');
  });
});
