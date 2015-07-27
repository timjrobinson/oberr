# oberr
Turns a JS Error into a proper object that can be stringified

## Usage

Before
```
var myError = new Error("Something broke");
var myObject = {
    err: myError
}
JSON.stringify(myObject);
//=> {err: {}} // WTF
```

After
```
var oberr = require("oberr");

var myError = new Error("Something broke");
var myObject = {
    err: oberr(myError)
}
JSON.stringify(myObject);
//=> {err: {message: "Something broke", code: 0, stack: ""}} // Yay! 
```

## License

MIT


    