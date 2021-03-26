const assert = require('chai').assert;

/**
 * @description 6kyu - Are they the "same"?
 * Given two arrays `a` and `b` write a function that checks whether the two arrays have the same elements, with the same multiplicies. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 * @param {Array<Number>} array1
 * @param {Array<Number>} array2
 * @returns {Boolean} True if the square of each element in array1 is present in array2, otherwise false.
 */
function comp(array1, array2) {
	for (let i = 0; i < array2.length; i++) {
		const sqroot = Math.sqrt(array2[i]);

		if (array1.includes(sqroot)) {
			const index = array1.findIndex(num => num === sqroot);
			array1.splice(index, 1);
			continue;
		} else {
			return false;
		}
	}

	return true;
}
describe('Are they the "same"', () => {
	it('should pass with valid arrays', () => {
		assert.equal(
			comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]),
			true
		);
	});
	it('should fail with invalid arrays', () => {
		assert.equal(
			comp(
				[121, 144, 19, 161, 19, 144, 19, 11],
				[121, 14641, 20736, 36100, 25921, 361, 20736, 361]
			),
			false
		);
	});
});

/**
 * @description 6kyu - +1 Array: Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
 * - The array can't be empty
 * - Only non-negative, single digit integers are allowed
 * - Return `null` for invalid inputs
 * @param {Array<Number>} arr
 * @returns {Array<Number>} The array that was passed in as an argument with 1 added to its value
 */
function upArray(arr) {
	if (arr === []) {
		return null;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0 || arr[i] > 9) {
			return null;
		}
	}

	const last = arr.length - 1;

	if (arr[last] === 9) {
		let i = 0;
		while (arr[last - i] === 9) {
			if (last - i === 0) {
				break;
			}

			arr[last - i] = 0;
			i++;
		}
		if (last - i === 0) {
			arr[0] = 1;
			arr.push(0);
			return arr;
		} else {
			arr[last - i] = arr[last - i] + 1;
			return arr;
		}
	} else {
		arr[last] = arr[last] + 1;
		return arr;
	}
}

describe('+1 Array', () => {
	it('example test 1', () => {
		assert.deepEqual(upArray([2, 3, 9]), [2, 4, 0]);
	});
	it('example test 2', () => {
		assert.deepEqual(upArray([4, 3, 2, 5]), [4, 3, 2, 6]);
	});
	it('example test 3', () => {
		assert.equal(upArray([1, -9]), null);
	});
	it('example test 4', () => {
		assert.deepEqual(upArray([9, 9, 9]), [1, 0, 0, 0]);
	});
});
