RefNo = function(collection) {
	if (!collection) { throw new Error('"collection" is missing. Exemple: "individual"'); }
	this.collection = collection;
};

RefNo.prototype.generate = function(options){
	if (!options.prefix) { throw new Error('"prefix" is missing. Exemple "I-"'); }
	if (!options.size) { options.size = 5 }
	if (!options.filling) { options.filling = 0 }

	var sequence = getNextSequence(this.collection);
	return options.prefix + strPad(sequence, options.size, options.filling);
};

RefNo.prototype.reset = function(){
	setSequence(this.collection, 0);
};

Counters = new Meteor.Collection('counters');
function getNextSequence(collection) {
	Counters.update(
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
	Counters.update(collection,{
		$inc: { seq: number }
	}, { upsert: true });
}