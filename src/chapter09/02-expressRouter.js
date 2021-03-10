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

app.post('/', function(req, res) {
    // 响应请求
    res.send('post');
});

app.delete('/', function(req, res) {
    // 响应请求
    res.send('delete');
});

app.put('/', function(req, res) {
    // 响应请求
    res.send('put');
});

let server = app.listen(3000, function() {
    // 监听的域名或者IP
    let host = server.address().address;
    // 监听的端口
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
