var Task = require('./task');

var task1 = new Task("create a demo for constructors");
var task2 = new Task("create a demo for modules");

task1.complete();
task2.save();