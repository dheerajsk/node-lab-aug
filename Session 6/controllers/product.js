
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
    var id = req.query.id;
    dbRepo.get(id, (product) => {
        res.render('update-product', { product: product });
        res.end();
    })
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
    const product = new Product(req.body.name, req.body.detail, req.body.price, req.body.id);
    dbRepo.update(product, () => {
        dbRepo.getAll((products) => {
            res.render('list-product', { products: products });
        })
    })
}

exports.delete = (req, res) => {
    const id = req.query.id;
    dbRepo.delete(id, () => {
        dbRepo.getAll((products) => {
            res.render('list-product', { products: products });
        })
    });
}