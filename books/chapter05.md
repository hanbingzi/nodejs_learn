## 文件操作

### 路径操作

> 代码 [01-path.js](../src/chapter05/01-path.js)

1. 获取文件名称
```javascript
const path = require('path');

// 获取路径的最后一部分
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
```
输出结果为:
```text
quux.html
quux
quux.html
D:\DevelopData\MyGitHub\nodejs_learn\src\chapter05
/abc/qqq/www
.html


```

### 路径的格式化处理

> 代码 [02-path-parse.js](../src/chapter05/02-path-parse.js)


1. path.parse()  将字符串路径转换为对象(string->obj)

代码如下：
```javascript
let obj = path.parse(__filename);
console.log(obj);
```
输出结果
```text
{
  root: 'D:\\',
  dir: 'D:\\DevelopData\\MyGitHub\\nodejs_learn\\src\\chapter05',
  base: '02-path-parse.js',
  ext: '.js',
  name: '02-path-parse'
}

```

2. path.format() 经路径对象转换为字符串(obj->string)
代码如下：
```javascript

let objpath = {
    root : 'd:\\',
    dir : 'd:\\qqq\\www',
    base : 'abc.txt',
    ext : '.txt',
    name : 'abc'
};

let strpath = path.format(objpath);
console.log(strpath);
```
输出结果
```text
d:\qqq\www\abc.txt
```
### 路径其他操作
> 代码 [03-path.js](../src/chapter05/03-path.js)
```javascript
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
```

### 文件操作



