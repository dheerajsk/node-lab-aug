

exports.getProducts = (req, res) => {
    res.sendFile('views/list-product.html', {root: './'});
}