const express = require('express');
const sql = require('mysql')
const cors = require('cors')
// express ==> Its a framework of Node js and used to create servers and backend functionalities. 
// NPM ==> Node Package Manager
const app = express()
app.use(express.json())
// Types of Request
// 1. get => Used to take information from the server and database
// 2. post ==> Used to send information to the server and database.


app.use(cors({origin:"*"}))
// database connection

var db = sql.createConnection({
    host:'localhost',
    user:'root',
    password:'Password',
    database:'paris_trip'
})

db.connect(()=>{
    console.log("Database Connected")
})



//Routes ==> Using routes we tell the server that i Need this specific information.
// Goal is to store the data into database
app.post('/contact',(req,res)=>{
// req ==> request
// res ==> response

// Here we get the data from the post request and store it in variables.
var {name,email,message} = req.body; 
console.log(name,email,message)
db.query(`
insert into contact(PersonName, Email, Message)
value(
    '${name}',
    '${email}'
    '${message}'
)
`,(rows,err,fields)=>{
    if(err){
        res.send(500)
    }                                                                                                                                                                                                                                      
    else{
        res.json({"message":"Data Inserted successfully","data":rows})
    }
})
 




    
})


app.listen(8080,()=>{
    console.log("Server is started at port 8080")
})



// Homework

// Write a SQL query to store following data to table "contact"
// Name: Anishka
// Email : anishka001@gmail.com
// message : "I am learning backend development"

