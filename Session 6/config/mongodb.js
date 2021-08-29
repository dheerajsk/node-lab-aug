const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://127.0.0.1:27017/ProductDB";

var mongoClient;

exports.connect = () => {
    MongoClient.connect(uri)
        .then(
            (client) => {
                mongoClient = client;
                this.getCollection("Products");
                console.log("Mongodb connected");
            }
        ).catch(
            err => { console.log(err); }
        )
}

exports.getCollection = (name) => {
    return mongoClient.db('ProductDB').collection(name);
 }
