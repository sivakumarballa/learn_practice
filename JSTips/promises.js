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