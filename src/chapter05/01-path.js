const path = require('path');

console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
// 获取文件路径，并去除固定后缀
console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html')); //
//获取文件路径，并去除固定后缀，但文件并不是exe结尾的，因此去除后缀不成功
console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.exe'));
//输出道歉js文件所在路径
console.log(__dirname);
//获取指定文件的路径
console.log(path.dirname('/abc/qqq/www/abc'));
//获取扩展名称
console.log(path.extname('index.html'));
