const path = require('path');
const fs = require('fs');

let spath = path.join(__dirname, 'file.zip');
let dpath = path.join(__dirname, '../', 'file.zip');

let readStream = fs.createReadStream(spath);
let writeStream = fs.createWriteStream(dpath);


// let num = 1;
// readStream.on('data', (chunk) => {
//     num++;
//     writeStream.write(chunk);
// });
//
// readStream.on('end', () => {
//     console.log('文件处理完成' + num);
// });
// -----------------------------------

// pipe的作用直接把输入流和输出流
// readStream.pipe(writeStream);

// ----------------------------------
readStream.pipe(writeStream);
