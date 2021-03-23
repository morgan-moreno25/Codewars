const assert = require('chai').assert;

/**
 * @description 6kyu - Convert String to Camel Case: Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
 * @param {String} str
 * @returns {String}
 */
function toCamelCase(str) {
	if (str === '') {
		return '';
	}

	const words = str.split('-').length > 1 ? str.split('-') : str.split('_');
	console.log(words);
	let camelCased = '';

	for (let i = 0; i < words.length; i++) {
		if (i === 0) {
			camelCased += words[i];
		} else {
			let firstChar = words[i][0];

			let restOfWord = words[i].slice(1).toLowerCase();

			camelCased += `${firstChar.toUpperCase()}${restOfWord}`;
		}
	}

	return camelCased;
}
describe('Convert String To Camel Case', () => {
	it('should handle empty strings', () => {
		assert.equal(toCamelCase(''), '');
	});

	it('should handle dash delimited strings', () => {
		assert.equal(toCamelCase('the-stealth-warrior'), 'theStealthWarrior');
	});

	it('should handle Upper Camel Case', () => {
		assert.equal(toCamelCase('The-Stealth-Warrior'), 'TheStealthWarrior');
	});

	it('should handle underscore delimited strings', () => {
		assert.equal(toCamelCase('to_camel_case'), 'toCamelCase');
	});
});

/**
 * @description 6kyu - Roman Numerals Decoder: Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
 * @param {String} roman
 * @returns {Number}
 */
function decoder(roman) {
	const NUMERAL_VALUES = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let sum = 0;

	for (let i = 0; i < roman.length; i++) {
		if (NUMERAL_VALUES[roman[i]] < NUMERAL_VALUES[roman[i + 1]]) {
			sum -= NUMERAL_VALUES[roman[i]];
		} else {
			sum += NUMERAL_VALUES[roman[i]];
		}
	}
	return sum;
}

describe('Roman Numerals Decoder', () => {
	describe('example tests', () => {
		it('test 1', () => {
			assert.equal(decoder('XXI'), 21);
		});
		it('test 2', () => {
			assert.equal(decoder('I'), 1);
		});
		it('test 3', () => {
			assert.equal(decoder('IV'), 4);
		});
		it('test 4', () => {
			assert.equal(decoder('MMVIII'), 2008);
		});
		it('test 5', () => {
			assert.equal(decoder('MDCLXVI'), 1666);
		});
	});
});

/**
 * @description 6kyu - Count the Smiley Faces: Give an array as an argument complete the function that should return the total number of smiling faces. Rules for a smiling face:
 * - Each smiley face must contain a pair of valid eyes (':', ';').
 * - A smiley face can have a nose but it does not have to ('-', '~').
 * - Every smiling face must have a smiling mouth (')', 'D').
 * @param {Array<String>} arr
 * @returns {Number}
 */
function countSmileys(arr) {
	const regExp = new RegExp(/^[:;]{1}[-~]?[)D]{1}$/);

	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		if (regExp.test(arr[i])) {
			count++;
		}
	}

	return count;
}

describe('Count the Smiley Faces', () => {
	describe('example tests', () => {
		it('example test 1', () => {
			assert.equal(countSmileys([]), 0);
		});
		it('example test 2', () => {
			assert.equal(countSmileys([':D', ':~)', ';~D', ':)']), 4);
		});
		it('example test 3', () => {
			assert.equal(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
		});
		it('example test 4', () => {
			assert.equal(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
		});
	});
});
