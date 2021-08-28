
const config = require("../config/sqlite");

exports.add = (product) => {
    const db = config.getDB();
    const insertQuery = `INSERT INTO Products(name, detail, price)
    VALUES('${product.name}', '${product.detail}', '${product.price}')`;
    db.run(insertQuery, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Product inserted");
        }
    });
}

exports.getAll = (cb) => {
    const db = config.getDB();
    const query = "SELECT * FROM Products";
    db.all(query, [], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            cb(rows);
        }
    })
}