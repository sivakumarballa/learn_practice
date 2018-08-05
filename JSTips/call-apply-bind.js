/***** Private, public, static members of the class *****/
function Person(name, age) {
    // private property
    var priv = 10;
    
    // private method
    function privateMethod() {
        console.log("private method");
    }

    // public property
    this.name = name;
    this.age = age;

    // public method
    this.publicMethod = function() {
        return this.name;
    }
}
Person.sayHello = function() {
    console.log("Hello");
}

var p1 = new Person('Ravi', 20);



// Suppose I want to write a function with arbitary no.of arguments
function sum(a, b) {
    return a + b;
}

// argumets object is a local variable available to the function.
function sum() {
    var result = 0;
    for(var i = 0, iLen = arguments.length; i < iLen; i++) {
        result += arguments[i];
    }
    return result;
}


/***** Invocation patterns *****/
/* this parameter is very important in object oriented programming.
    Its value is determined by invocation patterns. 4 invocation patterns:
    1. Method
    2. Function
    3. Constructor
    4. Apply
*/

// Method invocation pattern.
// When a function is a property of an object, we call it as method.
// this will be bound to the object.
var a = 100;
var obj = {
    a: 10,
    getA: function() {
        return this.a;
    }
}
obj.getA();
var temp = obj.getA;
temp();

// Function invocation pattern
// When a function is not a property of any object.
// this will be bound to global object.
var a = 100;
function getA() {
    return this.a;
}
getA();

// Constructor invocation pattern
// If the function is invoked with new prefix, then new object will be created.
// this will be bound to that new object
function func(a) {
    this.a = a;
    this.getA = function() {
        return this.a;
    }
}
var x = new func(20);
x.getA();

// Apply invocation pattern
// If we want to bind the function to custom object, we have to use apply/call
// this will be bound to the custom object.
var a = 100;
var obj = {
    a: 10,
    getA: function() {
        return this.a;
    }
}
function getA() {
    return this.a;
}
function func(a) {
    this.a = a;
    this.getA = function() {
        return this.a;
    }
}
var x = new func(20);
var otherObj = {
    a: 500
}
getA.bind(otherObj)();
obj.getA.bind(x)();


// Difference between call, apply, bind
var a = 100;
var obj = {
    a: 10
}
function sum() {
    var result = 0;
    for(var i = 0, iLen = arguments.length; i < iLen; i++) {
        result += arguments[i];
    }
    return this.a + result;
}
sum.call(obj, 20, 30);
sum.apply(obj, [20, 30]);
sum.bind(obj, 20, 30)();

