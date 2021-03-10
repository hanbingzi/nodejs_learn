const http = require('http');
const path = require('path');
const fs = require('fs');
// 根据路径读取文件的内容，并且响应到浏览器端
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
