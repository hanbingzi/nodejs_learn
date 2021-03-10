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
