const assert = require('chai').assert;
/**
 * @description 5kyu - RGB To Hex Conversion: The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @returns {String} The hexadecimal representation of the 3 rgb values passed into the function.
 */
function rgb(r, g, b) {
	const CONVERSION = {
		0: '0',
		1: '1',
		2: '2',
		3: '3',
		4: '4',
		5: '5',
		6: '6',
		7: '7',
		8: '8',
		9: '9',
		10: 'A',
		11: 'B',
		12: 'C',
		13: 'D',
		14: 'E',
		15: 'F',
	};

	const values = [r, g, b];
	let hex = '';

	for (let i = 0; i < values.length; i++) {
		let value = values[i];
		if (value < 0) {
			value = 0;
		}
		if (value > 255) {
			value = 255;
		}

		const valueBySixteen = value / 16;
		const firstDigit = Math.floor(valueBySixteen);
		const secondDigit = Math.floor((valueBySixteen - firstDigit) * 16);

		hex += `${CONVERSION[firstDigit]}${CONVERSION[secondDigit]}`;
	}

	return hex;
}

describe('RGB To Hex Conversion', () => {
	describe('example tests', () => {
		it('example test 1', () => {
			assert.equal(rgb(0, 0, 0), '000000');
		});
		it('example test 2', () => {
			assert.equal(rgb(0, 0, -20), '000000');
		});
		it('example test 3', () => {
			assert.equal(rgb(300, 255, 255), 'FFFFFF');
		});
		it('example test 4', () => {
			assert.equal(rgb(173, 255, 47), 'ADFF2F');
		});
	});
});
