## 第一个npm项目
#### 初始化项目
1. 新建chapter06目录
2. 打开终端，进入chapter06目录
3. 初始化项目
```
npm init -y
```
#### 使用模板
art-template
```text
art-template 是一个简约、超快的模板引擎。
它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 
极限的运行性能，并且同时支持 NodeJS 和浏览器。
```
1. 使用npm安装art-template模板
```text
npm install --save-dev  art-template

```
2. 可以看到目录下多了node_modules文件夹，此文件夹就是用来存储下载的第三方包

#### 编辑模板
新建user.art文件，内容如下
```text
<h2>{{name}}</h2>
<h2>{{age}}</h2>
```
#### 编辑代码
新建index.js，内容如下
```javascript
const template = require('art-template');
const html = template(__dirname + '/user.art', {
    name: '张三',
    age: 19
});
console.log(html);
```

#### 运行
运行如下命令：
```text
node .
```
输出如下：
```text
<h2>张三</h2>
<h2>19</h2>

```



