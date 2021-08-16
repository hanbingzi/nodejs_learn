## http调用

http模块可帮助我们访问其他有效的http服务，比如：百度，代码如下
```javascript
const http = require('http');

let options = {
    protocol : 'http:',
    hostname : 'www.baidu.com',
    port : 80,
}

let req = http.request(options,(res)=>{
    let info = '';

    res.on('data',(chunk)=>{
        info += chunk;
    });
    res.on('end',()=>{
        console.log(info);
    });
});

req.end();

```
```text
node 01-http.js
```
执行以上代码：可以看到输出百度首页的html代码
