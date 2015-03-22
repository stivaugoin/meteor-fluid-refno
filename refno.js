RefNo = {
	generate: function(collection, options) {
		if (!collection) { throw new Error('"collection" is missing. Exemple: "individual"'); }
		if (!options.prefix) { throw new Error('"prefix" is missing. Exemple "I-"'); }
		if (!options.size) { options.size = 5 }
		if (!options.filling) { options.filling = 0 }

		var sequence = getNextSequence(collection);
		return options.prefix + strPad(sequence, options.size, options.filling);
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