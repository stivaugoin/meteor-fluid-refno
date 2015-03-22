# meteor-refno
Manage Reference Number

## Installation

```
meteor add stivaugoin:refno
```

## Usage
### Generate new RefNo
``` js
var refNo = new RefNo('individual');
refNo.generate({
  prefix: 'I-', // mandatory
  size: 4 // default 5
  filling: '0' // default '0'
});

// output: "I-00001"
```

### Reset RefNo
``` js
var refNo = new RefNo('individual');
refNo.reset();

// next refNo will be "I-00001"
```

## Licence
The MIT License (MIT)
