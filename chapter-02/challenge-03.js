/**
 * https://github.com/hmemcpy/milewski-ctfp-pdf/blob/41e0fc34fcbf98bc4338a5ebfa4f07eea34da15b/src/content/1.2/Types%20and%20Functions.tex#L453
 *
 * Most random number generators can be initialized with a seed.
 * Implement a function that takes a seed, calls the random number
 * generator with that seed, and returns the result. Memoize that
 * function. Does it work?
 */

 /**
  * JavaScript standard library does not allow seeding the random number
  * generator. But there are 3rd party implementations such as
  * https://github.com/davidbau/seedrandom
  *
  * Contrary to `random()` (with an implicit global seed), the `random(seed)`
  * function is pure and can be memoized.
  */

const seedrandom = require('seedrandom');

function random(seed) {
  return seedrandom(seed)();
}

module.exports = random;