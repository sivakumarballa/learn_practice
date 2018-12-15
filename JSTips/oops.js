class Circle {
    constructor(r) {
        this.r = r;
    }
    area() {
        return this.r * this.r * 3.14;
    }
}

function Rectangle(x, y) {
    this.x = x;
    this.y = y;
    this.print = () => {
        console.log(this.r);
    }
}

Rectangle.prototype.area = function() {
    return this.x * this.y;
}

var c1 = new Circle(10);
var r1 = new Rectangle(4, 5);

console.log("....");