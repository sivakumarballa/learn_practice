function Person()
{
	return arguments;
}

var obj = {};

//console.log(Person.bind(obj, 10, 20)());

Function.prototype.customBind = function (){
	var context = arguments[0];
	var args = Array.prototype.slice.call(arguments, 1);
	return function(){
			var currArgs = Array.prototype.slice.call(arguments);
			var finalArgs = args.concat(currArgs);

			return finalArgs;
	}
}

var f = Person.customBind(obj, 100, 200);
//f();
f(20, 50);