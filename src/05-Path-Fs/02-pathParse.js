const path = require("path");

let obj = path.parse(__filename);
console.log(obj);

let objpath = {
    root : 'd:\\',
    dir : 'd:\\qqq\\www',
    base : 'abc.txt',
    ext : '.txt',
    name : 'abc'
};

let strpath = path.format(objpath);
console.log(strpath);
