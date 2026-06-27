const mysql = require("mysql2");

const db = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "123654",

    database: "mini_crm"

});

db.connect((err)=>{

    if(err){

        console.log(err);

    }else{

        console.log("MySQL Connected");

    }

});

module.exports = db;