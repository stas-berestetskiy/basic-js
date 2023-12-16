const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirect = isDirect;
		this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}

	encrypt(message, key) {
		this.checkArguments(message, key);
		message = this.prepareText(message);
		key = this.prepareKey(key, message.length);
		let result = '';

		for (let i = 0; i < message.length; i++) {
			if (this.alphabet.includes(message[i])) {
				const messageIndex = this.alphabet.indexOf(message[i]);
				const keyIndex = this.alphabet.indexOf(key[i]);
				let encryptedIndex;

				if (this.isDirect) {
					encryptedIndex = (messageIndex + keyIndex) % 26;
				} else {
					encryptedIndex = (messageIndex - keyIndex + 26) % 26;
				}

				result += this.alphabet[encryptedIndex];
			} else {
				result += message[i];
			}
		}

		return result;
	}

	decrypt(encryptedMessage, key) {
		this.checkArguments(encryptedMessage, key);
		encryptedMessage = this.prepareText(encryptedMessage);
		key = this.prepareKey(key, encryptedMessage.length);
		let result = '';

		for (let i = 0; i < encryptedMessage.length; i++) {
			if (this.alphabet.includes(encryptedMessage[i])) {
				const encryptedIndex = this.alphabet.indexOf(
					encryptedMessage[i]
				);
				const keyIndex = this.alphabet.indexOf(key[i]);
				let decryptedIndex;

				if (this.isDirect) {
					decryptedIndex = (encryptedIndex - keyIndex + 26) % 26;
				} else {
					decryptedIndex = (encryptedIndex + keyIndex) % 26;
				}

				result += this.alphabet[decryptedIndex];
			} else {
				result += encryptedMessage[i];
			}
		}

		return result;
	}

	checkArguments(str1, str2) {
		if (!str1 || !str2) {
			throw new Error('Incorrect arguments!');
		}
	}

	prepareText(text) {
		return text.toUpperCase().replace(/[^A-Z]/g, '');
	}

	prepareKey(key, length) {
		key = key.toUpperCase();
		while (key.length < length) {
			key += key;
		}
		return key.slice(0, length);
	}
}

module.exports = {
	VigenereCipheringMachine,
};
