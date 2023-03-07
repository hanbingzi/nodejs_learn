const path = require('path');
const fs = require('fs');

// 创建目录
// fs.mkdir(path.join(__dirname, 'abc1'), (err) => {
//     console.log(err);
// });

// fs.readdir(__dirname, (err, files) => {
//     files.forEach((item, index) => {
//         fs.stat(path.join(__dirname, item), (err, stat) => {
//             if (stat.isFile()) {
//                 console.log(item, '文件');
//             } else if (stat.isDirectory()) {
//                 console.log(item, '目录');
//             }
//         });
//     });
// });


//let files = fs.readdirSync(__dirname);
// files.forEach((item, index) => {
//     fs.stat(path.join(__dirname, item), (err, stat) => {
//         if (stat.isFile()) {
//             console.log(item, '文件');
//         } else if (stat.isDirectory()) {
//             console.log(item, '目录');
//         }
//     });
// });

// fs.rmdir(path.join(__dirname,'abc'),(err)=>{
//     console.log(err);
// });

fs.rmdirSync(path.join(__dirname,'abc1'));
