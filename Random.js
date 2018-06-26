/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "_|get" }] */
/* globals UrlFetchApp, integer_, decimal_, normal_, string_, uuid_, blob_ */

/**
 * Gets a new Random object that can generate random values.
 *
 * @see https://api.random.org/json-rpc/1/
 * @param {string} key the user private key (for authentication)
 * @return {object} an authenticated interface with a Random value generator
 */
function getRandom (key) {
  return new Random_(key)
}

/**
 * An object that acts as an authenticated Random value generator.
 *
 * @constructor
 * @param {string} key The user private key (for authentication). {@link https://api.random.org/api-keys}
 * @return {object} an authenticate-ready interface for a
 */
var Random_ = function (key) {
  const baseUrl = 'https://api.random.org/json-rpc/1/invoke'
  var id = 0

  /**
   * This method generates true random integers within a user-defined range.
   *
   * @param {number} min The lower boundary for the range from which the random numbers will be picked. Must be within the [-1e9,1e9] range.
   * @param {number} max The upper boundary for the range from which the random numbers will be picked. Must be within the [-1e9,1e9] range.
   * @param {number} n How many random integers you need. Must be within the [1,1e4] range. Default: 1.
   * @param {boolean} repl Specifies whether the random numbers should be picked with replacement. Default: true.
   * @param {number} base Specifies the base that will be used to display the numbers. Values allowed are 2, 8, 10 and 16. Default: 10.
   * @return {number|array} Result or Array of Results
   */
  this.integer = function (min, max, n, repl, base) {
    const params = integer_(min, max, n, repl, base)
    return call_('generateIntegers', params)
  }

  /**
   * This method generates true random decimal fractions from a uniform distribution across the [0,1] interval with a user-defined number of decimal places.
   *
   * @param {number} precision The number of decimal places to use. Must be within the [1,20] range.
   * @param {number} n How many random decimal fractions you need. Must be within the [1,1e4] range. Default: 1.
   * @param {boolean} repl Specifies whether the random numbers should be picked with replacement. Default: true.
   * @return {number|array} Result or Array of Results
   */
  this.decimal = function (precision, n, repl) {
    const params = decimal_(precision, n, repl)
    return call_('generateGaussians', params)
  }

  /**
   * This method generates true random numbers from a Gaussian distribution (also known as a normal distribution).
   *  The form uses a Box-Muller Transform to generate the Gaussian distribution from uniformly distributed numbers.
   *
   * @param {number} mean The distribution's mean. Must be within the [-1e6,1e6] range.
   * @param {number} stdDev The distribution's standard deviation. Must be within the [-1e6,1e6] range.
   * @param {number} sigFig The number of significant digits to use. Must be within the [2,20] range.
   * @param {number} n How many random numbers you need. Must be within the [1,1e4] range. Default: 1.
   * @return {number|array} Result or Array of Results
   */
  this.normal = function (mean, stdDev, sigFig, n) {
    const params = normal_(mean, stdDev, sigFig, n)
    return call_('generateDecimalFractions', params)
  }

  /**
   * This method generates true random strings.
   *
   * @param {number} length The length of each string. Must be within the [1,20] range. All strings will be of the same length
   * @param {string} chars A string that contains the set of characters that are allowed to occur in the random strings. The maximum number of characters is 80.
   * @param {number} n How many random strings you need. Must be within the [1,1e4] range. Default: 1.
   * @param {boolean} repl Specifies whether the random strings should be picked with replacement. Default: true.
   * @return {string|array} Result or Array of Results
   */
  this.string = function (length, chars, n, repl) {
    const params = string_(length, chars, n, repl)
    return call_('generateStrings', params)
  }

  /**
   * This method generates version 4 true random Universally Unique IDentifiers (UUIDs) in accordance with section 4.4 of RFC 4122.
   *
   * @param {number} n of results to return
   * @return {string|array} Result or Array of Results
   */
  this.uuid = function (n) {
    const params = uuid_(n)
    return call_('generateUUIDs', params)
  }

  /**
   * This method generates Binary Large OBjects (BLOBs) containing true random data.
   *  The total size of all blobs requested must not exceed 1,048,576 bits (128 KiB).
   *
   * @param {number} length The size of each blob, measured in bits. Must be within the [1,1048576] range and must be divisible by 8.
   * @param {number} n How many random blobs you need. Must be within the [1,100] range. Default: 1.
   * @param {string} format Specifies the format in which the blobs will be returned. Values allowed are base64 and hex. Default: 'base64'.
   * @return {string|array} Result or Array of Results
   */
  this.blob = function (length, n, format) {
    const params = blob_(length, n, format)
    return call_('generateBlobs', params)
  }

  /**
   * This method returns information related to the the usage of a given API key.
   *
   * @return {object} API Key information
   */
  this.usage = function () {
    return call_('getUsage')
  }

  return this

  function call_ (method, params) {
    params = params || {}
    params.apiKey = key

    const response = UrlFetchApp.fetch(baseUrl, {
      method: 'post',
      payload: JSON.stringify({
        jsonrpc: '2.0',
        method: method,
        params: params,
        id: id++
      })
    })
    const data = JSON.parse(response.getContentText())

    if (data.error) { throw new Error('Error ' + response.getResponseCode() + ': ' + data.error.message) }
    if (data.result.random) { // If it contains random data values
      const result = data.result.random.data
      return params.n === 1 ? result[0] : result
    }
    return data.result
  }
}
