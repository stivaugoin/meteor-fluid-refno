# meteor-refno
Manage Reference Number

## Installation

```
meteor add stivaugoin:refno
```

## Usage
### Generate new RefNo
``` js
generateRefNo('individual', 'I-', {size: 5, filling: '0'});
// output: "I-00001"
```

### Reset RefNo
``` js
resetRefNo('individual');

// next refNo will be "I-00001"
```

## Licence
The MIT License (MIT)
