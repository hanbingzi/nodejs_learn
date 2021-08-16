## 模块化


在计算机程序的开发过程中，随着程序代码越写越多，在一个文件里代码就会越来越长，越来越不容易维护。

为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在Node环境中，一个.js文件就称之为一个模块（module）。

### 使用模块有什么好处？

最大的好处是大大提高了代码的可维护性。其次，编写代码不必从零开始。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括Node内置的模块和来自第三方的模块。

使用模块还可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己在编写模块时，不必考虑名字会与其他模块冲突。

###  前端标准的模块化规范：

2. es6模块化 -es6
3. AMD - requirejs
4. CMD - seajs

###  后端标准的模块化规范
1. CommonJS -nodejs

node.js 应用由模块组成，采用 CommonJS 规范，通过全局方法 require 来加载模块

### 模块化相关的规则：
1. 如何定义模块：一个js文件就是一个模块，模块内部的成员都是相互独立
2. 模块成员的导出和引入

### 模块成员的导出最终以module.exports为准

如果要导出单个的成员或者比较少的成员，一般我们使用exports导出；

如果要导出的成员比较多，一般我们使用module.exports的方式，这两种方式不能同时使用。

### exports

#### 导出单个
> 代码
* [01-exportsOne.js](../src/chapter04/01-exportsOne.js)
* [02-require.js](../src/chapter04/02-require.js)

1.导出sum函数
```javascript

var sum = function(a,b){
    return parseInt(a) + parseInt(b);
}

// 导出模块成员
exports.sum = sum;
```
2.导入`01-exports-one.js`模块，并使用
```javascript
const module01 = require('./01-exportsOne.js');

let ret = module01.sum(12,13);

console.log(ret)
```
#### 同时导出多个函数
> 代码
* [03-exportsMulti.js](../src/chapter04/03-exportsMulti.js)
* [04-requireMulti.js](../src/chapter04/04-requireMulti.js)

1.导出多个函数
```javascript
let sum = function (a, b) {
    return parseInt(a) + parseInt(b);
}
let subtract = function (a, b) {
    return parseInt(a) - parseInt(b);
}
let multiply = function (a, b) {
    return parseInt(a) * parseInt(b);
}
let divide = function (a, b) {
    return parseInt(a) / parseInt(b);
}

// 导出成员
exports.sum = sum;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;

```
2. 导入多个函数
```javascript
const module03 = require('./03-exportsMulti.js');

let ret1 = module03.sum(1,2)
let ret2 = module03.subtract(2,1)
let ret3 = module03.multiply(2,2)
let ret4 = module03.divide(8,2)

console.info(ret1);
console.info(ret2);
console.info(ret3);
console.info(ret4);

```

### module-exports
#### module导出单个
> 代码
* [05-moduleExports.js](../src/chapter04/05-moduleExports.js)
* [06-moduleRequire.js](../src/chapter04/06-moduleRequire.js)

1.导出单个
```javascript
// 导出成员的另一种方式
module.exports = function(){
    console.log('hello');
};

```
2.调用导出的函数
```javascript
let module05 = require('./05-moduleExports');

module05();
```

#### module同时导出多个
> 代码
* [07-moduleExportsMulti.js](../src/chapter04/07-moduleExportsMulti.js)
* [08-moduleRequireMulti.js](../src/chapter04/08-moduleRequireMulti.js)


1.导出单个
```javascript
const module07 = require("./07-moduleExportsMulti")

let ret1 = module07.sum(1,2)
let ret2 = module07.subtract(2,1)
let ret3 = module07.multiply(2,2)
let ret4 = module07.divide(8,2)

console.info(ret1);
console.info(ret2);
console.info(ret3);
console.info(ret4);


```
2.调用导出的函数
```javascript
const module07 = require("./07-moduleExportsMulti")

let ret1 = module07.sum(1,2)
let ret2 = module07.subtract(2,1)
let ret3 = module07.multiply(2,2)
let ret4 = module07.divide(8,2)

console.info(ret1);
console.info(ret2);
console.info(ret3);
console.info(ret4);


```

### 导入json文件
> 代码

* [09-data.json](../src/chapter04/09-data.json)
* [10-fileRequire.js](../src/chapter04/10-fileRequire.js)
1. 新建文件`09-data.json`，内容如下
```json
{
  "username":"张三",
  "age":"12"
}

```
2. 导入文件
```javascript
const data = require("./09-data.json");
console.log(data)
console.log(data.username)

```









