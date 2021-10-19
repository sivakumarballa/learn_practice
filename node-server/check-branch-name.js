function validRef (name, onelevel) {
    if (typeof name !== 'string') {
        throw new TypeError('Reference name must be a string');
    }

    const bad = /(^|[/.])([/.]|$)|^@$|@{|[\000-\037\177 ~^:?*[\\]|\.lock(\/|$)/;
    return !bad.test(name) && (!!onelevel || name.includes('/'))
}

function validBranch (name) {
    const bad = /^(-|HEAD$)/
    return validRef(name, true) && !bad.test(name)
}

console.log(validBranch(process.argv[2]));