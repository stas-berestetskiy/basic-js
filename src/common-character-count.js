const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let commonCount = 0;

	for (const char of s1) {
		const index = s2.indexOf(char);

		if (index !== -1) {
			commonCount++;
			s2 = s2.slice(0, index) + s2.slice(index + 1);
		}
	}

	return commonCount;
}

module.exports = {
	getCommonCharacterCount,
};
