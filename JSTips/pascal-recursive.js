/*

                    1
                1       1
            1       2       1
        1       3       3       1
    1       4       6       4       1
1       5       10      10      5       1

*/

var memoizer = function (memo, formula) {
    var recur = function () {
        let i = arguments[0];
        if (arguments.length > 1) {
            i = [].join.call(arguments, ",");
        }

        var result = memo[i];
        if (typeof result !== 'number') {
            result = formula(recur, ...arguments);
            memo[i] = result;
        }
        return result;
    };
    return recur;
};

var pascal = memoizer({}, function(recur, row, col) {
    if (col === 1 || col === row) {
        result =  1;
    } else {
        result = recur(row-1, col-1) + recur(row-1, col);
    }
    return result;
});

let args = process.argv.slice(2);
// console.log(parcal(+args[0], +args[1]));

var printSpaces = function(n) {
    Array(n).fill("").forEach(() => process.stdout.write("  "));
}

for(let i = 1; i <= args[0]; i++) {
    printSpaces(args[0] - i);
    for (let j = 1; j <= i; j++) {
        process.stdout.write("" + pascal(i, j));
        printSpaces(2);
        process.stdout.write("\b");
    }
    console.log("");
}