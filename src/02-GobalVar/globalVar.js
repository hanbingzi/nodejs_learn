//包含文件名称的全路径
console.log(__filename)

//文件的路径（不包含文件名称）
console.log(__dirname)

// 定时函数，用法与浏览器中的定时函数类似
var timer = setTimeout(function(){
    console.log(123);
},1000);

setTimeout(function(){
    clearTimeout(timer);
},2000);
