const express = require('express');
const app = express();
// 实现静态资源服务
// use方法的第一个参数可以指定一个虚拟路径
let server = app.use('/public',express.static('public'));
server.listen(3000,()=>{
    console.log('running...');
});
