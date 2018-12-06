const memoize = require('./challenge-01');

describe('chapter 2 / challenge 1: memoize', () => {
  it('should call the original function', () => {
    const f = jest.fn();
    const memoized = memoize(f);

    memoized();

    expect(f).toHaveBeenCalledTimes(1);
  });

  it('should pass an int parameter to the original function', () => {
    const f = jest.fn();
    const memoized = memoize(f);

    memoized(42);

    expect(f).toHaveBeenCalledWith(42);
  });

  it('should not call the original funciton twice with the same args', () => {
    const f = jest.fn();
    const memoized = memoize(f);

    memoized(42);
    memoized(42);
    memoized(42);

    expect(f).toHaveBeenCalledTimes(1);
  });

  it('should return the same result as the original function', () => {
    const f = jest.fn(x => x);
    const memoized = memoize(f);

    const result = memoized(42);

    expect(result).toEqual(42);
  });

  it('should throw the same exception as the original function', () => {
    const f = jest.fn(x => { throw new TypeError(x); });
    const memoized = memoize(f);

    expect(() => memoized(42)).toThrow(/42/);
  });
});