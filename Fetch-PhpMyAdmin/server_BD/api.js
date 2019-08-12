const express = require ('express'),
      mysql= require('mysql'),
      app = express(),
      bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
//Запрос createConnection
// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'myTestBD'
// });

//
// connection.connect( function (error) {
//     if(!!error) {
//         console.log('Error')
//     } else {
//         console.log('Connected')
//     }
//
// });

// app.get ('/users', function (req,res) {
//     connection.query(`SELECT * FROM mytable`,  (error, result, fields) => {
//
//
//         if(!!error) {
//             console.log('Error in the query');
//         } else {
//             console.log('SUCESS!\n');
//             console.log(result[0].login);
//             res.send('Hello, ' + result[0].login)
//             // res.send(result)
//         }
//     });
// });

//Запросы с createPool
var connection = mysql.createPool({
    connectionLimit: 50,
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'myTestBD',
    multipleStatements: true
});
//Get запрос
app.get ('/', function (req,res) {
   connection.getConnection(function (error, tempCont) {
       if(!!error) {
           connection.release();
           console.log('Error');
       } else {
           console.log('connected');
           tempCont.query("SELECT * FROM `mytable`", function (error,rows,fields) {
               tempCont.release();
               if(!!error) {
                   console.log('Error in the query')
               } else {
                       res.send(`Hello ${rows[0].login}`);
               }
           })
       }
   })
});


// Динамический запрос по получению user по id
app.get ('/users/:id', (req,res) => {
    const id = req.params.id;
    connection.getConnection(function (error, tempCont) {
        if(!!error) {
            connection.release();
            console.log('Error');
        } else {
            console.log('connected');
            tempCont.query(`SELECT * FROM mytable WHERE id = ?`,id,(error,result,fields) =>{
                tempCont.release();
                if(!!error) {
                    console.log('Error in the query')
                } else {
                   res.send(result);
                    console.log(result)
                }
            })
        }
    })
});
//Удаление user по id в url
app.delete ('/users/:id', (req,res) => {
    const id = req.params.id;
    connection.getConnection(function (error, tempCont) {
        if(!!error) {
            connection.release();
            console.log('Error');
        } else {
            console.log('connected');
            tempCont.query(`DELETE  FROM mytable WHERE id = ?`,id,(error,result,fields) =>{
                tempCont.release();
                if(!!error) {
                    console.log('Error in the query')
                } else {
                    res.send('Deleted succsessfully');
                    console.log(result)
                }
            })
        }
    })
});


//post запрос добовляем пользователеф с формы
app.post ('/users', (req,res) => {
    let emp = req.body;
    connection.getConnection(function (error, tempCont) {
        if(!!error) {
            connection.release();
            console.log('Error');
        } else {
            console.log('connected');
            tempCont.query(`INSERT  INTO mytable SET ?`,emp,(error,result,fields) =>{
                tempCont.release();
                if(!!error) {
                    console.log('Error in the query');
                    console.log(emp)
                } else {
                    res.status(201).send(`User added with ID: ${result.insertId}`);
                }
            })
        }
    })
});

// Put запрос изменяем пользователя с id url
app.put ('/users/:id', (req,res) => {
    let emp = req.body;
    const id = req.params.id;
    connection.getConnection(function (error, tempCont) {
        if(!!error) {
            connection.release();
            console.log('Error');
        } else {
            console.log('connected');
            tempCont.query(`UPDATE mytable SET ? WHERE id = ?`,[emp,id],(error,result,fields) =>{
                tempCont.release();
                if(!!error) {
                    console.log('Error in the query');
                    console.log(emp)
                } else {
                    res.send(`User updated successfully.`);
                }
            })
        }
    })
});

app.listen(9999);

// Что бы запустить сервер нажимаем node api.js
// Что сервер работал при изминениях без перезагрузки устанавливаем nodemon
//Использовала postman программу для put и delete запросов, для post используется форма
//Базу данных создавала с помощью phpMyAdmin