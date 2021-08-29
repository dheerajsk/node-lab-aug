
const db = require("../config/mongodb");

exports.add = (product, callback) => {
    const collection = db.getCollection();
    collection.insertOne({ name: product.name, detail: product.detail, price: product.price })
        .then(() => {
            callback();
        });
}