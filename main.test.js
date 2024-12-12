const main = require('./main.js');

test('works', () => {
	expect(1).toBe(1);
});

test('Capitalize Marc', () => {
	expect(main.capitalize('marc')).toBe('MARC');
});

test('Capitalize Sally', () => {
	expect(main.capitalize('sally')).toBe('SALLY');
});
