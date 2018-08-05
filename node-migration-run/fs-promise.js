var fs = require('fs');

fs.readFileAsync = function(filename) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filename, "utf8", function(err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

fs.appendFileAsync = function(filename, data) {
    return new Promise(function(resolve, reject) {
        fs.appendFile(filename, data, function(err) {
            if(err) {
                reject(err);
            } else {
                resolve("");
            }
        })
    })
}

module.exports = fs;