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
var options = {
	name: 'invoices', // default: 'counter'
	prefix: 'I-',  // default: ''
	size: 5, // default: 5
	filling: '0' // default: '0'
}
var refNo1 = generateRefNo();
var refNo2 = generateRefNo();
var refNo3 = generateRefNo();
var refNo4 = generateRefNo();

console.log(refNo1); // output: "I-00001"
console.log(refNo2); // output: "I-00002"
console.log(refNo3); // output: "I-00003"
console.log(refNo4); // output: "I-00004"
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
