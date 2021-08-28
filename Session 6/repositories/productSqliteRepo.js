
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

exports.update = (product, cb) => {
    const db = config.getDB();
    const updateQuery = `Update Products SET detail='${product.detail}'
    , price='${product.price}' where name='${product.name}'`;
    db.run(updateQuery, err => {
        if (err) {
            console.log(err);
            cb(err);
        } else {
            console.log("Product updated");
            cb();
        }
    })
}

exports.delete = (name, cb) => {
    const db = config.getDB();
    const dquery = `DELETE FROM Products WHERE name='${name}'`;
    db.run(dquery, err => {
        if (err) {
            cb(err);
        } else {
            cb();
        }
    })
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