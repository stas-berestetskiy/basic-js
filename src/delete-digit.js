const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const digits = n.toString().split('');

	// Find the first index where a digit is greater than the next one
	const indexToDelete = digits.findIndex((digit, i) => digit < digits[i + 1]);

	// Remove the digit at the found index
	digits.splice(indexToDelete, 1);

	// Join the remaining digits and convert back to a number
	const result = Number(digits.join(''));

	return result;
}

module.exports = {
	deleteDigit,
};
