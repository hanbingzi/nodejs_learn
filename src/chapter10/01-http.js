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
