const test = require('../../../..');

test('passes', t => {
	setImmediate(() => {
		throw new Error('Can’t catch me');
	});
	t.pass();
});
