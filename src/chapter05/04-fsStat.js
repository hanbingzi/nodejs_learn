const fs = require('fs');
console.log("输出顺序：", 1);
fs.stat('./abc.txt', (err, stat) => {
    // 一般回调函数的第一个参数是错误对象，如果err为null,表示没有错误，否则表示报错了
    if (err) return;
    if (stat.isFile()) {
        console.log('文件');
    } else if (stat.isDirectory()) {
        console.log('目录');
    }
    console.log(stat);
    /*
    atime 文件访问时间
    ctime 文件的状态信息发生变化的时间（比如文件的权限）
    mtime 文件数据发生变化的时间
    birthtime 文件创建的时间
    */
    console.log("输出顺序：", 2);
});
console.log("输出顺序：", 3);

