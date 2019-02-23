function RedCircle() {
}
RedCircle.prototype.create = function() {
    this.item = $("<div class='circle' style='background-color: red'><div>");
    return this;
}

function BlueCircle() {
}
BlueCircle.prototype.create = function() {
    this.item = $("<div class='circle' style='background-color: blue'><div>");
    return this;
}


var AbstractFactory = function() {
    this.types = {};
    this.create = function(type) {
        return new this.types[type]().create();
    }

    this.register = function(type, cls) {
        if(cls.prototype.create) {
            this.types[type] = cls;
        }
    }
}


var _factory = new AbstractFactory();
_factory.register('red', RedCircle);
_factory.register('blue', BlueCircle);


var circle = _factory.create('red').item