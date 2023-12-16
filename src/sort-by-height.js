const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	// Extract heights from the array excluding -1
	const heights = arr.filter((value) => value !== -1);

	// Sort the extracted heights in ascending order
	heights.sort((a, b) => a - b);

	// Map the sorted heights back into the original array
	let index = 0;
	const result = arr.map((value) => (value === -1 ? -1 : heights[index++]));

	return result;
}

module.exports = {
	sortByHeight,
};
