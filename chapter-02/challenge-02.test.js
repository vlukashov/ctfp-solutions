const memoize = require('./challenge-01');

describe('chapter 2 / challenge 2: memoize Math.random()', () => {
  it('should call the original function', () => {
    const f = jest.fn(Math.random);
    const memoized = memoize(f);

    memoized();

    expect(f).toHaveBeenCalledTimes(1);
  });

  it('should pass an int parameter to the original function', () => {
    const f = jest.fn(Math.random);
    const memoized = memoize(f);

    memoized(42);

    expect(f).toHaveBeenCalledWith(42);
  });

  it('should not call the original funciton twice with the same args', () => {
    const f = jest.fn(Math.random);
    const memoized = memoize(f);

    memoized(42);
    memoized(42);
    memoized(42);

    expect(f).toHaveBeenCalledTimes(1);
  });

  it.skip('should return the same result as the original function', () => {
    const f = jest.fn(Math.random);
    const memoized = memoize(f);

    const result = memoized();

    expect(result).toEqual(f());
  });
});