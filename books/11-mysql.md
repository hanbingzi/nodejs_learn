## mysql调用

npm安装mysql依赖
```text
npm install mysql
```


### 连接数据库
在mysql数据库上新建一个`test`数据库，用来测试我们的nodejs代码

在以下实例中根据你的实际配置修改数据库用户名、及密码及数据库名：
```javascript

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});


```

执行
```text
node  01-mysql.js

```
结果如下
```text
The solution is:  2

```

### crud
在`test`数据库中，新建表，sql如下
```sql
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(40) ,
  `age` int(4) NOT NULL,
   `password` varchar(255) ,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET=utf8;

```

#### 新增数据

代码如下
```javascript
var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    port: '3306',
    database: 'test'
});
connection.connect();

var  addSql = 'INSERT INTO user(username,age,password) VALUES(?,?,?)';
var  addSqlParams = ['hanbingzi', '30','123456'];
//增
connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------INSERT----------------------------');
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();

```
执行代码
```text
node .\02-add.js
```
结果如下
```text
--------------------------INSERT----------------------------
INSERT ID: OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 1,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}
-----------------------------------------------------------------

```

#### 查询

代码如下
```javascript
var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    port: '3306',
    database: 'test'
});

connection.connect();

var  sql = 'SELECT * FROM user';
//查
connection.query(sql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

connection.end();



```

#### 修改数据
代码如下
```javascript

var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    port: '3306',
    database: 'test'
});

connection.connect();

var modSql = 'UPDATE user SET age = ? WHERE id = ?';
var modSqlParams = [31,1];
//改
connection.query(modSql,modSqlParams,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();

```

#### 删除数据
代码如下
```javascript
var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    port: '3306',
    database: 'test'
});

connection.connect();

var delSql = 'DELETE FROM user where id=1';
//删
connection.query(delSql,function (err, result) {
    if(err){
        console.log('[DELETE ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();


```

### 封装mysql方法
封装代码如下
```javascript

const mysql = require('mysql');

exports.base = (sql,data,callback) => {
    // 创建数据库连接
    const connection = mysql.createConnection({
        host: 'localhost', // 数据库所在的服务器的域名或者IP地址
        user: 'root', // 登录数据库的账号
        password: '123456', // 登录数据库的密码
        database: 'test' // 数据库名称
    });
    // 执行连接操作
    connection.connect();

    // 操作数据库(数据库操作也是异步的)
    connection.query(sql,data, function(error, results, fields) {
        if (error) throw error;
        callback(results);
    });
    // 关闭数据库
    connection.end();
}

```
调用代码
```javascript

const db = require('./06-mysqlBase');

let insertSql = 'INSERT INTO user(username,age,password) VALUES(?,?,?)';
let insertParams = ['hanbingzi', '30', '123456'];

db.base(insertSql, insertParams, (result) => {

    console.log('--------------------------INSERT----------------------------');
    console.log('INSERT ID:', result);
    console.log('-----------------------------------------------------------------\n\n');
    let id = result.insertId;
    console.log(id);
    if (id) {
        let querySql = 'SELECT * FROM user where id=?';
        let insertParams = [id];

        db.base(querySql, insertParams, (result) => {
            console.log('--------------------------SELECT----------------------------');
            console.log(result);
            console.log('------------------------------------------------------------\n\n');
        })
    }
});

```

