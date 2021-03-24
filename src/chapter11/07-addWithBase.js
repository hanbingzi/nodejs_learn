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


