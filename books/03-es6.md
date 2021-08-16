## es6

### let与const
> [代码：01-letAndConst.js](../src/chapter03/01-letAndConst.js)
#### let
> ES6新增了let命令，用来声明变量。它的用法类似于var，但并不完全相同，区别如下

1. let声明的变量不存在预解析
```javascript
console.log("a=",a)
console.log("b=",b)

let a = 1;
var b = 2;

```
上面代码在代码块之中，分别用let和var声明了两个变量。然后在代码块之外调用这两个变量，
结果let声明的变量报错，var声明的变量返回了正确的值。这表明，let声明的变量只在它所在
的代码块有效。

2. let声明的变量不允许重复（在同一个作用域内）
```javascript
let c = 123;
let c = 456;
console.log(c);
```
执行以上代码，会报如下错误
```text

SyntaxError: Identifier 'c' has already been declared

```

3. ES6引入了块级作用域，块内部使用let定义的变量，在外部是不可以访问的，如果是var定义的，就可以访问
```javascript
if(true){
    var d = 123;
    let e = 123;

}
console.log(d)
console.log(e)

```
#### const

1. const声明一个只读的常量。一旦声明，常量的值就不能改变。
```javascript
const n = 1;
n = 2; //从新给n赋值会报错

const abc;
```
2. const声明的常量必须初始化

```javascript

```

### 赋值
> [代码：02-var.js](../src/chapter03/02-var.js)

1. 多个变量在一行代码中声明
```javascript
 var a = 1;
 var b = 2;
 var c = 3;
//以上代码可以精简为如下：
 var a = 1,b = 2,c = 3;
```

2.  以上赋值还可以按照下列写法：

```javascript
// 数组的解构赋值
// let [a,b,c] = [1,2,3];
// let [a,b,c] = [,123,];

```

3. 下列为一些嵌套结构写法的例子
```javascript
// 对象的解构赋值
// let {foo,bar} = {foo : 'hello',bar : 'hi'};
// let {foo,bar} = {bar : 'hi',foo : 'hello'};

// 对象属性别名(如果有了别名，那么原来的名字就无效了)
// let {foo:abc,bar} = {bar : 'hi',abc : 'nihao'};
// console.log(foo,bar);

console.log(abc,bar);
```
4. 解构赋值允许指定默认值
```javascript
let {foo:abc='hello',bar} = {bar : 'hi'};
```
5. 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量
```javascript
let {cos,sin,random} = Math;
console.log(typeof cos);
console.log(typeof sin);
console.log(typeof random);
```



6. 字符串的解构赋值 

字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
 ```javascript
   const [a, b, c, d, e] = 'hello';
   a // "h"
   b // "e"
   c // "l"
   d // "l"
   e // "o"
```  
类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
```javascript
   let {length : len} = 'hello';
   len // 5
```   

### 字符串
>[代码：03-string.js](../src/chapter03/03-string.js)

es6中字符串扩展了一些非常有用的函数，如下

1. includes() 判断字符串中是否包含指定的字串（有的话返回true，否则返回false）
               参数一：匹配的字串；参数二：从第几个开始匹配
```javascript
console.log('hello world'.includes('world'));    
console.log('hello world'.includes('world',7));      

```
       
2. startsWith()  判断字符串是否以特定的字串开始
```javascript
let url = 'admin/index.php';
console.log(url.startsWith('admin'));
```
3. endsWith()  判断字符串是否以特定的字串结束
```javascript
console.log(url.endsWith('php'));
```
### 模板字符串

1. 字符串声明中，使用```代替`'`,可以兼容回车，表示模板
2. 模板中的内容可以有格式，通过${}方式填充数据
```javascript
let obj = {
    username : 'lisi',
    age : '12',
    gender : 'male'
}
let tag = '<div><span>'+obj.username+'</span><span>'+obj.age+'</span><span>'+obj.gender+'</span></div>';
console.log(tag);
// 反引号表示模板，模板中的内容可以有格式，通过${}方式填充数据
let fn = function(info){
    return info;
}
let tpl = `
    <div>
        <span>${obj.username}</span>
        <span>${obj.age}</span>
        <span>${obj.gender}</span>
        <span>${1+1}</span>
        <span>${fn('nihao')}</span>
    </div>
