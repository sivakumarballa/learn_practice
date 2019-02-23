var size = 10000;
var cSize = 100;
var records = Array(size).fill("data");
var offset = 0;

function processChunk(chunk, cb) {
    chunk.forEach((d) => {
        console.log(d);
    });
    if (offset+1 <= size) cb();
}

function main() {
    console.log("free....");
    setTimeout(() => {
        var chunk = records.slice(offset, offset+cSize);
        offset += cSize;
        processChunk(chunk, main);
    }, 0);
}
main();