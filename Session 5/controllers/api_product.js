
const Product = require("../models/product");

exports.get = ((req, res) => {
    res.send(Product.getAll());
});

exports.add = ((req, res) => {
    const product = new Product
        (req.body.name, req.body.detail, req.body.price);
    product.add();
    res.send(Product.get(req.body.name));
});