const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017';

//CRUD = Create - Read - Update - Delete

// 1- connect to database
// 2- Perform the desired operation
// 3- Close database connection

mongoDBClient.connect(url, (operationError, dbHandler)=>{
    if (operationError){
        console.log("An error has occured during the connection process");
    } else {
        console.log("Connected to the database")
    }
 });