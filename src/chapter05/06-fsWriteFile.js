const fs = require("fs");
const path = require("path");
let strPath = path.join(__dirname,'data.txt');
fs.writeFile(strPath,'基业长青','utf8',(err)=>{
    if(!err){
        console.log('写入成功');
    }
})


