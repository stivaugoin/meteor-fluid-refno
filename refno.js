RefNo = {
	generate: function(collection, prefix, options) {
		if (!collection) { throw new Error('"collection" is missing. Exemple: "individual"'); }
		if (!prefix) { throw new Error('"prefix" is missing. Exemple "I-"'); }
		if (!options.size) { options.size = 5 }
		if (!options.filling) { options.filling = 0 }

		var sequence = getNextSequence(collection);
		return prefix + strPad(sequence, options.size, options.filling);
	},

	reset: function(collection) {
		setSequence(collection, 0);
	}
};

RefNoCounters = new Meteor.Collection('refNoCounter');
function getNextSequence(collection) {
	RefNoCounters.update(
		{collection: collection},
		{
			$set: {collection: collection},
			$inc: {seq: 1}
		},
		{upsert: true}
	);
	var counter = Counters.findOne({collection: collection});
	return counter.seq;
}

function setSequence(collection, number) {
	RefNoCounters.update(
		{collection: collection},
		{$set: { seq: number }}
	);
}

function strPad(input, length, string) {
	string = string || '0'; input = input + '';
	return input.length >= length ? input : new Array(length - input.length + 1).join(string) + input;
}