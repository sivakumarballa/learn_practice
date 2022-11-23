function Person(a, b)
{
	this.a = a;
	this.b = b;
	return {first: a, last: b};
}

function Books(a, b)
{
	this.a = a;
	this.b = b;
	return {};
}

//var a = new Person(10, 20);
//console.log(a);

Function.prototype.createObject = function (){
    var func = Object.create(this.prototype);
	var result = this.apply(func, arguments);
    console.log(typeof(result));
    return typeof(result) === 'object' ? result : func;
}

//Person.call(obj, 10,20)

var person = Person.createObject(10, 20);
var book = Books.createObject(100, 200);