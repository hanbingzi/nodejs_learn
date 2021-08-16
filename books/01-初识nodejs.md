# 初识Node.js


## Node.js介绍

> Node.js 是一种建立在Google Chrome’s v8 engine上的 non-blocking (非阻塞）, event-driven （基于事件的） I/O平台. 
Node.js平台使用的开发语言是JavaScript，平台提供了操作系统低层的API，方便做服务器端编程，具体包括文件操作、进程操作、通信操作等系统模块

## Node.js开发环境准备

1. 访问[官方网站](https://nodejs.org/zh-cn/),下载nodejs安装包
2. windows下双击，不断点击`下一步`即可安装
3. 在cmd中使用命令`node -v`,正常输出，则node安装正常



## hello world
1. 在项目根目录下，新建目录`src`，在`src`下，新建`chapter01`，用于存放第一章节的代码，
2. 在`chapter01`目录下，新建`helloWorld.js`,目录结构如下
```
nodejs_learn
│
├──  src
│	└── chapter01.js
│      └───helloWorld.js       
└── 
	
```
2. `helloWorld.js`内容如下
```javascript
console.log("hello world")
```
3. 在当前js目录下，打开`terminal`终端，运行命令`node helloWorld.js`
4. 正常输出`hello world`



