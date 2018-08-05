var fs = require('./fs-promise');
var path = require('path');
const EOL = require('os').EOL;
var readfiles = require('readfiles');

// Create final file
let newFile = new Date().getTime() + ".sql";
fs.appendFile(newFile, "", (err) => {});

let migrationFolders = process.argv.slice(2);
migrationFolders.forEach((folder) => {
    let folderPath = path.join(typeof baseURL !== "undefined" && baseURL ? baseURL: __dirname, folder, "Up");
    let manifestFilePath = path.join(folderPath, "sequence.txt");

    fs.readFileAsync(manifestFilePath).then(function(data) {
        let filenames = data.split(EOL);
        return Promise.all(filenames.map(function(filename) {
            return fs.readFileAsync(path.join(folderPath, filename));
        }));
    }).then(function(files) {
        let data = files.join([EOL, "GO"].concat(Array(5).fill(EOL)).join(""));
        return fs.appendFileAsync(newFile, data);
    }).then(function(data) {
        console.log("Task Completed");
    }).catch(function(err) {
        console.log("Error occured");
    });
});