`;
console.log(tpl);
```

### 函数扩展
> [代码：04-functionArgs.js](../src/chapter03/04-functionArgs.js)
    
1. 参数默认值

ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面
```javascript
function foo(param = 'nihao'){
console.log(param);
}
foo('hello kitty');
foo();

function foo1(uname='lisi',age=12){
    console.log(uname,age);
}
foo1('zhangsan',13);
foo1();

```
       
2、参数解构赋值
```javascript
 // 参数解构赋值
function foo({uname='lisi',age=13}={}){
    console.log(uname,age);
}
foo({uname:'zhangsan',age:15});


```
3. rest参数
ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数
```javascript
function foo(a,b,...param){
    console.log(a);
    console.log(b);
    console.log(param);
}
foo(1,2,3,4,5);
```
4. ...扩展运算符
对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
```javascript
  // 扩展运算符 ...
    function foo(a,b,c,d,e,f,g){
        console.log(a + b + c + d + e + f + g);
    }
    // foo(1,2,3,4,5);
    let arr = [1,2,3,4,5,6,7];
    
    foo(...arr);
    
    // 合并数组
    let arr1 = [1,2,3];
    let arr2 = [4,5,6];
    let arr3 = [...arr1,...arr2];
    console.log(arr3);
```

### 箭头函数
> [代码：05-arrowFunction.js](../src/chapter03/05-arrowFunction.js)

ES6 允许使用“箭头”（=>）定义函数。
```javascript
// function foo(){
//     console.log('hello');
// }
// foo();

 let foo = () => console.log('hello');
 foo();
```
2. 如果箭头函数多个参数，就使用一个圆括号代表参数部分，只有一个参数的情况下，可以省略括号
```javascript
// function foo(v){
//     return v;
// }
 let foo = v => v;
 let ret = foo(111);
 console.log(ret);

// 多个参数必须用小括号包住
let foo1 = (a,b) => {let c = 1; console.log(a + b + c);}
foo1(1,2);

```
3. 箭头函数可以简化回调函数
```javascript
let arr = [123,456,789];
// arr.forEach(function(element,index){
//     console.log(element,index);
// });
arr.forEach((element,index)=>{
    console.log(element,index);
});

```



4. 箭头函数的注意事项：

箭头函数中this取决于函数的定义，而不是调用
```javascript
function foo(){
    // 使用call调用foo时，这里的this其实就是call的第一个参数
     console.log(this);
    setTimeout(()=>{
        console.log(this.num);
    },100);
}
foo.call({num:1});
```

2、箭头函数不可以new
```javascript
let foo = () => { this.num = 123;};
new foo();
```

3、箭头函数不可以使用arguments获取参数列表，可以使用rest参数代替
```javascript
let foo = (a,b) => {
    // console.log(a,b);
    console.log(arguments);//这种方式获取不到实参列表
}
foo(123,456);
let foo = (...param) => {
    console.log(param);
}
foo(123,456 );
```


### 类与继承
> [代码：06-class.js](../src/chapter03/06-class.js)
```javascript
class Animal{
    // 静态方法(静态方法只能通过类名调用，不可以使用实例对象调用)
    static showInfo(){
        console.log('hi');
    }
    // 构造函数
    constructor(name){
        this.name = name;
    }

    showName(){
        console.log(this.name);
    }
}
 let a = new Animal('spike');
 a.showName();
 a.showInfo();
 Animal.showInfo();
// 类的继承extends
class Dog extends Animal{
    constructor(name,color){
        super(name);//super用来调用父类
        this.color = color;
    }

    showColor(){
        console.log(this.color);
    }
}

let d = new Dog('doudou','yellow');
d.showName();
d.showColor();
Dog.showInfo();
```




















