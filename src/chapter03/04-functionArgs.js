/*
    函数扩展
    1、参数默认值
    2、参数解构赋值
    3、rest参数
    4、...扩展运算符
*/

// 参数默认值
// function foo(param){
//     let p = param || 'hello';
//     console.log(p);
// }
// foo('hi');

// function foo(param = 'nihao'){
//     console.log(param);
// }
// foo('hello kitty');
// ----------------------------------
// function foo(uname='lisi',age=12){
//     console.log(uname,age);
// }
// foo('zhangsan',13);
// foo();
// 参数解构赋值
// function foo({uname='lisi',age=13}={}){
//     console.log(uname,age);
// }
// foo({uname:'zhangsan',age:15});
// --------------------------------------
// rest参数（剩余参数）
function foo(a,b,...param){
    console.log(a);
    console.log(b);
    console.log(param);
}
foo(1,2,3,4,5);

// 扩展运算符 ...
// function foo(a,b,c,d,e,f,g){
//     console.log(a + b + c + d + e + f + g);
// }
// foo(1,2,3,4,5);
// let arr = [1,2,3,4,5,6,7];
// // foo.apply(null,arr);
// foo(...arr);

// 合并数组
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2];
// console.log(arr3);
