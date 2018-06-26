# Random.org API for Google Apps Scripts
### A Google Apps Script library for accessing the Random.org API

This library allows a user (or service account) to utilize the Random.org API utilizing their API Key credentials within a Google Apps Script.

## Installation
In the Google online script editor, select the `Resources` menu item and choose `Libraries...`. In the "Add a library" input box, enter `1mrhlka2Ads1AgPexsqIcVJJzdEH-plJnoGux5Mojj3ZULoCjRPVqLp4i` and click "Add." Choose the most recent version number.

## Quick start
#### Create an API Key to use with Random.org
1. Follow the instructions on [Random.org](https://api.random.org/api-keys) to get an API Key.
2. Save the key in your script somewhere (GUID format)

#### Grab an instance of the Random class
Now, with your API Key `key`, we will authenticate with Random.org to get our `Random` instance. To do this, get the `Random` object from the library:

```javascript
var random = Random.getRandom(key);
```

#### Get Usage
Using this Random generator instance, we check the status of our key:

```javascript
random.usage();
```
And you can get the following example return object:
```javascript
{
   status: "running",
   creationTime: "2018-06-26 01:00:00Z",
   bitsLeft: 500000,
   requestsLeft: 1000,
   totalBits: 10000,
   totalRequests: 20
}
```

#### Get random UUID (or GUID)
Can use the random object to get a random UUID
```javascript
random.uuid(); // Possible result: "cff64354-e6f1-4b9f-8f9f-539edb498205"
```
***
You can even get multiple UUIDs:
```javascript
random.uuid(2);
```
Result:
```javascript
[
  "29f453f7-bf28-4f86-bf0c-f0ad65a6b6c0",
  "2605f31f-8f7a-41ab-b681-34fa9615bd84"
]
```

# Documentation
## Functions

<dl>
<dt><a href="#getRandom">getRandom(key)</a> ⇒ <code>object</code></dt>
<dd><p>Gets a new Random object that can generate random values.</p>
</dd>
</dl>

<a name="Random"></a>

## Random  

* [Random](#Random)
    * [.integer(min, max, n, repl, base)](#Random+integer) ⇒ <code>number</code> \| <code>array</code>
    * [.decimal(precision, n, repl)](#Random+decimal) ⇒ <code>number</code> \| <code>array</code>
    * [.normal(mean, stdDev, sigFig, n)](#Random+normal) ⇒ <code>number</code> \| <code>array</code>
    * [.string(length, chars, n, repl)](#Random+string) ⇒ <code>string</code> \| <code>array</code>
    * [.uuid(n)](#Random+uuid) ⇒ <code>string</code> \| <code>array</code>
    * [.blob(length, n, format)](#Random+blob) ⇒ <code>string</code> \| <code>array</code>
    * [.usage()](#Random+usage) ⇒ <code>object</code>

<a name="Random+integer"></a>

### Random.integer(min, max, n, repl, base) ⇒ <code>number</code> \| <code>array</code>
This method generates true random integers within a user-defined range.

**Returns**: <code>number</code> \| <code>array</code> - Result or Array of Results  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | The lower boundary for the range from which the random numbers will be picked. Must be within the [-1e9,1e9] range. |
| max | <code>number</code> | The upper boundary for the range from which the random numbers will be picked. Must be within the [-1e9,1e9] range. |
| n | <code>number</code> | How many random integers you need. Must be within the [1,1e4] range. Default: 1. |
| repl | <code>boolean</code> | Specifies whether the random numbers should be picked with replacement. Default: true. |
| base | <code>number</code> | Specifies the base that will be used to display the numbers. Values allowed are 2, 8, 10 and 16. Default: 10. |

<a name="Random+decimal"></a>

### Random.decimal(precision, n, repl) ⇒ <code>number</code> \| <code>array</code>
This method generates true random decimal fractions from a uniform distribution across the [0,1] interval with a user-defined number of decimal places.

**Returns**: <code>number</code> \| <code>array</code> - Result or Array of Results  

| Param | Type | Description |
| --- | --- | --- |
| precision | <code>number</code> | The number of decimal places to use. Must be within the [1,20] range. |
| n | <code>number</code> | How many random decimal fractions you need. Must be within the [1,1e4] range. Default: 1. |
| repl | <code>boolean</code> | Specifies whether the random numbers should be picked with replacement. Default: true. |

<a name="Random+normal"></a>

### Random.normal(mean, stdDev, sigFig, n) ⇒ <code>number</code> \| <code>array</code>
This method generates true random numbers from a Gaussian distribution (also known as a normal distribution).
 The form uses a Box-Muller Transform to generate the Gaussian distribution from uniformly distributed numbers.

**Returns**: <code>number</code> \| <code>array</code> - Result or Array of Results  

| Param | Type | Description |
| --- | --- | --- |
| mean | <code>number</code> | The distribution's mean. Must be within the [-1e6,1e6] range. |
| stdDev | <code>number</code> | The distribution's standard deviation. Must be within the [-1e6,1e6] range. |
| sigFig | <code>number</code> | The number of significant digits to use. Must be within the [2,20] range. |
| n | <code>number</code> | How many random numbers you need. Must be within the [1,1e4] range. Default: 1. |

<a name="Random+string"></a>

### Random.string(length, chars, n, repl) ⇒ <code>string</code> \| <code>array</code>
This method generates true random strings.

**Returns**: <code>string</code> \| <code>array</code> - Result or Array of Results  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>number</code> | The length of each string. Must be within the [1,20] range. All strings will be of the same length |
| chars | <code>string</code> | A string that contains the set of characters that are allowed to occur in the random strings. The maximum number of characters is 80. |
| n | <code>number</code> | How many random strings you need. Must be within the [1,1e4] range. Default: 1. |
| repl | <code>boolean</code> | Specifies whether the random strings should be picked with replacement. Default: true. |

<a name="Random+uuid"></a>

### Random.uuid(n) ⇒ <code>string</code> \| <code>array</code>
This method generates version 4 true random Universally Unique IDentifiers (UUIDs) in accordance with section 4.4 of RFC 4122.

**Returns**: <code>string</code> \| <code>array</code> - Result or Array of Results  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | of results to return |

<a name="Random+blob"></a>

### Random.blob(length, n, format) ⇒ <code>string</code> \| <code>array</code>
This method generates Binary Large OBjects (BLOBs) containing true random data.
 The total size of all blobs requested must not exceed 1,048,576 bits (128 KiB).

**Returns**: <code>string</code> \| <code>array</code> - Result or Array of Results  

| Param | Type | Description |
| --- | --- | --- |
| length | <code>number</code> | The size of each blob, measured in bits. Must be within the [1,1048576] range and must be divisible by 8. |
| n | <code>number</code> | How many random blobs you need. Must be within the [1,100] range. Default: 1. |
| format | <code>string</code> | Specifies the format in which the blobs will be returned. Values allowed are base64 and hex. Default: 'base64'. |

<a name="Random+usage"></a>

### Random.usage() ⇒ <code>object</code>
This method returns information related to the the usage of a given API key.

**Returns**: <code>object</code> - API Key information  
<a name="getRandom"></a>

## getRandom(key) ⇒ <code>object</code>
Gets a new Random object that can generate random values.

**Returns**: <code>object</code> - an authenticated interface with a Random value generator  
**See**: https://api.random.org/json-rpc/1/  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | the user private key (for authentication) |

# Contributions
Contributions are welcome — send a pull request! This library is a work in progress. See [here](./CONTRIBUTING.md) for more information on contributing.

After cloning this repository, you can push it to your own private copy of this Google Apps Script project to test it yourself. See [here](https://github.com/google/clasp) for directions on using `clasp` to develop App Scripts locally.

If you want to view the source code directly on Google Apps Script, where you can make a copy for yourself to edit, click [here](https://script.google.com/d/1mrhlka2Ads1AgPexsqIcVJJzdEH-plJnoGux5Mojj3ZULoCjRPVqLp4i/edit?usp=sharing). 
