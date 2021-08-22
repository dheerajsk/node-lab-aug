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

    add() {
        products.push(this);
    }
}