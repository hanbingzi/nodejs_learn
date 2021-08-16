## web服务

### nodejs的web服务
#### http
>代码：[01-server.js](../src/chapter08/01-server.js)

Node.js 提供了 http 模块，http 模块主要用于搭建 HTTP 服务端和客户端，使用 HTTP 服务器或客户端功能必须调用 http 模块，代码如下：
```javascript
const http = require('http');
```

以下是演示一个最基本的 HTTP 服务器架构(使用 8080 端口)，创建 `01-server.js` 文件
```javascript
const http = require('http');
// 创建服务器实例对象
let server = http.createServer();
// 绑定请求事件
server.on('request',(req,res)=>{
    res.end('hello');
});
// 监听端口
server.listen(8080);

```
以上代码可以改为回调方式，代码如下
```javascript

http.createServer((req,res)=>{
    res.end('ok');
}).listen(3000,'localhost',()=>{
    console.log('running...');
});
```

#### 处理访问路径
> 代码：[02-reqUrl.js](../src/chapter08/02-reqUrl.js)

通过`req.url`可以获取访问路径，从而进行一些列处理
```javascript
const http = require('http');
http.createServer((req,res)=>{
    // req.url可以获取URL中的路径（端口之后部分）
    // res.end(req.url);
    if(req.url.startsWith('/index')){
        // write向客户端响应内容,可以写多次
        res.write('index');
        // end方法用来完成响应，只能执行一次
        res.end();
    }else if(req.url.startsWith('/about')){
        res.end('about');
    }else{
        res.end('no content');
    }
}).listen(3000,'localhost',()=>{
    console.log('running...');
});

```

### html

> 代码：[03-html.js](../src/chapter08/03-html.js)

可以使用fs将项目中的静态html读到，然后在将文件内容输出，就达到了静态资源服务器的效果，上述代码，我们可以优化成如下
```javascript
const http = require('http');
const path = require('path');
const fs = require('fs');
let readFile = (url,res) => {
    fs.readFile(path.join(__dirname,'html',url),'utf8',(err,fileContent)=>{
        if(err){
            res.end('404');
        }else{
            res.end(fileContent);
        }
    });
}

http.createServer((req,res)=>{
    readFile(req.url,res);
}).listen(3000,'localhost',()=>{
    console.log('running...');
});
```

### 获取请求参数

#### get

可以通过路径解析，从而获取请求参数，代码如下

```javascript
const http = require('http');
const path = require('path');
const url = require('url');

http.createServer((req,res)=>{
    let obj = url.parse(req.url,true);
    console.log(obj)
    res.end(obj.query.username + '=========' + obj.query.password);
}).listen(3000,()=>{
    console.log('running....');
})

```
然后在浏览器中打开：`http://localhost:3000?username=a&password=b`。

#### post

post参数需要从请求的body中解析，代码如下：
```javascript
/*
    post参数处理
*/
const querystring = require('querystring');
const http = require('http');

http.createServer((req,res)=>{
    if(req.url.startsWith('/login')){
        let pdata = '';
        req.on('data',(chunk)=>{
            // 每次获取一部分数据
            pdata += chunk;
        });

        req.on('end',()=>{
            // 这里才能得到完整的数据
            console.log(pdata);
            let obj = querystring.parse(pdata);
            res.end(obj.username+'-----'+obj.password);
        });
    }
}).listen(3000,()=>{
    console.log('running...');
})
```

### 登录案例

1. 创建文件夹`view`,专门用来存储html，在`view`文件夹下创建`login.html`，内容如下
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<form action="http://localhost:3000/login" method="post">
    用户名：<input type="text" name="username"><br>
    密码：<input type="password" name="password"><br>
    <input type="submit" value="提交">
</form>
</body>
</html>

```
2. 编写登录代码，如下
```javascript
/*
    登录验证功能
*/
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');


let readFile = (url,res) => {
    fs.readFile(path.join(__dirname,url),'utf8',(err,fileContent)=>{
        if(err){
            res.end('404');
        }else{
            res.end(fileContent);
        }
    });
}

http.createServer((req,res)=>{
    // 启动静态资源服务
    if(req.url.startsWith('/view')){
        readFile(req.url,res);
    }
    console.log(req.url);
    // 动态资源
    if(req.url.startsWith('/login')){
        // get请求
        if(req.method == 'GET'){
            let param = url.parse(req.url,true).query;
            if(param.username == 'admin' && param.password == '123'){
                res.end('get success');
            }else{
                res.end('get failure');
            }
        }
        // post请求
        if(req.method == 'POST'){
            let pdata = '';
            req.on('data',(chunk)=>{
                pdata += chunk;
            });
            req.on('end',()=>{
                let obj = querystring.parse(pdata);
                if(obj.username == 'admin' && obj.password == '123'){
                    res.end('post success');
                }else{
                    res.end('post failure');
                }
            });
        }
    }

}).listen(3000,()=>{
    console.log('running....');
});

```
