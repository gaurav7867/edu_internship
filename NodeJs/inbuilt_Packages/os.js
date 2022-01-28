var os = require('os');
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.hostname());
console.log(os.freemem());

const freemem = os.freemem();
console.log(`${freemem/1024/1024/1024}`);


// Shortcut Ctrl + shift + escape

const totalMem = os.totalmem();
console.log(`${totalMem/1024/1024/1024}`);

console.log(os.type());
