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
	expect(main.caesarCipher('xyz', 3)).toBe('abc');
});

test('caesar cipher works on lowercase', () => {
	expect(main.caesarCipher('abc', 5)).toBe('fgh');
});
