const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	// Get the number of rows and columns in the matrix
	const rows = matrix.length;
	const columns = matrix[0].length;

	// Initialize the sum to 0
	let sum = 0;

	// Iterate over each column
	for (let col = 0; col < columns; col++) {
		// Iterate over each row in the current column
		for (let row = 0; row < rows; row++) {
			// If the element above the current one is not 0, add its value to the sum
			if (row === 0 || matrix[row - 1][col] !== 0) {
				sum += matrix[row][col];
			}
		}
	}

	return sum;
}

module.exports = {
	getMatrixElementsSum,
};
