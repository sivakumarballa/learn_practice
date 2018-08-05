/* .name and .length properties of a function
	.name is used to get name of the function
	.length is used to get no.of arguments that function is ready to accept.
*/	
	function sum(a, b) {
		return a+b;
	};
	sum.name	// "sum"


	var add = function() {
	}
	add.name	// "add"


	var sub = function substract() {
	}
	sub.name	// "substract"
	
	
	function sum(a, b) {
		return a + b;
	}
	sum.length		// 2


// Suppose I want to write a function with arbitary no.of arguments
	function sum(a, b) {
		return a + b;
	}
	
	//argumets object is a local variable available to the function.
	function sum() {
		var result = 0;
		for(var i = 0, iLen = arguments.length; i < iLen; i++) {
			result += arguments[i];
		}
		return result;
	}

	
// Private, public, static members of the class
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
	


// IIFE (Immediately invoking function expression): Calling the function whenever function is created.
	// Syntax1:
		(function() {
			console.log("foo");
		})();
	// Syntax2:
		(function() {
			console.log("foo");
		}());
		
// #### Promises
function abc() {
	var deferred = $.Deferred();
	deferred.resolve("siva");
	return deferred.promise();
}
abc().done(function(data) {
	console.log(data);
});
console.log("next1");


function abc() {
	var deferred = $.Deferred();
	setTimeout(function() {
		deferred.resolve("siva");
	}, 0);
	return deferred.promise();
}
abc().done(function(data) {
	console.log(data);
});
console.log("next1");


var p = new Promise((res, rej) => {
	res(10);
});
p.then((d) => {
	console.log(d);
});


var p = new Promise((res, rej) => {
	setTimeout(() => {res(10);}, 5000);
});
p.then((d) => {
	console.log(d);
});