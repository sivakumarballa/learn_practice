/*****
 * Constructor pattern
 * Drawbacks of Contructor pattern:
 *  - Same toString() function will be re-created for each instance of object.
 * 
 ****/
function Task(name) {
    this.name = name;
    this.completed = false;

    this.complete = function() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    }
    this.save = function() {
        console.log('saving Task: ' + this.name);
    }
}

// Prototype pattern
function Task(name) {
    this.name = name;
    this.completed = false;
}
Task.prototype.complete = function() {
    console.log('completing task: ' + this.name);
    this.completed = true;
}
Task.prototype.save = function() {
    console.log('saving Task: ' + this.name);
}

module.exports = Task;
