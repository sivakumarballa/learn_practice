function Person(a, b){
	this.a = a;
	this.b = b;
    return this.a + this.b;
}

var obj = {};
var obj1 = {
    
};

var a = Person.apply(obj, [10, 20]);
console.log(a);

Function.prototype.customApply = function (){
    //console.log(arguments);
	var context = arguments[0];
	var args = arguments[1];
	return this.call(context, ...args);
}

var b = Person.customApply(obj, [100,200]);
console.log(b);

var c = Person.customApply(obj1, [50,60]);
console.log(c);