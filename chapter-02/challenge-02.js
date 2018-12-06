/**
 * https://github.com/hmemcpy/milewski-ctfp-pdf/blob/41e0fc34fcbf98bc4338a5ebfa4f07eea34da15b/src/content/1.2/Types%20and%20Functions.tex#L450
 *
 * Try to memoize a function from your standard library that you normally
 * use to produce random numbers. Does it work?
 */

 /**
  * Nope.
  *
  * When calling the Math.random() function without parameters several times,
  * the return value is every time different. That is, Math.random() is not a
  * pure function, and memoizing it makes no sense.
  *
  * See the 'should return the same result as the original function' test. It
  * would fail when enabled.
  */
