/*****
 * Module pattern
 * 
 * 
 ****/

 var repo = function() {
     var db = {};

     var get = function(id) {
         console.log("Getting task " + id);
         return {
             name: "new task from db"
         }
     }

     var save = function(task) {
         console.log('saving ' + task.name + ' to the db');
     }

     return {
         get: get,
         save: save
     }
 }