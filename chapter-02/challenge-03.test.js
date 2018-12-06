const memoize = require('./challenge-01');
const random = require('./challenge-03');

describe('chapter 2 / challenge 2: memoize random(seed)', () => {
  it('should return the same result as the original function', () => {
    const fn = random;
    const memoized = memoize(fn);

    const result = memoized(42);

    expect(result).toEqual(fn(42));
  });
});