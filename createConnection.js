const mysql=require('mysql')

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"productsDB"
})

module.exports=con