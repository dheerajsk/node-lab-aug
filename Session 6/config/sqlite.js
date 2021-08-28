const sqlite = require('sqlite3');
const path = require("path");

const dbPath = path.join(__dirname, "data", "prodcut.db");
var productDB;
exports.connect = () => {
    productDB = new sqlite.Database(dbPath, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to Sqlite DB");
        }
    });
}

function createTable() {
    const query = "CREATE TABLE IF NOT EXISTS Products(name varchar, detail text, price integer)";
    productDB.run(query, (err) => {
        if (err) {
            console.log(err);
        }else{
            console.log("Products table is created");
        }
    })
}

exports.getDB = () => {
    createTable();
    return productDB;
}