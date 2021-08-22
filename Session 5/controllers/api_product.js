
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

exports.update = ((req, res) => {
    const product = new Product
        (req.body.name, req.body.detail, req.body.price);
    Product.update(product);
    res.send(Product.get(product.name));
});

exports.delete = ((req, res) => {
    const name = req.query.name;
    Product.delete(name);
    res.send();
})