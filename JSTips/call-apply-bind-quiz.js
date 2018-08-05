// Question 1
var x = 3;
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function () {
            return this.x;
        }
    }
}
var go = foo.baz.bar;
console.log(go());
console.log(foo.baz.bar());


// Question 2
var name = "Google";
var obj = {
    name: 'eze',
    getName: function () {
        return this.name;
    }
}
var c = { name: 'Microsoft' };
console.log(obj.getName());
c.d = obj.getName;
console.log(c.d());
var x = obj.getName;
console.log(x());


// Question 3
var x = 3;
var elem = document.getElementById('hplogo');
function foo() {
    var x = 2;
    this.val = 10;
    function print(e) {
        e.preventDefault();
        console.log(this.x, this.val, x);
    }
    elem.addEventListener('click', print);
}
foo();
elem.click();


// Question 4
var name = "google";
var myObj = {
    name: 'divami',
    loc: 'hyd'
}
function getName() {
    console.log(this.name);
}
var obj = {
    name: "Informatica",
    getName: function () {
        return this.name;
    }
}
var myGetName1 = getName.bind(myObj);
var myGetName2 = obj.getName.bind(myObj);
