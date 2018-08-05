var getUser = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve({ password: "123456", username: "sivakumar", userid: 1 });
            reject("Error");
        }, 2000);
    });
}

var getPassword = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("123456");
        }, 2000);
    });
}

var getUserName = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("sivakumar");
        }, 2000);
    });
}

getUserName().then(function (username) {
    return username;
}).then(function (username) {
    console.log(username);
    return username;
}).then(function(username) {
    console.log(username);
    return getUser().then(function(user) {
        console.log(user);
    }).catch(function(err) {
        console.log(err);
        return getPassword();
    })
}).then(function(user) {
    console.log(user);
}).then(function(user) {
    console.log(user);
}).catch(function(err) {
    console.log(err);
})

