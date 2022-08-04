var con=require('./createConnection')

//--Updating Database
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE customers SET address = 'Jamnagar' WHERE name = 'Apurva Ji'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });






//Deleting a record form Database

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customers WHERE name = 'Priyeshwar'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });


//Fetching a Single Data from Database

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE name = 'Vivek Ji'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//-->Fetching All Data from Database

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });





//--->inserting data into table
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES  ('Priyeshwar','Mirzapur')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

//-->Code to create a table

// con.connect((err)=>{
//   if(err) throw err
//   console.log("Connected")
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql,(err,result)=>{
//     if(err) throw err
//     console.log("Table Created")
//   })
// })
