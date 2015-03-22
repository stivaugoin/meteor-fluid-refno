RefNo = function(collection) {
	if (!collection) { throw new Error('"collection" is missing. Exemple: "individual"'); }
	this.collection = collection;
};

RefNo.prototype.generate = function(options){
	if (!options.prefix) { throw new Error('"prefix" is missing. Exemple "I-"'); }
	if (!options.size) { options.size = 5 }
	if (!options.filling) { options.filling = 0 }

	return createRefNo(options);
};

RefNo.prototype.reset = function(){
	if (Meteor.isServer) {
		setCounter(this.collection, 0);
	}
};

var createRefNo = function(options) {
	var sequence;
	if (Meteor.isServer) {
		sequence = incrementCounter(this.collection);
	}
	return options.prefix + strPad(sequence, options.size, options.filling);
};