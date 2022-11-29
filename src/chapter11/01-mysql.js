var mysql = require('mysql2');

async function connectMysql() {
    let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: '',
        //  database: 'test'
    });
    return new Promise((resolve, reject) => {
        connection.connect(err => {
            if (err) reject(err)
            resolve()
        })
    }).then(() => {
        connection.query('show databases', (error, result, fileds) => {
            if (error) throw error
            console.log('mysql:result:', result);
            return result;
        })
    }).catch((reason) => {
        console.log('reason:', reason)
        return reason;
    }).finally(() => {
        connection.end()
    })

}

async function test1() {
    let result = await connectMysql()
    console.log('-------->', result);
}

test1()


// connection.connect();
//
// connection.query('show databases', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results);
//     connection.end();
// });

