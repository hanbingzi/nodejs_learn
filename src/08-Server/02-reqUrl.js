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
