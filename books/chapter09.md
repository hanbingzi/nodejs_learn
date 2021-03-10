## express
Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。

使用 Express 可以快速地搭建一个完整功能的网站。

Express 框架核心特性：

- 可以设置中间件来响应 HTTP 请求。

- 定义了路由表用于执行不同的 HTTP 请求动作。

- 可以通过向模板传递参数来动态渲染 HTML 页面。

### express安装


安装 Express 并将其保存到依赖列表中：

$ npm install express --save

### 第一个 Express 框架实例
接下来我们使用 Express 框架来输出 "Hello World"。

以下实例中我们引入了 express 模块，并在客户端发起请求后，响应 "Hello World" 字符串。

创建 `01-express.js` 文件，代码如下所示：
```javascript
/*
    Express之HelloWorld
*/
var express = require('express');
var app = express();

// 绑定路由
app.get('/', function(req, res) {
    // 响应请求
    res.send('Hello World!');
});

var server = app.listen(3000, "localhost", function() {
    // 监听的域名或者IP
    var host = server.address().address;
    // 监听的端口
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

```

执行以上代码：

`$ node 01-express.js`
 
应用实例，访问地址为 http://localhost:8081


### 请求和响应
Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。
```javascript
app.get('/', function (req, res) {
   // --
})
```

#### request 和 response 对象的具体介绍：

>Request 对象 - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：

* req.app：当callback为外部文件时，用req.app访问express的实例
* req.baseUrl：获取路由当前安装的URL路径
* req.body / req.cookies：获得「请求主体」/ Cookies
* req.fresh / req.stale：判断请求是否还「新鲜」
* req.hostname / req.ip：获取主机名和IP地址
* req.originalUrl：获取原始请求URL
* req.params：获取路由的parameters
* req.path：获取请求路径
* req.protocol：获取协议类型
* req.query：获取URL的查询参数串
* req.route：获取当前匹配的路由
* req.subdomains：获取子域名
* req.accepts()：检查可接受的请求的文档类型
* req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
* req.get()：获取指定的HTTP请求头
* req.is()：判断请求头Content-Type的MIME类型

> Response 对象 - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：

* res.app：同req.app一样
* res.append()：追加指定HTTP头
* res.set()在res.append()后将重置之前设置的头
* res.cookie(name，value [，option])：设置Cookie
* opition: domain / expires / httpOnly / maxAge / path / secure / signed
* res.clearCookie()：清除Cookie
* res.download()：传送指定路径的文件
* res.get()：返回指定的HTTP头
* res.json()：传送JSON响应
* res.jsonp()：传送JSONP响应
* res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
* res.redirect()：设置响应的Location HTTP头，并且设置状态码302
* res.render(view,[locals],callback)：渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
* res.send()：传送HTTP响应
* res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
* res.set()：设置HTTP头，传入object可以一次设置多个头
* res.status()：设置HTTP状态码
* res.type()：设置Content-Type的MIME类型

### 路由
我们已经了解了 HTTP 请求的基本应用，而路由决定了由谁(指定脚本)去响应客户端请求。

在HTTP请求中，我们可以通过路由提取出请求的URL以及GET/POST参数。

接下来我们扩展 第一个案例，添加一些功能来处理更多类型的 HTTP 请求。
```javascript


```

执行以上代码：
```text
$ node 02-expressRouter.js
```

应用实例，访问地址为 http://127.0.0.1:3000
接下来使用`postman`，通过不同的方法，访问不同的路径

### 静态资源

Express 提供了内置的中间件 `express.static `来设置静态文件如：图片， CSS, JavaScript 等。

你可以使用 `express.static` 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，你可以这么写：
```javascript
app.use('/public', express.static('public'));
```

我们可以到 `public`目录下放些页面，和图片，然后尝试访问

目录如下：
- public/index.html
- public/images/logo.png

html内容如下
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>主页</title>
</head>
<body>
<div>欢迎访问</div>

<img src="./images/car.jpg">
</body>
</html>


```
js内容如下
```javascript
const express = require('express');
const app = express();
// 实现静态资源服务
// use方法的第一个参数可以指定一个虚拟路径
let server = app.use('/public',express.static('public'));
server.listen(3000,()=>{
    console.log('running...');
});


```
```text
node 03-expressStatic.js
```
执行以上代码：

在浏览器中访问 http://127.0.0.1:3000/public/index.html，可以看到页面和图片都加载出来
