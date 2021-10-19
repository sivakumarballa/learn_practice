const data = [{
    name: 'Google',
    age: 20,
    city: 'Hyderabad'
}, {
    name: 'Microsoft',
    age: 28,
    city: 'Hyderabad'
}, {
    name: 'Yahoo',
    age: 20,
    city: 'Bangalore'
}, {
    name: 'Google',
    age: 20,
    city: 'Pune'
}];

// approach 3
function groupBy3(data, key) {
    // map, filter, reduce
    return data.reduce(function(acc, obj) {
        const groupKey = obj[key];
        if (!groupKey) return acc;

        if (!acc[groupKey])
            acc[groupKey] = [];

        acc[groupKey].push(obj);
        return acc;
    }, {});
}

// approach 1
function groupBy1(data, key) {
    var result = {};
    for(let i = 0; i<data.length; i++) {
        const obj = data[i];
        const groupKey = obj[key];
        if (!groupKey) continue;

        if(!result[groupKey])
            result[groupKey] = [];

        result[groupKey].push(obj);
    }
    return result;
}


// approach 2
function groupBy2(data, key) {
    var result = {};
    data.forEach(function(obj) {
        const groupKey = obj[key];
        if (!groupKey) return;

        if(!result[groupKey])
            result[groupKey] = [];

        result[groupKey].push(obj);
    });
    return result;
}


// approach 4
function groupBy4(data, key) {
    var result = {};
    data.map(function(obj) {
        const groupKey = obj[key];
        if (!groupKey) return;

        if(!result[groupKey])
            result[groupKey] = [];

        result[groupKey].push(obj);
    });
    return result;
}
console.log(JSON.stringify(groupBy4(data, 'city'), null, 4));