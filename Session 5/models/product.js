const products = [];

module.exports = class Product{
    constructor(name, detail, price){
        this.name = name;
        this.detail = detail;
        this.price = price;
    }

    static getAll(){
        return products;
    }

    add(){
        products.push(this);
    }
}