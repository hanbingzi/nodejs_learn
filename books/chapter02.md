## 全局对象

> JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。
在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）
都是 global 对象的属性。  
在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。



###  __filename

包含文件名称的全路径
```javascript
console.log(__filename);
```
### __dirname

文件的路径（不包含文件名称）
```javascript
console.log(__dirname);
```

### 定时函数

定时函数，用法与浏览器中的定时函数类似
```javascript
var timer = setTimeout(function(){
    console.log(123);
},1000);
```
clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器
```javascript

setTimeout(function(){
    clearTimeout(timer);
},2000);
```


