# meteor-fluid-refno
Manage Reference Number

## Installation

```
meteor add stivaugoin:fluid-refno
```

## Usage
### generateRefNo
Generate new RefNo
``` js
generateRefNo(options);

Exemple:
var refNo = generateRefNo({
		name: 'invoices', // default: 'counter'
		prefix: 'I-',  // default: ''
		size: 5, // default: 5
		filling: '0' // default: '0'
	});

console.log(refNo); // output: "I-00001"

var refNo = generateRefNo({
		name: 'invoices', // default: 'counter'
		prefix: 'I-',  // default: ''
		size: 5, // default: 5
		filling: '0' // default: '0'
	});

console.log(refNo); // output: "I-00002"
```

### resetRefNo
Reset RefNo
``` js
resetRefNo(collectionName);

Exemple:
resetRefNo('invoices'); // The sequence of refno 'invoices' will now be 1.
```

## Licence
MIT
