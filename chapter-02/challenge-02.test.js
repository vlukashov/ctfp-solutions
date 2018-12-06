const memoize = require('./challenge-01');


describe('chapter 2 / challenge 2: memoize Math.random()', () => {
  it.skip('should return the same result as the original function', () => {
    const fn = Math.random;
    const memoized = memoize(fn);

    const result = memoized(42);

    expect(result).toEqual(fn(42));
  });
});