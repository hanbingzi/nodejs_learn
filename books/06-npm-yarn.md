## 包管理
    
    ------------------------------------------------------------
 ###   npm常用的命令：
* npm init 初始化项目
    - npm init -y 使用默认参数初始化
* npm install 项目初始化，前提是有package.json    
* 安装包（如果没有指定版本号，那么安装最新版本）
    - npm install -g 包名称 (全局安装)
    - npm install 包名称 (本地安装)
```text
全局安装的包位于Node.js环境的node_modules目录下，全局安装的包一般用于命令行工具
本地安装的包在当前目录下的node_modules里面，本地安装的包一般用于实际的开发工作
```  

* 安装包的时候可以指定版本
    - npm install -g 包名称@版本号

* 卸载包
    - npm uninstall -g 包名

* 更新包（更新到最新版本）
    - npm update -g 包名
    
* 参数
    - 开发环境（平时开发使用的环境）
    - 生产环境（项目部署上线之后的服务器环境）
    - --save 向生产环境添加依赖 dependencies
    - --save-dev 向开发环境添加依赖 DevDependencies 


### yarn工具基本使用

安装yarn工具：npm install -g yarn

1. yarn init 初始化包 
2. yarn add xxx 安装包
3. yarn remove xxx 移除包
5. yarn upgrade xxx 更新包
6. yarn add xxx --dev 安装开发依赖的包
6、yarn global add xxx 全局安装    
7、yarn config set registry url 设置下载镜像的地址
8、yarn install 安装所有依赖
9、yarn run 执行包
        
