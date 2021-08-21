
const Product = require("../models/product");

exports.getProducts = (req, res) => {
    // res.sendFile('views/list-product.html', {root: './'});
    res.render('list-product', {products: Product.getAll()})
}

exports.getAddForm =(req, res)=>{
    res.render('add-product');
    res.end();
}

exports.add = (req, res)=>{
    const product = new Product(req.body.name, req.body.detail, req.body.price);
    product.add();
    res.render('list-product', {products: Product.getAll()});
}