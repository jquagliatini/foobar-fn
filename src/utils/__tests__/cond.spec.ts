import cond from '../cond';

describe('cond', () => {
  it('should replace a switch case', () => {
    const got: number = cond([
      [
        () => false,
        () => 1,
      ],
      [
        () => true,
        () => 2,
      ],
    ])();

    expect(got).toBe(2);
  });

  it('should return undefined if no predicate is found', () => {
    const got = cond([
      [() => false, () => 2],
    ])();
    expect(got).toBeUndefined();
  });
});
