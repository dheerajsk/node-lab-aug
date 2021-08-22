const products = [];

module.exports = class Product {
    constructor(name, detail, price) {
        this.name = name;
        this.detail = detail;
        this.price = price;
    }

    static getAll() {
        return products;
    }

    static get(name) {
        return products.find(p => p.name == name);
    }

    static update(product) {
        const productToUpdateIndex = products.findIndex(p => p.name == product.name);
        products[productToUpdateIndex] = product;
    }

    static delete(name) {
        const productToDeleteIndex = products.findIndex(p => p.name == name);
        products.splice(productToDeleteIndex, 1);
    }

    add() {
        products.push(this);
    }
}