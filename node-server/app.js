var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/get1', function (req, res) {
    let s = new Date();
    var size    = 100000;
    var cSize   = 1000;
    var records = Array(size).fill("data");
    var offset = 0;

    function processChunk(chunk, cb) {
        chunk.forEach((d) => {
            console.log(d);
        });
        if (offset + 1 <= size) {
            cb();
        } else {
            console.log("Chunk end.........");
            res.send(`Get2 Response... <br/>
                Start Time:   ${s} <br/>
                End Time:   ${new Date()}`);
        }
    }

    function main() {
        console.log("Chunk start.........");
        setTimeout(() => {
            var chunk = records.slice(offset, offset + cSize);
            offset += cSize;
            processChunk(chunk, main);
        }, 0);
    }
    main();
})

app.get('/get2', function (req, res) {
    let s = new Date();
    res.send(`Get1 Response... <br/>
        Start Time:   ${s} <br/>
        End Time:   ${new Date()}`);
})

var port = 3000;
app.listen(port);
console.log('server on' + port);