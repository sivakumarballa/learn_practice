const args = process.argv;
let str = args.slice(2)[0];
var camelize = (str) => {
    return str.replace(/\W+(.)/g, (match, chr) => {
        return chr.toUpperCase();
    });
}

console.log(str);
console.log(camelize(str));