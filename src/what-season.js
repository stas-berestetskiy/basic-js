const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	// Check if the date argument is not provided
	if (!date) {
		return 'Unable to determine the time of year!';
	}

	// Check if the provided date is a valid Date object
	if (!(date instanceof Date) || isNaN(date.getTime())) {
		throw new Error('Invalid date!');
	}

	// Expose the enemy scout if it's a FakeDate
	if (date.constructor && date.constructor.name === 'FakeDate') {
		throw new Error('Invalid date!');
	}

	// Extract the month from the date
	const month = date.getMonth();

	// Determine the season based on the month
	if (month >= 2 && month <= 4) {
		return 'spring';
	} else if (month >= 5 && month <= 7) {
		return 'summer';
	} else if (month >= 8 && month <= 10) {
		return 'autumn';
	} else {
		return 'winter';
	}
}

module.exports = {
	getSeason,
};
