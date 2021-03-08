// let声明的变量不存在预解析
// console.log("a=",a)
// console.log("b=",b)
//
// let a = 1;
// var b = 2;

// let声明的变量不允许重复（在同一个作用域内）
// let c = 123;
// let c = 456;
// console.log(c);


// ES6引入了块级作用域
// 块内部定义的变量，在外部是不可以访问的
if(true){
    var d = 123;
    let e = 123;

}
console.log(d)
console.log(e)

const n = 1;
//n = 2;

//const abc;
