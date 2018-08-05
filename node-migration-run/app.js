var fs = require('fs');
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
    fs.readFile(manifestFilePath, 'utf8', (err, contents) => {
        let files = contents.split(EOL);

        files.forEach((file) => {
            let content = fs.readFileSync(path.join(folderPath, file), 'utf8');
            fs.appendFileSync(newFile, content);
            fs.appendFileSync(newFile, [EOL, "GO"].concat(Array(5).fill(EOL)).join(""));
        });
    });
});