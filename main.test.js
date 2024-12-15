const main = require('./main.js');

test('works', () => {
	expect(1).toBe(1);
});

test('Capitalize Marc', () => {
	expect(main.capitalize('marc', 'en-US')).toBe('MARC');
});

test('Capitalize Sally', () => {
	expect(main.capitalize('sally', 'en-US')).toBe('SALLY');
});

test('Capitalize Adamantia', () => {
	expect(main.capitalize('Αδαμαντία', 'el-GR')).toBe('ΑΔΑΜΑΝΤΙΑ');
});

test('String function recognized', () => {
	expect(main.reverseString('asd')).toBe('dsa');
});

test('String function reverses more than one', () => {
	expect(main.reverseString('murder')).toBe('redrum');
});

test('String function reverses other language', () => {
	expect(main.reverseString('Αδαμαντία')).toBe('αίτναμαδΑ');
});

test('calculator add works', () => {
	expect(main.Calculator.add(2, 2)).toBe(4);
});

test('calculator subtract works', () => {
	expect(main.Calculator.subtract(4, 2)).toBe(2);
});

test('calculator divide works', () => {
	expect(main.Calculator.divide(8, 2)).toBe(4);
});

test('calculator multiply works', () => {
	expect(main.Calculator.multiply(8, 2)).toBe(16);
});

test('caesar cipher exists', () => {
	expect(main.caesarCipher('cde', 3)).toBe('fgh');
});

test('caesar cipher works on lowercase', () => {
	expect(main.caesarCipher('abc', 5)).toBe('fgh');
});

test('caesar cipher works reverse', () => {
	expect(main.caesarCipher('abc', -3)).toBe('xyz');
});

test('caesar cipher works uppercase', () => {
	expect(main.caesarCipher('ABC', 3)).toBe('DEF');
});

test('caesar cipher works reverse uppercase', () => {
	expect(main.caesarCipher('ABC', -3)).toBe('XYZ');
});

test('caesar cipher works overflow', () => {
	expect(main.caesarCipher('XYZ', 3)).toBe('ABC');
});

test('caesar cipher partway split', () => {
	expect(main.caesarCipher('XYZ', 2)).toBe('ZAB');
});

test('caesar cipher mixed casing', () => {
	expect(main.caesarCipher('aBcDe', 2)).toBe('cDeFg');
});

test('caesar cipher punctuation', () => {
	expect(main.caesarCipher('aBc,De', 2)).toBe('cDe,Fg');
});

test('analyzeArray exists', () => {
	expect(main.analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
		average: 3,
		min: 1,
		max: 5,
		length: 5,
	});
});

test('analyzeArray works integers', () => {
	expect(main.analyzeArray([1, 3, 5, 7, 9])).toStrictEqual({
		average: 5,
		min: 1,
		max: 9,
		length: 5,
	});
});

test('analyzeArray works floats', () => {
	expect(main.analyzeArray([1.5, 3.25, 5.775, 7.89, 9.92])).toStrictEqual({
		average: 5.667,
		min: 1.5,
		max: 9.92,
		length: 5,
	});
});
