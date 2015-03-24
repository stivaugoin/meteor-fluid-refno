if (Meteor.isServer) {
	generateRefNo = function(options) {
		var name = options.name || 'counter';
		var prefix = options.prefix || '';
		var size = options.size || 5;
		var filling = options.filling || '0';

		var sequence = getNextSequence(name);
		return prefix + strPad(sequence, size, filling);
	};

	setRefNo = function(options) {
		var name = options.name || 'counter';
		if (!options.value) {
			throw new Error('Value missing! try: setRefNo({value: 0});')
		} else {
			var value = options.value;
		}

		setSequence(name, value);
	};

	resetRefNo = function(options) {
		var name = options.name || 'counter';
		setSequence(name, 0);
	};
}

function strPad(input, length, string) {
	string = string || '0'; input = input + '';
	return input.length >= length ? input : new Array(length - input.length + 1).join(string) + input;
}