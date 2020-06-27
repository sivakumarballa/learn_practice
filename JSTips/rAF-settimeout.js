// rAF callback will always be xecuted before next repaint (or) rendering browser
// if browser is too busy in doing any task, then rAF will not be executed. In other words, if task queue is not empty, then rAF will not be executed

let c = 1;
var cb = () => {
    console.log("Kumar");
    if (c++ < 100)
        requestAnimationFrame(cb);
};
requestAnimationFrame(cb);

setTimeout(() => {
    var d = document.createElement('div');
    d.style.position = 'absolute';
    d.style.top = '0px';
    d.innerHTML = 'Siva';
    document.body.appendChild(d);

    var start = Date.now();
    while(Date.now() - start <= 3000) {
        var r = Math.floor(Math.random() * 200) + 100;
        d.style.top = `${r}px`
    }
    console.log("Done");
}, 100);


setTimeout(() => {
    console.log("Siva");
}, 0);
let a = 1;
var rCb = () => {
    console.log("Kumar");
    if (a++ < 100)
        requestAnimationFrame(rCb);
};
requestAnimationFrame(rCb);