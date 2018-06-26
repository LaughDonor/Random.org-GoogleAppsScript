/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "_" }] */

/**
 * Create parameters for generating random integers
 *
 * @param {number} min The lower boundary for the range from which the random numbers will be picked. Must be within the [-1e9,1e9] range.
 * @param {number} max The upper boundary for the range from which the random numbers will be picked. Must be within the [-1e9,1e9] range.
 * @param {number} n How many random integers you need. Must be within the [1,1e4] range. Default: 1.
 * @param {boolean} repl Specifies whether the random numbers should be picked with replacement. Default: true.
 * @param {number} base Specifies the base that will be used to display the numbers. Values allowed are 2, 8, 10 and 16. Default: 10.
 * @return {object} a parameter with the required fields
 */
function integer_ (min, max, n, repl, base) {
  return {
    min: min,
    max: max,
    n: n || 1,
    replacement: repl == null || repl,
    base: base || 10
  }
}

/**
 * Create parameters for generating random decimal numbers
 *
 * @param {number} precision The number of decimal places to use. Must be within the [1,20] range.
 * @param {number} n How many random decimal fractions you need. Must be within the [1,1e4] range. Default: 1.
 * @param {boolean} repl Specifies whether the random numbers should be picked with replacement. Default: true.
 * @return {object} a parameter with the required fields
 */
function decimal_ (precision, n, repl) {
  return {
    decimalPlaces: precision,
    n: n || 1,
    replacement: repl == null || repl
  }
}

/**
 * Create parameters for generating random Gaussian (normal) distribution
 *
 * @param {number} mean The distribution's mean. Must be within the [-1e6,1e6] range.
 * @param {number} stdDev The distribution's standard deviation. Must be within the [-1e6,1e6] range.
 * @param {number} sigFig The number of significant digits to use. Must be within the [2,20] range.
 * @param {number} n How many random numbers you need. Must be within the [1,1e4] range. Default: 1.
 * @return {object} a parameter with the required fields
 */
function normal_ (mean, stdDev, sigFig, n) {
  return {
    mean: mean,
    standardDeviation: stdDev,
    significantDigits: sigFig,
    n: n || 1
  }
}

/**
 * Create parameters for generating random strings
 *
 * @param {number} length The length of each string. Must be within the [1,20] range. All strings will be of the same length
 * @param {string} chars A string that contains the set of characters that are allowed to occur in the random strings. The maximum number of characters is 80.
 * @param {number} n How many random strings you need. Must be within the [1,1e4] range. Default: 1.
 * @param {boolean} repl Specifies whether the random strings should be picked with replacement. Default: true.
 * @return {object} a parameter with the required fields
 */
function string_ (length, chars, n, repl) {
  return {
    characters: chars || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    length: length || 1,
    n: n || 1,
    replacement: repl == null || repl
  }
}

/**
 * Create parameters for generating random BLOBs
 *
 * @param {number} length The size of each blob, measured in bits. Must be within the [1,1048576] range and must be divisible by 8.
 * @param {number} n How many random blobs you need. Must be within the [1,100] range. Default: 1.
 * @param {string} format Specifies the format in which the blobs will be returned. Values allowed are base64 and hex. Default: 'base64'.
 * @return {object} a parameter with the required fields
 */
function blob_ (length, n, format) {
  return {
    length: length,
    n: n || 1,
    format: format || 'base64'
  }
}

/**
 * Create parameters for generating random UUIDs
 *
 * @param {number} n of results to return
 * @return {object} a parameter with the required fields
 */
function uuid_ (n) {
  return {n: n || 1}
}
