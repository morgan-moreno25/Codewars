const assert = require('chai').assert;

/**
 * @description 5kyu - Tic-Tac-Toe Checker: If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is sovled, wouldn't we? Our goal is to create a function that will check that for us!
 * Assume that the board comes in the form of a 3x3 array, where the value is 0 if the spot is empty, 1 if it is an "X", or 2 if it is an "O".
 *
 * We want our function to return:
 * - `-1` if the board is not yet finished
 * - `1` if "X" won
 * - `2` if "O" won
 * - `0` if it is a tie
 *
 * You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
 * @param {Array<Array<Number>>} board
 * @returns {-1 | 0 | 1 | 2}
 */
function isSolved(board) {
	if (
		(board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1) ||
		(board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1) ||
		(board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1) ||
		(board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) ||
		(board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1) ||
		(board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1) ||
		(board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1) ||
		(board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1)
	) {
		return 1;
	} else if (
		(board[0][0] === 2 && board[0][1] === 2 && board[0][2] === 2) ||
		(board[1][0] === 2 && board[1][1] === 2 && board[1][2] === 2) ||
		(board[2][0] === 2 && board[2][1] === 2 && board[2][2] === 2) ||
		(board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) ||
		(board[0][2] === 2 && board[1][1] === 2 && board[2][0] === 2) ||
		(board[0][0] === 2 && board[1][0] === 2 && board[2][0] === 2) ||
		(board[0][1] === 2 && board[1][1] === 2 && board[2][1] === 2) ||
		(board[0][2] === 2 && board[1][2] === 2 && board[2][2] === 2)
	) {
		return 2;
	}

	for (let i = 0; i < 3; i++) {
		if (board[i].includes(0)) {
			return -1;
		}
	}

	return 0;
}
describe('Tic-Tac-Toe Checker', () => {
	it('should handle if the board is not finished', () => {
		assert.equal(
			isSolved([
				[0, 0, 1],
				[0, 2, 0],
				[0, 0, 0],
			]),
			-1
		);
	});
	it('should handle if "X" has won', () => {
		assert.equal(
			isSolved([
				[1, 0, 2],
				[2, 1, 0],
				[1, 2, 1],
			]),
			1
		);
	});
	it('should handle if "O" has won', () => {
		assert.equal(
			isSolved([
				[2, 0, 1],
				[1, 2, 0],
				[2, 1, 2],
			]),
			2
		);
	});
	it('should handle a tie', () => {
		assert.equal(
			isSolved([
				[1, 2, 1],
				[1, 2, 2],
				[2, 1, 1],
			]),
			0
		);
	});
});

/**
 * @description 5kyu - Human Readable Time
 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
 * - `HH` = hours, padded to 2 digits, range: 00 - 99
 * - `MM` = minutes, padded to 2 digits, range: 00 - 59
 * - `SS` = seconds, padded to 2 digits, range: 00 - 59
 * @param {Number} seconds
 * @returns {String}
 */
function humanReadable(seconds) {
	if (seconds === 0) return '00:00:00';

	let finalSeconds = 0;
	let minutes = 0;
	let hours = 0;

	if (seconds < 60) {
		finalSeconds = seconds;

		if (finalSeconds < 10) {
			finalSeconds = `0${finalSeconds}`;
		}

		return `00:00:${finalSeconds}`;
	} else if (seconds < 60 ** 2) {
		minutes = Math.floor(seconds / 60);
		finalSeconds = seconds % 60;

		if (minutes < 10) {
			minutes = `0${minutes}`;
		}
		if (finalSeconds < 10) {
			finalSeconds = `0${finalSeconds}`;
		}

		return `00:${minutes}:${finalSeconds}`;
	} else {
		hours = Math.floor(seconds / Math.pow(60, 2));
		let secondsAfterHours = seconds % Math.pow(60, 2);
		minutes = Math.floor(secondsAfterHours / 60);
		finalSeconds = secondsAfterHours % 60;

		if (hours < 10) {
			hours = `0${hours}`;
		}
		if (minutes < 10) {
			minutes = `0${minutes}`;
		}
		if (finalSeconds < 10) {
			finalSeconds = `0${finalSeconds}`;
		}

		return `${hours}:${minutes}:${finalSeconds}`;
	}
}

describe.only('Human Readable Time', () => {
	it('example test 1', () => {
		assert.equal(humanReadable(0), '00:00:00');
	});
	it('example test 2', () => {
		assert.equal(humanReadable(5), '00:00:05');
	});
	it('example test 3', () => {
		assert.equal(humanReadable(60), '00:01:00');
	});
	it('example test 4', () => {
		assert.equal(humanReadable(86399), '23:59:59');
	});
	it('example test 5', () => {
		assert.equal(humanReadable(359999), '99:59:59');
	});
});
