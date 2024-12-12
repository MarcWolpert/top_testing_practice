function capitalize(input, locale) {
	return input.toLocaleUpperCase(locale);
}

function reverseString(input) {
	return input.split('').reverse().join('');
}

const Calculator = {
	add(a, b) {
		return a + b;
	},
	subtract(a, b) {
		return a - b;
	},
	divide(a, b) {
		return a / b;
	},
	multiply(a, b) {
		return a * b;
	},
};

function caesarCipher(input, shift) {
	//65->90 for uppercase
	let uppercaseModulo = 95 - 65;
	//97->122 for lowercase
	let lowercaseModulo = 122 - 97;
	let cipher = '';
	for (char of input) {
		let charCode = char.charCodeAt(0);
		if (charCode > 122) {
			continue;
		}
		if (charCode === 96) {
			continue;
		}
		if (charCode < 65) {
			continue;
		}
		if (charCode < 96) {
			charCode = ((charCode - 65 + shift) % uppercaseModulo) + 65;
		} else if (charCode > 96) {
			charCode = ((charCode - 97 + shift) % lowercaseModulo) + 97;
		}
		cipher = cipher + String.fromCharCode(charCode);
	}
	return cipher;
}

module.exports = { capitalize, reverseString, Calculator, caesarCipher };
