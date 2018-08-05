var test = {};

test.title = "My title";
test.description = "My description";

Object.defineProperty(test, 'toString', {
    value: function() {
        return this.title + " " + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: true
});

test.toString = 'hi';
Object.defineProperty(test, 'toString', {
    enumerable: true
});
console.log(Object.keys(test));

// Configurable=true property can be deleted, can be modified as non-enumerable, non-writable etc.
// If you don't want to modify the attributes of object property, then make it as configurable = false
console.log(test.toString());
