const assert = require('chai').assert;

/**
 * @description 5kyu - Number of Trailing Zeros of N!: Write a program that will calculate the number of trailing zeros in a factorial of a given number
 * @param {Number} n
 * @returns {Number} The number of trailing zeros on the resulting factorial of the argument `n`
 */
function zeros(n) {
	const kMax = Math.log(n) / Math.log(5);
	let trailingZeros = 0;
	let k = 1;

	while (k <= kMax) {
		trailingZeros += n / Math.pow(5, k);

		k++;
	}

	return Math.floor(trailingZeros);
}

describe('Number of trailing zeros of N!', () => {
	describe('example tests', () => {
		it('example test 1', () => {
			assert.equal(zeros(0), 0);
		});
		it('example test 2', () => {
			assert.equal(zeros(5), 1);
		});
		it('example test 3', () => {
			assert.equal(zeros(6), 1);
		});
		it('example test 4', () => {
			assert.equal(zeros(30), 7);
		});
	});
});
