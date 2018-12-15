function loadScript(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Script load error: " + src));

        document.head.appendChild(script);
    })
}

loadScript("/one.js")
    .then((script) => {
        return loadScript("/two.js");
    })
    .then((script) => {
        return loadScript("/three.js");
    });

Promise.reject(10).catch((e) => {
    Promise.resolve(20);
});

Promise.reject(10).catch((e) => {
    return Promise.resolve(20);
});

Promise.reject(10).catch((e) => {
    return new Promise((resolve, reject) => {
        resolve(Promise.resolve(20));
    })
})
