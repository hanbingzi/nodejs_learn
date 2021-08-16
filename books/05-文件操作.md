## 文件操作
### 路径
#### 路径操作

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

#### 路径的格式化处理

> 代码 [02-pathParse.js](../src/chapter05/02-pathParse.js)


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
#### 路径其他操作
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
#### 文件状态

fs.state 异步方式判断

> 代码：

[04-fsStat.js](../src/chapter05/04-fsStat.js)
[data.txt](../src/chapter05/data.txt)

1. 判断：
    isFile():判断是否是文件
    isDirectory()：判断是否是目录

2. 文件状态
    atime 文件访问时间
    ctime 文件的状态信息发生变化的时间（比如文件的权限）
    mtime 文件数据发生变化的时间
    birthtime 文件创建的时间

代码如下
```javascript

const fs = require('fs');
console.log("输出顺序：", 1);
fs.stat('./data.txt', (err, stat) => {
    // 一般回调函数的第一个参数是错误对象，如果err为null,表示没有错误，否则表示报错了
    if (err) return;
    if (stat.isFile()) {
        console.log('文件');
    } else if (stat.isDirectory()) {
        console.log('目录');
    }
    console.log(stat);
    /*
    atime 文件访问时间
    ctime 文件的状态信息发生变化的时间（比如文件的权限）
    mtime 文件数据发生变化的时间
    birthtime 文件创建的时间
    */
    console.log("输出顺序：", 2);
});
console.log("输出顺序：", 3);

```
打印结果如下
```text
输出顺序： 1
输出顺序： 3
文件
Stats {
  dev: 2968010757,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: 4096,
  ino: 2251799814425347,
  size: 5,
  blocks: 0,
  atimeMs: 1615196170753.9238,
  mtimeMs: 1615196170753.9238,
  ctimeMs: 1615196170753.9238,
  birthtimeMs: 1615196002637.1934,
  atime: 2021-03-08T09:36:10.754Z,
  mtime: 2021-03-08T09:36:10.754Z,
  ctime: 2021-03-08T09:36:10.754Z,
  birthtime: 2021-03-08T09:33:22.637Z
}
输出顺序： 2

```
补充：同步操作（使用较少）
```javascript
const fs = require('fs');
let ret = fs.statSync('./data.txt');
console.log(ret);

```


#### 读文件

1. 异步方式读文件
```javascript

const fs = require('fs');
const path = require('path');

let strpath = path.join(__dirname,'data.txt');
fs.readFile(strpath,(err,data)=>{
    if(err) return;
    console.log(data.toString());
});
```

如果有第二个参数并且是编码，那么回调函数获取到的数据就是字符串

如果没有第二个参数，那么得到的就是Buffer实例对象

```javascript
fs.readFile(strpath,'utf8',(err,data)=>{
    if(err) return;
    console.log(data);// 此处没有加toString()
});
```
2.

#### 写文件
> 代码 [06-fsWriteFile.js](../src/chapter05/06-fsWriteFile.js)
```javascript

const fs = require("fs");
const path = require("path");
let strPath = path.join(__dirname,'data.txt');
fs.writeFile(strPath,'基业长青','utf8',(err)=>{
    if(!err){
        console.log('写入成功');
    }
})


```

#### 流式拷贝文件
> 代码 [07-fsStream.js](../src/chapter05/07-fsStream.js)

大文件操作（流式操作）

fs.createReadStream(path[, options]):创建读文件流

fs.createWriteStream(path[, options])：创建写文件流

代码如下：
```javascript
const path = require('path');
const fs = require('fs');

let spath = path.join(__dirname, 'file.zip');
let dpath = path.join(__dirname, '../', 'file.zip');

let readStream = fs.createReadStream(spath);
let writeStream = fs.createWriteStream(dpath);


let num = 1;
readStream.on('data', (chunk) => {
    num++;
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log('文件处理完成' + num);
});

```

上述代码可通过流管道`pipe`简写成如下：
```javascript
const path = require('path');
const fs = require('fs');
let spath = path.join(__dirname, 'file.zip');
let dpath = path.join(__dirname, '../', 'file.zip');

let readStream = fs.createReadStream(spath);
let writeStream = fs.createWriteStream(dpath);

readStream.pipe(writeStream);

```

#### 目录操作
>代码：[08-fsDir.js](../src/chapter05/08-fsDir.js)

1. 创建目录
    - fs.mkdir(path[, mode], callback)
```javascript
 fs.mkdir(path.join(__dirname,'abc'),(err)=>{
     console.log(err);
 });
```    
    - fs.mkdirSync(path[, mode])
```javascript
fs.mkdirSync(path.join(__dirname,'abc1'));
```    
2. 读取目录
    - fs.readdir(path[, options], callback)
```javascript
fs.readdir(__dirname, (err, files) => {
    files.forEach((item, index) => {
        fs.stat(path.join(__dirname, item), (err, stat) => {
            if (stat.isFile()) {
                console.log(item, '文件');
            } else if (stat.isDirectory()) {
                console.log(item, '目录');
            }
        });
    });
});
```    
    - fs.readdirSync(path[, options])
```javascript
let files = fs.readdirSync(__dirname);
files.forEach((item, index) => {
    fs.stat(path.join(__dirname, item), (err, stat) => {
        if (stat.isFile()) {
            console.log(item, '文件');
        } else if (stat.isDirectory()) {
            console.log(item, '目录');
        }
    });
});
```    
3. 删除目录
    - fs.rmdir(path, callback)
```javascript
fs.rmdir(path.join(__dirname,'abc'),(err)=>{
    console.log(err);
});

```    
    - fs.rmdirSync(path)
```javascript
fs.rmdirSync(path.join(__dirname,'abc1'));
```









