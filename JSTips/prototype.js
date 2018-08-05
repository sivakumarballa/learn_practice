// Quiz programs
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.getName = function () {
    return this.name;
}
var p1 = new Person("Ajay", 20);


function Person(name, age) {
    this.name = name;
    this.age = age;
    return 10;
}
var p1 = new Person("Vijay", 20);


function Person(name, age) {
    this.name = name;
    this.age = age;
    return { name: "Raju" }
}
var p1 = new Person("Ajay", 20);


/* Explain how prototype chain will work. (Circles, Rectangles, toString, ValueOf etc)
1. Every single object gets build by calling one of the constructor either directly or indirectly. 
*/

/**** 4 steps will happen internally
 * 1. Brand new object gets created
 * 2. Object gets linked to constructor's prototype object
 * 3. Context gets set to that object
 * 4. Return the evaluated object
****/
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.getName = function () {
    return this.name;
}
Person.prototype.getAge = function () {
    return this.age;
}


var p1 = new Person("Foo", 25);
var p2 = new Person("Bar", 26);
p2.greet = function () {
    console.log("Hello, " + this.name);
}

p1.constructor === Person;
p1.constructor === p2.constructor;
p1.__proto__ === Person.prototype;
p1.__proto__ === p2.__proto__;
p1.__proto__ === p2.constructor.prototype;




function Foo(me) {
    this.me = me;
}
Foo.prototype.identify = function () {
    return "I am " + this.me;
}

function Bar(me) {
    Foo.call(this, me);
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.speak = function () {
    return "Hello, " + this.identify();
}

var b1 = new Bar("b1");
b1.constructor === Bar



// Quiz programs
function person(name) {
    this.name = name;
    this.location = 'Kerala';
}
person.prototype.officeLocation = 'hyd';
var p1 = new person('Jinu');
for (var k in p1) {
    console.log(p1[k]);
}



// Custom new which replicates new Person() behavior.
Function.prototype.new = function () {
    var temp = Object.create(this.prototype);
    var other = this.apply(temp, arguments);
    if (typeof other === 'object') {
        return other;
    } else {
        return temp;
    }
}


// Custom bind
Function.prototype.bind = function () {
    var fn = this,
        args = Array.prototype.splice.call(arguments);
    object = args.shift();

    return function () {
        return fn.apply(object, args.concat(Array.prototype.slice.call(arguments)));
    };
}


// Applications of apply, call
var a = { name: 'google', place: 'hyd' }
a.push(20);

var a = { name: 'google', place: 'hyd' }
Array.prototype.push.call(a, 20);