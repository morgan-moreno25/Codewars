const assert = require('chai').assert;

/**
 * @description 4kyu - Catching Car Mileage Numbers
 * Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or 2 (respectively).
 * It's up to you to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.
 * "Interesting Numbers":
 * Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:
 * - Any digit followed by all zeros: 100, 90000
 * - Every digit is the same number: 1111
 * - The digits are sequential, incrementing or decrementing: 1234 / 4321
 * - The digits are a palindrome: 1221
 * - The digits match one of the values in the awesomePhrases array
 * * For incrementing sequences, 0 should come after 9, and not before 1
 * * For decrementing sequences, 0 should come after 1, and not before 9
 * @param {Number} number
 * @param {Array<Number>} awesomePhrases
 * @returns {0 | 1 | 2} 0 if the number is not interesting. 1 if an interesting number is coming up within the next 2 miles. 2 if the number is interesting.
 */
function isInteresting(number, awesomePhrases) {
	function anyDigitFollowedByZeroesCheck(num) {
		const stringArray = String(num).split('');

		if (stringArray.length < 3) {
			return false;
		}

		for (let i = 1; i < stringArray.length; i++) {
			if (stringArray[i] !== '0') {
				return false;
			}
		}

		return true;
	}
	function everyDigitTheSameCheck(num) {
		const stringArray = String(num).split('');

		if (stringArray.length < 3) {
			return false;
		}

		let match = stringArray[0];
		for (let i = 1; i < stringArray.length; i++) {
			if (match !== stringArray[i]) {
				return false;
			}
		}

		return true;
	}
	function incrementingSequenceCheck(num) {
		const stringArray = String(num).split('');

		if (stringArray.length < 3) {
			return false;
		}

		for (let i = 0; i < stringArray.length - 1; i++) {
			let current = stringArray[i];
			let next = stringArray[i + 1];
			let difference = Number(current) - Number(next);

			if (current === '9') {
				if (next !== '0') {
					return false;
				}
			} else {
				if (difference !== 1) {
					return false;
				}
			}
		}

		return true;
	}
	function decrementingSequenceCheck(num) {
		const stringArray = String(num).split('');

		if (stringArray.length < 3) {
			return false;
		}

		for (let i = 0; i < stringArray.length - 1; i++) {
			let current = stringArray[i];
			let next = stringArray[i + 1];
			let difference = Number(current) - Number(next);

			if (current === '1') {
				if (next !== '0') {
					return false;
				}
			} else {
				if (difference !== 1) {
					return false;
				}
			}
		}

		return true;
	}
	function palindromeCheck(num) {
		const normalArray = String(num).split('');
		const reversedArray = [];

		for (let i = normalArray.length - 1; i >= 0; i--) {
			reversedArray.push(normalArray[i]);
		}

		if (normalArray.length < 3) {
			return false;
		}

		for (let i = 0; i < normalArray.length; i++) {
			if (normalArray[i] !== reversedArray[i]) {
				return false;
			}
		}

		return true;
	}
	function awesomePhraseCheck(num) {
		return awesomePhrases.includes(num);
	}

	if (number < 98) {
		return 0;
	}

	if (
		anyDigitFollowedByZeroesCheck(number) ||
		everyDigitTheSameCheck(number) ||
		incrementingSequenceCheck(number) ||
		decrementingSequenceCheck(number) ||
		palindromeCheck(number) ||
		awesomePhraseCheck(number)
	) {
		return 2;
	} else if (
		anyDigitFollowedByZeroesCheck(number + 1) ||
		anyDigitFollowedByZeroesCheck(number + 2) ||
		everyDigitTheSameCheck(number + 1) ||
		everyDigitTheSameCheck(number + 2) ||
		incrementingSequenceCheck(number + 1) ||
		incrementingSequenceCheck(number + 2) ||
		decrementingSequenceCheck(number + 1) ||
		decrementingSequenceCheck(number + 2) ||
		palindromeCheck(number + 1) ||
		palindromeCheck(number + 2) ||
		awesomePhraseCheck(number + 1) ||
		awesomePhraseCheck(number + 2)
	) {
		return 1;
	} else {
		return 0;
	}
}
describe('Catching Car Mileage Numbers', () => {
	describe('example test cases', () => {
		const awesomePhrases = [1337, 256];

		it('example test 1', () => {
			assert.equal(isInteresting(3, awesomePhrases), 0);
		});
		it('example test 2', () => {
			assert.equal(isInteresting(1336, awesomePhrases), 1);
		});
		it('example test 3', () => {
			assert.equal(isInteresting(1337, awesomePhrases), 2);
		});
		it('example test 4', () => {
			assert.equal(isInteresting(11208, awesomePhrases), 0);
		});
		it('example test 5', () => {
			assert.equal(isInteresting(11209, awesomePhrases), 1);
		});
		it('example test 6', () => {
			assert.equal(isInteresting(11211, awesomePhrases), 2);
		});
	});
});

/**
 * @description 6kyu - Counting Duplicates: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits
 * @param {String} text
 * @returns {Number} The count of distinct case-insensitibe alphabetic characters and numeric digits that occur more than once in the input string
 */
function duplicateCount(text) {
	let duplicates = [];

	const stringArray = text.toLowerCase().split('').sort();

	for (let i = 0; i < stringArray.length; i++) {
		let current = stringArray[i];
		let next = stringArray[i + 1];

		if (current === next) {
			if (!duplicates.includes(current)) {
				duplicates.push(current);
			}
		}
	}

	return duplicates.length;
}
describe('Counting Duplicates', () => {
	describe('example test cases', () => {
		it('example test 1', () => {
			assert.equal(duplicateCount(''), 0);
		});
		it('example test 2', () => {
			assert.equal(duplicateCount('abcde'), 0);
		});
		it('example test 3', () => {
			assert.equal(duplicateCount('aabbcde'), 2);
		});
		it('example test 4', () => {
			assert.equal(duplicateCount('aabBcde'), 2);
		});
		it('example test 5', () => {
			assert.equal(duplicateCount('Indivisibility'), 1);
		});
		it('example test 6', () => {
			assert.equal(duplicateCount('Indivisibilities'), 2);
		});
	});
});

/**
 * @description 6kyu - Playing With Digits: Given a positive integer `n` is written as abcd... (a, b, c, d... being digits) and a positive integer `p`
 * - We want to find a positive integer k, if it exists, such as the sum of the digits of `n` taken to the successive powers of `p` is equal to `k * n`
 * In other words:
 * - Is there an integer `k` such as: (a ^ p + b ^ (p+1) + ...) = k*n
 * If it is the case we will return `k`, if not return -1
 * @param {Number} n
 * @param {Number} p
 * @returns {Number | -1} Either the value of k with regards to the above formula or -1 if no k value can be found
 */
function digPow(n, p) {
	let successivePowerTotal = 0;

	const numArray = String(n)
		.split('')
		.map(string => Number(string));

	for (let i = 0; i < numArray.length; i++) {
		successivePowerTotal += Math.pow(numArray[i], p + i);
	}

	let k = successivePowerTotal % n;

	return k === 0 ? successivePowerTotal / n : -1;
}

describe.only('Playing with Digits', () => {
	describe('example tests', () => {
		it('example test 1', () => {
			assert.equal(digPow(89, 1), 1);
		});
		it('example test 2', () => {
			assert.equal(digPow(92, 1), -1);
		});
		it('example test 3', () => {
			assert.equal(digPow(46288, 3), 51);
		});
	});
});
