const path = require('path');

// 判断是否为绝对路径
console.log(path.isAbsolute('/foo/bar'));
console.log(path.isAbsolute('C:/foo/..'));

// 拼接路径（..表示上层路径；.表示当前路径）,在连接路径的时候会格式化路径
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '../../'));

// 规范化路径
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));

// 计算相对路径
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'));

// 解析路径
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

// 两个特殊属性
console.log(path.delimiter);  //环境变量分隔符(windows中使用; linux中使用:)
console.log(path.sep);//表示路径分隔符（windows是\ Linux是/）
