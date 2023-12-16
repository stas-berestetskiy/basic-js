const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	// Destructure options or set defaults manually
	const {
		repeatTimes,
		separator,
		addition,
		additionRepeatTimes,
		additionSeparator,
	} = options || {};

	// Set default values if not provided
	const times = repeatTimes || 1;
	const sep = separator || '+';
	const add = addition !== undefined ? String(addition) : '';
	const addTimes = additionRepeatTimes || 1;
	const addSep = additionSeparator || '|';

	// Repeat the addition string
	const repeatedAddition = Array(addTimes).fill(add).join(addSep);

	// Repeat the main string with the addition
	const repeatedString = Array(times)
		.fill(str + repeatedAddition)
		.join(sep);

	return repeatedString;
}

module.exports = {
	repeater,
};
