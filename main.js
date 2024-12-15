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

function cipherOverflow() {}
function cipherUnderflow() {}

function caesarCipher(input, shift) {
	let uppercaseModulo = 90 - 65;
	let lowercaseModulo = 122 - 97;
	let cipher = '';
	for (char of input) {
		let charCode = char.charCodeAt(0);
		if (
			charCode < 65 ||
			(charCode >= 91 && charCode <= 96) ||
			charCode > 122
		) {
			cipher += char;
			continue;
		}
		if (charCode < 91) {
			const lowerBound = 65;
			const isOverflow = charCode - lowerBound + shift > uppercaseModulo;
			const isUnderflow = charCode - lowerBound + shift < 0;
			charCode = charCode - lowerBound + shift;
			if (isOverflow) {
				charCode = (charCode % uppercaseModulo) - 1;
			} else if (isUnderflow) {
				charCode = uppercaseModulo + charCode + 1;
			}
			charCode += lowerBound;
		} else if (charCode > 96) {
			const lowerBound = 97;
			const shiftBefore = charCode - lowerBound + shift;
			const isOverflow = shiftBefore > uppercaseModulo;
			const isUnderflow = shiftBefore < 0;
			charCode = charCode - lowerBound + shift;
			if (isOverflow) {
				charCode = (charCode % uppercaseModulo) - 1;
				charCode += 1;
			} else if (isUnderflow) {
				charCode = uppercaseModulo + charCode + 1;
			}
			charCode += lowerBound;
		}
		cipher += String.fromCharCode(charCode);
	}
	return cipher;
}

function analyzeArray(contents) {
	let min = 0;
	let max = 0;
	let average = 0;
	let length = contents.length;
	for (let i = 0; i < length; i += 1) {
		average += contents[i];
		if (i === 0) {
			min = contents[i];
			max = contents[i];
		} else {
			if (contents[i] < min) {
				min = contents[i];
			}
			if (contents[i] > max) {
				max = contents[i];
			}
		}
	}
	return {
		average: average / length,
		min: min,
		max: max,
		length: length,
	};
}

module.exports = {
	capitalize,
	reverseString,
	Calculator,
	caesarCipher,
	analyzeArray,
};
