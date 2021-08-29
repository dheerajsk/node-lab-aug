
const Product = require("../models/product");
const dbRepo = require("../repositories/productMongoDBRepo");

exports.getProducts = (req, res) => {
    dbRepo.getAll((products) => {
        res.render('list-product', { products: products });
    })
}

exports.getAddForm = (req, res) => {
    res.render('add-product');
    res.end();
}

exports.getUpdateForm = (req, res) => {
    var name = req.query.name;
    var product = Product.get(name);
    res.render('update-product', { product: product });
    res.end();
}

exports.add = (req, res) => {
    const product = new Product
        (req.body.name, req.body.detail, req.body.price);
    dbRepo.add(product, () => {
        dbRepo.getAll((products) => {
            res.render('list-product', { products: products });
        })
    });
}

exports.update = (req, res) => {
    const product = new Product(req.body.name, req.body.detail, req.body.price);
    Product.update(product);
    res.render('list-product', { products: Product.getAll() });
}

exports.delete = (req, res) => {
    const name = req.query.name;
    Product.delete(name);
    res.render('list-product', { products: Product.getAll() });
}