const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://127.0.0.1:27017/ProductDB";

var mongoClient;

exports.connect = () => {
    MongoClient.connect(uri)
        .then(
            (client) => {
                mongoClient = client;
                console.log(mongoClient);
                this.getCollection("Products");
                console.log("Mongodb connected");
            }
        ).catch(
            err => { console.log(err); }
        )
}

exports.getCollection = (name) => {
    console.log(mongoClient);
    return mongoClient.db('ProductDB').collection(name);
 }
