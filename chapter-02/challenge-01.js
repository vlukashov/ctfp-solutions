/**
 * https://github.com/hmemcpy/milewski-ctfp-pdf/blob/41e0fc34fcbf98bc4338a5ebfa4f07eea34da15b/src/content/1.2/Types%20and%20Functions.tex#L437
 *
 * Define a higher-order function (or a function object) `memoize`
 * in your favorite language. This function takes a pure function
 * `f` as an argument and returns a function that behaves almost
 * exactly like `f`, except that it only calls the original
 * function once for every argument, stores the result internally, and
 * subsequently returns this stored result every time it's called with
 * the same argument. You can tell the memoized function from the
 * original by watching its performance. For instance, try to memoize a
 * function that takes a long time to evaluate. You'll have to wait for
 * the result the first time you call it, but on subsequent calls, with
 * the same argument, you should get the result immediately.
 */

export function memoize(f) {
  if (typeof f !== 'function') {
    throw new TypeError('The first argument passed into memoize() is not a function');
  }

  const cache = new WeakMap();
  return function (...args) {
    const hash = hashCode(args);
    if (!cache.has(hash)) {
      const result = {};
      try {
        result.value = Function.prototype.apply.call(f, this, args);
      } catch (e) {
        result.exception = e;
      }
      cache.set(hash, result);
    }
    return returnValueOrThrowException(cache.get(hash));
  }
}

function returnValueOrThrowException(result) {
  if (result.exception) {
    throw result.exception;
  } else {
    return result.value;
  }
}

function hashCode(args) {
  // FIXME: implemt a better hashing strategy
  return JSON.stringify(args);
}